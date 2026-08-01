"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Package, Zap, ShieldCheck } from "lucide-react";
import { products } from "../data/products";

export default function ProductGrid() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-20 text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold uppercase tracking-[3px] text-[#0B4EA2]">
            Featured Products
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-[#071F3D]">
            Discover Our Premium Collection
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            High-quality commercial kitchen equipment and home appliances
            designed for importers, wholesalers and distributors worldwide.
          </p >

        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">

          {products.map((product, index) => (

            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group"
            >

              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -10,
                }}
                className="flex h-[720px] flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-lg transition-all duration-500 group-hover:shadow-2xl"
              >

                {/* Badge */}

                {product.badge && (

                  <div className="absolute ml-5 mt-5 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-[#071F3D] shadow-lg">

                    {product.badge}

                  </div>

                )}

                {/* Image */}

                <div className="overflow-hidden bg-slate-100">

                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={700}
                    height={700}
                    className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>

                {/* Content */}

                <div className="flex flex-1 flex-col p-7">

                  <p className="text-sm font-semibold uppercase tracking-[2px] text-[#0B4EA2]">
                    Commercial Equipment
                  </p >

                  <h3 className="mt-3 min-h-[70px] text-2xl font-extrabold leading-tight text-[#071F3D]">
                    {product.name}
                  </h3>

                  <p className="mt-5 min-h-[120px] text-[15px] leading-7 text-slate-600 line-clamp-4">
                    {product.description}
                  </p >

                  {/* Specs */}

                  <div className="mt-6 grid grid-cols-2 gap-3">

                    {product.moq && (

                      <div className="rounded-2xl bg-slate-50 p-3">

                        <div className="flex items-center gap-2 text-[#0B4EA2]">

                          <Package size={16} />

                          <span className="text-xs font-semibold uppercase">
                            MOQ
                          </span>

                        </div>

                        <p className="mt-2 font-bold text-[#071F3D]">
                          {product.moq}
                        </p >

                      </div>

                    )}

                    {product.voltage && (

                      <div className="rounded-2xl bg-slate-50 p-3">

                        <div className="flex items-center gap-2 text-[#0B4EA2]">

                          <Zap size={16} />

                          <span className="text-xs font-semibold uppercase">
                            Voltage
                          </span>

                        </div>

                        <p className="mt-2 font-bold text-[#071F3D]">
                          {product.voltage}
                        </p >

                      </div>

                    )}

                  </div>

                  {/* Trust */}

                  <div className="mt-6 flex items-center gap-2 rounded-2xl bg-[#F5F8FC] p-4">

                    <ShieldCheck
                      size={18}
                      className="text-green-600"
                    />

                    <span className="text-sm font-medium text-slate-700">
                      Factory Direct • Export Quality
                    </span>

                  </div>

                  {/* Button */}

                  <div className="mt-auto pt-8">

                    <div className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0B4EA2] to-[#1E88E5] py-4 font-bold text-white transition duration-300 group-hover:shadow-xl">

                      View Details

                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />

                    </div>

                  </div>

                </div>

              </motion.article>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}