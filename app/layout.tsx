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
          fontFamily: "Arial, Helvetica, sans-serif",
          backgroundColor: "#f5f7fa",
        }}
      >
        <Navbar />
        <div
          style={{
            width: "100%",
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "0 40px",
            boxSizing: "border-box",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}