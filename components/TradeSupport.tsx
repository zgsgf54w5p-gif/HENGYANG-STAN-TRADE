import Link from "next/link";
import { BadgeCheck, Globe2, Headset, SlidersHorizontal } from "lucide-react";

const services = [
  {
    icon: BadgeCheck,
    title: "Quality-minded sourcing",
    text: "Product details, materials, certifications and packaging are discussed clearly before you place an order.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible order support",
    text: "We help coordinate standard products, specification changes, private labels and packaging requirements.",
  },
  {
    icon: Globe2,
    title: "Export coordination",
    text: "Our team supports the commercial and logistics details required to move products from China to your market.",
  },
  {
    icon: Headset,
    title: "Responsive communication",
    text: "You get direct, practical answers before the order, during production and after the shipment leaves.",
  },
];

export default function TradeSupport() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#0B4EA2]">More than a product list</p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#071F3D] sm:text-4xl">The details that make international buying easier.</h2>
          </div>
          <Link href="/about" className="inline-flex shrink-0 items-center font-bold text-[#0B4EA2] transition hover:text-[#1E88E5]">Learn about our company <span className="ml-2" aria-hidden="true">→</span></Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article key={service.title} className="border-t-2 border-slate-200 pt-6 transition hover:border-yellow-400">
                <Icon className="text-[#0B4EA2]" size={28} strokeWidth={1.8} aria-hidden="true" />
                <h3 className="mt-6 text-xl font-bold text-[#071F3D]">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{service.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
