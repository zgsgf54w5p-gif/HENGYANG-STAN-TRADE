"use client";

import { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

const DESCRIPTION_LIMIT = 130;

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

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
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
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
            fontWeight: 800,
            marginBottom: "20px",
            letterSpacing: "-0.04em",
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
        </p>

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
              color: "#7C8DAA",
              pointerEvents: "none",
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
              border: "1px solid rgba(255,255,255,0.2)",
              outline: "none",
              fontSize: "17px",
              boxShadow: "0 12px 35px rgba(0,0,0,.15)",
              color: "#071F3D",
              background: "#fff",
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
          <strong style={{ color: "#FFD700" }}>{filteredProducts.length}</strong>{" "}
          products
        </p>
      </section>

      <section style={{ padding: "80px 8%" }}>
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 20px" }}>
            <h2
              style={{
                color: "#071F3D",
                fontSize: "34px",
                marginBottom: "15px",
                fontWeight: 800,
              }}
            >
              No products found
            </h2>

            <p style={{ color: "#666", fontSize: "18px" }}>
              Try searching with another keyword.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
              alignItems: "stretch",
            }}
          >
            {filteredProducts.map((product) => {
              const description = product.description ?? "";
              const isExpanded = expandedSlug === product.slug;
              const isLongDescription = description.length > DESCRIPTION_LIMIT;
              const previewText = isLongDescription
                ? `${description.slice(0, DESCRIPTION_LIMIT).trim()}...`
                : description;

              return (
                <article
                  key={product.slug}
                  style={{
                    background: "#fff",
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 16px 44px rgba(0,0,0,.08)",
                    border: "1px solid rgba(11, 78, 162, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all .25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 24px 60px rgba(0,0,0,.14)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 16px 44px rgba(0,0,0,.08)";
                  }}
                >
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, #ECF4FF 0%, #F8FBFF 100%)",
                      padding: "26px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: "260px",
                    }}
                  >
                    <Image
                      src={
                        Array.isArray(product.images)
                          ? product.images[0]
                          : product.images
                      }
                      alt={product.name}
                      width={500}
                      height={500}
                      style={{
                        width: "100%",
                        height: "240px",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      padding: "24px 24px 20px",
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
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
                        fontWeight: 700,
                        marginBottom: "16px",
                        alignSelf: "flex-start",
                      }}
                    >
                      {product.badge}
                    </div>

                    <h2
                      style={{
                        color: "#071F3D",
                        fontSize: "26px",
                        marginBottom: "14px",
                        fontWeight: 800,
                        lineHeight: 1.25,
                      }}
                    >
                      {product.name}
                    </h2>

                    <div
                      style={{
                        minHeight: "100px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        flex: 1,
                      }}
                    >
                      <p
                        style={{
                          color: "#666",
                          lineHeight: 1.7,
                          margin: 0,
                          fontSize: "15px",
                        }}
                      >
                        {isExpanded ? description : previewText}
                      </p>

                      {isLongDescription && (
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedSlug(isExpanded ? null : product.slug)
                          }
                          style={{
                            border: "none",
                            background: "transparent",
                            color: "#0B4EA2",
                            fontWeight: 700,
                            textAlign: "left",
                            padding: 0,
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            width: "fit-content",
                          }}
                        >
                          {isExpanded ? (
                            <>
                              Show less <ChevronUp size={16} />
                            </>
                          ) : (
                            <>
                              Read more <ChevronDown size={16} />
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    <p
                      style={{
                        color: "#0B4EA2",
                        fontWeight: 700,
                        margin: "22px 0 18px",
                      }}
                    >
                      MOQ: {product.moq}
                    </p>

                    <Link
                      href={`/products/${product.slug}`}
                      style={{
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background:
                          "linear-gradient(135deg,#0B4EA2,#1E88E5)",
                        color: "white",
                        textAlign: "center",
                        padding: "14px 18px",
                        borderRadius: "12px",
                        fontWeight: 700,
                        textDecoration: "none",
                        transition: "0.25s ease",
                        boxShadow: "0 10px 22px rgba(11,78,162,.22)",
                      }}
                    >
                      View Details →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

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
            fontWeight: 800,
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
        </p>

        <Link
          href="/quote"
          style={{
            display: "inline-block",
            background: "#FFD700",
            color: "#071F3D",
            padding: "18px 38px",
            borderRadius: "14px",
            textDecoration: "none",
            fontWeight: 800,
            fontSize: "18px",
            boxShadow: "0 10px 25px rgba(0,0,0,.2)",
          }}
        >
          Request a Quote
        </Link>
      </section>
    </main>
  );
}