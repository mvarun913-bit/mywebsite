import styles from "./About.module.css";

const skills = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "Figma", "PostgreSQL", "Git"];

const stats = [
  { value: "12+", label: "Countries visited" },
  { value: "5+",  label: "Years of experience" },
  { value: "30+", label: "Projects shipped" },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.label}>About</p>
          <h2 className={styles.title}>Who I am &amp; what I do</h2>
          <p className={styles.body}>
            I&apos;m a developer and traveler based on the internet. I build fast,
            accessible web experiences and spend the rest of my time exploring
            new cities, cultures, and cuisines. Currently open to freelance
            projects and full-time opportunities.
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
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
