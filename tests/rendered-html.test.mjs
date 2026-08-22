import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://field-notes.example/", {
      headers: { accept: "text/html", host: "field-notes.example" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Qi Hao's personal corner", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Qi Hao — a little corner of the internet<\/title>/i);
  assert.match(html, /just keeping track of/);
  assert.match(html, /life as it happens\./);
  assert.match(html, /recent diary stuff/);
  assert.match(html, /some photos i like/);
  assert.match(html, /why this exists/);
  assert.match(html, /https:\/\/field-notes\.example\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("keeps the finished site accessible and starter-free", async () => {
  const [page, layout, css, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /className="skip-link"/);
  assert.match(page, /aria-label="Main navigation"/);
  assert.match(page, /loading="lazy"/);
  assert.match(layout, /generateMetadata/);
  assert.match(layout, /summary_large_image/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /@media \(max-width: 640px\)/);
  assert.match(packageJson, /"build:pages"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page, /_sites-preview|codex-preview/);

  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
  await access(new URL("../public/og.png", import.meta.url));
  await access(new URL("../.github/workflows/deploy-pages.yml", import.meta.url));
  await access(root);
});
