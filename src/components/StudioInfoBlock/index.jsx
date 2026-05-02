import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import styles from "./StudioInfoBlock.module.css";

export default function StudioInfoBlock({ studioColophon, sectionVariant = "default" }) {
  const { headline, location, team, recognition } = studioColophon;

  return (
    <Section variant={sectionVariant}>
      <Container variant="default">
        <header className={styles.header}>
          {headline && <h2 className={styles.headline}>{headline}</h2>}
        </header>

        <dl className={styles.columns}>
          <div className={styles.block}>
            <dt className={`text-tagline ${styles.label}`}>{team.label}</dt>
            {team.lines.map((line, i) => (
              <dd key={i} className={styles.line}>{line}</dd>
            ))}
          </div>

          <div className={styles.block}>
            <dt className={`text-tagline ${styles.label}`}>{location.label}</dt>
            {location.lines.map((line, i) => (
              <dd key={i} className={styles.line}>{line}</dd>
            ))}
          </div>

          <div className={styles.block}>
            <dt className={`text-tagline ${styles.label}`}>{recognition.label}</dt>
            {recognition.lines.map((line, i) => (
              <dd key={i} className={styles.line}>{line}</dd>
            ))}
          </div>
        </dl>
      </Container>
    </Section>
  );
}
