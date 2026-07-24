import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    number: "01",
    title: "Category expertise",
    text: "We understand the product details, quality expectations and commercial requirements behind home appliances, kitchen equipment, electronics and business supplies.",
  },
  {
    number: "02",
    title: "Reliable sourcing",
    text: "Our supplier network helps buyers compare suitable factories, specifications and packaging options before committing to an order.",
  },
  {
    number: "03",
    title: "Order coordination",
    text: "From quotation and samples to inspection and shipment, our team keeps the process organized and communication clear at every stage.",
  },
];

const process = [
  ["01", "Understand", "We clarify your market, target price, quantity and product requirements."],
  ["02", "Source", "We identify suitable products and suppliers, then prepare a practical quotation."],
  ["03", "Verify", "We align specifications, samples, packaging and quality expectations before production."],
  ["04", "Deliver", "We coordinate shipment details and remain available after your order is dispatched."],
];

export default function AboutPage() {
  return (
    <main className="bg-[#F5F8FC] text-slate-800">
      <section className="bg-[#071F3D] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">About Hengyang Stan Trade</p>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              A dependable bridge between Chinese supply and global demand.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Hengyang Stan Trade Development Co., Ltd. helps importers, wholesalers and distributors source practical, quality-focused products from China with confidence.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/products" className="rounded-xl bg-yellow-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-yellow-300">
                Explore products
              </Link>
              <Link href="/quote" className="rounded-xl border border-white/40 px-7 py-4 font-bold text-white transition hover:border-white hover:bg-white/10">
                Start a conversation
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-3 shadow-2xl">
            <Image src="/images/company-banner.jpg" alt="Hengyang Stan Trade team and operations" width={900} height={620} className="h-full min-h-80 w-full rounded-2xl object-cover" priority />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#0B4EA2]">Who we are</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#071F3D] sm:text-4xl">Built around clarity, consistency and long-term trade relationships.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>We are an export partner for businesses that need more than a product list. Our role is to make sourcing from China easier to understand, easier to coordinate and more dependable from the first inquiry to the final shipment.</p>
            <p>Our product range includes home appliances, kitchen equipment, consumer electronics and commercial products. We work with buyers at different stages, whether they are testing a new category, replenishing an established line or developing a private-label opportunity.</p>
            <p>We believe strong trade is built on accurate information, responsive communication and careful follow-through. That principle shapes how we recommend products, manage specifications and support every order.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#0B4EA2]">What we bring</p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#071F3D] sm:text-4xl">Practical support for every stage of sourcing.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {capabilities.map((item) => (
              <article key={item.number} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7">
                <span className="text-sm font-bold text-yellow-600">{item.number}</span>
                <h3 className="mt-6 text-xl font-bold text-[#071F3D]">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#0B4EA2]">How we work</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#071F3D] sm:text-4xl">A straightforward path from idea to shipment.</h2>
            <p className="mt-6 leading-7 text-slate-600">Clear milestones help reduce uncertainty, protect your requirements and keep decisions moving.</p>
          </div>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {process.map(([number, title, text]) => (
              <div key={number} className="border-t-2 border-yellow-400 pt-5">
                <span className="text-sm font-bold text-[#0B4EA2]">{number}</span>
                <h3 className="mt-3 text-xl font-bold text-[#071F3D]">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B4EA2] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">Ready to source?</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Let&apos;s build the right supply solution for your market.</h2>
          </div>
          <Link href="/quote" className="shrink-0 rounded-xl bg-yellow-400 px-7 py-4 text-center font-bold text-slate-950 transition hover:bg-yellow-300">Request a quotation</Link>
        </div>
      </section>
    </main>
  );
}
