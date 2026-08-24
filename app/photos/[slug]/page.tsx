import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { getPhotograph, photographs } from "../../photo-data";

type PhotoPageProps = {
  params: Promise<{ slug: string }>;
};

function metadataBaseFromHeaders(requestHeaders: Headers) {
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.startsWith("localhost") ? "http" : "https");

  return host
    ? new URL(`${protocol}://${host}`)
    : new URL("http://localhost:3000");
}

export function generateStaticParams() {
  return photographs.map((photograph) => ({ slug: photograph.slug }));
}

export async function generateMetadata({
  params,
}: PhotoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const photograph = getPhotograph(slug);
  if (!photograph) return {};

  const requestHeaders = await headers();
  const metadataBase = metadataBaseFromHeaders(requestHeaders);
  const title = `${photograph.title} — Qihao`;
  const image = new URL(`/photos/${photograph.image}`, metadataBase).toString();

  return {
    metadataBase,
    title,
    description: photograph.description,
    openGraph: {
      type: "article",
      title,
      description: photograph.description,
      images: [{ url: image, alt: photograph.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: photograph.description,
      images: [image],
    },
  };
}

export default async function PhotoPage({ params }: PhotoPageProps) {
  const { slug } = await params;
  const photograph = getPhotograph(slug);
  if (!photograph) notFound();

  const currentIndex = photographs.findIndex((item) => item.slug === slug);
  const nextPhotograph = photographs[(currentIndex + 1) % photographs.length];

  return (
    <div className="photo-story-shell">
      <header className="photo-story-header">
        <a className="brand" href="../../" aria-label="Qihao, home">
          <span>「</span>qh<span>.</span><span>」</span>
        </a>
        <a href="../../#photos">← all photos</a>
      </header>

      <main className="photo-story-main">
        <div className="photo-story-title">
          <p>photo {String(currentIndex + 1).padStart(2, "0")}</p>
          <h1>{photograph.title}</h1>
          <p>{photograph.description}</p>
        </div>

        <figure className="photo-story-image">
          <img
            src={`../../photos/${photograph.image}`}
            alt={photograph.alt}
          />
        </figure>

        <section className="behind-scene" aria-labelledby="story-title">
          <div>
            <p>behind the scene</p>
            <h2 id="story-title">the story is coming</h2>
          </div>
          <div className="behind-scene-copy">
            <p>
              this space is ready for what was happening outside the frame: the
              place, the people, the feeling, and why i decided to keep this
              moment.
            </p>
            <p className="story-placeholder">
              add the real story for this photograph here.
            </p>
          </div>
        </section>

        <a className="next-photo" href={`./${nextPhotograph.slug}`}>
          <span>next photo</span>
          {nextPhotograph.title} →
        </a>
      </main>
    </div>
  );
}
