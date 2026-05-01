import HeroEditorial from "@/components/HeroEditorial";
import FeaturedProjectFull from "@/components/FeaturedProjectFull";
import FeaturedProjectGrid from "@/components/FeaturedProjectGrid";
import AboutSplit from "@/components/AboutSplit";
import LogoWallDense from "@/components/LogoWallDense";
import AwardsTable from "@/components/AwardsTable";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { hero, featuredFull, featuredGrid, aboutPreview, logoWall, awards } from "@/docs/content/home";

export default function Home() {
  return (
    <>
      <HeroEditorial content={hero} />
      <FeaturedProjectFull content={featuredFull} />
      <Section>
        <Container>
          <FeaturedProjectGrid cols={featuredGrid.cols} projects={featuredGrid.projects} />
        </Container>
      </Section>
      <Section>
        <Container>
          <AboutSplit content={aboutPreview} />
        </Container>
      </Section>
      <LogoWallDense content={logoWall} />
      <Section>
        <Container>
          <AwardsTable content={awards} />
        </Container>
      </Section>
    </>
  );
}