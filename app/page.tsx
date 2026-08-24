import { photographs } from "./photo-data";

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

const paintings = [
  {
    src: "./paintings/painting-01.jpg",
    alt: "A colourful painting of layered leaves and branching forms",
    title: "Seasons",
    story: "I collected leaves from four different seasons, painted their world onto the background, and then brought the real leaves back into the painting. Layered between the painted and the real, the piece becomes a 2.5-dimensional reflection on the passing of the seasons."
    //story: "Leaves gathered across four seasons, preserved in a world of paint. I painted the background, then layered real leaves over it, allowing nature and its representation to overlap. Somewhere between two and three dimensions, the seasons seem to fold into one another—a small reflection on time, change, and what remains.",
  },
  {
    src: "./paintings/painting-02.jpg",
    alt: "A vibrant abstract painting with green, yellow, coral, and blue geometric forms",
  },
  {
    src: "./paintings/painting-03.jpg",
    alt: "A blue whale swimming through waves, orange slices, and small birds",
  },
  {
    src: "./paintings/painting-04.jpg",
    alt: "An illustrated dinner party with a central crowned figure and surrounding guests",
  },
  {
    src: "./paintings/painting-05.jpg",
    alt: "An intricate black-and-white drawing of surreal architecture, waves, and checkerboard forms",
  },
  {
    src: "./paintings/painting-06.jpg",
    alt: "A black-and-white grid of interlocking gears, wheels, and mechanical patterns",
  },
  {
    src: "./paintings/painting-07.jpg",
    alt: "A black-and-white celestial drawing of mechanical orbits, a crescent moon, and floating fragments",
  },
  {
    src: "./paintings/painting-08.jpg",
    alt: "A black-and-white circular cityscape filled with waves, roads, gears, and geometric structures",
  },
  {
    src: "./paintings/painting-09.jpg",
    alt: "A colourful piano surrounded by flowing red, orange, blue, and green patterns",
  },
];

const now = [
  ["🎧", "listening", "the same three songs on the bus home"],
  ["📖", "reading", "essays best enjoyed one page at a time"],
  ["🌱", "learning", "a photo doesn’t need to explain itself"],
];

const interests = [
  ["📚", "books & marginal notes"],
  ["🎬", "films that linger"],
  ["🎹", "making little bits of music"],
  ["🗣️", "learning how languages see the world"],
];

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header" id="top">
        <a className="brand" href="#top" aria-label="Qi Hao, home">
          <span>「</span>qh<span>.</span><span>」</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#posts">posts</a>
          <a href="#photos">photos</a>
          <a href="#paintings">paintings</a>
          <a href="#now">right now</a>
          <a href="#about">about</a>
        </nav>
        <a className="say-hi" href="#about">
          about me <span aria-hidden="true">↓</span>
        </a>
      </header>

      <main id="main">
        <section className="about-card" id="about" aria-labelledby="about-title">
          <div className="about-heading">
            <p className="section-label">00 / about</p>
            <h2 id="about-title">hey, i’m qihao.</h2>
            <p className="pronunciation">
              pronounced <strong>Chee Hao</strong> — “Chee” as in cheese.
            </p>
            <figure className="about-portrait">
              <img
                src="./qihao-portrait.jpg"
                alt="Qihao smiling over a plate of sushi at a restaurant"
                width="909"
                height="1200"
              />
            </figure>
          </div>
          <div className="about-copy">
            <p>
              i’m endlessly curious about the little things that make life feel
              bigger. you’ll usually find me halfway through a book, watching a
              movie i’ll think about for days, making little bits of music, or
              trying to understand the world through a new language.
            </p>
            <p>
              this corner of the internet is where i collect the things i want
              to remember: photographs, ordinary days, neighbourhood walks,
              good light, and whatever i’m learning lately.
            </p>

            <div className="interest-list" aria-label="Things I like">
              {interests.map(([emoji, interest]) => (
                <span key={interest}>
                  <span aria-hidden="true">{emoji}</span> {interest}
                </span>
              ))}
            </div>

            <div className="social-area">
              <p>find me online</p>
              <div className="social-links" aria-label="Social links">
                <a
                  href="https://www.instagram.com/ajuneur/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Qihao on Instagram (opens in a new tab)"
                >
                  instagram ↗
                </a>
                <a
                  href="https://sg.linkedin.com/in/qihao-liang-3a17ba249"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Qihao on LinkedIn (opens in a new tab)"
                >
                  linkedin ↗
                </a>
                <a
                  href="mailto:cheehaoliang@gmail.com"
                  aria-label="Email Qihao at cheehaoliang@gmail.com"
                >
                  get in touch ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hello">hello, i’m qi hao <span aria-hidden="true">👋</span></p>
            <h1 id="hero-title">
              just keeping track of <em>life as it happens.</em>
            </h1>
            <p className="hero-intro">
              this is my little corner for posts, photos, and random
              things i don’t want to forget.
            </p>
            <div className="hero-links">
              <a className="primary-link" href="#posts">
                read my posts
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

        <section className="section" id="posts" aria-labelledby="posts-title">
          <div className="section-heading">
            <div>
              <p className="section-label">01 / posts</p>
              <h2 id="posts-title">recent posts</h2>
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
              <figure key={photo.slug}>
                <a
                  className="photo-link"
                  href={`./photos/${photo.slug}`}
                  aria-label={`View ${photo.title} and its story`}
                >
                  <img
                    src={`./photos/${photo.image}`}
                    alt={photo.alt}
                    loading="lazy"
                  />
                  <figcaption>
                    {photo.title}
                    <span aria-hidden="true">story ↗</span>
                  </figcaption>
                </a>
              </figure>
            ))}
          </div>
        </section>

        <section
          className="section paintings-section"
          id="paintings"
          aria-labelledby="paintings-title"
        >
          <div className="section-heading">
            <div>
              <p className="section-label">03 / paintings</p>
              <h2 id="paintings-title">things i’ve painted</h2>
            </div>
            <p>
              nine pieces, with room for the title and little story behind each
              one.
            </p>
          </div>

          <div className="painting-list">
            {paintings.map((painting, index) => (
              <article className="painting-entry" key={painting.src}>
                <div className="painting-frame">
                  <img
                    src={painting.src}
                    alt={painting.alt}
                    loading="lazy"
                  />
                </div>
                <div className="painting-notes">
                  <p className="painting-index">
                    painting {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3>{painting.title || "title coming soon"}</h3>
                  <div className="story-space">
                    <p>the story behind this piece</p>
                    <span>
                      {painting.story ||
                        "i’ve left this space open for the memory, idea, or moment that inspired it."}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="now" aria-labelledby="now-title">
          <div className="section-heading">
            <div>
              <p className="section-label">04 / lately</p>
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

      </main>

      <footer>
        <p>made quietly in singapore · 2026</p>
        <p className="footer-note">photos &amp; artwork by qihao</p>
        <a href="#top">back to top ↑</a>
      </footer>
    </div>
  );
}
