export default function GlobalNetwork() {
  const stats = [
    { number: "20+", label: "Countries Served" },
    { number: "500+", label: "Products Available" },
    { number: "1000+", label: "Satisfied Customers" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <section
      style={{
        background: "#2563EB",
        color: "white",
        padding: "100px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "20px",
          }}
        >
          Global Export Network
        </h2>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "800px",
            margin: "0 auto 48px",
            lineHeight: "1.8",
          }}
        >
          We help importers, wholesalers and distributors source reliable
          products from China with competitive pricing and professional service.
        </p >

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "32px",
          }}
        >
          {stats.map((item) => (
            <div
              key={item.label}
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: "20px",
                padding: "34px",
              }}
            >
              <h3
                style={{
                  fontSize: "48px",
                  margin: 0,
                  color: "#F97316",
                }}
              >
                {item.number}
              </h3>

              <p
                style={{
                  marginTop: "15px",
                  fontSize: "18px",
                }}
              >
                {item.label}
              </p >
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}