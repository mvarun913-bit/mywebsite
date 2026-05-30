"use client";
import { useState } from "react";

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="4"/>
    <line x1="8" y1="11" x2="8" y2="16"/>
    <line x1="8" y1="8" x2="8" y2="8.5"/>
    <path d="M12 16v-5M16 16v-3a2 2 0 00-4 0"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
  </svg>
);

const socials = [
  { name: "Instagram", url: "https://instagram.com/YOUR_HANDLE", icon: <InstagramIcon /> },
  { name: "LinkedIn", url: "https://linkedin.com/in/YOUR_HANDLE", icon: <LinkedInIcon /> },
  { name: "GitHub", url: "https://github.com/mvarun913-bit", icon: <GitHubIcon /> },
];

export default function SocialSidebar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div style={{ position: "fixed", right: 24, top: "50%", transform: "translateY(-50%)", zIndex: 90, display: "flex", flexDirection: "column", gap: 8 }}>
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noreferrer"
          aria-label={s.name}
          onMouseEnter={() => setHovered(s.name)}
          onMouseLeave={() => setHovered(null)}
          style={{
            width: 40, height: 40, borderRadius: 8,
            border: `0.5px solid ${hovered === s.name ? "#c4571a" : "#e0d9ce"}`,
            background: hovered === s.name ? "#c4571a" : "#f5f0e8",
            color: hovered === s.name ? "#f5f0e8" : "#8a7e72",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s", textDecoration: "none",
          }}
        >
          {s.icon}
        </a>
      ))}
      <div style={{ width: 1, height: 48, background: "#e0d9ce", margin: "4px auto 0" }} />
    </div>
  );
}
