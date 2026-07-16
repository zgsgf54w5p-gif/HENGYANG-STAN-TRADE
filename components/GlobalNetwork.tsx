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
        background: "#0B4EA2",
        color: "white",
        padding: "90px 30px",
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
            margin: "0 auto 60px",
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
            gap: "30px",
          }}
        >
          {stats.map((item) => (
            <div
              key={item.label}
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: "15px",
                padding: "30px",
              }}
            >
              <h3
                style={{
                  fontSize: "48px",
                  margin: 0,
                  color: "#FFD700",
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