"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Package,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { products } from "../data/products";

export default function ProductGrid() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const toggleExpanded = (slug: string) => {
    setExpandedSlug((current) =>
      current === slug ? null : slug
    );
  };

  return (
    <section className="bg-gray-100 py-20">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">


        <div className="mb-12">

          <span className="inline-flex items-center bg-orange-100 px-5 py-3 text-sm font-bold uppercase tracking-wider text-[#2563EB]">
            Featured Products
          </span>


          <div className="mt-6 flex items-center justify-between">

            <div>

              <h2 className="text-4xl font-bold leading-tight text-[#0F172A]">
                Explore Our Products
              </h2>


              <p className="mt-4 max-w-2xl leading-8 text-gray-600">
                Premium kitchen appliances and commercial equipment supplied worldwide for wholesalers, distributors and importers.
              </p >

            </div>


            <Link
              href="/products"
              className="hidden font-semibold text-[#2563EB] transition hover:text-orange-600 md:block"
            >
              View All →
            </Link>


          </div>

        </div>





        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">


          {products.map((product, index) => {

            const isExpanded = expandedSlug === product.slug;


            return (

              <motion.article

                key={product.slug}

                initial={{ opacity: 0, y: 20 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                transition={{
                  duration: 0.35,
                  delay: index * 0.04
                }}

                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"

              >


                <button

                  type="button"

                  onClick={() => toggleExpanded(product.slug)}

                  className="group w-full text-left"

                >


                  <div className="relative flex aspect-square items-center justify-center bg-linear-to-br from-white to-slate-50 p-5">


                    {product.badge && (

                        <span className="absolute left-4 top-4 z-10 inline-flex items-center rounded-full bg-gradient-to-r from-[#FFD700] to-[#F59E0B] px-5 py-2.5 text-xs font-black uppercase tracking-[0.18em] text-[#0F172A] shadow-lg ring-1 ring-white/30">

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





                  <div className="p-6">


                    <div className="flex items-start justify-between gap-4">


                      <div>


                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] leading-relaxed text-[#2563EB]">

                          Kitchen & Commercial Equipment

                        </p >


                        <h3 className="mt-3 text-base font-bold leading-snug text-[#0F172A] line-clamp-2">

                          {product.name}

                        </h3>


                      </div>


                      <ChevronDown

                        size={18}

                        className={`mt-1 shrink-0 text-gray-500 transition ${
                          isExpanded ? "rotate-180" : ""
                        }`}

                      />


                    </div>



                    <p className="mt-4 line-clamp-2 text-sm leading-7 text-gray-600">

                      {product.description}

                    </p >



                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#2563EB]">

                      <Sparkles size={15} />

                      <span>
                        Tap to expand
                      </span>

                    </div>


                  </div>


                </button>                <AnimatePresence initial={false}>

                  {isExpanded && (

                    <motion.div

                      initial={{ height: 0, opacity: 0 }}

                      animate={{ height: "auto", opacity: 1 }}

                      exit={{ height: 0, opacity: 0 }}

                      className="overflow-hidden border-t border-gray-100"

                    >


                      <div className="space-y-5 p-6">



                        <div className="grid gap-4 sm:grid-cols-2">



                          {product.moq && (

                            <div className="rounded-xl bg-gray-50 p-4">


                              <div className="flex items-center gap-2 text-[#2563EB]">

                                <Package size={15} />

                                <span className="text-xs font-bold">
                                  MOQ
                                </span>

                              </div>


                              <p className="mt-2 text-sm font-bold text-[#0F172A]">
                                {product.moq}
                              </p >


                            </div>

                          )}






                          {product.voltage && (

                            <div className="rounded-xl bg-gray-50 p-4">


                              <div className="flex items-center gap-2 text-[#2563EB]">

                                <Zap size={15} />

                                <span className="text-xs font-bold">
                                  Voltage
                                </span>

                              </div>



                              <p className="mt-2 text-sm font-bold text-[#0F172A]">
                                {product.voltage}
                              </p >


                            </div>

                          )}







                          {product.capacity && (

                            <div className="rounded-xl bg-gray-50 p-4 sm:col-span-2">


                              <div className="flex items-center gap-2 text-[#2563EB]">

                                <ShieldCheck size={15} />

                                <span className="text-xs font-bold">
                                  Capacity
                                </span>

                              </div>



                              <p className="mt-2 text-sm font-bold text-[#0F172A]">

                                {product.capacity}

                              </p >


                            </div>

                          )}



                        </div>







                        <div className="rounded-3xl bg-slate-50 p-5">


                          <div className="flex items-center gap-2 text-green-700">

                            <ShieldCheck size={16} />

                            <span className="text-sm font-semibold">
                              Factory direct • export quality
                            </span>

                          </div>



                          <p className="mt-3 text-sm leading-7 text-gray-600">
                            Ready for wholesale orders, private-label projects, and international sourcing support.
                          </p >


                        </div>







                        <div className="flex flex-wrap gap-3">


                          <Link

                            href={`/products/${product.slug}`}

                            className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-semibold leading-none text-white transition hover:bg-[#1D4ED8]"

                            onClick={(event) => event.stopPropagation()}

                          >

                            View Details

                            <ArrowRight size={15} />

                          </Link>






                          <Link

                            href="/quote"

                            className="inline-flex items-center rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold leading-none text-[#0F172A] transition hover:border-[#2563EB] hover:text-[#2563EB]"

                            onClick={(event) => event.stopPropagation()}

                          >

                            Request Quote

                          </Link>



                        </div>



                      </div>



                    </motion.div>

                  )}

                </AnimatePresence>



              </motion.article>


            );


          })}



        </div>


      </div>


    </section>
  );
}