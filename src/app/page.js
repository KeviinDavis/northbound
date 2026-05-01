import HeroEditorial from "@/components/HeroEditorial";
import FeaturedProjectFull from "@/components/FeaturedProjectFull";
import ProjectTile from "@/components/ProjectTile";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { hero, featuredFull, featuredGrid } from "@/docs/content/home";

export default function Home() {
  return (
    <>
      <HeroEditorial content={hero} />
      <FeaturedProjectFull content={featuredFull} />
      <Section>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 30rem), 1fr))", gap: "var(--space-4xl)" }}>
            {featuredGrid.projects.map((project) => (
              <ProjectTile key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}