export default function Footer() {
  return (
    <footer
      style={{
        background: "#071F3D",
        color: "white",
        padding: "70px 10% 30px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "40px",
          marginBottom: "50px",
        }}
      >
        <div>
          <h2 style={{ marginBottom: "20px" }}>
            Hengyang Stan Trade
          </h2>

          <p
            style={{
              color: "#cccccc",
              lineHeight: "1.8",
            }}
          >
            Your trusted China export partner supplying home appliances,
            electronics, kitchen equipment and commercial products to
            customers worldwide.
          </p >
        </div>

        <div>
          <h3 style={{ marginBottom: "20px" }}>
            Quick Links
          </h3>

          <p>Home</p >
          <p>About</p >
          <p>Products</p >
          <p>Testimonials</p >
          <p>Contact</p >
        </div>

        <div>
          <h3 style={{ marginBottom: "20px" }}>
            Contact
          </h3>

          <p>📍 Hengyang, Hunan, China</p >
          <p>📧 3941783104@qq.com</p >
          <p>📱 Phone: +86 191 6460 1883</p >
        </div>
      </div>

      <hr
        style={{
          border: "1px solid rgba(255,255,255,.15)",
          marginBottom: "20px",
        }}
      />

      <p
        style={{
          textAlign: "center",
          color: "#bbbbbb",
        }}
      >
        © 2026 Hengyang Stan Trade. All Rights Reserved.
      </p >
    </footer>
  );
}