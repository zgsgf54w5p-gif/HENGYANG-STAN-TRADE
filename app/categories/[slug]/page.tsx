import Image from 'next/image'

type Product = {
  id: string | number
  name: string
  description: string
  image: string | string[]
  price: number
}

const products: Product[] = []

export default function CategoryPage() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        // Normalize image source
        const imageSrc = Array.isArray(product.image)
          ? product.image[0]
          : product.image

        return (
          <div
            key={product.id}
            className="group relative rounded-lg border bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="relative h-48 w-full overflow-hidden rounded-md bg-gray-100">
              <Image
                src={imageSrc || '/placeholder.png'}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.description}</p>
            <p className="mt-2 text-base font-bold text-primary">
              ¥{product.price.toLocaleString()}
            </p>
          </div>
        )
      })}
    </div>
  )
}
