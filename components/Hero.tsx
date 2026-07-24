"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071F3D] text-white">

      <Image
        src="/hero.jpg"
        alt="Products prepared for international export"
        fill
        priority
        className="object-cover object-center opacity-25"
        sizes="100vw"
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#071F3D] via-[#071F3D]/90 to-[#0B4EA2]/60" />

      {/* Decorative Blur */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-125 w-125 rounded-full bg-blue-400/10 blur-3xl"></div>

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

        <div className="max-w-5xl">

          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex rounded-full bg-yellow-400 px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] text-black shadow-xl sm:px-8 sm:text-sm"
          >
            Global Import & Export
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-script mt-8 text-4xl text-yellow-300 sm:text-5xl"
          >
            Trade with intention
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display mt-5 text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl xl:text-8xl"
          >
            Premium Products
            <br />
            From China
            <br />
            To The World
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-10 max-w-3xl text-xl leading-9 text-gray-200"
          >
            Hengyang Stan Trade Development Co., Ltd. specializes in supplying
            premium home appliances, consumer electronics, kitchen equipment and
            commercial products. We provide reliable sourcing, competitive
            pricing and worldwide export solutions to importers, wholesalers and
            distributors.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/products"
              className="rounded-xl bg-yellow-400 px-8 py-4 text-base font-bold text-black shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-2xl sm:px-10 sm:py-5 sm:text-lg"
            >
              Explore Products
            </Link>

            <Link
              href="/quote"
              className="rounded-xl border-2 border-white px-8 py-4 text-base font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0B4EA2] sm:px-10 sm:py-5 sm:text-lg"
            >
              Request Quote
            </Link>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-20 grid grid-cols-2 gap-x-10 gap-y-10 md:grid-cols-4 lg:gap-x-16"
          >
            <div>
              <h3 className="text-5xl font-extrabold text-yellow-400">
                500+
              </h3>
              <p className="mt-4 text-lg text-gray-300">
                Products
              </p >
            </div>

            <div>
              <h3 className="text-5xl font-extrabold text-yellow-400">
                20+
              </h3>
              <p className="mt-4 text-lg text-gray-300">
                Export Markets
              </p >
            </div>

            <div>
              <h3 className="text-5xl font-extrabold text-yellow-400">
                1000+
              </h3>
              <p className="mt-4 text-lg text-gray-300">
                Happy Customers
              </p >
            </div>

            <div>
              <h3 className="text-5xl font-extrabold text-yellow-400">
                24/7
              </h3>
              <p className="mt-4 text-lg text-gray-300">
                Customer Support
              </p >
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}