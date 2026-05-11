import Media from "@/components/ui/Media";
import styles from "./JournalCard.module.css";

export default function JournalCard({ article, aspectRatio = "4/3", showExcerpt = false }) {
  return (
    <article className={styles.root}>
      <div className={styles.imageBlock}>
        <div
          className={styles.imageInner}
          style={{ aspectRatio }}
        >
          {article.image ? (
            <Media
              type="image"
              src={article.image.src}
              alt={article.image.alt}
              fill
              aspectRatio={aspectRatio}
            />
          ) : null}
        </div>
      </div>

      <div className={styles.meta}>
        <p className={`text-tagline ${styles.eyebrow}`}>
          {`${article.category} \u00B7 ${article.date}`}
        </p>
        <h3 className={styles.headline}>{article.headline}</h3>
        {showExcerpt && article.excerpt && (
          <p className={styles.excerpt}>{article.excerpt}</p>
        )}
      </div>
    </article>
  );
}
