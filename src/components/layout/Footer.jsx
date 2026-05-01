import Link from "next/link";
import Button from "@/components/ui/Button";
import { footer, footerCTA, wordmark } from "@/docs/content/site";
import styles from "./Footer.module.css";

export default function Footer({ variant = "dark" }) {
  const { columns, bottomRow } = footer;
  const rootClass = `${styles.root}${variant === "light" ? ` ${styles.light}` : ""}`;

  return (
    <footer className={rootClass}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.wordmarkBlock}>
            <p className={`text-tagline ${styles.wordmarkEyebrow}`}>
              NORTHBOUND &reg; &middot; PORTLAND, OREGON &middot; EST. 2019
            </p>
            <p className={styles.wordmark}>
              {wordmark.text}
            </p>
          </div>

          <div className={styles.body}>
          <div className={styles.ctaColumn}>
            <h2 className={styles.ctaHeadline}>
              <span className={styles.ctaDesktop}>{footerCTA.headline.desktop}</span>
              <span className={styles.ctaMobile}>{footerCTA.headline.mobile}</span>
            </h2>
            <Button as={Link} href={footerCTA.cta.href} variant="primary" className={styles.ctaButton}>
              {footerCTA.cta.label} <span className={styles.arrow}>&rarr;</span>
            </Button>
          </div>

          <div className={styles.infoColumns}>
            <div className={styles.column}>
              <p className={`text-tagline ${styles.columnLabel}`}>
                {columns.pages.label}
              </p>
              <ul className={styles.columnList}>
                {columns.pages.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.columnLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.infoStack}>
              <div className={styles.column}>
                <p className={`text-tagline ${styles.columnLabel}`}>
                  {columns.studio.label}
                </p>
                <ul className={styles.columnList}>
                  {columns.studio.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.column}>
                <p className={`text-tagline ${styles.columnLabel}`}>
                  {columns.connect.label}
                </p>
                <ul className={styles.columnList}>
                  {columns.connect.links.map((link) => (
                    <li key={link.label}>
                      {link.href ? (
                        <a
                          href={link.href}
                          className={styles.columnLink}
                          {...(link.href.startsWith("mailto:")
                            ? {}
                            : { target: "_blank", rel: "noopener noreferrer" })}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <span>{link.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p className={`text-tagline ${styles.bottomText}`}>
            {bottomRow.left}
          </p>
          <p className={`text-tagline ${styles.bottomText}`}>
            {bottomRow.right}
          </p>
        </div>
      </div>
    </footer>
  );
}
