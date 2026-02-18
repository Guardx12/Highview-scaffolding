"use client";

export default function WhatsAppBubble() {
  return (
    <a
      href="https://wa.me/447850661686"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[999] group"
    >
      <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-green-500/40 transition-all duration-300 hover:scale-110 hover:shadow-green-400/60">
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white">
          <path d="M16 .396C7.163.396 0 7.559 0 16.396c0 2.885.757 5.592 2.073 7.94L.396 32l7.852-1.634A15.922 15.922 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837.396 16 .396z"/>
        </svg>
      </div>
    </a>
  );
}
