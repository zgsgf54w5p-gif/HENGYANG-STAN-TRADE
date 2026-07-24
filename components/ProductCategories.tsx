"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";

export default function ProductCategories() {
  return (
    <section className="bg-[#F5F8FC] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="text-[#0B4EA2] font-semibold uppercase tracking-widest">
            Our Categories
          </p >

          <h2 className="mt-3 text-3xl font-bold text-[#071F3D] sm:text-4xl">
            Explore Our Product Range
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            Discover high-quality products manufactured for wholesalers,
            distributors and international businesses.
          </p >
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <Link href={`/categories/${category.slug}`}>
                <div className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">

                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  <div className="p-7">

                    <h3 className="text-2xl font-bold text-[#071F3D]">
                      {category.name}
                    </h3>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                      {category.description}
                    </p >

                    <div className="mt-8 inline-flex items-center text-[#0B4EA2] font-semibold group-hover:translate-x-2 transition">
                      Explore Category →
                    </div>

                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}