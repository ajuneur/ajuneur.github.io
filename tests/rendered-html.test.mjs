import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://field-notes.example${pathname}`, {
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
  assert.match(html, /「/);
  assert.match(html, /」/);
  assert.match(html, /just keeping track of/);
  assert.match(html, /life as it happens\./);
  assert.match(html, /id="top"/);
  assert.ok(html.indexOf('id="about"') < html.indexOf('class="hero"'));
  assert.match(html, /id="about"[\s\S]*?src="\.\/qihao-portrait\.jpg"/);
  assert.match(html, /src="\.\/photos\/desk\.jpg"/);
  assert.match(html, /href="#posts">posts<\/a>/);
  assert.match(html, /recent posts/);
  assert.match(html, /href="\.\/posts\/the-chapel-and-the-cliff"/);
  assert.match(html, /The chapel and the cliff/);
  assert.match(html, /read the dream →/);
  assert.doesNotMatch(html, /href="#diary">diary<\/a>/);
  assert.match(html, /some photos i like/);
  assert.match(html, /\.\/photos\/light-drawing-figure\.jpg/);
  assert.match(html, /\.\/photos\/light-drawing-face\.jpg/);
  assert.doesNotMatch(html, /\.\/photos\/(?:garden|flowers)\.jpg/);
  assert.match(html, /\.\/photos\/drawing-with-light-after-dark/);
  assert.match(html, /things i’ve painted/);
  assert.match(html, /painting\s*(?:<!-- -->)?09/);
  assert.match(html, /<h3>Seasons<\/h3>/);
  assert.match(html, /four different seasons/);
  assert.match(html, /title coming soon/);
  assert.match(html, /\.\/paintings\/painting-09\.jpg/);
  assert.match(html, /hey, i’m qihao\./);
  assert.match(html, /Chee Hao/);
  assert.match(html, /currently doing a PhD/);
  assert.match(html, /keep life feeling alive/);
  assert.match(html, /the best sushi i’ve ever had/);
  assert.match(html, /my friend[\s\S]*?the udon/);
  assert.match(html, /https:\/\/maps\.app\.goo\.gl\/KoSfhf5JGTH3pRUA8\?g_st=ic/);
  assert.match(html, /genuinely not an ad/);
  assert.match(html, /books &amp; marginal notes/);
  assert.match(html, /making little bits of music/);
  assert.match(html, /https:\/\/www\.instagram\.com\/ajuneur\//);
  assert.match(html, /https:\/\/sg\.linkedin\.com\/in\/qihao-liang-3a17ba249/);
  assert.match(html, /mailto:cheehaoliang@gmail\.com/);
  assert.match(html, /get in touch ↗/);
  assert.match(html, /https:\/\/field-notes\.example\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("gives each photograph its own shareable story page", async () => {
  const [streetResponse, lightResponse] = await Promise.all([
    render("/photos/haji-lane-after-rain"),
    render("/photos/drawing-with-light-after-dark"),
  ]);

  for (const response of [streetResponse, lightResponse]) {
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /behind the scene/);
    assert.match(html, /「/);
    assert.match(html, /」/);
    assert.match(html, /the story is coming/);
    assert.match(html, /class="next-photo" href="\.\//);
    assert.doesNotMatch(html, /og\.png/);
  }

  const streetHtml = await (await render("/photos/haji-lane-after-rain")).text();
  assert.match(streetHtml, /<title>haji lane, after rain — Qihao<\/title>/i);
  assert.match(
    streetHtml,
    /A street scene I wanted to keep: colour, quiet, and the softened light after rain\./,
  );
  assert.match(
    streetHtml,
    /https:\/\/field-notes\.example\/photos\/haji-lane\.jpg/,
  );
});

test("publishes the Barcelona dream as its own post", async () => {
  const response = await render("/posts/the-chapel-and-the-cliff");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>The chapel and the cliff — Qihao<\/title>/i);
  assert.match(html, /where tenderness is transformed by shame into something fatal/);
  assert.match(html, /one interesting dream/);
  assert.match(html, /The morning in the forest had felt innocent/);
  assert.match(html, /the chapel seemed to make it holy/);
  assert.match(html, /Alex did\./);
  assert.match(html, /The clouds were gone\./);
  assert.match(html, /id="main"/);
  assert.doesNotMatch(html, /og\.png/);
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
  assert.match(css, /\.brand::after/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /@media \(max-width: 640px\)/);
  assert.match(packageJson, /"build:pages"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page, /_sites-preview|codex-preview/);

  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
  await access(new URL("../public/og.png", import.meta.url));
  await access(new URL("../public/qihao-portrait.jpg", import.meta.url));
  await access(new URL("../.github/workflows/deploy-pages.yml", import.meta.url));
  await access(root);
});
