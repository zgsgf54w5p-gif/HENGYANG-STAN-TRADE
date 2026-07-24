import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#071F3D] px-6 pb-7 pt-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto mb-11 grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] lg:gap-12">
        <div>
          <h2 className="mb-4 text-xl font-bold">Hengyang Stan Trade</h2>
          <p className="max-w-md leading-7 text-slate-300">
            Your trusted China export partner supplying home appliances,
            electronics, kitchen equipment and commercial products to
            customers worldwide.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Quick Links</h3>
          <nav className="space-y-3 text-slate-300">
            <p><Link href="/" className="transition hover:text-yellow-400">Home</Link></p>
            <p><Link href="/about" className="transition hover:text-yellow-400">About</Link></p>
            <p><Link href="/products" className="transition hover:text-yellow-400">Products</Link></p>
            <p><Link href="/testimonials" className="transition hover:text-yellow-400">Testimonials</Link></p>
            <p><Link href="/contact" className="transition hover:text-yellow-400">Contact</Link></p>
          </nav>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Contact</h3>
          <div className="space-y-3 leading-7 text-slate-300">
            <p>Hengyang, Hunan, China</p>
            <p>kitchenware@foxmail.com</p>
            <p>Phone: +86 191 6460 1883</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-white/15 pt-5 text-center text-sm text-slate-400">
        © 2026 Hengyang Stan Trade. All Rights Reserved.
      </div>
    </footer>
  );
}