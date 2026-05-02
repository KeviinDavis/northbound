import Header from '@/components/layout/Header';
import PageHeaderEditorial from '@/components/PageHeaderEditorial';
import WorkView from '@/components/WorkView';
import FooterCTA from '@/components/FooterCTA';

import { pageHeader, projects } from '@/docs/content/work';
import { footerCTA, footer } from '@/docs/content/site';

export default function Work() {
  return (
    <>
      <Header />
      {/* <PageHeaderEditorial pageHeader={pageHeader} /> */}
      <WorkView projects={projects} />
      <FooterCTA footerCTA={footerCTA} email={footer.columns.connect.links.find(l => l.href?.startsWith('mailto:'))?.label} />

    </>
  );
}
