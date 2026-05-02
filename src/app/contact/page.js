import Header from '@/components/layout/Header';
import PageHeaderEditorial from '@/components/PageHeaderEditorial';
import ContactFormBlock from '@/components/ContactFormBlock';
import TextBlockNarrow from '@/components/TextBlockNarrow';

import { pageHeader, contactForm, studioInfo, closingNote } from '@/docs/content/contact';

export default function Contact() {
  return (
    <>
      <Header />
      <PageHeaderEditorial pageHeader={pageHeader} />
      <ContactFormBlock contactForm={contactForm} studioInfo={studioInfo} />
      <TextBlockNarrow block={closingNote} />
    </>
  );
}
