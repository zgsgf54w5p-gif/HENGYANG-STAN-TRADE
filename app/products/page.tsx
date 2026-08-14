"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, Package, Search, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { products } from "@/data/products";

const DESCRIPTION_LIMIT = 110;

export default function ProductsPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-slate-50" />}> 
      <ProductsContent />
    </Suspense>
  );
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  useEffect(() => {
    setSearch(searchParams.get("search") ?? "");
  }, [searchParams]);

  const filteredProducts = products.filter((product) => {
    const keyword = search.toLowerCase();
    return (
      (product.name ?? "").toLowerCase().includes(keyword) ||
      (product.category ?? "").toLowerCase().includes(keyword) ||
      (product.description ?? "").toLowerCase().includes(keyword)
    );
  });

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#f8fbff_0%,_#f2f6fb_45%,_#eef3f9_100%)] text-slate-900">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,_#0F172A_0%,_#2563EB_55%,_#3B82F6_100%)] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,215,0,0.2)_0%,_transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-100">
              Premium B2B Catalog
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Discover premium equipment for your next import order
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Browse modern kitchen appliances and commercial equipment designed for wholesalers, distributors, and fast-moving retail teams.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/20 bg-white/95 p-3 shadow-2xl shadow-slate-950/20">
            <div className="relative flex items-center rounded-xl bg-slate-50 px-4 py-3">
              <Search size={20} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search products, categories or features..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="ml-3 w-full border-none bg-transparent text-base text-slate-800 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-slate-200">
            Showing <span className="font-semibold text-[#F97316]">{filteredProducts.length}</span> curated products
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {filteredProducts.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white/80 px-8 py-16 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900">No products match your search</h2>
            <p className="mt-3 text-lg text-slate-600">Try another keyword or browse the full catalog.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product, index) => {
              const description = product.description ?? "";
              const isExpanded = expandedSlug === product.slug;
              const isLongDescription = description.length > DESCRIPTION_LIMIT;
              const previewText = isLongDescription
                ? `${description.slice(0, DESCRIPTION_LIMIT).trim()}...`
                : description;

              return (
                <motion.article
                  key={product.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(7,31,61,0.08)]"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedSlug(isExpanded ? null : product.slug)}
                    className="w-full text-left"
                  >
                    <div className="relative flex aspect-square items-center justify-center bg-[linear-gradient(135deg,_#f7fbff_0%,_#eef5ff_100%)] p-5">
                      {product.badge && (
                        <span className="absolute left-4 top-4 rounded-full bg-[#F97316] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900">
                          {product.badge}
                        </span>
                      )}
                      <Image
                        src={Array.isArray(product.images) ? product.images[0] : product.images}
                        alt={product.name}
                        width={420}
                        height={420}
                        className="h-full w-full object-contain transition duration-500 hover:scale-105"
                      />
                    </div>

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#2563EB]">
                            {product.category}
                          </p>
                          <h2 className="mt-2 text-xl font-bold text-slate-900 line-clamp-2">
                            {product.name}
                          </h2>
                        </div>
                        {isLongDescription ? (
                          <div className="mt-1 rounded-full bg-slate-100 p-2 text-slate-500">
                            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </div>
                        ) : null}
                      </div>

                      <p className="mt-3 text-sm leading-7 text-slate-600 line-clamp-3">
                        {isExpanded ? description : previewText}
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#2563EB]">
                        <Sparkles size={15} />
                        <span>{isExpanded ? "Tap to collapse" : "Tap to expand"}</span>
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-slate-100"
                      >
                        <div className="space-y-4 p-5">
                          <div className="grid gap-3 sm:grid-cols-2">
                            {product.moq && (
                              <div className="rounded-2xl bg-slate-50 p-3">
                                <div className="flex items-center gap-2 text-[#2563EB]">
                                  <Package size={15} />
                                  <span className="text-xs font-bold uppercase">MOQ</span>
                                </div>
                                <p className="mt-1 text-sm font-bold text-slate-900">{product.moq}</p>
                              </div>
                            )}

                            {product.voltage && (
                              <div className="rounded-2xl bg-slate-50 p-3">
                                <div className="flex items-center gap-2 text-[#2563EB]">
                                  <Zap size={15} />
                                  <span className="text-xs font-bold uppercase">Voltage</span>
                                </div>
                                <p className="mt-1 text-sm font-bold text-slate-900">{product.voltage}</p>
                              </div>
                            )}

                            {product.capacity && (
                              <div className="rounded-2xl bg-slate-50 p-3 sm:col-span-2">
                                <div className="flex items-center gap-2 text-[#2563EB]">
                                  <ShieldCheck size={15} />
                                  <span className="text-xs font-bold uppercase">Capacity</span>
                                </div>
                                <p className="mt-1 text-sm font-bold text-slate-900">{product.capacity}</p>
                              </div>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <Link
                              href={`/products/${product.slug}`}
                              className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#1D4ED8]"
                              onClick={(event) => event.stopPropagation()}
                            >
                              View Details
                              <ChevronDown size={15} className="rotate-[-90deg]" />
                            </Link>
                            <Link
                              href="/quote"
                              className="inline-flex items-center rounded-xl border border-slate-300 px-7 py-4 text-base font-semibold text-slate-700 transition hover:border-[#2563EB] hover:text-[#2563EB]"
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
        )}
      </section>

      <section className="bg-[#0F172A] px-4 py-20 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-black sm:text-4xl">Looking for bulk orders?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            We supply wholesalers, distributors, and importers worldwide with high-quality kitchen appliances at competitive factory prices.
          </p>
          <Link href="/quote" className="mt-10 inline-flex items-center justify-center rounded-2xl bg-[#F97316] px-10 py-5 text-xl font-bold text-slate-900 transition hover:bg-[#fb923c]">
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}