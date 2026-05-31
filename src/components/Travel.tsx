"use client";
import styles from "./Travel.module.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const posts = [
  {
  id: 1,
  destination: "Rome",
  country: "Italy",
  year: "2024",
  description: "Ancient history at every corner — the Colosseum, cobblestone streets, and the best pasta of my life.",
  tags: ["Europe", "History", "Food"],
  accent: "#c4571a",
},
{
  id: 2,
  destination: "Barcelona",
  country: "Spain",
  year: "2023",
  description: "Gaudí's wild architecture, beach vibes, and a nightlife that doesn't start until midnight.",
  tags: ["Europe", "Architecture", "Culture"],
  accent: "#a84515",
},
{
  id: 3,
  destination: "Paris",
  country: "France",
  year: "2023",
  description: "More than just the Eiffel Tower — the cafés, the museums, and the art everywhere you look.",
  tags: ["Europe", "Art", "Food"],
  accent: "#8a3a10",
},
{
  id: 4,
  destination: "Zermatt",
  country: "Switzerland",
  year: "2022",
  description: "Snow-capped peaks, the iconic Matterhorn, and the most peaceful mountain air I've ever breathed.",
  tags: ["Europe", "Nature", "Mountains"],
  accent: "#d4692a",
},
];

export default function Travel() {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section id="travel" ref={ref} className={`${styles.section} fade-up`}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <p className={styles.label}>Travel</p>
          <h2 className={styles.title}>Places I&apos;ve been</h2>
          <p className={styles.sub}>Stories &amp; snapshots from around the world</p>
        </div>
      </div>

      <div className={styles.grid}>
        {posts.map((post) => (
          <article key={post.id} className={styles.card}>
            <div
              className={styles.cardBg}
              style={{ background:`radial-gradient(ellipse at 30% 40%, ${post.accent}44 0%, #c4a882 70%)` }}
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
  );
}
