import { ArrowRight, CheckCircle2, MessageCircle, Package, ShieldCheck, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/ProductGallery";
import { products } from "@/data/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const specs = [
    ["MOQ", product.moq],
    ["Voltage", product.voltage],
    ["Capacity", product.capacity],
    ["Power", product.power],
    ["Material", product.material],
    ["Fuel Type", product.fuelType],
    ["Cooking Area", product.cookingArea],
    ["Dimensions", product.dimensions],
    ["Weight", product.weight],
    ["Color", product.color],
  ].filter(([, value]) => value);

  return (
    <main className="bg-[radial-gradient(circle_at_top_left,_#f8fbff_0%,_#f2f6fb_45%,_#eef3f9_100%)] py-10 sm:py-14">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-8 rounded-[30px] border border-slate-200 bg-white/80 p-6 shadow-[0_16px_60px_rgba(7,31,61,0.08)] backdrop-blur sm:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB]">Product Detail</p>
              <h1 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">{product.name}</h1>
            </div>
            {product.badge && (
              <span className="inline-flex w-fit items-center rounded-full bg-[#F97316] px-4 py-2 text-sm font-semibold text-slate-900">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section>
            <ProductGallery images={product.images} productName={product.name} productSlug={product.slug} />

            {product.video && (
              <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(7,31,61,0.08)]">
                <h2 className="text-2xl font-bold text-slate-900">Product Video</h2>
                <video controls className="mt-5 w-full rounded-2xl" poster={product.images[0]}>
                  <source src={product.video} type="video/mp4" />
                </video>
              </div>
            )}
          </section>

          <aside className="h-fit rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(7,31,61,0.1)] sm:p-8 lg:sticky lg:top-24">
            <div className="rounded-[24px] bg-[linear-gradient(135deg,_#2563EB_0%,_#3B82F6_100%)] p-5 text-white">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">
                <Sparkles size={16} />
                Wholesale-ready offer
              </div>
              <p className="mt-3 text-lg leading-8 text-slate-100">{product.description}</p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.moq && (
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-[#2563EB]">
                    <Package size={16} />
                    <span className="text-xs font-bold uppercase">MOQ</span>
                  </div>
                  <p className="mt-2 font-semibold text-slate-900">{product.moq}</p>
                </div>
              )}
              {product.voltage && (
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-[#2563EB]">
                    <ShieldCheck size={16} />
                    <span className="text-xs font-bold uppercase">Voltage</span>
                  </div>
                  <p className="mt-2 font-semibold text-slate-900">{product.voltage}</p>
                </div>
              )}
              {product.capacity && (
                <div className="rounded-2xl bg-slate-50 p-4 sm:col-span-2">
                  <div className="flex items-center gap-2 text-[#2563EB]">
                    <CheckCircle2 size={16} />
                    <span className="text-xs font-bold uppercase">Capacity</span>
                  </div>
                  <p className="mt-2 font-semibold text-slate-900">{product.capacity}</p>
                </div>
              )}
            </div>

            <div className="mt-6 space-y-3">
              <a href="/quote" className="flex items-center justify-center gap-2 rounded-2xl bg-[#2563EB] px-8 py-5 text-xl font-bold text-white transition hover:bg-[#1D4ED8]">
                Request a Quote
                <ArrowRight size={18} />
              </a>
              <a
                href={`https://wa.me/8613510151112?text=${encodeURIComponent(`Hello Hengyang Stan Trade, I am interested in the ${product.name}.`)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#2563EB] px-8 py-5 text-xl font-bold text-white transition hover:bg-[#1D4ED8]"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-8 rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-xl font-bold text-slate-900">Product Specifications</h2>
              <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                {specs.map(([label, value], index, array) => (
                  <div key={String(label)} className={`grid grid-cols-[140px_1fr] ${index !== array.length - 1 ? "border-b border-slate-200" : ""}`}>
                    <div className="bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">{label}</div>
                    <div className="px-4 py-3 text-sm text-slate-600">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[24px] border border-slate-200 bg-[#F8FBFF] p-5">
              <h3 className="text-lg font-bold text-slate-900">Why importers choose us</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#2563EB]" /> Factory direct pricing</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#2563EB]" /> OEM & ODM support</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#2563EB]" /> Worldwide shipping</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#2563EB]" /> Fast export logistics</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
