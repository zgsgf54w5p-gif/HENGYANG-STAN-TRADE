"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Truck, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">


      {/* BLURRED PRODUCT IMAGE BACKGROUND */}

      <div className="absolute inset-0">

        <Image
          src="/images/company-banner.jpg"
          alt="Products background"
          fill
          priority
          className="scale-110 object-cover blur-md opacity-30"
        />

      </div>





      {/* BLUE GRADIENT FROM DARK LEFT TO LIGHT RIGHT */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#071F3D]/95 via-[#1D4ED8]/65 to-[#60A5FA]/25" />





      {/* SOFT LIGHT ON RIGHT SIDE */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgba(255,255,255,0.18),transparent_35%)]" />







      <div className="relative flex min-h-[92vh] w-full items-center px-6 py-16 lg:px-12">


        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">






          <motion.div

            initial={{ opacity:0, x:-40 }}

            animate={{ opacity:1, x:0 }}

            transition={{ duration:0.6 }}

            className="max-w-2xl"

          >






            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.3em] leading-relaxed text-orange-200 backdrop-blur">

              Global supplier from China

            </span>







            <h1 className="mt-7 text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">


              Premium products


              <span className="mt-4 block leading-tight text-[#F97316]">

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

                Explore Products

                <ArrowRight size={19}/>

              </Link>







              <Link

                href="/quote"

                className="rounded-2xl border border-white/40 bg-white/10 px-8 py-5 text-base font-bold leading-none text-white backdrop-blur transition hover:bg-white/20"

              >

                Request Quote

              </Link>


            </div>            <div className="mt-10 grid gap-4 sm:grid-cols-3">



              <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">

                <Globe
                  size={22}
                  className="text-[#F97316]"
                />

                <p className="mt-3 text-sm font-semibold leading-relaxed">

                  Worldwide Shipping

                </p >

              </div>






              <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">

                <Truck
                  size={22}
                  className="text-[#F97316]"
                />

                <p className="mt-3 text-sm font-semibold leading-relaxed">

                  Fast Logistics

                </p >

              </div>






              <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">

                <ShieldCheck
                  size={22}
                  className="text-[#F97316]"
                />

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







            <div className="rounded-[2.5rem] border border-white/30 bg-white/90 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur">



              <Image

                src="/images/comboproduits.jpg"

                alt="Featured product"

                width={800}

                height={1000}

                priority

                className="h-[420px] w-full rounded-[2rem] object-contain sm:h-[560px]"

              />



            </div>








            <div className="absolute -bottom-6 left-6 rounded-3xl bg-[#F97316] px-7 py-5 shadow-xl">


              <p className="text-4xl font-black leading-none text-white">

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