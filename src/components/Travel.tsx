import styles from "./Travel.module.css";

const posts = [
  {
    id: 1,
    destination: "Tokyo",
    country: "Japan",
    year: "2024",
    description: "Neon lights, quiet temples, and the best ramen I've ever had. Tokyo is a city of beautiful contradictions.",
    tags: ["Asia", "Food", "Architecture"],
    accent: "#4a7fa5",
  },
  {
    id: 2,
    destination: "Lisbon",
    country: "Portugal",
    year: "2023",
    description: "Tiled facades, fado music drifting from a window, and golden-hour light over the Tagus River.",
    tags: ["Europe", "Culture", "Photography"],
    accent: "#a55a4a",
  },
  {
    id: 3,
    destination: "Bali",
    country: "Indonesia",
    year: "2023",
    description: "Rice terraces, surf breaks, and a slowness that forces you to be present. A trip I keep thinking about.",
    tags: ["Asia", "Nature", "Surf"],
    accent: "#4a8a5a",
  },
  {
    id: 4,
    destination: "Marrakech",
    country: "Morocco",
    year: "2022",
    description: "The medina is a sensory overload in the best way — spices, color, sound, and labyrinthine alleys.",
    tags: ["Africa", "Culture", "Markets"],
    accent: "#8a6a4a",
  },
];

export default function Travel() {
  return (
    <section id="travel" className={styles.section}>
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
              style={{ background: `radial-gradient(ellipse at 30% 40%, ${post.accent}33 0%, #111 70%)` }}
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
