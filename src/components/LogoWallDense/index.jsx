import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import styles from "./LogoWallDense.module.css";

export default function LogoWallDense({ content }) {
  return (
    <Section variant="default">
      <Container>
        <p className={`text-tagline ${styles.eyebrow}`}>{content.eyebrow}</p>
        <ul className={styles.grid}>
          {content.logos.map((logo, i) => (
            <li key={logo.slug} className={styles.cell}>
              <span className={`text-tagline ${styles.index}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.name}>{logo.name}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
