import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Qi Hao — a little corner of the internet";
const description =
  "Diary entries, photos, and little things from life lately.";

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
    description,
    openGraph: {
      type: "website",
      title,
      description,
      images: [
        {
          url: socialImage,
          width: 1731,
          height: 909,
          alt: "Qi Hao’s little corner — diary, photos, and life lately",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
