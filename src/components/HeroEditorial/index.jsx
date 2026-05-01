import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import styles from "./HeroEditorial.module.css";

export default function HeroEditorial({ content }) {
  return (
    <Section variant="hero">
      <div aria-hidden="true" />
      <Container variant="default">
        <header className={styles.root}>
          <p className={`text-tagline ${styles.eyebrow}`}>
            {content.eyebrow}
          </p>
          <h1 className={styles.headline}>
            <span className={styles.headlineDesktop}>
              {content.headline.desktop}
            </span>
            <span className={styles.headlineMobile}>
              {content.headline.mobile}
            </span>
          </h1>
          <p className={styles.subHeadline}>{content.subHeadline}</p>
          <div className={styles.content}>
            <p className={styles.body}>{content.body}</p>
            <div className={styles.ctaGroup}>
              <Button as={Link} href={content.ctas[0].href} variant="primary">
                See the work <span className={styles.arrow}>→</span>
              </Button>
              <Link href={content.ctas[1].href} className={styles.ctaLink}>
                What we do <span className={styles.arrow}>→</span>
              </Link>
            </div>
          </div>
        </header>
      </Container>
    </Section>
  );
}
