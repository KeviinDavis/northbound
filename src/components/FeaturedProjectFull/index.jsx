import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Media from "@/components/ui/Media";
import styles from "./FeaturedProjectFull.module.css";

export default function FeaturedProjectFull({ content }) {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.card}>
          {content.image ? (
            <div className={styles.imageLayer}>
              <Media
                src={content.image}
                alt={content.name}
                fill
                priority
              />
            </div>
          ) : null}

          <div className={styles.content}>
            <p className={`text-tagline ${styles.eyebrow}`}>
              FEATURED &middot; {content.year}
            </p>

            <div className={styles.body}>
              <h2 className={styles.headline}>{content.name}</h2>
              <p className={styles.category}>{content.category}</p>
            </div>

            <div className={styles.footer}>
              <p className={styles.caption}>{content.caption}</p>
              <div className={styles.meta}>
                <span className={styles.year}>{content.year}</span>
                <Button as={Link} href={content.cta.href} variant="primary">
                  {content.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
