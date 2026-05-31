"use client";
import { useState, useEffect } from "react";
import styles from "./Travel.module.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

type Post = {
  id: number;
  destination: string;
  country: string;
  year: string;
  description: string;
  tags: string[];
  accent: string;
};

const posts: Post[] = [
  {
    id: 1,
    destination: "Hyderabad",
    country: "India",
    year: "2024",
    description: "Home base and heart. Biryani that sets the benchmark for every meal that follows, and a city that never stops building itself.",
    tags: ["Asia", "Home", "Food"],
    accent: "#c4571a",
  },
  {
    id: 2,
    destination: "New York",
    country: "United States",
    year: "2024",
    description: "The city that makes you feel behind and ahead at the same time. Every borough a different world, every block a different decade.",
    tags: ["Americas", "City", "Culture"],
    accent: "#7a4a2a",
  },
  {
    id: 3,
    destination: "Rome",
    country: "Italy",
    year: "2024",
    description: "Ancient history at every corner — the Colosseum, cobblestone streets, and the best pasta of my life.",
    tags: ["Europe", "History", "Food"],
    accent: "#a84515",
  },
  {
    id: 4,
    destination: "Barcelona",
    country: "Spain",
    year: "2023",
    description: "Gaudí's wild architecture, beach vibes, and a nightlife that doesn't start until midnight.",
    tags: ["Europe", "Architecture", "Culture"],
    accent: "#d4692a",
  },
  {
    id: 5,
    destination: "Paris",
    country: "France",
    year: "2023",
    description: "More than just the Eiffel Tower — the cafés, the museums, and the way the light hits the Seine at dusk.",
    tags: ["Europe", "Art", "Food"],
    accent: "#8a3a10",
  },
  {
    id: 6,
    destination: "Zermatt",
    country: "Switzerland",
    year: "2022",
    description: "Snow-capped peaks, the iconic Matterhorn, and the most peaceful mountain air I've ever breathed.",
    tags: ["Europe", "Nature", "Mountains"],
    accent: "#c4571a",
  },
];

function Modal({ post, onClose }: { post: Post; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div
          className={styles.modalHero}
          style={{ background: `radial-gradient(ellipse at 30% 50%, ${post.accent}66 0%, #c4a882 100%)` }}
        >
          <button className={styles.modalClose} onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className={styles.modalBody}>
          <h3 className={styles.modalDest}>{post.destination}</h3>
          <p className={styles.modalMeta}>{post.country} · {post.year}</p>
          <p className={styles.modalDesc}>{post.description}</p>
          <div className={styles.modalTags}>
            {post.tags.map((t) => (
              <span key={t} className={styles.modalTag}>{t}</span>
            ))}
          </div>
          <div className={styles.modalFooter}>
            <a href="/travel" className={`${styles.modalBtn} ${styles.modalBtnPrimary}`}>
              Read the story →
            </a>
            <button onClick={onClose} className={`${styles.modalBtn} ${styles.modalBtnSecondary}`}>
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Travel() {
  const ref = useScrollAnimation<HTMLElement>();
  const [active, setActive] = useState<Post | null>(null);

  return (
    <>
      <section id="travel" ref={ref} className={`${styles.section} fade-up`}>
        <div className={styles.header}>
          <div className={styles.headerInner}>
            <p className={styles.label}>Travel</p>
            <h2 className={styles.title}>Places I&apos;ve been</h2>
            <p className={styles.sub}>6 countries · stories from the road</p>
          </div>
        </div>

        <div className={styles.grid}>
          {posts.map((post) => (
            <article
              key={post.id}
              className={styles.card}
              onClick={() => setActive(post)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setActive(post)}
              aria-label={`${post.destination}, ${post.country}`}
            >
              <div
                className={styles.cardBg}
                style={{ background: `radial-gradient(ellipse at 30% 40%, ${post.accent}44 0%, #c4a882 70%)` }}
              />
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <div>
                    <h3 className={styles.dest}>{post.destination}</h3>
                    <p className={styles.meta}>{post.country} · {post.year}</p>
                  </div>
                  <span className={styles.arrow}>↗</span>
                </div>
                <p className={styles.desc}>{post.description}</p>
                <div className={styles.cardTags}>
                  {post.tags.map((t) => (
                    <span key={t} className={styles.cardTag}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {active && <Modal post={active} onClose={() => setActive(null)} />}
    </>
  );
}
