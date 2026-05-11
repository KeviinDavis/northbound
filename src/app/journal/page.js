import Header from '@/components/layout/Header';
import PageHeaderEditorial from '@/components/PageHeaderEditorial';
import FadeIn from '@/components/FadeIn';
import JournalPreviewGrid from '@/components/JournalPreviewGrid';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import FooterCTA from "@/components/FooterCTA";



import { pageHeader, articles } from '@/docs/content/journal';
import { footerCTA, footer } from '@/docs/content/site';

export default function Journal() {
  return (
    <>
      <Header />
      <PageHeaderEditorial pageHeader={pageHeader} />
      <FadeIn>
      <Section>
        <Container>
          <JournalPreviewGrid
            content={{
              headline: pageHeader.headline,
              articles,
              cols: 2,
              showExcerpt: true,
            }}
          />
        </Container>
      </Section>
      </FadeIn>
      <FooterCTA footerCTA={footerCTA} email={footer.columns.connect.links.find(l => l.href?.startsWith('mailto:'))?.label} />
      
    </>
  );
}
