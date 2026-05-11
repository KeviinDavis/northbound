import Header from '@/components/layout/Header';
import PageHeaderEditorial from '@/components/PageHeaderEditorial';
import FadeIn from '@/components/FadeIn';
import ServiceBlockSplit from '@/components/ServiceBlockSplit';
import ProcessSection from '@/components/ProcessSection';
import TextBlockNarrow from '@/components/TextBlockNarrow';
import FooterCTA from '@/components/FooterCTA';


import { pageHeader, serviceBranding, serviceIdentityPrint, serviceDigital, process, engagementNote } from '@/docs/content/services';
import { footerCTA, footer } from '@/docs/content/site';

export default function Services() {
  return (
    <>
      <Header />
      <PageHeaderEditorial pageHeader={pageHeader} />
      <FadeIn>
        <ServiceBlockSplit service={serviceBranding} imageSide="right" placeholderLabel="BRAND SYSTEM — ARTIFACTS" />
      </FadeIn>
      <ServiceBlockSplit service={serviceIdentityPrint} imageSide="left" placeholderLabel="IDENTITY & PRINT — ARTIFACTS" />
      <ServiceBlockSplit service={serviceDigital} imageSide="right" placeholderLabel="DIGITAL — SITE SYSTEMS" />
      <ProcessSection process={process} />
      <TextBlockNarrow block={engagementNote} />
      {/* <FooterCTA footerCTA={footerCTA} email={footer.columns.connect.links.find(l => l.href?.startsWith('mailto:'))?.label} /> */}

    </>
  );
}
