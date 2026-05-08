import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Media from "@/components/ui/Media";
import styles from "./SplitInsight.module.css";

export default function SplitInsight({ insight }) {
  return (
    <Section variant="default">
      <Container variant="default">
        <div className={styles.grid}>
          <div className={styles.copy}>
            <h2 className={styles.headlineDesktop}>
              {insight.headline.desktop}
            </h2>
            <h2 className={styles.headlineMobile}>
              {insight.headline.mobile}
            </h2>
            <p className={styles.body}>{insight.body}</p>
          </div>
          <div className={styles.media}>
            <Media
              type="image"
              src={insight.media.src}
              alt={insight.media.alt}
              fill
              aspectRatio="4/5"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
