import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

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
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          width: "100%",
          fontFamily: "Arial, Helvetica, sans-serif",
          backgroundColor: "#f5f7fa",
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}