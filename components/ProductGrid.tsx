import { notFound } from "next/navigation";
import { products as allProducts } from "@/data/products";
import ProductGallery from "@/components/ProductGallery";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = allProducts.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

return (
  <main className="bg-[#F8FAFC] py-14">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">

      <div className="grid gap-12 lg:grid-cols-[1.45fr_0.95fr]">

        {/* LEFT SIDE */}
        <section className="space-y-8">

          <ProductGallery
            images={product.images}
            productName={product.name}
            productSlug={product.slug}
          />

          {product.video && (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
              <h2 className="mb-5 text-2xl font-bold text-[#071F3D]">
                Product Video
              </h2>

              <video
                controls
                preload="metadata"
                playsInline
                poster={product.images[0]}
                className="aspect-video w-full rounded-2xl bg-slate-100 object-contain"
              >
                <source src={product.video} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>
          )}

        </section>

        {/* RIGHT SIDE */}
        <aside className="sticky top-24 min-h-[900px] rounded-3xl border border-slate-200 bg-white p-8 shadow-lx flex flex-col">

          {product.badge && (
            <span className="inline-flex rounded-full bg-[#0B4EA2] px-4 py-2 text-sm font-semibold text-white">
              {product.badge}
            </span>
          )}

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#071F3D]">
            {product.name}
          </h1>

          <div className="mt-5 flex items-center gap-3">

            <span className="text-xl text-yellow-400">
              ★★★★★
            </span>

            <span className="text-sm font-medium text-slate-500">
              Trusted Export Product
            </span>

          </div>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {product.description}
          </p >

          {/* Quick Info */}

          <div className="mt-8 grid grid-cols-2 gap-4">

            {product.moq && (
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  MOQ
                </p >
                <p className="mt-2 text-lg font-bold text-[#071F3D]">
                  {product.moq}
                </p >
              </div>
            )}

            {product.voltage && (
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Voltage
                </p >
                <p className="mt-2 text-lg font-bold text-[#071F3D]">
                  {product.voltage}
                </p >
              </div>
            )}

            {product.power && (
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Power
                </p >
                <p className="mt-2 text-lg font-bold text-[#071F3D]">
                  {product.power}
                </p >
              </div>
            )}

            {product.capacity && (
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Capacity
                </p >
                <p className="mt-2 text-lg font-bold text-[#071F3D]">
                  {product.capacity}
                </p >
              </div>
            )}

          </div>

          {/* Action Buttons */}

          <div className="mt-10 space-y-4">

            <a
              href=" "
              className="block w-full rounded-xl bg-[#0B4EA2] py-4 text-center text-lg font-bold text-white transition hover:bg-[#1565C0]"
            >
              Request a Quote
            </a >

            <a
              href={`https://wa.me/8613510151112?text=${encodeURIComponent(
                `Hello Hengyang Stan Trade, I am interested in the ${product.name}.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="block w-full rounded-xl bg-[#25D366] py-4 text-center text-lg font-bold text-white transition hover:bg-[#1EBE5A]"
            >
              Chat on WhatsApp
            </a >

          </div>

          {/* Part 2 starts here */}          {/* Specifications */}

          <div className="mt-10">

            <h2 className="mb-5 text-2xl font-bold text-[#071F3D]">
              Product Specifications
            </h2>

            <div className="overflow-hidden rounded-2xl border border-slate-200">

              {[
                ["Minimum Order", product.moq],
                ["Voltage", product.voltage],
                ["Power", product.power],
                ["Capacity", product.capacity],
                ["Material", product.material],
                ["Fuel Type", product.fuelType],
                ["Cooking Area", product.cookingArea],
                ["Dimensions", product.dimensions],
                ["Weight", product.weight],
                ["Color", product.color],
              ]
                .filter(([, value]) => value)
                .map(([label, value], index) => (
                  <div
                    key={String(label)}
                    className={`grid grid-cols-[170px_1fr] ${
                      index !== 9 ? "border-b border-slate-200" : ""
                    }`}
                  >
                    <div className="bg-slate-50 px-5 py-4 font-semibold text-[#071F3D]">
                      {label}
                    </div>

                    <div className="px-5 py-4 text-slate-600">
                      {value}
                    </div>
                  </div>
                ))}

            </div>

          </div>

          {/* Export Advantages */}

          <div className="mt-10 rounded-2xl bg-[#F5F8FC] p-6">

            <h2 className="text-2xl font-bold text-[#071F3D]">
              Why Buy From Us?
            </h2>

            <div className="mt-6 space-y-4">

              <div className="flex items-center gap-3">
                <span className="text-xl">✔</span>
                <p>Factory Direct Pricing</p >
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">✔</span>
                <p>Professional Export Service</p >
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">✔</span>
                <p>Worldwide Shipping Available</p >
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">✔</span>
                <p>OEM & ODM Manufacturing</p >
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">✔</span>
                <p>Quality Inspection Before Shipment</p >
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">✔</span>
                <p>Fast Response Within 24 Hours</p >
              </div>

            </div>

          </div>

          {/* Shipping */}

          <div className="mt-8 rounded-2xl border border-slate-200 p-6">

            <h2 className="text-xl font-bold text-[#071F3D]">
              Shipping Information
            </h2>

            <div className="mt-5 grid gap-4">

              <div className="flex justify-between">
                <span className="text-slate-500">
                  Export Port
                </span>

                <span className="font-semibold">
                  Shenzhen / Guangzhou
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">
                  Delivery
                </span>

                <span className="font-semibold">
                  Worldwide
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">
                  Packaging
                </span>

                <span className="font-semibold">
                  Export Standard
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">
                  Payment
                </span>

                <span className="font-semibold">
                  T/T • L/C
                </span>
              </div>

            </div>

          </div>

        </aside>

      </div>

    </div>

  </main>
);
}