import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative h-60 w-full overflow-hidden rounded-t-xl bg-gray-100">

          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-5 transition duration-300 group-hover:scale-105"
          />

        </div>
      </Link>


      {/* Content */}
      <div className="p-5">

        <h3 className="line-clamp-2 text-lg font-bold text-[#0F172A]">
          {product.name}
        </h3>


        <div className="mt-2 text-yellow-500">
          ⭐⭐⭐⭐⭐
        </div>


        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p >


        <p className="mt-4 text-xl font-bold text-[#2563EB]">
          {product.price}
        </p >


        <Link
          href="/quote"
          className="mt-4 block rounded-lg bg-[#F97316] py-3 text-center font-bold text-black transition hover:bg-orange-600"
        >
          Request Quote
        </Link>

      </div>

    </div>
  );
}