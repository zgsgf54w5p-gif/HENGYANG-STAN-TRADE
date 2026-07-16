import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { categories } from "@/data/categories";
import { products } from "@/data/products";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(
    (product) => product.category === slug
  );

  return (
    <main className="bg-[#F5F8FC] min-h-screen">
      {/* Hero */}
      <section className="relative h-[380px]">
        <Image
          src={category.image}
          alt={category.name}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl font-bold">{category.name}</h1>

            <p className="mt-5 text-lg max-w-2xl mx-auto">
              {category.description}
            </p >
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-[#071F3D] mb-12">
          Our Products
        </h2>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categoryProducts.map((product) => (
              <div
                key={product.slug}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#071F3D]">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mt-3">
                    {product.description}
                  </p >

                  <div className="mt-4 space-y-1 text-sm text-gray-600">
                    <p><strong>MOQ:</strong> {product.moq}</p >
                    <p><strong>Voltage:</strong> {product.voltage}</p >
                    <p><strong>Power:</strong> {product.power}</p >
                  </div>

                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-block mt-6 bg-[#0B4EA2] text-white px-6 py-3 rounded-full hover:bg-[#083B7A] transition"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-3xl font-bold text-[#071F3D]">
              No products found
            </h3>

            <p className="mt-4 text-gray-600">
              This category does not contain any products yet.
            </p >
          </div>
        )}
      </section>
    </main>
  );
}