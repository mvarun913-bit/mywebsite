"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "20px 32px", display: "flex", justifyContent: "space-between",
      alignItems: "center",
      background: scrolled ? "rgba(245,240,232,0.85)" : "transparent",
      borderBottom: scrolled ? "rgba(245,240,232,0.97)" : "transparent",
      transition: "all 0.3s ease",
      backdropFilter: scrolled ? "blur(12px)" : "none",
    }}>
      <img src="/favicon.svg" alt="VM Logo" style={{ width: 40, height: 40, borderRadius: 8 }} />
      <div style={{ display: "flex", gap: 32 }}>
        {["About", "Projects", "Travel", "Contact"].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`}
            style={{ fontSize: 13, color: "#8a7e72", textDecoration: "none" }}>
            {l}
          </a>
        ))}
      </div>
    </nav>
  );
}