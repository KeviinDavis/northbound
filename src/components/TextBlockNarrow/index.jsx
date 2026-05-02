import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import styles from "./TextBlockNarrow.module.css";

export default function TextBlockNarrow({ block }) {
  return (
    <Section variant="default">
      <Container variant="narrow">
        <div className={styles.block}>
          <p className={`text-tagline ${styles.eyebrow}`}>
            — {block.eyebrow}
          </p>
          <h2 className={styles.headlineDesktop}>{block.headline.desktop}</h2>
          <h2 className={styles.headlineMobile}>{block.headline.mobile}</h2>
          <p className={styles.body}>{block.body}</p>
        </div>
      </Container>
    </Section>
  );
}
