"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
  const keyword = search.toLowerCase();

  return (
    (product.name ?? "").toLowerCase().includes(keyword) ||
    (product.category ?? "").toLowerCase().includes(keyword) ||
    (product.description ?? "").toLowerCase().includes(keyword)
  );
});

  return (
    <main
      style={{
        background: "#F5F8FC",
        minHeight: "100vh",
      }}
    >
      {/* Hero */}
      <section
        style={{
          background:
            "linear-gradient(135deg,#071F3D 0%,#0B4EA2 55%,#1E88E5 100%)",
          color: "white",
          padding: "100px 8% 80px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Our Products
        </h1>

        <p
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            fontSize: "20px",
            lineHeight: 1.8,
            color: "#DCEEFF",
          }}
        >
          Premium kitchen appliances manufactured for wholesalers,
          distributors and importers worldwide.
        </p >

        {/* Premium Search Bar */}

        <div
          style={{
            maxWidth: "650px",
            margin: "50px auto 0",
            position: "relative",
          }}
        >
          <Search
            size={22}
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#999",
            }}
          />

          <input
            type="text"
            placeholder="Search products, categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "18px 20px 18px 58px",
              borderRadius: "16px",
              border: "none",
              outline: "none",
              fontSize: "17px",
              boxShadow: "0 12px 35px rgba(0,0,0,.15)",
              color: "#071F3D",
            }}
          />
        </div>

        <p
          style={{
            marginTop: "18px",
            color: "#DCEEFF",
            fontSize: "16px",
          }}
        >
          Showing{" "}
          <strong style={{ color: "#FFD700" }}>
            {filteredProducts.length}
          </strong>{" "}
          products
        </p >
      </section>      {/* Products */}
      <section
        style={{
          padding: "80px 8%",
        }}
      >
        {filteredProducts.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "80px 20px",
            }}
          >
            <h2
              style={{
                color: "#071F3D",
                fontSize: "34px",
                marginBottom: "15px",
              }}
            >
              No products found
            </h2>

            <p
              style={{
                color: "#666",
                fontSize: "18px",
              }}
            >
              Try searching with another keyword.
            </p >
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "35px",
            }}
          >
            {filteredProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "22px",
                    overflow: "hidden",
                    boxShadow: "0 15px 40px rgba(0,0,0,.08)",
                    transition: "all .3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 25px 60px rgba(0,0,0,.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 40px rgba(0,0,0,.08)";
                  }}
                >
                  <div
                    style={{
                      background: "#EEF6FF",
                      padding: "25px",
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={500}
                      style={{
                        width: "100%",
                        height: "240px",
                        objectFit: "contain",
                      }}
                    />
                  </div>                  <div
                    style={{
                      padding: "25px",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        background: "#0B4EA2",
                        color: "#fff",
                        padding: "6px 14px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: "bold",
                        marginBottom: "16px",
                      }}
                    >
                      {product.badge}
                    </div>

                    <h2
                      style={{
                        color: "#071F3D",
                        fontSize: "28px",
                        marginBottom: "14px",
                      }}
                    >
                      {product.name}
                    </h2>

                    <p
                      style={{
                        color: "#666",
                        lineHeight: 1.7,
                        marginBottom: "22px",
                      }}
                    >
                      {product.description}
                    </p >

                    <p
                      style={{
                        color: "#0B4EA2",
                        fontWeight: "bold",
                        marginBottom: "25px",
                      }}
                    >
                      MOQ: {product.moq}
                    </p >

                    <div
                      style={{
                        background:
                          "linear-gradient(135deg,#0B4EA2,#1E88E5)",
                        color: "white",
                        textAlign: "center",
                        padding: "14px",
                        borderRadius: "12px",
                        fontWeight: "bold",
                        transition: "0.3s",
                      }}
                    >
                      View Details →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>      {/* Bottom CTA */}
      <section
        style={{
          padding: "90px 8%",
          background: "#071F3D",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Looking for Bulk Orders?
        </h2>

        <p
          style={{
            maxWidth: "720px",
            margin: "0 auto 40px",
            color: "#DCEEFF",
            fontSize: "18px",
            lineHeight: 1.8,
          }}
        >
          We supply wholesalers, distributors and importers worldwide with
          high-quality kitchen appliances at competitive factory prices.
        </p >

        <Link
          href="/quote"
          style={{
            display: "inline-block",
            background: "#FFD700",
            color: "#071F3D",
            padding: "18px 38px",
            borderRadius: "14px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
            boxShadow: "0 10px 25px rgba(0,0,0,.2)",
          }}
        >
          Request a Quote
        </Link>
      </section>    </main>
  );
}