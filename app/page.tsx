import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { photographs } from "./photo-data";
import { posts } from "./post-data";

const orderedPosts = [...posts].sort(
  (a, b) => Date.parse(b.date) - Date.parse(a.date),
);

const now = [
  {
    emoji: "🎧",
    images: [
      {
        src: "./now/the-fight.jpg",
        alt: "A still from Silly Boy Blue’s The Fight music video",
      },
    ],
    label: "favourite song",
    copy: "“The Fight” by Silly Boy Blue",
    detail: "the song currently following me everywhere.",
    href: "https://music.youtube.com/search?q=silly+boy+blue+the+fight",
    linkLabel: "listen on YouTube Music ↗",
  },
  {
    emoji: "📖",
    images: [
      { src: "./now/newcomer.jpg", alt: "Cover of Newcomer by Keigo Higashino" },
      { src: "./now/project-hail-mary.jpg", alt: "Cover of Project Hail Mary by Andy Weir" },
    ],
    label: "reading",
    copy: "Newcomer + Project Hail Mary",
    detail: "Keigo Higashino on one side, Andy Weir on the other.",
    href: undefined,
    linkLabel: undefined,
  },
  {
    emoji: "💄",
    images: undefined,
    label: "learning",
    copy: "simple makeup, very slowly",
    detail:
      "eyebrow powder, foundation, primer, a brush, and concealer from shu uemura; contour from Fenty Beauty. impressive kit, questionable motivation lol.",
    href: undefined,
    linkLabel: undefined,
  },
  {
    emoji: "🇫🇷",
    images: [
      {
        src: "./now/skam-france-season-10.jpg",
        alt: "SKAM France season 10 poster featuring Anaïs",
      },
    ],
    label: "learning french",
    copy: "through SKAM France",
    detail:
      "favourite seasons: 2 (Manon), 7 (Tiffany), and 10 (Anaïs).",
    href: "https://www.france.tv/slash/skam-france/",
    linkLabel: "watch on France TV ↗",
  },
];

const paintings = [
  {
    src: "./paintings/painting-01.jpg",
    alt: "A colourful painting of layered leaves and branching forms",
    title: "Seasons",
    story: "I collected leaves from four different seasons, painted their world onto the background, and then brought the real leaves back into the painting. Layered between the painted and the real, the piece becomes a 2.5-dimensional reflection on the passing of the seasons."
    //story: "Leaves gathered across four seasons, preserved in a world of paint. I painted the background, then layered real leaves over it, allowing nature and its representation to overlap. Somewhere between two and three dimensions, the seasons seem to fold into one another--a small reflection on time, change, and what remains.",
  },
  {
    src: "./paintings/painting-02.jpg",
    alt: "A vibrant abstract painting with green, yellow, coral, and blue geometric forms",
    title: "Junction of Time",
    story: "This painting was inspired by the idea of time as a junction, where different moments and experiences intersect. The geometric forms represent the structured nature of time, while the vibrant colors evoke the emotions and memories that color our perception of it. The overlapping shapes suggest the complexity and interconnectedness of our experiences.",
  },
  {
    src: "./paintings/painting-03.jpg",
    alt: "A blue whale swimming through waves, orange slices, and small birds",
    title: "Summer in the Fairyland",
    story: "This piece captures the whimsical essence of summer, blending elements of nature and imagination. The blue whale symbolises freedom and exploration, while the orange slices and birds add a playful touch. The waves represent the ebb and flow of life, reminding us to embrace the joy and spontaneity of the season.",
  },
  {
    src: "./paintings/painting-04.jpg",
    alt: "An illustrated dinner party with a central crowned figure and surrounding guests",
    title: "The Dinner Party",
    story: "This painting depicts a whimsical dinner party where each guest represents a different aspect of human nature. The central crowned figure embodies the host, while the surrounding guests showcase a variety of personalities and perspectives. The vibrant colors and dynamic composition create a sense of movement and conversation.",
  },
  {
    src: "./paintings/painting-05.jpg",
    alt: "An intricate black-and-white drawing of surreal architecture, waves, and checkerboard forms",
    title: "Labyrinth",
    story: "It's my mind of getting lost in the maze of thoughts and ideas. The surreal architecture and checkerboard patterns represent the complexity of navigating through one's own mind, while the waves symbolise the constant flow of emotions and experiences that shape our perceptions.",
  },
  {
    src: "./paintings/painting-06.jpg",
    alt: "A black-and-white grid of interlocking gears, wheels, and mechanical patterns",
    title: "Time Machine",
    story: "Sometime I wish I could rewind the time (rembobiner) so that I can undo or redo something. However, that would only cause paradox. I will not choose to return to the past, but I will choose to move forward and embrace the present. The interlocking gears and mechanical patterns represent the intricate workings of time and the inevitability of change.",
  },
  {
    src: "./paintings/painting-07.jpg",
    alt: "A black-and-white celestial drawing of mechanical orbits, a crescent moon, and floating fragments",
    title: "Let Go of the Past",
    story: "I was trapped in those memories that I wish I could undo. Those debris floating in the space means that I have to let go of the past and move on. The mechanical orbits and celestial elements represent the passage of time and the need to release what no longer serves us, allowing for growth and new experiences.",
  },
  {
    src: "./paintings/painting-08.jpg",
    alt: "A black-and-white circular cityscape filled with waves, roads, gears, and geometric structures",
    title: "Paradox City",
    story: "My imagination of what it would be like if time were rewound and everything were trapped in a paradox. The circular cityscape represents the cyclical nature of time, while the waves, roads, and gears symbolise the interconnectedness of our experiences. The geometric structures suggest the complexity and breakage of logic. It's a warning not to try to undo the past.",
  },
  {
    src: "./paintings/painting-09.jpg",
    alt: "A colourful piano surrounded by flowing red, orange, blue, and green patterns",
    title: "Whirlpool of Melody",
    story: "This is a birthday gift for my friend who is a good pianist. The piano is surrounded by a whirlpool of vibrant colors, representing the flow of music and the emotions it evokes. The patterns suggest the movement and energy of a melody, while the colors reflect the joy and passion that music brings to our lives.",
  },
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
            <div className="about-title-line">
              <h2 id="about-title">hey! i am qihao liang.</h2>
              <span className="pronouns">he/they</span>
            </div>
            <p className="pronunciation">
              pronounced <strong>Chee Hao</strong> -- “Chee” as in cheese.
            </p>
            <figure className="about-portrait">
              <img
                src="./qihao-portrait.jpg"
                alt="Qihao smiling over a sushi platter at a restaurant in Perth, Australia"
                width="909"
                height="1200"
              />
              <figcaption>
                perth, australia -- the best sushi i’ve ever had; my friend
                swears by the udon. genuinely not an ad, hahaha. {" "}
                <a
                  href="https://maps.app.goo.gl/KoSfhf5JGTH3pRUA8?g_st=ic"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View the restaurant on Google Maps (opens in a new tab)"
                >
                  the place ↗
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="about-copy">
            <p>
              i’m currently doing a PhD in computer science, but i LITERALLY don’t
              want research to inundate every corner of my life. i made this
              little webpage to give the rest of me some room again--to notice
              things, make things, and keep life feeling alive.
            </p>
            <p>
              i’m endlessly curious about the little things that make life feel
              bigger. you’ll usually find me halfway through a book, watching a
              movie i’ll think about for days, making little bits of music, or
              trying to understand the world through a new language.
            </p>
            <p>
              this corner of the internet is where i collect the things that i
              want to remember: photographs, ordinary days, neighbourhood
              walks, good light, and whatever i’m learning and thinking about
              lately.
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
                  <FaInstagram aria-hidden="true" />
                  <span>instagram</span>
                </a>
                <a
                  href="https://sg.linkedin.com/in/qihao-liang-3a17ba249"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Qihao on LinkedIn (opens in a new tab)"
                >
                  <FaLinkedinIn aria-hidden="true" />
                  <span>linkedin</span>
                </a>
                <a
                  href="mailto:cheehaoliang@gmail.com"
                  aria-label="Get in touch with Qihao by email"
                >
                  <FiMail aria-hidden="true" />
                  <span>get in touch</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hello">hello, i’m qi hao <span aria-hidden="true">👋</span></p>
            <h1 id="hero-title">
              the mini archive of <em>me being MENTALLY alive</em>
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
                <strong>reading newcomer & project hail mary; keeping writing stuff</strong>
              </p>
            </div>
          </div>

          <div className="hero-scrapbook" aria-label="A few things from Qihao’s life">
            <a
              className="hero-tile hero-tile-main"
              href="./posts/the-ring-i-bought-for-free-delivery"
            >
              <img
                src="./posts/new-ring/ring-close-up-fixed.jpg"
                alt="A shiny flower ring with pearly petals and a gold centre"
              />
              <span><small>recent post</small>an accidental ring</span>
            </a>
            <a className="hero-tile" href="./photos/leaves-in-a-pocket-of-light">
              <img
                src="./photos/leaves-in-the-night.jpg"
                alt="Leaves and fine spiderweb strands caught in warm light"
              />
              <span><small>photograph</small>a pocket of light</span>
            </a>
            <a className="hero-tile" href="#paintings">
              <img
                src="./paintings/painting-09.jpg"
                alt="Qihao’s colourful painting of a piano surrounded by flowing patterns"
              />
              <span><small>painting</small>colour + music</span>
            </a>
          </div>
        </section>

        <section className="section" id="posts" aria-labelledby="posts-title">
          <div className="section-heading">
            <div>
              <p className="section-label">01 / posts</p>
              <h2 id="posts-title">recent posts</h2>
            </div>
            <p>nothing too serious -- just days i felt like keeping.</p>
          </div>

          <div className="diary-grid">
            {orderedPosts.map((entry) => (
              <a
                className="diary-card"
                href={`./posts/${entry.slug}`}
                key={entry.title}
                aria-label={`Read ${entry.title}`}
              >
                <div className="card-meta">
                  <time>{entry.date}</time>
                  <span>{entry.tag}</span>
                </div>
                <h3>{entry.title}</h3>
                <p>{entry.excerpt}</p>
                <span className="card-read">
                  {entry.tag === "dream"
                    ? "read the dream →"
                    : "read the post →"}
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="photos" aria-labelledby="photos-title">
          <div className="section-heading">
            <div>
              <p className="section-label">02 / photos</p>
              <h2 id="photos-title">photos i’ve taken</h2>
            </div>
            <p>small scenes i noticed and wanted to keep.</p>
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
            {now.map((item) => (
              <article className="now-card" key={item.label}>
                {item.images ? (
                  <div
                    className={`now-media${item.images.length > 1 ? " now-media-pair" : ""}`}
                  >
                    {item.images.map((image) => (
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        key={image.src}
                      />
                    ))}
                  </div>
                ) : null}
                <span className="now-emoji" aria-hidden="true">
                  {item.emoji}
                </span>
                <p>{item.label}</p>
                <h3>{item.copy}</h3>
                <p className="now-detail">{item.detail}</p>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.linkLabel}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

      </main>

      <footer>
        <p>ajuneur · made quietly in singapore · 2026</p>
        <p className="footer-note">photos &amp; artwork by qihao</p>
        <a href="#top">back to top ↑</a>
      </footer>
    </div>
  );
}
