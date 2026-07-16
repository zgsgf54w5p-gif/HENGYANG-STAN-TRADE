"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B4EA2]/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg bg-white">
            <Image
              src="/images/logo2.jpg"
              alt="Hengyang Stan Trade"
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-white font-bold text-2xl leading-none">
              HENGYANG STAN
            </h1>
            <p className="text-yellow-400 font-semibold text-lg">
              TRADE
            </p >
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-all duration-300 font-medium ${
                pathname === link.href
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Button */}
        <Link
          href="/quote"
          className="hidden md:inline-flex bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:scale-105 hover:bg-yellow-300 transition-all duration-300 shadow-lg"
        >
          Request Quote
        </Link>
      </div>
    </header>
  );
}