// ✅ CORRECT
import Image from "next/image";
import { notFound } from "next/navigation";
import { products as allProducts } from "@/data/products";

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const categoryName = allProducts.find(
    (product) =>
      product.category.toLowerCase().replace(/\s+/g, "-") === params.slug,
  )?.category;

  if (!categoryName) {
    notFound();
  }

  const category = {
    name: categoryName,
    slug: params.slug,
    description: "",
  };

  const products = allProducts.filter(
    (product) => product.category === category.name,
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">{category.name}</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {category.description}
        </p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative aspect-square w-full bg-gray-100">
                <Image
                  src={product.image || "/placeholder.png"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <h3 className="font-semibold text-lg leading-tight">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    ¥{product.price.toLocaleString()}
                  </span>
                  <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex h-60 items-center justify-center rounded-lg border border-dashed">
          <p className="text-muted-foreground">
            No products found in this category yet.
          
        </div>
      )}
    </div>
  );
}