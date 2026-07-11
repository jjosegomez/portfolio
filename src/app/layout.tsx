import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const body = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techbyjuan.com"),
  title: "Juan Gomez — Software Engineer",
  description:
    "Software engineer in Tampa building full-stack apps, AI products, and the systems behind enterprise finance — the engineer behind a Fortune-500 finance org's first production AI agent.",
  openGraph: {
    title: "Juan Gomez — Software Engineer",
    description:
      "Full-stack · AI · finance systems. I build software end to end.",
    url: "https://techbyjuan.com",
    type: "website",
    images: ["/images/portrait.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Gomez — Software Engineer",
    description: "Full-stack · AI · finance systems. I build software end to end.",
    images: ["/images/portrait.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Juan Gomez",
  url: "https://techbyjuan.com",
  image: "https://techbyjuan.com/images/portrait.jpg",
  jobTitle: "Software Engineer",
  description:
    "Software engineer in Tampa building full-stack apps, AI products, and the systems behind enterprise finance.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tampa",
    addressRegion: "FL",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/in/jjgomezswe/",
    "https://github.com/jjosegomez",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} antialiased grain`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
