"use client";
import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your form endpoint (e.g. Formspree, Resend, etc.)
    console.log("Form submitted:", form);
    setSent(true);
  };

  return (
    <section id="contact" className={styles.section}>
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
            <a href="mailto:you@example.com" className={styles.socialLink}>
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
              <button type="submit" className={styles.submit}>
                Send message →
              </button>
            </form>
          )}
        </div>
      </div>

      <div className={styles.footer}>
        <p>© 2025 Your Name. Built with Next.js & deployed on Netlify.</p>
      </div>
    </section>
  );
}
