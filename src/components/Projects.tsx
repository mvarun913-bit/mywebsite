"use client";
import styles from "./Projects.module.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const projects = [
  {
    title: "XM Cloud Migration",
    description:
      "Led end-to-end migration of a legacy Sitecore XP instance to Sitecore XM Cloud for a global retail brand. Rebuilt the front end as a headless Next.js app using Sitecore JSS, cutting time-to-publish by 60%.",
    tags: ["Sitecore XM Cloud", "Next.js", "Sitecore JSS", "Azure"],
    year: "2024",
    link: "#",
    index: "01",
  },
  {
    title: "Headless Commerce Platform",
    description:
      "Architected a composable commerce solution integrating Sitecore with a third-party commerce engine. Built reusable JSS components consumed across 5 regional sites from a single codebase.",
    tags: ["Sitecore XP", "JSS", "TypeScript", "GraphQL"],
    year: "2024",
    link: "#",
    index: "02",
  },
  {
    title: "Enterprise Design System",
    description:
      "Developed a Sitecore-aware component library for a financial services client, standardizing 40+ rendering variants across teams in 3 countries. Reduced front-end dev time per feature by ~40%.",
    tags: ["React", "Storybook", "C# / .NET", "Sitecore SXA"],
    year: "2023",
    link: "#",
    index: "03",
  },
  {
    title: "Personalization Engine",
    description:
      "Implemented Sitecore CDP and Personalize for a healthcare provider, setting up audience segments, experience triggers, and A/B test variants that lifted engagement by 28%.",
    tags: ["Sitecore CDP", "Sitecore Personalize", "Next.js", "Analytics"],
    year: "2023",
    link: "#",
    index: "04",
  },
];

export default function Projects() {
  const ref = useScrollAnimation<HTMLElement>();

  return (
    <section id="projects" ref={ref} className={`${styles.section} fade-up`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>Work</p>
          <h2 className={styles.title}>Selected projects</h2>
          <p className={styles.sub}>Enterprise Sitecore implementations I&apos;ve led and shipped</p>
        </div>

        <div className={styles.list}>
          {projects.map((p) => (
            <a key={p.index} href={p.link} className={styles.item}>
              <span className={styles.itemIndex}>{p.index}</span>
              <div className={styles.itemMain}>
                <div className={styles.itemTop}>
                  <h3 className={styles.itemTitle}>{p.title}</h3>
                  <span className={styles.itemYear}>{p.year}</span>
                </div>
                <p className={styles.itemDesc}>{p.description}</p>
                <div className={styles.itemTags}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.itemTag}>{t}</span>
                  ))}
                </div>
              </div>
              <span className={styles.itemArrow}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
