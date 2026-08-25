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
  assert.match(html, /<title>qihao's little arXiv<\/title>/i);
  assert.match(html, /cheehao · made quietly in singapore · 2026/);
  assert.match(html, /「/);
  assert.match(html, /」/);
  assert.match(html, /the mini arXiv of/);
  assert.match(html, /me being MENTALLY alive/);
  assert.match(html, /Qihao on Instagram/);
  assert.match(html, /Qihao on LinkedIn/);
  assert.match(html, /Get in touch with Qihao by email/);
  assert.match(html, /id="top"/);
  assert.ok(html.indexOf('id="about"') < html.indexOf('class="hero"'));
  assert.match(html, /id="about"[\s\S]*?src="\.\/qihao-portrait\.jpg"/);
  assert.match(html, /class="hero-scrapbook"/);
  assert.match(html, /\.\/posts\/new-ring\/ring-close-up-fixed\.jpg/);
  assert.match(html, /\.\/photos\/leaves-in-the-night\.jpg/);
  assert.match(html, /\.\/paintings\/painting-09\.jpg/);
  assert.doesNotMatch(html, /src="\.\/photos\/desk\.jpg"/);
  assert.match(html, /href="#posts">posts<\/a>/);
  assert.match(html, /recent posts/);
  assert.match(html, /href="\.\/posts\/the-chapel-and-the-cliff"/);
  assert.match(html, /Craquelure/);
  assert.match(html, /read the dream →/);
  assert.match(html, /href="\.\/posts\/a-weekend-without-a-plan"/);
  assert.match(html, /A weekend without a plan/);
  assert.match(html, /read the post →/);
  const postsSection = html.slice(
    html.indexOf('id="posts"'),
    html.indexOf('id="photos"'),
  );
  assert.ok(
    postsSection.indexOf("a-weekend-without-a-plan") <
      postsSection.indexOf("the-ring-i-bought-for-free-delivery"),
  );
  assert.ok(
    postsSection.indexOf("the-ring-i-bought-for-free-delivery") <
      postsSection.indexOf("the-chapel-and-the-cliff"),
  );
  assert.doesNotMatch(html, /The hour before the city wakes/);
  assert.doesNotMatch(html, /Things I want to remember/);
  assert.doesNotMatch(html, /href="#diary">diary<\/a>/);
  assert.match(html, /photos i(?:’|&#x27;)ve taken/);
  assert.match(html, /small scenes i noticed and wanted to keep/);
  assert.match(html, /\.\/photos\/light-drawing-figure\.jpg/);
  assert.match(html, /\.\/photos\/light-drawing-face\.jpg/);
  assert.match(html, /\.\/photos\/leaves-in-the-night\.jpg/);
  assert.match(html, /\.\/photos\/three-figures\.jpg/);
  assert.match(html, /\.\/photos\/leaves-in-a-pocket-of-light/);
  assert.match(html, /\.\/photos\/three-figures-on-a-wooden-wall/);
  assert.doesNotMatch(html, /\.\/photos\/(?:garden|flowers)\.jpg/);
  assert.match(html, /\.\/photos\/drawing-with-light-after-dark/);
  assert.match(html, /things i(?:’|&#x27;)ve painted/);
  assert.match(html, /painting\s*(?:<!-- -->)?09/);
  assert.match(html, /<h3>Seasons<\/h3>/);
  assert.match(html, /four different seasons/);
  assert.match(html, /<h3>Junction of Time<\/h3>/);
  assert.match(html, /<h3>Whirlpool of Melody<\/h3>/);
  assert.doesNotMatch(html, /title coming soon/);
  assert.match(html, /\.\/paintings\/painting-09\.jpg/);
  assert.match(html, /id="parodies"/);
  assert.match(html, /parody songs i've written/);
  assert.match(html, /Can You Please Gimme an Update\?/);
  assert.match(html, /What do you think of my presentation today/);
  assert.match(html, /It'll be important to your final course grade/);
  assert.match(html, /a <em>Hamilton<\/em> musical parody of my life/);
  assert.match(html, /unfinished drafts, but those are staying private/);
  assert.match(html, /hey! i am qihao liang\./);
  assert.match(html, /he\/they/);
  assert.match(html, /chee hao/);
  assert.match(html, /currently doing a phd in computer science/);
  assert.match(html, /LITERALLY don(?:’|&#x27;)t want research/);
  assert.match(html, /to stay MENTALLY alive/);
  assert.match(html, /learning or thinking about lately/);
  assert.match(html, /the best sushi i(?:’|&#x27;)ve ever had/);
  assert.match(html, /my friend[\s\S]*?the udon/);
  assert.match(html, /https:\/\/maps\.app\.goo\.gl\/KoSfhf5JGTH3pRUA8\?g_st=ic/);
  assert.match(html, /genuinely not an ad/);
  assert.match(html, /books &amp; marginal notes/);
  assert.match(html, /making little bits of music/);
  assert.match(html, /https:\/\/www\.instagram\.com\/ajuneur\//);
  assert.match(html, /https:\/\/sg\.linkedin\.com\/in\/qihao-liang-3a17ba249/);
  assert.match(html, /mailto:cheehaoliang@gmail\.com/);
  assert.match(html, /<span>get in touch<\/span>/);
  assert.match(html, /“The Fight” by Silly Boy Blue/);
  assert.match(html, /\.\/now\/the-fight\.jpg/);
  assert.match(html, /Newcomer \+ Project Hail Mary/);
  assert.match(html, /\.\/now\/newcomer\.jpg/);
  assert.match(html, /\.\/now\/project-hail-mary\.jpg/);
  assert.match(html, /simple makeup, very slowly/);
  assert.match(html, /shu uemura/);
  assert.match(html, /fenty beauty/);
  assert.match(html, /through SKAM France/);
  assert.match(html, /\.\/now\/skam-france-season-10\.jpg/);
  assert.match(html, /2 \(Manon\), 7 \(Tiffany\), and 10 \(Anaïs\)/);
  assert.match(html, /music\.youtube\.com\/search\?q=silly\+boy\+blue\+the\+fight/);
  assert.match(html, /https:\/\/www\.france\.tv\/slash\/skam-france\//);
  assert.match(html, /https:\/\/field-notes\.example\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/);
});

test("gives each photograph its own shareable story page", async () => {
  const [figuresResponse, lightResponse, leavesResponse] = await Promise.all([
    render("/photos/three-figures-on-a-wooden-wall"),
    render("/photos/drawing-with-light-after-dark"),
    render("/photos/leaves-in-a-pocket-of-light"),
  ]);

  for (const response of [figuresResponse, lightResponse, leavesResponse]) {
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /behind the scene/);
    assert.match(html, /「/);
    assert.match(html, /」/);
    assert.match(html, /the story is coming/);
    assert.match(html, /class="next-photo" href="\.\//);
    assert.doesNotMatch(html, /og\.png/);
  }

  const figuresHtml = await (
    await render("/photos/three-figures-on-a-wooden-wall")
  ).text();
  assert.match(
    figuresHtml,
    /<title>three figures on a wooden wall — Qihao<\/title>/i,
  );
  assert.match(
    figuresHtml,
    /A trio of simple white figures on wood—ordinary signage made unexpectedly graphic\./,
  );
  assert.match(
    figuresHtml,
    /https:\/\/field-notes\.example\/photos\/three-figures\.jpg/,
  );

  const leavesHtml = await (
    await render("/photos/leaves-in-a-pocket-of-light")
  ).text();
  assert.match(leavesHtml, /<title>leaves in a pocket of light — Qihao<\/title>/i);
  assert.match(
    leavesHtml,
    /https:\/\/field-notes\.example\/photos\/leaves-in-the-night\.jpg/,
  );
});

test("publishes the Barcelona dream as its own post", async () => {
  const response = await render("/posts/the-chapel-and-the-cliff");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Craquelure — Qihao<\/title>/i);
  assert.match(html, /18 Apr 2026/);
  assert.match(html, /where tenderness is transformed by shame into something fatal/);
  assert.match(html, /one interesting dream/);
  assert.match(html, /Far away from the chapel sat two young boys/);
  assert.match(html, /They held hands and walked freely/);
  assert.match(html, /The morning in the forest had felt innocent/);
  assert.match(html, /Pablo felt safe beside him/);
  assert.match(html, /He was not frightened of Pablo/);
  assert.match(html, /the chapel seemed to make it holy/);
  assert.match(html, /Alex did\./);
  assert.match(html, /Then Alex pushed\./);
  assert.match(html, /The love remained exactly where it had been/);
  assert.match(html, /He had only destroyed the person/);
  assert.match(html, /The clouds were gone\./);
  assert.match(html, /id="main"/);
  assert.doesNotMatch(html, /og\.png/);
});

test("publishes the mall-hopping weekend as its own post", async () => {
  const response = await render("/posts/a-weekend-without-a-plan");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>A weekend without a plan — Qihao<\/title>/i);
  assert.match(html, /A weekend loop through VivoCity, Funan, Raffles City/);
  assert.match(html, /my weekends have a habit of ending up at Funan/);
  assert.match(html, /45-minute transfer window/);
  assert.match(html, /Suntec and Millenia Walk/);
  assert.match(html, /basically allergic to ultraviolet exposure/);
  assert.match(html, /a plan I have repeated so often/);
  assert.match(html, /id="main"/);
  assert.doesNotMatch(html, /og\.png/);
});

test("publishes the accidental ring as a photo post", async () => {
  const response = await render("/posts/the-ring-i-bought-for-free-delivery");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(
    html,
    /<title>The ring I bought for free delivery — Qihao<\/title>/i,
  );
  assert.match(html, /9 Aug 2026/);
  assert.match(html, /reach the minimum for free delivery/);
  assert.match(html, /This men’s item is also popular with women/);
  assert.match(html, /This women’s item is also popular with men/);
  assert.match(html, /I think it looks good on me!/i);
  assert.match(html, /class="post-image-gallery"/);
  assert.match(html, /portrait-with-ring\.jpg/);
  assert.match(html, /ring-close-up-fixed\.jpg/);
  assert.match(html, /uniqlo-tag\.jpg/);
  assert.match(html, /portrait-at-the-window\.jpg/);
  assert.match(html, /ring-at-the-desk\.jpg/);
  assert.match(
    html,
    /https:\/\/field-notes\.example\/posts\/new-ring\/portrait-with-ring\.jpg/,
  );
  assert.doesNotMatch(html, /https:\/\/field-notes\.example\/og\.png/);
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
  await access(new URL("../public/photos/leaves-in-the-night.jpg", import.meta.url));
  await access(new URL("../public/photos/three-figures.jpg", import.meta.url));
  await access(new URL("../.github/workflows/deploy-pages.yml", import.meta.url));
  await access(root);
});
