"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function GetQuotePage() {
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
      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            color: "#0B4EA2",
            marginBottom: "20px",
          }}
        >
          Request a Free Quote
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "#555",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          Tell us what products you need and our sales team will reply with the
          best quotation, shipping options and delivery time.
        </p >
      </section>

      {/* Benefits */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "60px",
        }}
      >
        {[
          "🏭 Factory Direct Pricing",
          "🚢 Worldwide Shipping",
          "📦 Flexible MOQ",
          "⚡ Reply Within 24 Hours",
        ].map((item) => (
          <div
            key={item}
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              fontWeight: "bold",
              color: "#0B4EA2",
            }}
          >
            {item}
          </div>
        ))}
      </section>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "16px",
          maxWidth: "900px",
          margin: "0 auto",
          boxShadow: "0 10px 30px rgba(0,0,0,.08)",
        }}
      >
        <h2
          style={{
            color: "#0B4EA2",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Quote Request Form
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
          />

          <input
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            name="whatsapp"
            placeholder="WhatsApp Number"
            value={formData.whatsapp}
            onChange={handleChange}
          />

          <input
            name="product"
            placeholder="Product"
            value={formData.product}
            onChange={handleChange}
          />

          <input
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
          />

          <input
            name="destination"
            placeholder="Shipping Destination"
            value={formData.destination}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="message"
          placeholder="Tell us more about your requirements..."
          rows={6}
          value={formData.message}
          onChange={handleChange}
          style={{
            width: "100%",
            marginTop: "20px",
          }}
        />

        <button
          type="submit"
          style={{
            marginTop: "30px",
            width: "100%",
            padding: "18px",
            background: "#0B4EA2",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Send Quote Request
        </button>
      </form>

      {/* Contact */}
      <section
        style={{
          marginTop: "80px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#0B4EA2",
            marginBottom: "20px",
          }}
        >
          Contact Our Sales Team
        </h2>

        <p>📧 3941783104@qq.com</p >
        <p>📱 +86 135 1015 1112</p >
        <p>📍 Hengyang, Hunan, China</p >
        <p>🕘 Monday – Friday | 09:00 – 18:00 (China Time)</p >
      </section>
    </main>
  );
}