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
      background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
      borderBottom: scrolled ? "0.5px solid #1e1e1e" : "0.5px solid transparent",
      transition: "all 0.3s ease"
    }}>
      <img src="/favicon.svg" alt="VM Logo" style={{ width: 40, height: 40, borderRadius: 8 }} />
       <div style={{ display: "flex", gap: 32 }}>
        {["About","Travel","Contact"].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: 13, color: "#888", textDecoration: "none" }}>{l}</a>
        ))}
      </div>
    </nav>
  );
}
