import Header from '@/components/layout/Header';
import PageHeaderEditorial from '@/components/PageHeaderEditorial';

import { pageHeader } from '@/docs/content/about';

export default function About() {
  return (
    <>
      <Header />
      <PageHeaderEditorial pageHeader={pageHeader} />
    </>
  );
}
