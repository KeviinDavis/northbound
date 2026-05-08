import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Media from "@/components/ui/Media";
import ProjectMeta from "@/components/ProjectMeta";
import MediaGrid from "@/components/MediaGrid";
import FooterCTA from "@/components/FooterCTA";
import SplitInsight from "./_components/SplitInsight";
import { footerCTA, footer } from "@/docs/content/site";
import styles from "./page.module.css";

const projectModules = {
  cordilline: () => import("@/content/projects/cordilline"),
};

async function getProject(slug) {
  const loader = projectModules[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.project;
}

export function generateStaticParams() {
  return Object.keys(projectModules).map((slug) => ({ slug }));
}

const email = footer.columns.connect.links.find((l) =>
  l.href?.startsWith("mailto:")
)?.label;

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  return (
    <>
      {/* Section 01 — Site Header */}
      <Header variant="overlay" />

      {/* Section 02 — Project Header */}
      <Section variant="default" className={styles.headerSection}>
        <Container variant="default">
          <Link href="/work" className={styles.backLink}>
            &larr; All Work
          </Link>
          <hr className={styles.divider} />
          <div className={styles.headerGrid}>
            <p className={styles.headerLabel}>{project.header.label}</p>
            <div className={styles.headerContent}>
              <h1 className={styles.headline}>{project.header.headline}</h1>
              <p className={styles.tagline}>
                {project.header.tagline.map((line, i) => (
                  <span key={i} className={styles.taglineLine}>{line}</span>
                ))}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 03 — Hero Media */}
      <Section variant="default" className={styles.heroSection}>
        <Container variant="default">
          <Media
            type="image"
            src={project.heroMedia.src}
            alt={project.heroMedia.alt}
            fill
            aspectRatio="16/9"
            priority
          />
        </Container>
      </Section>

      {/* Section 05 — Meta + Intro */}
      <Section variant="default">
        <Container variant="default">
          <div className={styles.metaIntroGrid}>
            <ProjectMeta meta={project.meta} />
            <div className={styles.introBody}>
              {project.intro.body.map((text, i) => (
                <p
                  key={i}
                  className={
                    i < project.intro.body.length - 1
                      ? styles.introParagraph
                      : undefined
                  }
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 06 — Image Pair */}
      <Section variant="default" className={styles.imagePairSection}>
        <Container variant="default">
          <div className={styles.imagePairStack}>
            <Media
              type="image"
              src={project.imagePair[0].src}
              alt={project.imagePair[0].alt}
              fill
              aspectRatio="16/9"
            />
            <Media
              type="image"
              src={project.imagePair[1].src}
              alt={project.imagePair[1].alt}
              fill
              aspectRatio="16/9"
            />
          </div>
        </Container>
      </Section>

      {/* Section 08 — Insight 03 · Customer (full-bleed) */}
      <Section variant="default">
        <Container variant="default">
          <h2 className={styles.insightHeadlineDesktop}>
            {project.insights[2].headline.desktop}
          </h2>
          <h2 className={styles.insightHeadlineMobile}>
            {project.insights[2].headline.mobile}
          </h2>
          <p className={styles.insightBody}>{project.insights[2].body}</p>
        </Container>
        <div className={styles.fullBleedMedia}>
          <Media
            type="image"
            src={project.insights[2].media.src}
            alt={project.insights[2].media.alt}
            fill
            aspectRatio="16/9"
          />
        </div>
      </Section>

      {/* Section 09 — Pull Quote */}
      <Section variant="default">
        <Container variant="narrow">
          <p className={styles.pullQuote}>{project.pullQuote.body}</p>
        </Container>
      </Section>

      {/* Section 10 — Identity Showcase */}
      <Section variant="secondary">
        <Container variant="default">
          <h2 className={styles.sectionHeadlineDesktop}>
            {project.identityShowcase.headline.desktop}
          </h2>
          <h2 className={styles.sectionHeadlineMobile}>
            {project.identityShowcase.headline.mobile}
          </h2>
          <MediaGrid
            cols={project.identityShowcase.cols}
            items={project.identityShowcase.items}
          />
        </Container>
      </Section>

      {/* Section 11 — Insight 04 · Voice */}
      <SplitInsight insight={project.insights[3]} />

      {/* Section 12 — Insight 05 · Craft */}
      <SplitInsight insight={project.insights[4]} />

      {/* Section 13 — Range */}
      <Section variant="default">
        <Container variant="default">
          <h2 className={styles.sectionHeadlineDesktop}>
            {project.range.headline.desktop}
          </h2>
          <h2 className={styles.sectionHeadlineMobile}>
            {project.range.headline.mobile}
          </h2>
          <MediaGrid
            cols={project.range.cols}
            items={project.range.items}
          />
        </Container>
      </Section>

      {/* Section 14 — Closing Line */}
      <Section variant="default">
        <Container variant="narrow">
          <p className={styles.closingLine}>{project.closingLine.body}</p>
        </Container>
      </Section>

      {/* Section 15 — Footer CTA */}
      <FooterCTA footerCTA={footerCTA} email={email} />
    </>
  );
}
