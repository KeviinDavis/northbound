import Header from '@/components/layout/Header';
import PageHeaderEditorial from '@/components/PageHeaderEditorial';
import ServiceBlockSplit from '@/components/ServiceBlockSplit';

import { pageHeader, serviceBranding, serviceIdentityPrint, serviceDigital } from '@/docs/content/services';

export default function Services() {
  return (
    <>
      <Header />
      <PageHeaderEditorial pageHeader={pageHeader} />
      <ServiceBlockSplit service={serviceBranding} imageSide="right" placeholderLabel="BRAND SYSTEM — ARTIFACTS" />
      <ServiceBlockSplit service={serviceIdentityPrint} imageSide="left" placeholderLabel="IDENTITY & PRINT — ARTIFACTS" />
      <ServiceBlockSplit service={serviceDigital} imageSide="right" placeholderLabel="DIGITAL — SITE SYSTEMS" />
    </>
  );
}
