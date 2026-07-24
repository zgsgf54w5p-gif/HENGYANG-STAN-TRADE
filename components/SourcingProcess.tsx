import { ClipboardCheck, FileSearch, PackageCheck, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Share your requirements",
    text: "Tell us what you need, including product type, target quantity, market, packaging and delivery expectations.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Review the options",
    text: "We compare suitable products and suppliers, clarify specifications and prepare a quotation that fits your project.",
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Confirm quality",
    text: "We align samples, branding, packaging and inspection requirements before production moves forward.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Ship with confidence",
    text: "We coordinate the export details and stay available through dispatch and after-sales follow-up.",
  },
];

export default function SourcingProcess() {
  return (
    <section className="bg-[#071F3D] py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-24">
          <div className="lg:sticky lg:top-32">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">A clearer way to source</p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">From first conversation to final shipment.</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
              Good international trade depends on clear steps. Our team keeps every stage visible so you can make decisions with better information.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article key={step.number} className="rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-[#071F3D]">
                      <Icon size={23} strokeWidth={2.2} aria-hidden="true" />
                    </div>
                    <span className="text-sm font-bold text-yellow-400">{step.number}</span>
                  </div>
                  <h3 className="mt-7 text-xl font-bold">{step.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
