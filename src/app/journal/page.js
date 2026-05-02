import Header from '@/components/layout/Header';
import PageHeaderEditorial from '@/components/PageHeaderEditorial';
import JournalPreviewGrid from '@/components/JournalPreviewGrid';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';

import { pageHeader, articles } from '@/docs/content/journal';

export default function Journal() {
  return (
    <>
      <Header />
      <PageHeaderEditorial pageHeader={pageHeader} />
      <Section>
        <Container>
          <JournalPreviewGrid
            content={{
              eyebrow: pageHeader.eyebrow,
              headline: pageHeader.headline,
              articles,
              cols: 2,
              showExcerpt: true,
            }}
          />
        </Container>
      </Section>
    </>
  );
}
