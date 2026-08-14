"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

function QuoteForm() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product") || "";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    whatsapp: "",
    product: product,
    quantity: "",
    destination: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your quote request has been received. We will contact you within 24 hours.");
    console.log(formData);
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#f8fbff_0%,#f2f6fb_45%,#eef3f9_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl rounded-4xl border border-slate-200 bg-white/90 p-8 shadow-[0_20px_80px_rgba(7,31,61,0.08)] backdrop-blur sm:p-10 lg:p-14">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2563EB]">Request a free quote</p>
          <h1 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">Tell us what you need and we will prepare a tailored sourcing proposal.</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">Share your product interest, quantity, destination, and timeline so our team can respond quickly with the best options.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-4 md:grid-cols-2">
          <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none focus:border-[#2563EB]" />
          <input name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none focus:border-[#2563EB]" />
          <input name="country" placeholder="Country" value={formData.country} onChange={handleChange} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none focus:border-[#2563EB]" />
          <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none focus:border-[#2563EB]" />
          <input name="whatsapp" placeholder="WhatsApp" value={formData.whatsapp} onChange={handleChange} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none focus:border-[#2563EB]" />
          <input name="product" placeholder="Product" value={formData.product} onChange={handleChange} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none focus:border-[#2563EB]" />
          <input name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none focus:border-[#2563EB]" />
          <input name="destination" placeholder="Destination Port" value={formData.destination} onChange={handleChange} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none focus:border-[#2563EB]" />
          <textarea name="message" rows={5} placeholder="Tell us more about your project" value={formData.message} onChange={handleChange} className="md:col-span-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none focus:border-[#2563EB]" />
          <button type="submit" className="md:col-span-2 rounded-2xl bg-[#2563EB] px-8 py-5 text-xl font-semibold text-white transition hover:bg-[#1D4ED8]">
            Send Quote Request
          </button>
        </form>
      </div>
    </main>
  );
}

export default function GetQuotePage() {
  return (
    <Suspense fallback={<p className="p-8 text-center text-slate-600">Loading...</p>}>
      <QuoteForm />
    </Suspense>
  );
}