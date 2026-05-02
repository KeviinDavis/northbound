import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import styles from "./ServiceBlockSplit.module.css";

export default function ServiceBlockSplit({ service, imageSide = "right", placeholderLabel }) {
  const sideClass = imageSide === "left" ? styles.imageLeft : styles.imageRight;

  return (
    <Section variant="default">
      <Container>
        <article className={`${styles.block} ${sideClass}`}>
          <div className={styles.imageColumn}>
            <div className={styles.placeholder}>
              <span className={`text-tagline ${styles.placeholderLabel}`}>
                {placeholderLabel}
              </span>
            </div>
          </div>

          <div className={styles.copyColumn}>
            <p className={`text-tagline ${styles.eyebrow}`}>
              {service.eyebrow}
            </p>

            <h2 className={styles.headlineDesktop}>{service.headline.desktop}</h2>
            <h2 className={styles.headlineMobile}>{service.headline.mobile}</h2>

            <p className={styles.body}>{service.body}</p>

            <ul className={styles.capabilities}>
              {service.capabilities.map((cap, i) => (
                <li key={i} className={styles.capabilityRow}>
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Container>
    </Section>
  );
}
