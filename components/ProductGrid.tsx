"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "../data/products";

export default function ProductGrid() {
  return (
    <section
      style={{
        padding: "100px 8%",
        background: "#F5F8FC",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <p
          style={{
            color: "#0B4EA2",
            fontWeight: "bold",
            letterSpacing: "2px",
            fontSize: "15px",
          }}
        >
          OUR PRODUCTS
        </p >

        <h2
          style={{
            fontSize: "42px",
            color: "#071F3D",
            marginTop: "10px",
            marginBottom: "15px",
          }}
        >
          Featured Products
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "#666",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          High-quality appliances carefully selected for importers,
          wholesalers and distributors worldwide.
        </p >
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "35px",
        }}
      >
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.35 }}
              style={{
                position: "relative",
                background: "#fff",
                borderRadius: "22px",
                overflow: "hidden",
                boxShadow: "0 15px 35px rgba(0,0,0,.10)",
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "15px",
                  left: "15px",
                  background: "#FFD700",
                  color: "#071F3D",
                  padding: "8px 14px",
                  borderRadius: "30px",
                  fontWeight: "bold",
                  fontSize: "13px",
                  zIndex: 2,
                }}
              >
                {product.badge}
              </div>

              <motion.div whileHover={{ scale: 1.08 }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={350}
                  style={{
                    width: "100%",
                    height: "260px",
                    objectFit: "cover",
                  }}
                />
              </motion.div>

              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    fontSize: "24px",
                    color: "#071F3D",
                    marginBottom: "10px",
                  }}
                >
                  {product.name}
                </h3>

                <p
                  style={{
                    color: "#666",
                    lineHeight: "1.7",
                    minHeight: "55px",
                  }}
                >
                  {product.description}
                </p >

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "18px",
                  }}
                >
                  <span
                    style={{
                      color: "#FFC107",
                      fontSize: "20px",
                    }}
                  >
                    ★★★★★
                  </span>

                  <span
                    style={{
                      color: "#0B4EA2",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    MOQ: {product.moq}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    marginTop: "22px",
                    width: "100%",
                    padding: "15px",
                    background:
                      "linear-gradient(135deg,#0B4EA2,#1565C0)",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    fontWeight: "bold",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  View Details →
                </motion.button>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}