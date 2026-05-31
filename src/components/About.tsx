"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const skills = [
  "Sitecore XM/XP",
  "Sitecore XM Cloud",
  "Headless CMS",
  "Next.js",
  "React",
  "TypeScript",
  "C# / .NET",
  "GraphQL",
  "Sitecore JSS",
  "Azure",
  "Docker",
  "Git",
];

const stats = [
  { value: "6+", label: "Countries visited" },
  { value: "5+",  label: "Years with Sitecore" },
  { value: "30+", label: "Projects shipped" },
];

function StatCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const num = parseInt(value);
  const suffix = value.replace(/[0-9]/g, "");
  const [display, setDisplay] = useState("0" + suffix);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);

        const duration = 1400;
        const startTime = performance.now();

        const tick = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(eased * num) + suffix);
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [num, suffix]);

  return (
    <div ref={ref} className={styles.statItem}>
      <span className={styles.statValue}>{display}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

export default function About() {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section id="about" ref={ref} className={`${styles.section} fade-up`}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.label}>About</p>
          <h2 className={styles.title}>Who I am &amp; what I do</h2>
          <p className={styles.body}>
            I&apos;m a Sitecore developer with 5+ years building content-driven
            digital experiences for enterprise clients. I specialize in Sitecore
            XM Cloud and headless architectures — bridging the gap between
            powerful CMS capabilities and modern front-end stacks like Next.js.
            When I&apos;m not deep in component development or deployment pipelines,
            I&apos;m somewhere new in the world, exploring cities and cultures one trip
            at a time.
          </p>
          <div className={styles.tags}>
            {skills.map((s) => (
              <span key={s} className={styles.tag}>{s}</span>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.label}>By the numbers</p>
          <div className={styles.stats}>
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
