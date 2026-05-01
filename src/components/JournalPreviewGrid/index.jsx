import Link from "next/link";
import JournalCard from "@/components/JournalCard";
import styles from "./JournalPreviewGrid.module.css";

export default function JournalPreviewGrid({ content }) {
  const { cols = 3, showExcerpt = false, articles, cta } = content;

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <p className={`text-tagline ${styles.eyebrow}`}>
          &mdash; {content.eyebrow}
        </p>
        <div className={styles.headlineRow}>
          <h2 className={styles.headline}>
            <span className={styles.headlineDesktop}>
              {content.headline.desktop}
            </span>
            <span className={styles.headlineMobile}>
              {content.headline.mobile}
            </span>
          </h2>
          {cta && (
            <Link href={cta.href} className={styles.cta}>
              {cta.label}
            </Link>
          )}
        </div>
      </div>

      <div className={`${styles.grid} ${styles[`cols${cols}`]}`}>
        {articles.map((article) => (
          <JournalCard
            key={article.slug}
            article={article}
            showExcerpt={showExcerpt}
          />
        ))}
      </div>
    </div>
  );
}
