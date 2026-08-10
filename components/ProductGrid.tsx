"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Package, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { useState } from "react";
import { products } from "../data/products";

export default function ProductGrid() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const toggleExpanded = (slug: string) => {
    setExpandedSlug((current) => (current === slug ? null : slug));
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12">
          <span className="rounded-md bg-blue-100 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#0B4EA2]">
            Featured Products
          </span>

          <div className="mt-5 flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold text-[#071F3D]">
                Explore Our Products
              </h2>

              <p className="mt-3 max-w-2xl text-gray-600">
                Premium kitchen appliances and commercial equipment supplied worldwide for wholesalers, distributors and importers.
              </p>
            </div>

            <Link
              href="/products"
              className="hidden font-semibold text-[#0B4EA2] hover:text-yellow-500 md:block"
            >
              View All →
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => {
            const isExpanded = expandedSlug === product.slug;

            return (
              <motion.article
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleExpanded(product.slug)}
                  className="group w-full text-left"
                >
                  <div className="relative flex aspect-square items-center justify-center bg-linear-to-br from-white to-slate-50 p-4">
                    {product.badge && (
                      <span className="absolute left-3 top-3 z-10 rounded-full bg-yellow-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#071F3D]">
                        {product.badge}
                      </span>
                    )}

                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={320}
                      height={320}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0B4EA2]">
                          Kitchen & Commercial Equipment
                        </p>
                        <h3 className="mt-2 text-base font-bold text-[#071F3D] line-clamp-2">
                          {product.name}
                        </h3>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`mt-1 shrink-0 text-gray-500 transition ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </div>

                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
                      {product.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#0B4EA2]">
                      <Sparkles size={15} />
                      <span>Tap to expand</span>
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-t border-gray-100"
                    >
                      <div className="space-y-4 p-4">
                        <div className="grid gap-3 sm:grid-cols-2">
                          {product.moq && (
                            <div className="rounded-lg bg-gray-50 p-3">
                              <div className="flex items-center gap-2 text-[#0B4EA2]">
                                <Package size={15} />
                                <span className="text-xs font-bold">MOQ</span>
                              </div>
                              <p className="mt-1 text-sm font-bold text-[#071F3D]">{product.moq}</p>
                            </div>
                          )}

                          {product.voltage && (
                            <div className="rounded-lg bg-gray-50 p-3">
                              <div className="flex items-center gap-2 text-[#0B4EA2]">
                                <Zap size={15} />
                                <span className="text-xs font-bold">Voltage</span>
                              </div>
                              <p className="mt-1 text-sm font-bold text-[#071F3D]">{product.voltage}</p>
                            </div>
                          )}

                          {product.capacity && (
                            <div className="rounded-lg bg-gray-50 p-3 sm:col-span-2">
                              <div className="flex items-center gap-2 text-[#0B4EA2]">
                                <ShieldCheck size={15} />
                                <span className="text-xs font-bold">Capacity</span>
                              </div>
                              <p className="mt-1 text-sm font-bold text-[#071F3D]">{product.capacity}</p>
                            </div>
                          )}
                        </div>

                        <div className="rounded-xl bg-slate-50 p-3">
                          <div className="flex items-center gap-2 text-green-700">
                            <ShieldCheck size={16} />
                            <span className="text-sm font-semibold">Factory direct • export quality</span>
                          </div>
                          <p className="mt-2 text-sm text-gray-600">
                            Ready for wholesale orders, private-label projects, and international sourcing support.
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Link
                            href={`/products/${product.slug}`}
                            className="inline-flex items-center gap-2 rounded-lg bg-[#0B4EA2] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#083879]"
                            onClick={(event) => event.stopPropagation()}
                          >
                            View Details
                            <ArrowRight size={15} />
                          </Link>
                          <Link
                            href="/quote"
                            className="inline-flex items-center rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold text-[#071F3D] transition hover:border-[#0B4EA2] hover:text-[#0B4EA2]"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Request Quote
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}