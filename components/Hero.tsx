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
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-orange-200">
              Global supplier from China
            </span>

            <h1 className="mt-6 text-4xl font-black leading-[0.95] sm:text-5xl lg:text-6xl">
              Premium products
              <span className="mt-3 block text-[#F97316]">for global importers</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
              Source premium kitchen appliances, consumer electronics and commercial equipment directly from a reliable Chinese supplier.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="inline-flex items-center gap-2 rounded-2xl bg-[#F97316] px-7 py-4 text-base font-bold text-white shadow-[0_14px_45px_rgba(249,115,22,0.35)] transition hover:-translate-y-0.5 hover:bg-orange-600">
                Explore Products
                <ArrowRight size={18} />
              </Link>
              <Link href="/quote" className="rounded-2xl border border-white/40 bg-white/10 px-7 py-4 text-base font-bold text-white transition hover:bg-white/20">
                Request Quote
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <Globe size={20} className="text-[#F97316]" />
                <p className="mt-2 text-sm font-semibold">Worldwide Shipping</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <Truck size={20} className="text-[#F97316]" />
                <p className="mt-2 text-sm font-semibold">Fast Logistics</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <ShieldCheck size={20} className="text-[#F97316]" />
                <p className="mt-2 text-sm font-semibold">Quality Control</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative mx-auto w-full max-w-2xl">
            <div className="rounded-[2rem] border border-white/20 bg-white p-4 shadow-[0_25px_80px_rgba(2,6,23,0.35)]">
              <Image src="/images/airfryer.jpg" alt="Featured product" width={700} height={700} priority className="h-[420px] w-full rounded-[1.5rem] object-contain sm:h-[560px]" />
            </div>
            <div className="absolute -bottom-5 left-5 rounded-2xl bg-[#F97316] px-5 py-3 shadow-xl">
              <p className="text-2xl font-black text-white">500+</p>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-50">Products</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}