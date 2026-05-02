import Header from '@/components/layout/Header';
import PageHeaderEditorial from '@/components/PageHeaderEditorial';
import LongFormSection from "@/components/LongFormSection";
import AboutSplit from "@/components/AboutSplit";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import FooterCTA from "@/components/FooterCTA";

import { pageHeader, studioOrigin, founder } from '@/docs/content/about';
import { footerCTA, footer } from '@/docs/content/site';


export default function About() {
  return (
    <div style={{ backgroundColor: 'var(--color-muted)' }}>
      <Header variant="muted" />
      <PageHeaderEditorial pageHeader={pageHeader} sectionVariant="muted" />
      <LongFormSection studioOrigin={studioOrigin} sectionVariant="muted" />
      <Section variant="muted">
        <Container>
          <AboutSplit content={{ ...founder, image: founder.portrait?.src ?? null, imageSide: "left", mobileImageFirst: true }} />
        </Container>
      </Section>
      <FooterCTA footerCTA={footerCTA} email={footer.columns.connect.links.find(l => l.href?.startsWith('mailto:'))?.label} />
    </div>
  );
}
