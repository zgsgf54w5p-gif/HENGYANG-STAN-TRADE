import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const scriptFont = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Hengyang Stan Trade",
  description:
    "Professional supplier of home appliances, electronics and commercial products from China.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable} ${scriptFont.variable}`}
    >
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "var(--font-geist-sans), sans-serif",
          backgroundColor: "#f5f7fa",
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}