"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import styles from "./PageWipeTransition.module.css";

export default function PageWipeTransition() {
  const panelRef = useRef(null);
  const labelRef = useRef(null);
  const isFirstMount = useRef(true);
  const isAnimating = useRef(false);
  const skipPanelTransition = useRef(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const panel = panelRef.current;
    const label = labelRef.current;

    function handleClick(e) {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;
      if (href.startsWith("http") || href.startsWith("//") || href.startsWith("#") || href.startsWith("mailto:")) return;
      if (href === pathname) return;
      if (isAnimating.current) return;

      e.preventDefault();
      e.stopPropagation();
      isAnimating.current = true;

      const isFromMenu = !!anchor.closest("[data-menu]");
      if (isFromMenu) {
        skipPanelTransition.current = true;
        window.dispatchEvent(new CustomEvent("transition:menu-navigate", { detail: { href } }));
        return;
      }

      window.__transitionActive = true;

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion) {
        gsap.set(panel, { yPercent: -100 });
        gsap.set(label, { autoAlpha: 0 });
        router.push(href);
        return;
      }

      gsap.set(panel, { yPercent: 0 });
      gsap.set(label, { autoAlpha: 0 });

      gsap.to(panel, {
        yPercent: -100,
        duration: 0.6,
        ease: "power3.inOut",
        onComplete: () => router.push(href),
      });
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname, router]);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    if (skipPanelTransition.current) {
      skipPanelTransition.current = false;
      isAnimating.current = false;
      return;
    }

    const panel = panelRef.current;
    const label = labelRef.current;

    if (!panel || !label) return;

    gsap.killTweensOf(panel);
    gsap.set(panel, { yPercent: -100 });
    gsap.set(label, { autoAlpha: 0 });

    isAnimating.current = false;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      gsap.set(label, { autoAlpha: 1 });
      setTimeout(() => {
        gsap.set(panel, { yPercent: -200 });
        gsap.set(label, { autoAlpha: 0 });
      }, 300);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => gsap.set(panel, { yPercent: 0 }),
    });

    tl.to(label, {
        autoAlpha: 1,
        duration: 0.25,
        ease: "power2.out",
      })
      .to({}, { duration: 0.3 })
      .to(label, {
        autoAlpha: 0,
        duration: 0.2,
        ease: "power2.in",
      })
      .call(() => {
        window.__transitionActive = false;
        window.dispatchEvent(new CustomEvent("transition:reveal"));
      })
      .to(panel, {
        yPercent: -200,
        duration: 0.7,
        ease: "power3.inOut",
      });
  }, [pathname]);

  return (
    <div
      className={styles.transition}
      data-transition-wrap
      aria-hidden="true"
    >
      <div
        ref={panelRef}
        className={styles.panel}
        data-transition-panel
      >
        <span
          ref={labelRef}
          className={styles.label}
          data-transition-label
        >
          Northbound<span className={styles.registered}>{"\u00AE"}</span>
        </span>
      </div>
    </div>
  );
}
