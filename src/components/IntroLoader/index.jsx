"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./IntroLoader.module.css";

// Plays once per app session: client-side returns to the landing page skip it.
let hasPlayed = false;

export default function IntroLoader({ content }) {
  const containerRef = useRef(null);
  const [shouldPlay] = useState(() => !hasPlayed);
  const [done, setDone] = useState(false);

  const { word, images } = content;
  const mid = Math.ceil(word.length / 2);
  const startLetters = word.slice(0, mid).split("");
  const endLetters = word.slice(mid).split("");
  const [baseImage, ...flickImages] = images;

  useLayoutEffect(() => {
    if (!shouldPlay) return;
    hasPlayed = true;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      gsap.set(containerRef.current, { autoAlpha: 0 });
      const raf = requestAnimationFrame(() => setDone(true));
      return () => cancelAnimationFrame(raf);
    }

    // Same handshake as PageWipeTransition: sections (HeroEditorial, FadeIn)
    // hold their entrances while this flag is up and enter on transition:reveal.
    window.__transitionActive = true;
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(containerRef);

      const title = q("[data-title]");
      const letters = q("[data-intro-letter]");
      const gap = q("[data-gap]");
      const grow = q("[data-grow]");
      const titleStart = q("[data-title-start]");
      const titleEnd = q("[data-title-end]");
      const flicks = q("[data-flick]");

      // The title ships hidden (CSS) so the server-rendered frame shows only
      // the blank overlay. Un-hide it here, synchronously before paint — the
      // from() below offsets the letters in the same tick, so nothing flashes.
      gsap.set(title, { autoAlpha: 1 });

      const tl = gsap.timeline({ defaults: { ease: "expo.inOut" } });

      // 1. Letters type up from below (masked by the overflow-hidden halves).
      tl.from(letters, { yPercent: 100, stagger: 0.025, duration: 1.25 });

      // 2. Center gap opens: box + image grow, halves nudge apart.
      tl.fromTo(gap, { width: "0em" }, { width: "1.9em", duration: 1.25 }, "< 1.25");
      tl.fromTo(grow, { width: "0%" }, { width: "100%", duration: 1.25 }, "<");
      tl.fromTo(titleStart, { x: "0em" }, { x: "-0.05em", duration: 1.25 }, "<");
      tl.fromTo(titleEnd, { x: "0em" }, { x: "0.05em", duration: 1.25 }, "<");

      // 3. Flick through the stacked photos. DOM order is reversed (base
      // first, first-to-fade last/on top), so the stagger runs from the end.
      tl.fromTo(
        flicks,
        { opacity: 1 },
        {
          opacity: 0,
          duration: 0.05,
          ease: "none",
          stagger: { each: 0.25, from: "end" },
        },
        "-=0.05"
      );

      // 4. Seal the gap: the image window closes and the halves rejoin,
      // reversing the opening. A short hold lets the whole word register.
      // Positioned relative to the flick's end so it adapts to image count.
      tl.to(grow, { width: "0%", duration: 1.25 }, ">0.4");
      tl.to(gap, { width: "0em", duration: 1.25 }, "<");
      tl.to(titleStart, { x: "0em", duration: 1.25 }, "<");
      tl.to(titleEnd, { x: "0em", duration: 1.25 }, "<");
      tl.to({}, { duration: 0.25 });

      // 5. Hand off to the page: dispatch the reveal, then slide the overlay
      // up and off-screen with the same motion as the page-wipe panel.
      tl.call(() => {
        window.__transitionActive = false;
        window.dispatchEvent(new CustomEvent("transition:reveal"));
        document.body.style.overflow = "";
      });
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.7,
        ease: "power3.inOut",
      });
      tl.call(() => setDone(true));
    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [shouldPlay]);

  if (!shouldPlay || done) return null;

  return (
    <div ref={containerRef} className={styles.intro} aria-hidden="true">
      <div className={styles.title} data-title>
        <div className={styles.titleStart} data-title-start>
          {startLetters.map((ch, i) => (
            <span key={i} className={styles.letter} data-intro-letter>
              {ch}
            </span>
          ))}
        </div>

        <div className={styles.gap} data-gap>
          <div className={styles.gapInner}>
            <div className={styles.growFrame} data-grow>
              {/* Base first, flicks in reverse: natural stacking puts the
                  first image to fade on top — no z-index bookkeeping. */}
              <div className={styles.growInner}>
                {baseImage && (
                  <Image
                    className={styles.image}
                    src={baseImage}
                    alt=""
                    fill
                    sizes="160px"
                    priority
                  />
                )}
                {[...flickImages].reverse().map((src) => (
                  <Image
                    key={src}
                    className={styles.image}
                    data-flick
                    src={src}
                    alt=""
                    fill
                    sizes="160px"
                    priority
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.titleEnd} data-title-end>
          {endLetters.map((ch, i) => (
            <span key={i} className={styles.letter} data-intro-letter>
              {ch}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
