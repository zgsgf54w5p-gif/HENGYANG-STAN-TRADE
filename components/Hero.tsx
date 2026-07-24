"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#071F3D] via-[#0B4EA2] to-[#1E88E5] text-white">

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20" />

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
            className="inline-flex rounded-full bg-yellow-400 px-8 py-3 text-sm font-bold uppercase tracking-[0.4em] text-black shadow-xl"
          >
            Global Import & Export
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-10 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl xl:text-8xl"
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
              className="rounded-xl bg-yellow-400 px-12 py-5 text-lg font-bold text-black shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-2xl"
            >
              Explore Products
            </Link>

            <Link
              href="/quote"
              className="rounded-xl border-2 border-white px-12 py-5 text-lg font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0B4EA2]"
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