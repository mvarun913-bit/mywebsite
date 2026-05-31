import styles from "./Hero.module.css";

const ticker = [
  "Sitecore XM Cloud", "Next.js", "React", "TypeScript",
  "Azure", "Headless CMS", "Sitecore JSS", "C# · .NET",
  "GraphQL", "Sitecore CDP", "Docker", "Figma",
];

export default function Hero() {
  const track = [...ticker, ...ticker, ...ticker].join("  ·  ");

  return (
    <section id="home" className={styles.section}>

      {/* Background watermark */}
      <div className={styles.bg} aria-hidden="true">
        <span className={styles.bgLine}>Varun</span>
        <span className={styles.bgLine}>Munigala</span>
      </div>

      <div className={styles.inner}>
        <p className={styles.eyebrow}>Portfolio · 2026</p>
        <h1 className={styles.title}>
          <span className={styles.line}>Varun</span>
          <span className={styles.line}>Munigala</span>
          <span className={styles.line}>Here.</span>
        </h1>
        <p className={styles.sub}>
          Sitecore Developer. Traveler. Builder of digital experiences that scale.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>View my work</a>
          <a href="#contact" className={styles.btnSecondary}>Get in touch</a>
        </div>
      </div>

      <div className={styles.marqueeWrap}>
        <div className={styles.marquee}>
          <span className={styles.marqueeInner}>{track}</span>
        </div>
      </div>
    </section>
  );
}
