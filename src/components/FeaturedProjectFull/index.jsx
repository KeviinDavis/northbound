import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Media from "@/components/ui/Media";
import styles from "./FeaturedProjectFull.module.css";

export default function FeaturedProjectFull({ content }) {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.card}>
          {content.image ? (
            <>
              <div className={`${styles.imageLayer} ${styles.desktopImage}`}>
                <Media
                  src={content.image}
                  alt={content.name}
                  fill
                  aspectRatio="16/9"
                  priority
                />
              </div>
              {content.imageMobile && (
                <div className={`${styles.imageLayer} ${styles.mobileImage}`}>
                  <Media
                    src={content.imageMobile}
                    alt={content.name}
                    fill
                    aspectRatio="3/4"
                    priority
                  />
                </div>
              )}
            </>
          ) : null}

          <div className={styles.content}>
            <div className={styles.topRow}>
              <p className={`text-tagline ${styles.eyebrow}`}>
                FEATURED &middot; {content.year}
              </p>
              <Link href={content.cta.href} className={styles.ctaLink}>
                {content.cta.label.replace(" →", "")} <span className={styles.arrow}>&rarr;</span>
              </Link>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.cardFooterLeft}>
                <h2 className={styles.headline}>{content.name}</h2>
                <p className={styles.caption}>{content.caption}</p>
              </div>
              <p className={`text-tagline ${styles.category}`}>{content.category}</p>
            </div>
          </div>
        </div>

        <div className={styles.details}>
          <p className={`text-tagline ${styles.detailsCategory}`}>{content.category}</p>
          <p className={styles.detailsCaption}>{content.caption}</p>
          <Link href={content.cta.href} className={styles.detailsLink}>
            {content.cta.label.replace(" →", "")} <span className={styles.arrow}>&rarr;</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
