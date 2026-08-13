"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Truck, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,_#0F172A_0%,_#1D4ED8_45%,_#2563EB_100%)] text-white">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.2)_0%,_transparent_35%)]" />


      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">


        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">



          <motion.div
            initial={{ opacity:0, x:-40 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.6 }}
            className="max-w-2xl"
          >



            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.3em] text-orange-200 leading-relaxed">

              Global supplier from China

            </span>





            <h1 className="mt-7 text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">

              Premium products

              <span className="mt-4 block text-[#F97316] leading-tight">

                for global importers

              </span>

            </h1>





            <p className="mt-7 max-w-xl text-lg leading-9 text-slate-200 sm:text-xl">

              Source premium kitchen appliances, consumer electronics and commercial equipment directly from a reliable Chinese supplier.

            </p >






            <div className="mt-10 flex flex-wrap gap-4">


              <Link

              href="/products"

              className="inline-flex items-center gap-3 rounded-2xl bg-[#F97316] px-8 py-5 text-base font-bold leading-none text-white shadow-[0_14px_45px_rgba(249,115,22,0.35)] transition hover:-translate-y-0.5 hover:bg-orange-600"

              >

                <span>
                  Explore Products
                </span>

                <ArrowRight size={19}/>

              </Link>





              <Link

              href="/quote"

              className="rounded-2xl border border-white/40 bg-white/10 px-8 py-5 text-base font-bold leading-none text-white transition hover:bg-white/20"

              >

                Request Quote

              </Link>


            </div>







            <div className="mt-10 grid gap-4 sm:grid-cols-3">



              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">

                <Globe size={22} className="text-[#F97316]" />

                <p className="mt-3 text-sm font-semibold leading-relaxed">

                  Worldwide Shipping

                </p >

              </div>





              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">

                <Truck size={22} className="text-[#F97316]" />

                <p className="mt-3 text-sm font-semibold leading-relaxed">

                  Fast Logistics

                </p >

              </div>





              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">

                <ShieldCheck size={22} className="text-[#F97316]" />

                <p className="mt-3 text-sm font-semibold leading-relaxed">

                  Quality Control

                </p >

              </div>



            </div>





          </motion.div>









          <motion.div

          initial={{opacity:0, scale:0.95}}

          animate={{opacity:1, scale:1}}

          transition={{duration:0.6}}

          className="relative mx-auto w-full max-w-2xl"

          >




            <div className="rounded-[2.5rem] border border-white/20 bg-white p-6 shadow-[0_25px_80px_rgba(2,6,23,0.35)]">


              <Image

              src="/images/airfryer.jpg"

              alt="Featured product"

              width={700}

              height={700}

              priority

              className="h-[420px] w-full rounded-[2rem] object-contain sm:h-[560px]"

              />


            </div>






            <div className="absolute -bottom-6 left-6 rounded-3xl bg-[#F97316] px-7 py-5 shadow-xl">


              <p className="text-3xl font-black leading-none text-white">

                500+

              </p >


              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] leading-relaxed text-orange-50">

                Products

              </p >


            </div>



          </motion.div>






        </div>

      </div>


    </section>
  );
}