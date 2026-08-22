import { spawn } from "node:child_process";
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outputDir = path.join(root, "github-pages");
const port = 4173;
const origin = `http://127.0.0.1:${port}`;
const serverBin = path.join(root, "node_modules", ".bin", "vinext");

function publicSiteUrl() {
  if (process.env.PUBLIC_SITE_URL) {
    return process.env.PUBLIC_SITE_URL.endsWith("/")
      ? process.env.PUBLIC_SITE_URL
      : `${process.env.PUBLIC_SITE_URL}/`;
  }

  const repository = process.env.GITHUB_REPOSITORY;
  if (!repository) return null;

  const [owner, repo] = repository.split("/");
  const rootSite = repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;
  return rootSite
    ? `https://${owner}.github.io/`
    : `https://${owner}.github.io/${repo}/`;
}

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
}

async function waitForPage() {
  let lastError;

  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch(origin, {
        headers: { accept: "text/html" },
      });
      if (response.ok) return response.text();
      lastError = new Error(`Preview returned ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw lastError ?? new Error("Production preview did not start");
}

function makeStaticDocument(document) {
  const head = document.match(/<head>([\s\S]*?)<\/head>/)?.[1] ?? "";
  const body = document.match(/<body>([\s\S]*?)<\/body>/)?.[1] ?? "";
  const visibleBody = body.split('<div hidden="">', 1)[0];

  const cleanHead = head
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<link[^>]+rel="modulepreload"[^>]*>/g, "")
    .replaceAll('href="/_next/', 'href="./_next/')
    .replaceAll('src="/_next/', 'src="./_next/');

  const cleanBody = visibleBody
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replaceAll('href="/_next/', 'href="./_next/')
    .replaceAll('src="/_next/', 'src="./_next/');

  const title = "Qi Hao Liang — Field Notes";
  const description =
    "A personal archive of diary entries, photographs, and ordinary moments worth remembering.";
  const siteUrl = publicSiteUrl();
  const socialImage = siteUrl ? `${siteUrl}og.png` : "./og.png";
  const canonical = siteUrl
    ? `<link rel="canonical" href="${escapeAttribute(siteUrl)}">`
    : "";

  const metadata = `
    <title>${title}</title>
    <meta name="description" content="${description}">
    ${canonical}
    <meta property="og:type" content="website">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${escapeAttribute(socialImage)}">
    <meta property="og:image:width" content="1731">
    <meta property="og:image:height" content="909">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${escapeAttribute(socialImage)}">`;

  return `<!doctype html>
<html lang="en">
  <head>${cleanHead}${metadata}</head>
  <body>${cleanBody}</body>
</html>
`;
}

const server = spawn(
  serverBin,
  ["start", "--port", String(port), "--hostname", "127.0.0.1"],
  {
    cwd: root,
    env: { ...process.env, WRANGLER_LOG_PATH: ".wrangler/wrangler.log" },
    stdio: ["ignore", "pipe", "pipe"],
  },
);

let serverErrors = "";
server.stderr.on("data", (chunk) => {
  serverErrors += chunk.toString();
});

try {
  const rendered = await waitForPage();
  const staticDocument = makeStaticDocument(rendered);

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });
  await cp(path.join(root, "dist", "client"), outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "index.html"), staticDocument);
  await writeFile(path.join(outputDir, ".nojekyll"), "");

  const cssManifest = JSON.parse(
    await readFile(path.join(outputDir, ".vite", "manifest.json"), "utf8"),
  );
  if (!Object.keys(cssManifest).length) {
    throw new Error("Static asset manifest is empty");
  }

  console.log(`GitHub Pages package created at ${outputDir}`);
} catch (error) {
  if (serverErrors) process.stderr.write(serverErrors);
  throw error;
} finally {
  server.kill("SIGTERM");
}
