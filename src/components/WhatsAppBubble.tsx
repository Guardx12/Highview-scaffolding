
"use client";

export default function WhatsAppBubble() {
  return (
    <a
      href="https://wa.me/447850661686?text=Hi%2C%20please%20can%20I%20get%20a%20quote%20for%20scaffolding%20in%20%5BPOSTCODE%2FAREA%5D%3F"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: 9999,
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
        transition: "transform 0.2s ease"
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      <svg viewBox="0 0 32 32" width="32" height="32" fill="white">
        <path d="M16 .396C7.163.396 0 7.559 0 16.396c0 2.885.757 5.592 2.073 7.94L.396 32l7.852-1.634A15.922 15.922 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837.396 16 .396z"/>
      </svg>
    </a>
  );
}
