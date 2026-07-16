export default function WhyChooseUs() {
  const items = [
    {
      title: "Factory Direct Prices",
      text: "Competitive pricing directly from trusted manufacturers.",
    },
    {
      title: "Quality Inspection",
      text: "Every product is carefully inspected before shipment.",
    },
    {
      title: "Worldwide Shipping",
      text: "Fast and reliable export to customers across the globe.",
    },
    {
      title: "OEM & ODM Service",
      text: "Customized branding and packaging available.",
    },
    {
      title: "Professional Team",
      text: "Experienced export specialists ready to assist you.",
    },
    {
      title: "24/7 Customer Support",
      text: "Quick responses before and after every order.",
    },
  ];

  return (
    <section
      style={{
        padding: "90px 10%",
        background: "#ffffff",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          color: "#0B4EA2",
          marginBottom: "15px",
        }}
      >
        Why Choose Hengyang Stan Trade?
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          maxWidth: "700px",
          margin: "0 auto 60px",
          fontSize: "18px",
        }}
      >
        We provide reliable export solutions with quality products,
        competitive prices and professional service.
      </p >

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "30px",
        }}
      >
        {items.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#F8FAFC",
              padding: "35px",
              borderRadius: "18px",
              boxShadow: "0 10px 30px rgba(0,0,0,.08)",
              transition: ".3s",
            }}
          >
            <div
              style={{
                fontSize: "42px",
                marginBottom: "15px",
              }}
            >
              ✅
            </div>

            <h3
              style={{
                color: "#0B4EA2",
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#555",
                lineHeight: "1.8",
              }}
            >
              {item.text}
            </p >
          </div>
        ))}
      </div>
    </section>
  );
}