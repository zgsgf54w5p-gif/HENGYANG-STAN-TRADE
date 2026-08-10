"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Package, Zap, ShieldCheck } from "lucide-react";
import { products } from "../data/products";

export default function ProductGrid() {
  return (
    <section className="bg-gray-100 py-20">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">


        {/* Heading */}

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
                Premium kitchen appliances and commercial equipment
                supplied worldwide for wholesalers, distributors and importers.
              </p >

            </div>


            <Link
              href="/products"
              className="hidden font-semibold text-[#0B4EA2] hover:text-yellow-500 md:block"
            >
              View All →
            </Link>

          </div>

        </div>




        {/* Product Grid */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


          {products.map((product, index) => (

            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group"
            >


              <motion.article

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once:true,
                }}

                transition={{
                  duration:0.4,
                  delay:index * 0.05,
                }}

                className="relative flex h-[620px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >



                {/* Badge */}

                {product.badge && (

                  <div className="absolute left-4 top-4 z-10 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-[#071F3D]">

                    {product.badge}

                  </div>

                )}



                {/* Product Image */}

                <div className="flex h-[260px] items-center justify-center bg-white p-5">


                  <Image

                    src={product.images[0]}

                    alt={product.name}

                    width={400}

                    height={400}

                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"

                  />


                </div>




                {/* Information */}

                <div className="flex flex-1 flex-col p-5">


                  <p className="text-xs font-bold uppercase tracking-wider text-[#0B4EA2]">

                    Kitchen & Commercial Equipment

                  </p >




                  <h3 className="mt-2 line-clamp-2 text-xl font-bold text-[#071F3D]">

                    {product.name}

                  </h3>




                  {/* Rating */}

                  <div className="mt-2 flex items-center gap-2">

                    <span className="text-yellow-500">
                      ★★★★★
                    </span>

                    <span className="text-xs text-gray-500">
                      Trusted Supplier
                    </span>

                  </div>




                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">

                    {product.description}

                  </p >




                  {/* Specs */}

                  <div className="mt-4 grid grid-cols-2 gap-3">


                    {product.moq && (

                      <div className="rounded-lg bg-gray-50 p-3">

                        <div className="flex items-center gap-2 text-[#0B4EA2]">

                          <Package size={15}/>

                          <span className="text-xs font-bold">
                            MOQ
                          </span>

                        </div>


                        <p className="mt-1 text-sm font-bold text-[#071F3D]">

                          {product.moq}

                        </p >

                      </div>

                    )}





                    {product.voltage && (

                      <div className="rounded-lg bg-gray-50 p-3">

                        <div className="flex items-center gap-2 text-[#0B4EA2]">

                          <Zap size={15}/>

                          <span className="text-xs font-bold">
                            Voltage
                          </span>

                        </div>


                        <p className="mt-1 text-sm font-bold text-[#071F3D]">

                          {product.voltage}

                        </p >


                      </div>

                    )}


                  </div>





                  {/* Trust */}

                  <div className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 p-3">

                    <ShieldCheck
                      size={17}
                      className="text-green-600"
                    />

                    <span className="text-xs font-semibold text-gray-700">

                      Factory Direct • Export Quality

                    </span>


                  </div>





                  {/* Button */}

                  <div className="mt-auto pt-5">


                    <div className="flex items-center justify-center gap-2 rounded-lg bg-[#0B4EA2] py-3 font-bold text-white transition group-hover:bg-[#083879]">


                      Request Quote


                      <ArrowRight
                        size={18}
                        className="transition group-hover:translate-x-1"
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