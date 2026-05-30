export default function Hero() {
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 32px 80px" }}>
      <div>
        <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e8c547", marginBottom: 24 }}>Portfolio · 2025</p>
        <h1 style={{ fontFamily: "serif", fontSize: "clamp(64px, 10vw, 120px)", lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: 28 }}>
          Your<br /><span style={{ color: "#e8c547" }}>Name</span><br />Here.
        </h1>
        <p style={{ fontSize: 18, color: "#888", fontWeight: 300, maxWidth: 460, lineHeight: 1.6, marginBottom: 40 }}>
          Developer. Traveler. Builder of things that matter.
        </p>
        <div style={{ display: "flex", gap: 14 }}>
          <a href="#about" style={{ background: "#e8c547", color: "#0a0a0a", fontSize: 14, fontWeight: 500, padding: "13px 28px", borderRadius: 6, textDecoration: "none" }}>View my work</a>
          <a href="#contact" style={{ border: "0.5px solid #333", color: "#888", fontSize: 14, padding: "13px 28px", borderRadius: 6, textDecoration: "none" }}>Get in touch</a>
        </div>
      </div>
    </section>
  );
}
