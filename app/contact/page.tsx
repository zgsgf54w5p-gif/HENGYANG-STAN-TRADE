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
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <main
      style={{
        padding: "80px 10%",
        background: "#F8FAFC",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "48px",
          color: "#0B4EA2",
          marginBottom: "20px",
        }}
      >
        Contact Us
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#555",
          maxWidth: "700px",
          margin: "0 auto 60px",
          lineHeight: "1.8",
        }}
      >
        We'd love to hear from you. Contact Hengyang Stan Trade for product
        inquiries, quotations, OEM services, or partnership opportunities.
      </p >

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
        }}
      >
        <div>
          <h2>Our Information</h2>
          <p>📍 Hengyang, Hunan, China</p >
          <p>📧 info@hengyangstantrade.com</p >
          <p>📱 WhatsApp: +86 XXX XXX XXXX</p >
          <p>🌐 Worldwide Export</p >
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            style={{ padding: "15px", fontSize: "16px" }}
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            style={{ padding: "15px", fontSize: "16px" }}
          />

          <input
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            style={{ padding: "15px", fontSize: "16px" }}
          />

          <textarea
            placeholder="Your Message"
            rows={6}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            style={{ padding: "15px", fontSize: "16px" }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              background: "#0B4EA2",
              color: "white",
              padding: "15px",
              border: "none",
              borderRadius: "8px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p style={{ color: status.includes("successfully") ? "green" : "red" }}>
              {status}
            </p >
          )}
        </form>
      </div>
    </main>
  );
}
