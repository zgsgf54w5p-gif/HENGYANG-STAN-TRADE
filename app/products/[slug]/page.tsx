import Image from "next/image";
import { notFound } from "next/navigation";
import { products as allProducts } from "@/data/products";

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = allProducts.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr]">
        <section className="space-y-8">
          <div className="overflow-hidden rounded-3xl bg-gray-100">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>
          </div>

          {product.images.length > 1 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {product.images.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-3xl bg-gray-100">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={src}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {product.video ? (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Product Video</h2>
              <video
                src={product.video}
                controls
                className="w-full overflow-hidden rounded-3xl bg-black"
              />
            </div>
          ) : null}
        </section>

        <aside className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          {product.badge ? (
            <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              {product.badge}
            </span>
          ) : null}

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
            {product.name}
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {product.description}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {product.moq ? (
              <div>
                <dt className="text-sm font-semibold text-slate-900">MOQ</dt>
                <dd className="mt-2 text-base text-slate-600">{product.moq}</dd>
              </div>
            ) : null}
            {product.voltage ? (
              <div>
                <dt className="text-sm font-semibold text-slate-900">Voltage</dt>
                <dd className="mt-2 text-base text-slate-600">{product.voltage}</dd>
              </div>
            ) : null}
            {product.capacity ? (
              <div>
                <dt className="text-sm font-semibold text-slate-900">Capacity</dt>
                <dd className="mt-2 text-base text-slate-600">{product.capacity}</dd>
              </div>
            ) : null}
            {product.power ? (
              <div>
                <dt className="text-sm font-semibold text-slate-900">Power</dt>
                <dd className="mt-2 text-base text-slate-600">{product.power}</dd>
              </div>
            ) : null}
          </div>

          <div className="mt-10 space-y-4">
            {product.material ? (
              <div>
                <dt className="text-sm font-semibold text-slate-900">Material</dt>
                <dd className="mt-2 text-base text-slate-600">{product.material}</dd>
              </div>
            ) : null}
            {product.fuelType ? (
              <div>
                <dt className="text-sm font-semibold text-slate-900">Fuel Type</dt>
                <dd className="mt-2 text-base text-slate-600">{product.fuelType}</dd>
              </div>
            ) : null}
            {product.cookingArea ? (
              <div>
                <dt className="text-sm font-semibold text-slate-900">Cooking Area</dt>
                <dd className="mt-2 text-base text-slate-600">{product.cookingArea}</dd>
              </div>
            ) : null}
            {product.dimensions ? (
              <div>
                <dt className="text-sm font-semibold text-slate-900">Dimensions</dt>
                <dd className="mt-2 text-base text-slate-600">{product.dimensions}</dd>
              </div>
            ) : null}
            {product.weight ? (
              <div>
                <dt className="text-sm font-semibold text-slate-900">Weight</dt>
                <dd className="mt-2 text-base text-slate-600">{product.weight}</dd>
              </div>
            ) : null}
            {product.color ? (
              <div>
                <dt className="text-sm font-semibold text-slate-900">Color</dt>
                <dd className="mt-2 text-base text-slate-600">{product.color}</dd>
              </div>
            ) : null}
          </div>
        </aside>
      </div>
    </main>
  );
}