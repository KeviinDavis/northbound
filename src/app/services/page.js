import Header from '@/components/layout/Header';
import PageHeaderEditorial from '@/components/PageHeaderEditorial';

import { pageHeader } from '@/docs/content/services';

export default function Services() {
  return (
    <>
      <Header />
      <PageHeaderEditorial pageHeader={pageHeader} />
    </>
  );
}
