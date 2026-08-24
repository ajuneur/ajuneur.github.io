import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { getPost, posts } from "../../post-data";

type PostPageProps = {
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
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const requestHeaders = await headers();
  const metadataBase = metadataBaseFromHeaders(requestHeaders);
  const title = `${post.title} — Qihao`;
  const socialImage = post.images?.[0]
    ? [
        {
          url: new URL(post.images[0].src, metadataBase).toString(),
          alt: post.images[0].alt,
        },
      ]
    : [];

  return {
    metadataBase,
    title,
    description: post.description,
    openGraph: {
      type: "article",
      title,
      description: post.description,
      images: socialImage,
    },
    twitter: {
      card: "summary",
      title,
      description: post.description,
      images: socialImage,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="post-story-shell">
      <a className="skip-link" href="#main">
        Skip to story
      </a>

      <header className="post-story-header">
        <a className="brand" href="../../" aria-label="Qihao, home">
          <span>「</span>qh<span>.</span><span>」</span>
        </a>
        <a href="../../#posts">← all posts</a>
      </header>

      <main className="post-story-main" id="main">
        <header className="post-story-title">
          <div className="post-story-meta">
            <time>{post.date}</time>
            <span>{post.tag}</span>
          </div>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </header>

        {post.images ? (
          <div className="post-image-gallery" aria-label="Photos from this post">
            {post.images.map((image, index) => (
              <figure key={image.src}>
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : null}

        <article className="post-article">
          <p className="post-note">{post.note}</p>
          {post.body.map((paragraph, index) =>
            paragraph === null ? (
              <div className="dream-break" aria-hidden="true" key={index}>
                * * *
              </div>
            ) : (
              <p key={index}>{paragraph}</p>
            ),
          )}
        </article>

        <a className="back-to-posts" href="../../#posts">
          ← back to posts
        </a>
      </main>
    </div>
  );
}
