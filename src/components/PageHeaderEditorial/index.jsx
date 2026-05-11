"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import styles from './PageHeaderEditorial.module.css';

export default function PageHeaderEditorial({ pageHeader, sectionVariant = "default", flush = false }) {
  const linesRef = useRef([]);

  useEffect(() => {
    const els = linesRef.current.filter(
      (el) => el && el.offsetParent !== null
    );
    gsap.set(els, { yPercent: 110 });

    function animate() {
      gsap.to(els, {
        yPercent: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
      });
    }

    if (window.__transitionActive) {
      function onReveal() {
        window.removeEventListener("transition:reveal", onReveal);
        animate();
      }
      window.addEventListener("transition:reveal", onReveal);
      return () => window.removeEventListener("transition:reveal", onReveal);
    }

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

  const desktopLines = pageHeader.headline.desktop.split("\n");
  const mobileLines = pageHeader.headline.mobile.split("\n");

  return (
    <Section variant={sectionVariant} className={flush ? styles.flush : ""}>
      <Container variant="default">
        <header className={styles.header}>
          <h2 className={styles.headlineMobile}>
            {mobileLines.map((line, i) => (
              <span key={i} className={styles.clip}>
                <span ref={addRef} className={styles.headlineLine}>
                  {line}
                </span>
              </span>
            ))}
          </h2>
          <h1 className={styles.headlineDesktop}>
            {desktopLines.map((line, i) => (
              <span key={i} className={styles.clip}>
                <span ref={addRef} className={styles.headlineLine}>
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <div className={styles.clip}>
            <p ref={addRef} className={styles.subParagraph}>{pageHeader.subParagraph}</p>
          </div>
        </header>
      </Container>
    </Section>
  );
}
