import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((product) => product.category === category.slug);

  return (
    <main className="bg-[#F5F8FC] text-slate-800">
      <section className="bg-[#071F3D] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20 lg:px-12 lg:py-24">
          <div>
            <Link href="/products" className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400 transition hover:text-yellow-300">
              All products
            </Link>
            <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">{category.name}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{category.description} Browse the products in this collection and open any item for full specifications, images and quotation options.</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-2 shadow-2xl">
            <Image src={category.image} alt={category.name} fill priority className="rounded-2xl object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0B4EA2]">Available in this category</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#071F3D] sm:text-4xl">Related products</h2>
          </div>
          <p className="text-slate-500">{categoryProducts.length} {categoryProducts.length === 1 ? "product" : "products"}</p>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {categoryProducts.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image src={product.images[0]} alt={product.name} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  {product.badge ? <span className="absolute left-4 top-4 rounded-full bg-yellow-400 px-3 py-2 text-xs font-bold text-[#071F3D]">{product.badge}</span> : null}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#071F3D]">{product.name}</h3>
                  <p className="mt-3 min-h-14 leading-7 text-slate-600">{product.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-4 border-t border-slate-100 pt-4 text-sm">
                    <span className="font-bold text-[#0B4EA2]">MOQ: {product.moq}</span>
                    <span className="font-bold text-[#0B4EA2] transition group-hover:text-[#1E88E5]">View details →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <h2 className="text-2xl font-bold text-[#071F3D]">Products are being added soon</h2>
            <p className="mt-3 text-slate-600">Contact our team for sourcing options in this category.</p>
            <Link href="/quote" className="mt-6 inline-flex rounded-xl bg-[#0B4EA2] px-6 py-3 font-bold text-white transition hover:bg-[#1E88E5]">Request a quotation</Link>
          </div>
        )}
      </section>
    </main>
  );
}
