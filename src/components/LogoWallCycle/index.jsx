"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import styles from "./LogoWallCycle.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function LogoWallCycle({ content }) {
  const {
    eyebrow,
    logos = [],
    shuffle = false,
    loopDelay = 1.5,
    duration = 0.9,
  } = content ?? {};

  const rootRef = useRef(null);
  const listRef = useRef(null);
  const tlRef = useRef(null);
  const poolRef = useRef([]);
  const patternRef = useRef([]);
  const patternIndexRef = useRef(0);
  const visibleItemsRef = useRef([]);
  const visibleCountRef = useRef(0);

  const shuffleArray = useCallback((arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }, []);

  useEffect(() => {
    if (!logos.length) return;

    const root = rootRef.current;
    const list = listRef.current;
    if (!root || !list) return;

    const items = Array.from(list.querySelectorAll("[data-logo-item]"));
    const originalTargets = items
      .map((item) => item.querySelector("[data-logo-target]"))
      .filter(Boolean);

    function isVisible(el) {
      return window.getComputedStyle(el).display !== "none";
    }

    function setup() {
      if (tlRef.current) {
        tlRef.current.kill();
      }

      const visibleItems = items.filter(isVisible);
      const visibleCount = visibleItems.length;
      visibleItemsRef.current = visibleItems;
      visibleCountRef.current = visibleCount;

      patternRef.current = shuffleArray(
        Array.from({ length: visibleCount }, (_, i) => i)
      );
      patternIndexRef.current = 0;

      items.forEach((item) => {
        item.querySelectorAll("[data-logo-target]").forEach((old) => old.remove());
      });

      const pool = originalTargets.map((n) => n.cloneNode(true));

      let front, rest;
      if (shuffle) {
        const shuffledAll = shuffleArray(pool);
        front = shuffledAll.slice(0, visibleCount);
        rest = shuffleArray(shuffledAll.slice(visibleCount));
      } else {
        front = pool.slice(0, visibleCount);
        rest = shuffleArray(pool.slice(visibleCount));
      }
      poolRef.current = rest;

      for (let i = 0; i < visibleCount; i++) {
        const parent =
          visibleItems[i].querySelector("[data-logo-parent]") || visibleItems[i];
        parent.appendChild(front[i]);
      }

      const tl = gsap.timeline({ repeat: -1, repeatDelay: loopDelay });
      tl.call(swapNext);
      tlRef.current = tl;
      tl.play();
    }

    function swapNext() {
      const nowCount = items.filter(isVisible).length;
      if (nowCount !== visibleCountRef.current) {
        setup();
        return;
      }
      if (!poolRef.current.length) return;

      const idx =
        patternRef.current[patternIndexRef.current % visibleCountRef.current];
      patternIndexRef.current++;

      const container = visibleItemsRef.current[idx];
      const parent =
        container.querySelector("[data-logo-parent]") || container;
      const existing = parent.querySelectorAll("[data-logo-target]");
      if (existing.length > 1) return;

      const current = parent.querySelector("[data-logo-target]");
      const incoming = poolRef.current.shift();

      gsap.set(incoming, { yPercent: 50, autoAlpha: 0 });
      parent.appendChild(incoming);

      if (current) {
        gsap.to(current, {
          yPercent: -50,
          autoAlpha: 0,
          duration,
          ease: "expo.inOut",
          onComplete: () => {
            current.remove();
            poolRef.current.push(current);
          },
        });
      }

      gsap.to(incoming, {
        yPercent: 0,
        autoAlpha: 1,
        duration,
        delay: 0.1,
        ease: "expo.inOut",
      });
    }

    setup();

    const st = ScrollTrigger.create({
      trigger: root,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => tlRef.current?.play(),
      onLeave: () => tlRef.current?.pause(),
      onEnterBack: () => tlRef.current?.play(),
      onLeaveBack: () => tlRef.current?.pause(),
    });

    const handleVisibility = () => {
      if (document.hidden) {
        tlRef.current?.pause();
      } else {
        tlRef.current?.play();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      tlRef.current?.kill();
      st.kill();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [logos, shuffle, loopDelay, duration, shuffleArray]);

  return (
    <Section>
      <Container>
        {eyebrow && <p className={`text-tagline ${styles.eyebrow}`}>{eyebrow}</p>}
        <div ref={rootRef}>
          <div ref={listRef} className={styles.grid}>
            {logos.map((logo) => (
              <div key={logo.alt} data-logo-item="" className={styles.cell}>
                <div data-logo-parent="" className={styles.logo}>
                  <div data-logo-target="" className={styles.logoTarget}>
                    <img
                      src={logo.src}
                      loading="lazy"
                      alt={logo.alt || ""}
                      className={styles.logoImg}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
