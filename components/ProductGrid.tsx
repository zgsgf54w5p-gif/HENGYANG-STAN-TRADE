"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "../data/products";

export default function ProductGrid() {
  return (
    <section className="bg-[#F5F8FC] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-12 text-center sm:mb-16">
          <p className="text-[15px] font-bold tracking-[2px] text-[#0B4EA2]">
          OUR PRODUCTS
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#071F3D] sm:text-4xl">
          Featured Products
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          High-quality appliances carefully selected for importers,
          wholesalers and distributors worldwide.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group block h-full text-inherit no-underline"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.35 }}
              style={{
                position: "relative",
                background: "#fff",
                borderRadius: "22px",
                overflow: "hidden",
                boxShadow: "0 15px 35px rgba(0,0,0,.10)",
                height: "100%",
              }}
            >
              <div
                className="absolute left-4 top-4 z-2 rounded-full bg-yellow-400 px-3.5 py-2 text-[13px] font-bold text-[#071F3D]"
              >
                {product.badge}
              </div>

              <motion.div className="overflow-hidden" whileHover={{ scale: 1.08 }}>
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={500}
                  height={350}
                  style={{
                    width: "100%",
                    height: "260px",
                    objectFit: "cover",
                  }}
                />
              </motion.div>

              <div className="p-6">
                <h3 className="mb-3 text-2xl text-[#071F3D]">
                  {product.name}
                </h3>

                <p className="min-h-14 leading-7 text-slate-600">
                  {product.description}
                </p >

                <div className="mt-5 flex items-center justify-between gap-4">
                  <span className="text-xl text-[#FFC107]">
                    ★★★★★
                  </span>

                  <span className="text-sm font-bold text-[#0B4EA2]">
                    MOQ: {product.moq}
                  </span>
                </div>

                <div
                  className="mt-6 w-full cursor-pointer rounded-xl border-0 bg-linear-to-br from-[#0B4EA2] to-[#1565C0] px-4 py-3.5 text-center text-base font-bold text-white transition duration-300 group-hover:from-[#1565C0] group-hover:to-[#1E88E5]"
                >
                  View Details →
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
        </div>
      </div>
    </section>
  );
}