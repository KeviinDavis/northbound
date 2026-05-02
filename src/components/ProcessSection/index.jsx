import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import styles from "./ProcessSection.module.css";

export default function ProcessSection({ process }) {
  return (
    <Section variant="default">
      <Container variant="default">
        <header className={styles.header}>
          <p className={`text-tagline ${styles.eyebrow}`}>
            — {process.eyebrow}
          </p>
          <h2 className={styles.headlineDesktop}>{process.headline.desktop}</h2>
          <h2 className={styles.headlineMobile}>{process.headline.mobile}</h2>
        </header>

        <ol className={styles.phases}>
          {process.phases.map((phase, i) => (
            <li key={phase.number} className={styles.phase}>
              {/* Mobile: combined eyebrow "PHASE 01 · INTAKE" */}
              <p className={`text-tagline ${styles.phaseEyebrow}`}>
                Phase {phase.number} · {phase.title}
              </p>

              {/* Desktop: standalone number "01" */}
              <p className={`text-tagline ${styles.phaseNumber}`}>
                {phase.number}
              </p>

              <h3 className={styles.phaseTitle}>{phase.title}</h3>

              <p className={styles.phaseBody}>{phase.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
