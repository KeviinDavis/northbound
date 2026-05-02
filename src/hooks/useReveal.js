'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function useReveal({ duration = 0.9, stagger = 0.08, delay = 0.4, ease = 'power3.out' } = {}) {
  const refs = useRef([]);

  const addRef = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  useEffect(() => {
    const els = refs.current.filter((el) => el && el.offsetParent !== null);
    if (!els.length) return;
    gsap.set(els, { yPercent: 110 });
    gsap.to(els, {
      yPercent: 0,
      duration,
      ease,
      stagger,
      delay,
    });
  }, [duration, stagger, delay, ease]);

  return addRef;
}
