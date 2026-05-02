import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import styles from "./BeliefsList.module.css";

export default function BeliefsList({ beliefs, sectionVariant = "default" }) {
  return (
    <Section variant={sectionVariant}>
      <Container variant="default">
        <header className={styles.header}>
          <p className={`text-tagline ${styles.eyebrow}`}>
            — {beliefs.eyebrow}
          </p>
          <h2 className={styles.headlineDesktop}>{beliefs.headline.desktop}</h2>
          <h2 className={styles.headlineMobile}>{beliefs.headline.mobile}</h2>
        </header>

        <ol className={styles.list}>
          {beliefs.items.map((item) => (
            <li key={item.number} className={styles.belief}>
              <span className={`text-tagline ${styles.number}`}>
                {item.number}
              </span>

              <div className={styles.content}>
                <h3 className={styles.titleDesktop}>{item.title}</h3>
                <h3 className={styles.titleMobile}>
                  {item.number} — {item.title}
                </h3>
                <p className={styles.body}>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
