"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="relative z-50 bg-[#0B4EA2]/95 shadow-lg backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-12">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg bg-white">
            <Image
              src="/images/logo2.jpg"
              alt="Hengyang Stan Trade Development Co.,Ltd."
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
              TRADE Development Co.,Ltd.
            </p >
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-7 text-sm md:flex lg:gap-8">
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

          <Link
            href="/quote"
            className="hidden rounded-full bg-yellow-400 px-5 py-3 text-black font-bold hover:scale-105 hover:bg-yellow-300 transition-all duration-300 shadow-lg md:inline-flex"
          >
            Request Quote
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20 md:hidden"
            aria-label="Open mobile menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`absolute block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/10 bg-[#0B4EA2]/95 px-4 py-4 text-center text-sm text-white shadow-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-2xl px-4 py-3 transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-white/10 text-yellow-400"
                    : "hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/quote"
              onClick={() => setMobileOpen(false)}
              className="mx-auto inline-flex w-full justify-center rounded-full bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
            >
              Request Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}