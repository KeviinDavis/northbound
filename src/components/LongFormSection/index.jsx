import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import styles from "./LongFormSection.module.css";

export default function LongFormSection({ studioOrigin, sectionVariant = "default" }) {
  return (
    <Section variant={sectionVariant}>
      <Container variant="narrow">
        <article className={styles.article}>
          <header>
            <h2 className={styles.headlineDesktop}>
              {studioOrigin.headline.desktop}
            </h2>
            <h2 className={styles.headlineMobile}>
              {studioOrigin.headline.mobile}
            </h2>
          </header>
          <div className={styles.body}>
            {studioOrigin.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </article>
      </Container>
    </Section>
  );
}
