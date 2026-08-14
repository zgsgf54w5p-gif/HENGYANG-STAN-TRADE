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
          marginLeft: "auto",
          marginRight: "auto",
          padding: 0,
          width: "100%",
          maxWidth: "1440px",
          fontFamily: "Arial, Helvetica, sans-serif",
          backgroundColor: "#e2e8f0",
          boxShadow: "0 0 80px rgba(2, 6, 23, 0.28)",
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}