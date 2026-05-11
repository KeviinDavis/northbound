"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FadeIn({ children, delay = 1.2, duration = 0.8 }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.set(ref.current, { autoAlpha: 0 });

    function animate(d) {
      gsap.to(ref.current, {
        autoAlpha: 1,
        duration,
        delay: d,
        ease: "power3.out",
      });
    }

    if (window.__transitionActive) {
      function onReveal() {
        window.removeEventListener("transition:reveal", onReveal);
        animate(0.4);
      }
      window.addEventListener("transition:reveal", onReveal);
      return () => window.removeEventListener("transition:reveal", onReveal);
    }

    animate(delay);
  }, [delay, duration]);

  return (
    <div ref={ref} style={{ visibility: "hidden" }}>
      {children}
    </div>
  );
}
