"use client";
import { useState } from "react";
import styles from "./Contact.module.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import VisitorCounter from "./VisitorCounter";

export default function Contact() {
  const ref = useScrollAnimation<HTMLElement>();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setSent(true);
    } else {
      setError("Something went wrong. Please try again.");
    }
  } catch (err) {
    setError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section id="contact" ref={ref} className={`${styles.section} fade-up`}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.label}>Contact</p>
          <h2 className={styles.title}>Let&apos;s talk.</h2>
          <p className={styles.sub}>
            Open to new projects, collaborations, or just a good conversation.
            Drop me a message and I&apos;ll get back to you within 24 hours.
          </p>
          <div className={styles.socials}>
            <a href="https://github.com/mvarun913-bit" target="_blank" rel="noreferrer" className={styles.socialLink}>
              GitHub ↗
            </a>
            <a href="mailto:mvarun913@gmail.com" className={styles.socialLink}>
              Email ↗
            </a>
          </div>
        </div>

        <div className={styles.right}>
          {sent ? (
            <div className={styles.success}>
              <span className={styles.successIcon}>✓</span>
              <p>Message sent! I&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="What's on your mind?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>
             {error && <p className={styles.error}>{error}</p>}
              <button type="submit" className={styles.submit} disabled={loading}>
                {loading ? "Sending..." : "Send message →"}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className={styles.footer}>
        <p>© 2026 Varun Munigala. Built with Next.js & deployed on Netlify.</p>
        <VisitorCounter />
      </div>
    </section>
  );
}
