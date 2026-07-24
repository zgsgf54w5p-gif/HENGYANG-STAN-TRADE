"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductGallery({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => setSelectedImage(images[0])}
          className="group block w-full cursor-zoom-in overflow-hidden rounded-3xl bg-gray-100 text-left"
          aria-label={`View ${productName} image full screen`}
        >
          <div className="relative aspect-4/3 w-full">
            <Image
              src={images[0]}
              alt={productName}
              fill
              priority
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>
        </button>

        {images.length > 1 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {images.slice(1).map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setSelectedImage(src)}
                className="group block w-full cursor-zoom-in overflow-hidden rounded-3xl bg-gray-100 text-left"
                aria-label={`View ${productName} image ${index + 2} full screen`}
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={src}
                    alt={`${productName} ${index + 2}`}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </div>
              </button>
            ))}
          </div>
        ) : null}
      </div>

      {selectedImage ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${productName} full-screen image`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-3xl leading-none text-slate-900 shadow-lg transition hover:bg-yellow-400"
            aria-label="Close full-screen image"
          >
            &times;
          </button>
          <div
            className="relative h-full w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={productName}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
