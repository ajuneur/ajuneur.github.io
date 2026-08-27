import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Qihao Liang's Little ArXiv";
const siteName = "Qihao Liang";
const description =
  "Posts, photographs, paintings, and little things from Qihao's life lately.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.startsWith("localhost") ? "http" : "https");
  const metadataBase = host
    ? new URL(`${protocol}://${host}`)
    : new URL("http://localhost:3000");
  const socialImage = new URL("./og.png", metadataBase).toString();

  return {
    metadataBase,
    title,
    applicationName: siteName,
    description,
    authors: [{ name: siteName }],
    creator: siteName,
    openGraph: {
      type: "website",
      siteName,
      title,
      description,
      images: [
        {
          url: socialImage,
          width: 1731,
          height: 909,
          alt: "qihao's little arXiv for posts, photos, and life lately",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.startsWith("localhost") ? "http" : "https");
  const siteUrl = host ? `${protocol}://${host}/` : "https://ajuneur.github.io/";
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    alternateName: title,
    url: siteUrl,
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
