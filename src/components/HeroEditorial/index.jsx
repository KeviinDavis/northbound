"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import styles from "./HeroEditorial.module.css";

export default function HeroEditorial({ content }) {
  const linesRef = useRef([]);

  useEffect(() => {
    const els = linesRef.current.filter(
      (el) => el && el.offsetParent !== null
    );
    gsap.set(els, { yPercent: 110 });
    gsap.to(els, {
      yPercent: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.4,
    });
  }, []);

  const addRef = (el) => {
    if (el && !linesRef.current.includes(el)) {
      linesRef.current.push(el);
    }
  };

  const desktopLines = content.headline.desktop.split("\n");
  const mobileLines = content.headline.mobile.split("\n");

  return (
    <Section className={styles.section}>
      <header className={styles.root}>
        <div className={`${styles.clip} ${styles.eyebrowWrap}`}>
          <p ref={addRef} className={`text-tagline ${styles.eyebrow}`}>
            {/* {content.eyebrow} */}
          </p>
        </div>

        <h1 className={styles.headline}>
          <span className={styles.headlineDesktop}>
            {desktopLines.map((line, i) => (
              <span key={i} className={styles.clip}>
                <span ref={addRef} className={styles.headlineLine}>
                  {line}
                </span>
              </span>
            ))}
          </span>
          <span className={styles.headlineMobile}>
            {mobileLines.map((line, i) => (
              <span key={i} className={styles.clip}>
                <span ref={addRef} className={styles.headlineLine}>
                  {line}
                </span>
              </span>
            ))}
          </span>
        </h1>

        <div className={`${styles.clip} ${styles.subHeadlineWrap}`}>
          <p ref={addRef} className={styles.subHeadline}>{content.subHeadline}</p>
        </div>

        <div className={`${styles.clip} ${styles.bodyWrap}`}>
          <p ref={addRef} className={styles.body}>{content.body}</p>
        </div>
      </header>
    </Section>
  );
}
