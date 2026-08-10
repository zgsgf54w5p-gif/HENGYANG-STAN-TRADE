"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus(data.error || "Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#f8fbff_0%,_#f2f6fb_45%,_#eef3f9_100%)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-[0_20px_80px_rgba(7,31,61,0.08)] backdrop-blur sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[1.8rem] bg-[linear-gradient(135deg,_#0F172A_0%,_#2563EB_100%)] p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">Contact us</p>
              <h1 className="mt-4 text-3xl font-black sm:text-4xl">Let&apos;s talk sourcing, pricing, and growth.</h1>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                We would love to hear from you about product inquiries, quotations, OEM support, or new partnership opportunities.
              </p>
              <div className="mt-8 space-y-4 text-sm sm:text-base">
                <p>📍 Hengyang, Hunan, China</p>
                <p>📧 kitchenware@foxmail.com</p>
                <p>📱 +86 191 6460 1883</p>
                <p>🌐 Worldwide export support</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none ring-0 focus:border-[#2563EB]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none focus:border-[#2563EB]"
                />
              </div>
              <input
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none focus:border-[#2563EB]"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none focus:border-[#2563EB]"
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-2xl bg-[#2563EB] px-5 py-3.5 text-lg font-semibold text-white transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className={`text-sm font-medium ${status.includes("successfully") ? "text-emerald-600" : "text-rose-600"}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
