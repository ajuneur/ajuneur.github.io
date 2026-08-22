const diaryEntries = [
  {
    date: "18 Aug 2026",
    number: "01",
    title: "The hour before the city wakes",
    excerpt:
      "A slow walk, the first shutters opening, and the soft clink of cups from a corner coffee shop.",
    tag: "Morning walk",
  },
  {
    date: "03 Aug 2026",
    number: "02",
    title: "Things I want to remember",
    excerpt:
      "Mum's voice note, rain against the kitchen window, and a book that arrived at exactly the right time.",
    tag: "Small things",
  },
  {
    date: "21 Jul 2026",
    number: "03",
    title: "A weekend without a plan",
    excerpt:
      "Two buses, one accidental garden, and the kind of afternoon that asks nothing from you.",
    tag: "Out & about",
  },
];

const photographs = [
  {
    src: "./photos/haji-lane.jpg",
    alt: "A lively narrow street in Haji Lane, Singapore",
    caption: "Haji Lane, after rain",
    className: "photo-tall",
  },
  {
    src: "./photos/journal.jpg",
    alt: "A notebook and coffee on a quiet desk",
    caption: "A blank page, finally",
    className: "photo-wide",
  },
  {
    src: "./photos/garden.jpg",
    alt: "A garden full of colourful flowers",
    caption: "Saturday colour study",
    className: "photo-small",
  },
  {
    src: "./photos/flowers.jpg",
    alt: "Purple flowers after rainfall",
    caption: "After the rain",
    className: "photo-small",
  },
];

const notes = [
  ["Listening", "The same three songs on the bus home."],
  ["Reading", "Essays best enjoyed one page at a time."],
  ["Learning", "A photograph does not need to explain itself."],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Qi Hao Liang, home">
          <span className="wordmark-mark">QH</span>
          <span>field notes</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#diary">Diary</a>
          <a href="#photographs">Photographs</a>
          <a href="#notes">Notes</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="mailto:hello@example.com">
          Say hello <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> A personal archive · Singapore
            </p>
            <h1 id="hero-title">
              A life,
              <br />
              <em>slowly noticed.</em>
            </h1>
            <p className="hero-intro">
              A quiet place for photographs, diary entries, and the ordinary
              moments I would rather not forget.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#diary">
                Read the diary <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="#photographs">
                Browse photographs <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <figure className="hero-figure">
            <div className="hero-image-wrap">
              <img
                src="./photos/desk.jpg"
                alt="An open notebook, pen, glasses, and a coffee on a wooden table"
              />
              <span className="image-stamp" aria-hidden="true">
                VOL. 01
              </span>
            </div>
            <figcaption>
              <span>Currently: making more room for unhurried days.</span>
              <span>22·08·26</span>
            </figcaption>
          </figure>
        </section>

        <section className="manifesto" aria-label="Site introduction">
          <p>Notes from days that felt worth keeping.</p>
          <span aria-hidden="true">✦</span>
          <p>Made of words, light, weather, and people.</p>
        </section>

        <section
          className="section diary-section"
          id="diary"
          aria-labelledby="diary-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span /> Recent entries
              </p>
              <h2 id="diary-title">From the diary</h2>
            </div>
            <p className="section-note">
              Writing occasionally,
              <br />
              remembering always.
            </p>
          </div>

          <div className="entry-list">
            {diaryEntries.map((entry) => (
              <article className="entry" key={entry.title}>
                <span className="entry-number">{entry.number}</span>
                <div className="entry-date">
                  <time>{entry.date}</time>
                  <span>{entry.tag}</span>
                </div>
                <div className="entry-copy">
                  <h3>{entry.title}</h3>
                  <p>{entry.excerpt}</p>
                </div>
                <a
                  href={`mailto:hello@example.com?subject=${encodeURIComponent(entry.title)}`}
                  aria-label={`Ask about ${entry.title}`}
                >
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section photo-section"
          id="photographs"
          aria-labelledby="photo-title"
        >
          <div className="section-heading photo-heading">
            <div>
              <p className="eyebrow light">
                <span /> Through my lens
              </p>
              <h2 id="photo-title">
                Photographs
                <br />
                <em>of ordinary days.</em>
              </h2>
            </div>
            <p className="section-note">
              A growing roll of places,
              <br />
              people, and passing light.
            </p>
          </div>

          <div className="photo-grid">
            {photographs.map((photo, index) => (
              <figure className={photo.className} key={photo.src}>
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <figcaption>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{photo.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section
          className="section notes-section"
          id="notes"
          aria-labelledby="notes-title"
        >
          <div className="notes-intro">
            <p className="eyebrow">
              <span /> Lately
            </p>
            <h2 id="notes-title">
              A few notes
              <br />
              from right now.
            </h2>
            <p>
              Not every thought needs to become an essay. Some things are better
              kept small.
            </p>
          </div>
          <div className="note-list">
            {notes.map(([label, copy], index) => (
              <article className="note" key={label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p>{label}</p>
                  <h3>{copy}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="about-label">
            <p className="eyebrow light">
              <span /> About this place
            </p>
          </div>
          <div className="about-copy">
            <h2 id="about-title">Hello, I’m Qi Hao.</h2>
            <p>
              I made this little corner of the internet to pay closer attention:
              to neighbourhood walks, unexpected conversations, good light, and
              all the life that happens between the big milestones.
            </p>
            <a className="button button-light" href="mailto:hello@example.com">
              Write to me <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="about-mark" aria-hidden="true">
            QH
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <a className="wordmark" href="#top">
            <span className="wordmark-mark">QH</span>
            <span>field notes</span>
          </a>
          <p>Made with care in Singapore.</p>
          <a href="#top">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Qi Hao Liang</span>
          <details>
            <summary>Sample photo credits</summary>
            <p>
              Photos by Carson Arias, Kelly Sikkema, Rain Bennett, SnapSaga,
              and Dulant Pang via Unsplash.
            </p>
          </details>
          <span>Keep noticing.</span>
        </div>
      </footer>
    </>
  );
}
