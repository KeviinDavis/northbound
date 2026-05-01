import Link from "next/link";
import Media from "@/components/ui/Media";
import styles from "./AboutSplit.module.css";

export default function AboutSplit({ content }) {
  const imageRight = content.imageSide !== "left";

  return (
    <div className={`${styles.grid} ${imageRight ? styles.imageRight : styles.imageLeft}`}>
      <div className={styles.imageBlock}>
        {content.image ? (
          <Media
            src={content.image}
            alt={content.headline.desktop}
            fill
          />
        ) : null}
        {content.imageMeta && (
          <span className={`text-tagline ${styles.imageMeta}`}>
            {content.imageMeta}
          </span>
        )}
        {content.imageCaption && (
          <p className={styles.imageCaption}>{content.imageCaption}</p>
        )}
      </div>

      <div className={styles.copy}>
        <p className={`text-tagline ${styles.eyebrow}`}>
          &mdash; {content.eyebrow}
        </p>
        <h2 className={styles.headline}>
          <span className={styles.headlineDesktop}>
            {content.headline.desktop}
          </span>
          <span className={styles.headlineMobile}>
            {content.headline.mobile}
          </span>
        </h2>
        <div className={styles.body}>
          {content.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        {content.cta && (
          <Link href={content.cta.href} className={styles.cta}>
            {content.cta.label.replace(" →", "")} <span className={styles.arrow}>&rarr;</span>
          </Link>
        )}
      </div>
    </div>
  );
}
