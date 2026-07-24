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
    <main className="container mx-auto px-4 py-10">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr]">
        <section className="space-y-8">
          <ProductGallery images={product.images} productName={product.name} />

          {product.video ? (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Product Video</h2>
              <video
                controls
                preload="metadata"
                playsInline
                poster={product.images[0]}
                className="w-full overflow-hidden rounded-3xl bg-black"
              >
                <source src={product.video} type="video/mp4" />
                Your browser does not support HTML video playback.
              </video>
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

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href={`/quote?product=${encodeURIComponent(product.name)}`}
              className="rounded-xl bg-yellow-400 px-5 py-4 text-center font-bold text-slate-950 transition hover:bg-yellow-300"
            >
              Request a Quote
            </a>
            <a
              href={`https://wa.me/8613510151112?text=${encodeURIComponent(`Hello Hengyang Stan Trade, I am interested in the ${product.name}.`)}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-[#25D366] px-5 py-4 text-center font-bold text-white transition hover:bg-[#1fba59]"
            >
              WhatsApp Us
            </a>
          </div>

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