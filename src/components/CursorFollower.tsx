"use client";
import { useEffect, useRef } from "react";
import styles from "./CursorFollower.module.css";

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on pointer-fine devices (not touch)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let x = 0, y = 0;
    let rx = 0, ry = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const onEnterLink = () => {
      ringRef.current?.classList.add(styles.expand);
    };
    const onLeaveLink = () => {
      ringRef.current?.classList.remove(styles.expand);
    };

    const animate = () => {
      rx += (x - rx) * 0.1;
      ry += (y - ry) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const bindLinks = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnterLink);
        el.addEventListener("mouseleave", onLeaveLink);
      });
    };

    window.addEventListener("mousemove", onMove);
    animate();
    bindLinks();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLink);
        el.removeEventListener("mouseleave", onLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={styles.dot} />
      <div ref={ringRef} className={styles.ring} />
    </>
  );
}
