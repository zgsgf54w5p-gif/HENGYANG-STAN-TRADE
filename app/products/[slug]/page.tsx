import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../../data/products";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetails({ params }: PageProps) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main
      style={{
        padding: "80px 8%",
        background: "#F5F8FC",
        minHeight: "100vh",
      }}
    >
      <p
        style={{
          marginBottom: "30px",
          color: "#666",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#0B4EA2",
            textDecoration: "none",
          }}
        >
          Home
        </Link>{" "}
        / Products / {product.name}
      </p >

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 15px 35px rgba(0,0,0,.1)",
          }}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={700}
            height={700}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        <div>
          <span
            style={{
              background: "#FFD700",
              padding: "8px 18px",
              borderRadius: "30px",
              fontWeight: "bold",
            }}
          >
            {product.badge}
          </span>

          <h1
            style={{
              fontSize: "50px",
              marginTop: "20px",
              color: "#071F3D",
            }}
          >
            {product.name}
          </h1>

          <p
            style={{
              color: "#FFC107",
              fontSize: "22px",
            }}
          >
            ★★★★★ 4.9 (128 Reviews)
          </p >

          <p
            style={{
              marginTop: "20px",
              lineHeight: "1.8",
              color: "#666",
            }}
          >
            {product.description}
          </p >

          <div
            style={{
              marginTop: "35px",
              lineHeight: "2.2",
            }}
          >
            <p>📦 MOQ: {product.moq}</p >
            <p>⚡ Voltage: {product.voltage}</p >
            <p>🥘 Capacity: {product.capacity}</p >
            <p>🔥 Power: {product.power}</p >
            <p>✅ {product.certification}</p >
          </div>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "40px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href={`/quote?product=${encodeURIComponent(product.name)}`}
              style={{
                background: "#0B4EA2",
                color: "white",
                padding: "18px 35px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Request Quote
            </Link>

            <a
             href={`https://wa.me/8616617435017?text=${encodeURIComponent(

    `Hello Hengyang Stan Trade, I am interested in your ${product.name}. Could you please send me more information and a quotation?`

  )}`}

  target="_blank"

  rel="noopener noreferrer"

  style={{

    background: "#25D366",

    color: "white",

    padding: "18px 35px",

    borderRadius: "12px",

    textDecoration: "none",

    fontWeight: "bold",

    display: "flex",

    alignItems: "center",

    gap: "10px",

  }}
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                width={24}
                height={24}
              />
              WhatsApp
            </a >
          </div>
        </div>
      </div>
    </main>
  );
}