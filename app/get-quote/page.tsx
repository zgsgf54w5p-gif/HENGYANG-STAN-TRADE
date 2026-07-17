"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Thank you! Your quote request has been received. We will contact you within 24 hours."
    );
    console.log(formData);
  };

  return (
    <main
      style={{
        background: "#F5F8FC",
        minHeight: "100vh",
        padding: "80px 8%",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          color: "#0B4EA2",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Request a Free Quote
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />

        <button type="submit">
          Send Quote Request
        </button>
      </form>
    </main>
  );
}

export default function GetQuotePage() {
  return (
    <Suspense fallback={<p>Loading...</p >}>
      <QuoteForm />
    </Suspense>
  );
}