"use client";

export default function WhatsAppButton() {
  const animationStyle = `
    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-8px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  `;

  return (
    <>
      <style>{animationStyle}</style>

      <a
        href="https://wa.me/8613510151112?text=Hello%20Hengyang%20Stan%20Trade,%20I%20am%20interested%20in%20your%20products "
        target="_blank"
        title="Chat with us on WhatsApp"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          backgroundColor: "#25D366",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
          zIndex: 1000,
          cursor: "pointer",
          animation: "float 2s ease-in-out infinite",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          width={38}
          height={38}
          style={{
            display: "block",
          }}
        />
      </a >
    </>
  );
}