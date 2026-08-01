import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductGallery from "@/components/ProductGallery";

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

  return (
    <main className="bg-[#F8FAFC] py-12">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr]">

          {/* Left Side */}

          <section>

            <ProductGallery
              images={product.images}
              productName={product.name}
              productSlug={product.slug}
            />

            {product.video && (
              <div className="mt-10 rounded-3xl bg-white p-6 shadow-lg">
                <h2 className="mb-5 text-2xl font-bold text-[#071F3D]">
                  Product Video
                </h2>

                <video
                  controls
                  className="w-full rounded-2xl"
                  poster={product.images[0]}
                >
                  <source src={product.video} type="video/mp4" />
                </video>
              </div>
            )}

          </section>

          {/* Right Side */}

          <aside className="sticky top-24 h-fit rounded-3xl bg-white p-8 shadow-xl border border-slate-200">

            {product.badge && (
              <span className="rounded-full bg-[#0B4EA2] px-4 py-2 text-sm font-semibold text-white">
                {product.badge}
              </span>
            )}

            <h1 className="mt-6 text-4xl font-extrabold text-[#071F3D]">
              {product.name}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {product.description}
            </p >

            <div className="mt-8 grid grid-cols-2 gap-4">

              {product.moq && (
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs uppercase text-slate-500">
                    MOQ
                  </p >

                  <p className="mt-2 font-bold">
                    {product.moq}
                  </p >
                </div>
              )}

              {product.voltage && (
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs uppercase text-slate-500">
                    Voltage
                  </p >

                  <p className="mt-2 font-bold">
                    {product.voltage}
                  </p >
                </div>
              )}

              {product.capacity && (
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs uppercase text-slate-500">
                    Capacity
                  </p >

                  <p className="mt-2 font-bold">
                    {product.capacity}
                  </p >
                </div>
              )}

              {product.power && (
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs uppercase text-slate-500">
                    Power
                  </p >

                  <p className="mt-2 font-bold">
                    {product.power}
                  </p >
                </div>
              )}

            </div>

            <div className="mt-10 space-y-4">

              <a
                href=" "
                className="block rounded-xl bg-[#0B4EA2] py-4 text-center text-lg font-bold text-white transition hover:bg-[#1565C0]"
              >
                Request a Quote
              </a >

              <a
                href={`https://wa.me/8613510151112?text=${encodeURIComponent(
                  `Hello Hengyang Stan Trade, I am interested in the ${product.name}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl bg-[#25D366] py-4 text-center text-lg font-bold text-white transition hover:bg-[#1EBE5A]"
              >
                Chat on WhatsApp
              </a >

            </div>

            <div className="mt-10">

              <h2 className="mb-5 text-2xl font-bold text-[#071F3D]">
                Product Specifications
              </h2>

              <div className="overflow-hidden rounded-2xl border border-slate-200">

                {[
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
                ]
                  .filter(([, value]) => value)
                  .map(([label, value], index, array) => (
                    <div
                      key={String(label)}
                      className={`grid grid-cols-[170px_1fr] ${
                        index !== array.length - 1
                          ? "border-b border-slate-200"
                          : ""
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

            <div className="mt-10 rounded-2xl bg-[#F5F8FC] p-6">

              <h3 className="text-xl font-bold text-[#071F3D]">
                Why Choose Hengyang Stan Trade?
              </h3>

              <ul className="mt-5 space-y-3 text-slate-600">

                <li>✔ Factory Direct Pricing</li>
                <li>✔ OEM & ODM Service</li>
                <li>✔ Worldwide Shipping</li>
                <li>✔ Quality Inspection</li>
                <li>✔ Fast Delivery</li>
                <li>✔ Professional Export Team</li>

              </ul>

            </div>

          </aside>

        </div>

      </div>
    </main>
  );
}
