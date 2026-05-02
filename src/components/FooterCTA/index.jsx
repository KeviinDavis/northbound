import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import styles from "./FooterCTA.module.css";

export default function FooterCTA({ footerCTA, email }) {
  return (
    <Section variant="default">
      <Container>
        <div className={styles.block}>
          <p className={`text-tagline ${styles.eyebrow}`}>
            &mdash; {footerCTA.eyebrow}
          </p>

          <h2 className={styles.headlineMobile}>{footerCTA.headline.mobile}</h2>
          <h2 className={styles.headlineDesktop}>{footerCTA.headline.desktop}</h2>

          <div className={styles.ctaRow}>
            <Button variant="primary" as={Link} href={footerCTA.cta.href} className={styles.ctaButton}>
              {footerCTA.cta.label} &rarr;
            </Button>
            <a className={`text-tagline ${styles.email}`} href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
