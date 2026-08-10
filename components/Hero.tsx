"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, Truck, ShieldCheck } from "lucide-react";

export default function Hero() {

  return (

    <section className="relative overflow-hidden bg-[#071F3D]">


      {/* Background */}

      <div className="absolute inset-0">

        <Image
          src="/images/ban.jpg"
          alt="Kitchen appliances supplier"
          fill
          priority
          className="object-cover opacity-40"
        />

      </div>



      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">


        <div className="grid items-center gap-12 lg:grid-cols-2">


          {/* Left Content */}

          <div className="text-white">


            <span className="inline-flex rounded-full bg-yellow-400 px-5 py-2 text-sm font-bold text-black">

              GLOBAL APPLIANCE SUPPLIER

            </span>



            <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-6xl">

              Quality Kitchen Appliances

              <span className="block text-yellow-400">

                For Global Importers

              </span>

            </h1>




            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-200">

              Hengyang Stan Trade Development Co.,Ltd provides
              reliable home appliances and commercial equipment
              with worldwide shipping solutions.

            </p >




            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-4">


              <Link
                href="/products"
                className="flex items-center gap-2 rounded-lg bg-yellow-400 px-7 py-4 font-bold text-black transition hover:bg-yellow-300"
              >

                Explore Products

                <ArrowRight size={20}/>

              </Link>



              <Link
                href="/quote"
                className="rounded-lg border border-white px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#071F3D]"
              >

                Request Quote

              </Link>


            </div>


          </div>






          {/* Right Product Showcase */}

          <div className="relative">


            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">


              <Image

                src="/images/airfryer.jpg"

                alt="Featured appliance"

                width={600}

                height={600}

                className="rounded-2xl object-contain"

              />


            </div>


          </div>


        </div>






        {/* Trust bar */}

        <div className="mt-16 grid gap-5 rounded-2xl bg-white p-6 text-[#071F3D] sm:grid-cols-3">


          <div className="flex items-center gap-3">

            <Globe2 className="text-[#0B4EA2]" />

            <div>

              <p className="font-bold">
                Worldwide Shipping
              </p >

              <p className="text-sm text-gray-600">
                Export to global markets
              </p >

            </div>

          </div>





          <div className="flex items-center gap-3">

            <Truck className="text-[#0B4EA2]" />

            <div>

              <p className="font-bold">
                Fast Logistics
              </p >

              <p className="text-sm text-gray-600">
                Reliable delivery solutions
              </p >

            </div>

          </div>





          <div className="flex items-center gap-3">

            <ShieldCheck className="text-[#0B4EA2]" />

            <div>

              <p className="font-bold">
                Export Quality
              </p >

              <p className="text-sm text-gray-600">
                Professional manufacturing
              </p >

            </div>

          </div>



        </div>



      </div>


    </section>

  );
}