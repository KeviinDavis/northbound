import HeroEditorial from "@/components/HeroEditorial";
import FeaturedProjectFull from "@/components/FeaturedProjectFull";
import FeaturedProjectGrid from "@/components/FeaturedProjectGrid";
import AboutSplit from "@/components/AboutSplit";
// import LogoWallDense from "@/components/LogoWallDense";
import LogoWallCycle from "@/components/LogoWallCycle";
import AwardsTable from "@/components/AwardsTable";
import JournalPreviewGrid from "@/components/JournalPreviewGrid";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { hero, featuredFull, featuredGrid, aboutPreview, logoWall, logoWallCycle, awards, journalPreview } from "@/docs/content/home";

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
      {/* <LogoWallDense content={logoWall} /> */}
      <LogoWallCycle content={logoWallCycle} />
      <Section>
        <Container>
          <AwardsTable content={awards} />
        </Container>
      </Section>
      <Section>
        <Container>
          <JournalPreviewGrid content={journalPreview} />
        </Container>
      </Section>
    </>
  );
}