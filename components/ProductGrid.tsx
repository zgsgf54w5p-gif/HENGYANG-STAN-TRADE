"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Package,
} from "lucide-react";

import { products } from "../data/products";

export default function ProductGrid() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-[#F8FAFC] to-[#EEF5FD] py-24">

      {/* Background Decoration */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-40" />

        <div className="absolute right-[-120px] bottom-[-120px] h-72 w-72 rounded-full bg-yellow-100 blur-3xl opacity-40" />

      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-bold uppercase tracking-[3px] text-[#0B4EA2]">
            Featured Products
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[#071F3D] sm:text-5xl">
            Discover Our Premium Collection
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            High-quality commercial kitchen equipment and home appliances
            manufactured for importers, wholesalers and distributors
            worldwide.
          </p >

        </motion.div>

        {/* Product Grid */}

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group block h-full"
            >
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -10,
                }}
                className="relative flex h-[720px] flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-md transition-all duration-500 group-hover:shadow-2xl"
              >
                {product.badge && (
                  <div className="absolute left-5 top-5 z-20 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-[#071F3D] shadow-lg">
                    {product.badge}
                  </div>
                )}

                <div className="relative overflow-hidden bg-slate-100">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={700}
                    height={700}
                    className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <p className="text-sm font-semibold uppercase tracking-[2px] text-[#0B4EA2]">
                    Commercial Equipment
                  </p>

                  <h3 className="mt-3 min-h-[72px] text-[24px] font-extrabold leading-tight text-[#071F3D] transition-colors duration-300 group-hover:text-[#0B4EA2]">
                    {product.name}
                  </h3>

                  <p className="mt-5 min-h-[115px] text-[15px] leading-7 text-slate-600 line-clamp-4">
                    {product.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {product.moq && (
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 transition group-hover:border-blue-200">
                        <div className="flex items-center gap-2 text-[#0B4EA2]">
                          <Package size={16} />
                          <span className="text-xs font-semibold uppercase">
                            MOQ
                          </span>
                        </div>

                        <p className="mt-2 font-bold text-[#071F3D]">
                          {product.moq}
                        </p>
                      </div>
                    )}

                    {product.voltage && (
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 transition group-hover:border-blue-200">
                        <div className="flex items-center gap-2 text-[#0B4EA2]">
                          <Zap size={16} />
                          <span className="text-xs font-semibold uppercase">
                            Voltage
                          </span>
                        </div>

                        <p className="mt-2 font-bold text-[#071F3D]">
                          {product.voltage}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex items-center gap-2 rounded-2xl bg-[#F5F8FC] p-4">
                    <ShieldCheck
                      size={20}
                      className="text-green-600"
                    />

                    <p className="text-sm font-medium text-slate-700">
                      Factory Direct • Export Quality
                    </p>
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#0B4EA2] via-[#1565C0] to-[#1E88E5] py-4 text-base font-bold text-white transition-all duration-300 group-hover:shadow-xl">
                      View Product

                      <ArrowRight
                        size={20}
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