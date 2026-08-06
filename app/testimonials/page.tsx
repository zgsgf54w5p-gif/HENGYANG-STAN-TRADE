"use client";

import { useEffect, useState, type FormEvent } from "react";

type TestimonialEntry = {
  id: number;
  name: string;
  location: string;
  message: string;
  type: "Impression" | "Question";
};

const initialTestimonials: TestimonialEntry[] = [
  {
    id: 1,
    name: "Jean M.",
    location: "Cameroon",
    message:
      "Hengyang Stan Trade exceeded our expectations. Excellent quality, professional communication and fast shipping.",
    type: "Impression",
  },
  {
    id: 2,
    name: "Samuel K.",
    location: "Kenya",
    message:
      "Very reliable supplier with competitive prices. We will definitely continue working together.",
    type: "Impression",
  },
  {
    id: 3,
    name: "Patrick N.",
    location: "Ghana",
    message:
      "Outstanding customer service and excellent product quality. Everything arrived exactly as ordered.",
    type: "Impression",
  },
];

export default function TestimonialsPage() {
  const [entries, setEntries] = useState<TestimonialEntry[]>(initialTestimonials);
  const [form, setForm] = useState({
    name: "",
    location: "",
    message: "",
    type: "Impression" as "Impression" | "Question",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("testimonial-comments");
      if (saved) {
        const parsed = JSON.parse(saved) as TestimonialEntry[];
        if (parsed.length > 0) {
          setEntries([...initialTestimonials, ...parsed]);
        }
      }
    } catch {
      // Ignore invalid stored data.
    }
  }, []);

  useEffect(() => {
    const customEntries = entries.filter(
      (entry) => !initialTestimonials.some((initial) => initial.id === entry.id)
    );

    window.localStorage.setItem("testimonial-comments", JSON.stringify(customEntries));
  }, [entries]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.message.trim()) {
      setStatus("Please add your name and a comment or question.");
      return;
    }

    const newEntry: TestimonialEntry = {
      id: Date.now(),
      name: form.name.trim(),
      location: form.location.trim() || "New client",
      message: form.message.trim(),
      type: form.type,
    };

    setEntries((prev) => [newEntry, ...prev]);
    setForm({ name: "", location: "", message: "", type: "Impression" });
    setStatus("Thanks! Your comment has been added to the testimonials section.");
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-blue-700 to-blue-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">Customer Testimonials</h1>

        <p className="text-slate-100 text-lg leading-8 mt-6 text-center max-w-3xl mx-auto">
          Trusted by importers and distributors around the world. Share your impression or ask a question about a product and it will appear here.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="rounded-xl border border-white/20 bg-slate-950/30 px-4 py-3 text-white outline-none placeholder:text-slate-300"
              placeholder="Your name"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
            />
            <input
              className="rounded-xl border border-white/20 bg-slate-950/30 px-4 py-3 text-white outline-none placeholder:text-slate-300"
              placeholder="Country or city"
              value={form.location}
              onChange={(event) => setForm({ ...form, location: event.target.value })}
            />
            <select
              className="rounded-xl border border-white/20 bg-slate-950/30 px-4 py-3 text-white outline-none md:col-span-2"
              value={form.type}
              onChange={(event) =>
                setForm({ ...form, type: event.target.value as "Impression" | "Question" })
              }
            >
              <option value="Impression">Impression</option>
              <option value="Question">Question</option>
            </select>
            <textarea
              className="rounded-xl border border-white/20 bg-slate-950/30 px-4 py-3 text-white outline-none placeholder:text-slate-300 md:col-span-2"
              placeholder="Share your impression or ask a question about a product"
              rows={4}
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
            />
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-slate-900 transition hover:bg-yellow-300"
            >
              Submit comment
            </button>
            {status ? <p className="text-sm text-slate-100">{status}</p> : null}
          </div>
        </form>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {entries.map((entry) => (
            <div key={entry.id} className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-xl">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-yellow-400 text-2xl">★★★★★</div>
                <span className="rounded-full bg-slate-900/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-100">
                  {entry.type}
                </span>
              </div>
              <p className="text-slate-100 leading-7">{entry.message}</p>
              <h3 className="mt-5 font-bold text-yellow-300">
                {entry.name} – {entry.location}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}