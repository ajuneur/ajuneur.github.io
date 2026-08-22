const diaryEntries = [
  {
    date: "18 Aug 2026",
    title: "The hour before the city wakes",
    excerpt:
      "A slow walk, the first shutters opening, and the soft clink of cups from a corner coffee shop.",
    tag: "morning walk",
  },
  {
    date: "03 Aug 2026",
    title: "Things I want to remember",
    excerpt:
      "Mum's voice note, rain against the kitchen window, and a book that arrived at exactly the right time.",
    tag: "small things",
  },
  {
    date: "21 Jul 2026",
    title: "A weekend without a plan",
    excerpt:
      "Two buses, one accidental garden, and the kind of afternoon that asks nothing from you.",
    tag: "out & about",
  },
];

const photographs = [
  {
    src: "./photos/haji-lane.jpg",
    alt: "A lively narrow street in Haji Lane, Singapore",
    caption: "haji lane, after rain",
  },
  {
    src: "./photos/journal.jpg",
    alt: "A notebook and coffee on a quiet desk",
    caption: "a blank page, finally",
  },
  {
    src: "./photos/garden.jpg",
    alt: "A garden full of colourful flowers",
    caption: "saturday colour study",
  },
  {
    src: "./photos/flowers.jpg",
    alt: "Purple flowers after rainfall",
    caption: "after the rain",
  },
];

const now = [
  ["🎧", "listening", "the same three songs on the bus home"],
  ["📖", "reading", "essays best enjoyed one page at a time"],
  ["🌱", "learning", "a photo doesn’t need to explain itself"],
];

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Qi Hao, home">
          qh<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#diary">diary</a>
          <a href="#photos">photos</a>
          <a href="#now">right now</a>
          <a href="#about">about</a>
        </nav>
        <a className="say-hi" href="mailto:hello@example.com">
          say hi <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hello">hello, i’m qi hao <span aria-hidden="true">👋</span></p>
            <h1 id="hero-title">
              just keeping track of <em>life as it happens.</em>
            </h1>
            <p className="hero-intro">
              this is my little corner for diary entries, photos, and random
              things i don’t want to forget.
            </p>
            <div className="hero-links">
              <a className="primary-link" href="#diary">
                read my notes
              </a>
              <a className="plain-link" href="#photos">
                see some photos <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="currently">
              <span className="status-dot" aria-hidden="true" />
              <p>
                currently
                <strong>making more room for unhurried days</strong>
              </p>
            </div>
          </div>

          <figure className="hero-photo">
            <img
              src="./photos/desk.jpg"
              alt="An open notebook, pen, glasses, and a coffee on a wooden table"
            />
            <figcaption>somewhere between coffee and a blank page</figcaption>
          </figure>
        </section>

        <section className="section" id="diary" aria-labelledby="diary-title">
          <div className="section-heading">
            <div>
              <p className="section-label">01 / diary</p>
              <h2 id="diary-title">recent diary stuff</h2>
            </div>
            <p>nothing too serious — just days i felt like keeping.</p>
          </div>

          <div className="diary-grid">
            {diaryEntries.map((entry) => (
              <article className="diary-card" key={entry.title}>
                <div className="card-meta">
                  <time>{entry.date}</time>
                  <span>{entry.tag}</span>
                </div>
                <h3>{entry.title}</h3>
                <p>{entry.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="photos" aria-labelledby="photos-title">
          <div className="section-heading">
            <div>
              <p className="section-label">02 / photos</p>
              <h2 id="photos-title">some photos i like</h2>
            </div>
            <p>mostly walks, little details, and nice light.</p>
          </div>

          <div className="photo-grid">
            {photographs.map((photo) => (
              <figure key={photo.src}>
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section" id="now" aria-labelledby="now-title">
          <div className="section-heading">
            <div>
              <p className="section-label">03 / lately</p>
              <h2 id="now-title">right now</h2>
            </div>
            <p>the very small life update.</p>
          </div>

          <div className="now-grid">
            {now.map(([emoji, label, copy]) => (
              <article className="now-card" key={label}>
                <span className="now-emoji" aria-hidden="true">{emoji}</span>
                <p>{label}</p>
                <h3>{copy}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="about-card" id="about" aria-labelledby="about-title">
          <div>
            <p className="section-label">04 / about</p>
            <h2 id="about-title">why this exists</h2>
          </div>
          <div className="about-copy">
            <p>
              life moves pretty quickly, so i made this place to slow it down a
              bit — neighbourhood walks, unexpected conversations, good light,
              and everything in between.
            </p>
            <a href="mailto:hello@example.com">
              drop me a note <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>made quietly in singapore · 2026</p>
        <details>
          <summary>sample photo credits</summary>
          <p>
            Carson Arias, Kelly Sikkema, Rain Bennett, SnapSaga, and Dulant Pang
            via Unsplash.
          </p>
        </details>
        <a href="#top">back to top ↑</a>
      </footer>
    </div>
  );
}
