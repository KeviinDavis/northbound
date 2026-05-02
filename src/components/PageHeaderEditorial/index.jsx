import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import styles from './PageHeaderEditorial.module.css';

export default function PageHeaderEditorial({ pageHeader }) {
  return (
    <Section variant="default">
      <Container variant="default">
        <header className={styles.header}>
          <div className={`text-tagline ${styles.eyebrow}`}>
            <span>{pageHeader.eyebrow.left}</span>
            {pageHeader.eyebrow.right && (
              <span>
                <span className={styles.eyebrowRightDesktop}>
                  {pageHeader.eyebrow.right.desktop}
                </span>
                <span className={styles.eyebrowRightMobile}>
                  {pageHeader.eyebrow.right.mobile}
                </span>
              </span>
            )}
          </div>

          <h1 className={styles.headlineMobile}>
            {pageHeader.headline.mobile}
          </h1>
          <h1 className={styles.headlineDesktop}>
            {pageHeader.headline.desktop}
          </h1>

          <p className={styles.subParagraph}>{pageHeader.subParagraph}</p>
        </header>
      </Container>
    </Section>
  );
}
