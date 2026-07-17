"use client";

import { Suspense } from "react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

function QuoteForm() {
  const searchParams = useSearchParams();
  const productName = searchParams.get("product") || "";

  const [form, setForm] = useState({
    product: productName,
    quantity: "",
    company: "",
    contact: "",
    country: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.contact,
          email: form.email,
          phone: form.whatsapp,
          message: `
Product: ${form.product}

Quantity: ${form.quantity}

Company: ${form.company}

Country: ${form.country}

Requirements:
${form.message}
          `,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);

        setForm({
          product: productName,
          quantity: "",
          company: "",
          contact: "",
          country: "",
          email: "",
          whatsapp: "",
          message: "",
        });
      } else {
        alert(result.error || "Failed to send email.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  }

  const inputStyle: React.CSSProperties = {
    padding: "16px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "16px",
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <main
      style={{
        background: "#F5F8FC",
        minHeight: "100vh",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "750px",
          margin: "0 auto",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 15px 35px rgba(0,0,0,.08)",
        }}
      >
        <h1
          style={{
            color: "#071F3D",
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          Request a Quote
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "35px",
          }}
        >
          Complete the form below and our sales team will contact you within 24
          hours.
        </p >

        {submitted && (
          <div
            style={{
              background: "#E8F5E9",
              color: "#2E7D32",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "25px",
              fontWeight: "bold",
            }}
          >
            ✅ Thank you! Your quotation request has been sent.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <input
            name="product"
            placeholder="Product"
            value={form.product}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="quantity"
            placeholder="Quantity Needed"
            value={form.quantity}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="contact"
            placeholder="Contact Person"
            value={form.contact}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="country"
            placeholder="Country"
            value={form.country}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="whatsapp"
            placeholder="WhatsApp Number"
            value={form.whatsapp}
            onChange={handleChange}
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Tell us your requirements..."
            rows={6}
            value={form.message}
            onChange={handleChange}
            style={{
              ...inputStyle,
              resize: "vertical",
            }}
          />

          <button
            type="submit"
            style={{
              background: "#0B4EA2",
              color: "white",
              border: "none",
              padding: "18px",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Send Quote Request
          </button>
        </form>
      </div>
    </main>
  );
}

export default function QuotePage() {
  return (
    <Suspense fallback={<p>Loading...</p >}>
      <QuoteForm />
    </Suspense>
  );
}
