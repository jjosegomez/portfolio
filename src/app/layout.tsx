import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Gomez — Engineer & Builder",
  description:
    "Financial Systems Developer at Jabil. Building AI-native software on the side. Based in Tampa, FL.",
  metadataBase: new URL("https://techbyjuan.com"),
  openGraph: {
    title: "Juan Gomez — Engineer & Builder",
    description:
      "Financial Systems Developer at Jabil. Building AI-native software on the side.",
    type: "website",
    url: "https://techbyjuan.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} antialiased grain`}
      >
        {children}
      </body>
    </html>
  );
}
