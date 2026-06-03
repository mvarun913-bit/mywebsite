"use client";
import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const alreadyCounted = sessionStorage.getItem("vm_visited");

    if (alreadyCounted) {
      // Just fetch current count, don't increment
      fetch("/api/visitors")
        .then((r) => r.json())
        .then((d) => setCount(d.count))
        .catch(() => {});
    } else {
      // First visit this session — increment
      fetch("/api/visitors", { method: "POST" })
        .then((r) => r.json())
        .then((d) => {
          setCount(d.count);
          sessionStorage.setItem("vm_visited", "1");
        })
        .catch(() => {});
    }
  }, []);

  if (count === null) return null;

  return (
    <span style={{ color: "var(--text-faint)", fontSize: 12, letterSpacing: "0.04em" }}>
      {count.toLocaleString()} visitors
    </span>
  );
}
