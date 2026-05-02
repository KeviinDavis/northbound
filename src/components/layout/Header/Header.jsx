"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { wordmark, nav, footer } from "@/docs/content/site";
import styles from "./Header.module.css";

const WORK_COUNT = 9;

export default function Header({ variant = "default" }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const linkRefs = useRef([]);
  const menuBtnRef = useRef(null);
  const bgRef = useRef(null);
  const taglineRef = useRef(null);
  const menuItemRefs = useRef([]);
  const lastScrollY = useRef(0);
  const menuTl = useRef(null);
  const hasBeenOpened = useRef(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.9, ease: "power3.out", delay: 0.65 }
        );
      }
      linkRefs.current.forEach((el, i) => {
        if (el) {
          gsap.fromTo(
            el,
            { yPercent: 110 },
            { yPercent: 0, duration: 0.9, ease: "power3.out", delay: 0.7 + i * 0.05 }
          );
        }
      });
      if (menuBtnRef.current) {
        gsap.fromTo(
          menuBtnRef.current,
          { yPercent: 120 },
          { yPercent: 0, duration: 0.9, ease: "power3.out", delay: 0.7 }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  // Scroll hide/show
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      if (y > lastScrollY.current && y > 80) setHidden(true);
      else setHidden(false);
      lastScrollY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Escape to close
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Menu open/close GSAP animation
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!bgRef.current || !isMobile) return;

    if (menuTl.current) menuTl.current.kill();
    const tl = gsap.timeline();
    menuTl.current = tl;
    const items = menuItemRefs.current.filter(Boolean);

    const links = items.map((el) => el.querySelector("a")).filter(Boolean);
    const tagP = taglineRef.current?.querySelector("p");

    if (menuOpen) {
      hasBeenOpened.current = true;

      tl.set(links, { visibility: "visible", yPercent: -110 }, 0)
        .set(tagP ? [tagP] : [], { visibility: "visible", yPercent: -110 }, 0)
        .to(
          bgRef.current,
          { y: 0, duration: 0.55, ease: "power3.inOut" },
          0
        )
        .to(
          links,
          { yPercent: 0, stagger: 0.03, duration: 0.55, ease: "power3.inOut" },
          0.25
        );
      if (tagP) {
        tl.to(
          tagP,
          { yPercent: 0, duration: 0.55, ease: "power3.inOut" },
          0.25
        );
      }
    } else if (hasBeenOpened.current) {
      if (tagP) {
        tl.to(tagP, {
          yPercent: -110,
          duration: 0.3,
          ease: "power2.in",
        });
      }
      tl.to(
        links,
        {
          yPercent: -110,
          stagger: 0.02,
          duration: 0.3,
          ease: "power2.in",
        },
        taglineRef.current ? "-=0.2" : 0
      ).to(
        bgRef.current,
        { y: "-100%", duration: 0.5, ease: "power3.inOut" },
        "-=0.15"
      ).set(links, { visibility: "hidden" })
       .set(tagP ? [tagP] : [], { visibility: "hidden" });
    }
  }, [menuOpen]);

  // Clean up GSAP on resize to desktop
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    function handleChange(e) {
      if (!e.matches) {
        menuItemRefs.current.forEach((el) => {
          if (el) {
            gsap.set(el, { clearProps: "all" });
            const a = el.querySelector("a");
            if (a) gsap.set(a, { clearProps: "all" });
          }
        });
        if (bgRef.current) gsap.set(bgRef.current, { clearProps: "all" });
        const tagP = taglineRef.current?.querySelector("p");
        if (tagP) gsap.set(tagP, { clearProps: "all" });
        setMenuOpen(false);
        hasBeenOpened.current = false;
      }
    }
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  const studioLine = footer.columns.studio.lines.join(" \u00B7 ");
  const emailLink = footer.columns.connect.links.find((l) =>
    l.href?.startsWith("mailto:")
  );
  const emailLabel = emailLink?.label ?? "";

  const headerClass = [
    styles.header,
    variant !== "default" ? styles[variant] : "",
    hidden && !menuOpen ? styles.hidden : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header ref={containerRef} className={headerClass}>
      <div className={styles.grid}>
        {/* Logo */}
        <div className={styles.logoWrap}>
          <Link href={wordmark.href} className={styles.logo}>
            <span className={styles.clip}>
              <span ref={logoRef} className={styles.logoInner}>
                {wordmark.text}
                {wordmark.registeredMark && (
                  <span aria-hidden="true">{"\u00AE"}</span>
                )}
              </span>
            </span>
          </Link>
        </div>

        {/* Nav */}
        <nav className={styles.nav} aria-label="Primary">
          <div
            className={`${styles.menuWrap} ${menuOpen ? styles.menuWrapOpen : ""}`}
          >
            <div ref={bgRef} className={styles.menuBg} />
            <ul className={styles.menuLinks}>
              <li
                ref={(el) => (menuItemRefs.current[0] = el)}
                className={`${styles.linkWrap} ${styles.mobileOnly}`}
              >
                <Link
                  href="/"
                  className={`${styles.link} ${isActive("/") ? styles.active : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className={styles.clip}>
                    <span>Home</span>
                  </span>
                </Link>
              </li>
              {nav.links.map((link, i) => (
                <li
                  key={link.href}
                  ref={(el) => (menuItemRefs.current[i + 1] = el)}
                  className={styles.linkWrap}
                >
                  <Link
                    href={link.href}
                    className={`${styles.link} ${isActive(link.href) ? styles.active : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className={styles.clip}>
                      <span ref={(el) => (linkRefs.current[i] = el)}>
                        {link.label}
                      </span>
                    </span>
                    {link.href === "/work" && (
                      <span
                        className={`${styles.count} ${styles.mobileOnly}`}
                        aria-label={`${WORK_COUNT} projects`}
                      >
                        {String(WORK_COUNT).padStart(2, "0")}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              ref={taglineRef}
              className={`${styles.tagline} ${styles.mobileOnly}`}
            >
              <p>
                {footer.columns.studio.lines[0]} {footer.columns.studio.lines[2]}
              </p>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <div className={styles.menuTxtWrap}>
              <div
                className={`${styles.closeTxt} ${menuOpen ? styles.closeTxtVisible : ""}`}
              >
                Close
              </div>
              <div
                className={`${styles.menuTxt} ${menuOpen ? styles.menuTxtHidden : ""}`}
              >
                <span className={styles.clip}>
                  <span ref={menuBtnRef}>Menu&nbsp;+</span>
                </span>
              </div>
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
}
