import Header from '@/components/layout/Header';
import PageHeaderEditorial from '@/components/PageHeaderEditorial';
import WorkView from '@/components/WorkView';
import { pageHeader, projects } from '@/docs/content/work';

export default function Work() {
  return (
    <>
      <Header />
      {/* <PageHeaderEditorial pageHeader={pageHeader} /> */}
      <WorkView projects={projects} />
    </>
  );
}
