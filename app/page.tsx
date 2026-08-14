import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CategorySection from "@/components/CategorySection";
import AboutPreview from "@/components/AboutPreview";
import GlobalNetwork from "@/components/GlobalNetwork";
import SourcingProcess from "@/components/SourcingProcess";
import TradeSupport from "@/components/TradeSupport";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden bg-slate-50">
      <Hero />
      <CategorySection />
      <AboutPreview />

      <ProductGrid />

      <TradeSupport />
      <WhyChooseUs />
      <SourcingProcess />
      <GlobalNetwork />

      <section className="w-full bg-[linear-gradient(135deg,#0F172A_0%,#1D4ED8_100%)] px-4 py-20 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <h2 className="text-3xl font-black sm:text-4xl">
            Looking For A Reliable China Supplier?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-200">
            Get professional sourcing support and competitive quotations for your market.
          </p>
          <Link href="/quote" className="mt-10 inline-flex items-center justify-center rounded-2xl bg-[#F97316] px-10 py-5 text-xl font-bold text-white shadow-[0_12px_40px_rgba(249,115,22,0.35)] transition hover:-translate-y-0.5 hover:bg-orange-600">
            Request Quote
          </Link>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </main>
  );
}
