import Header from '@/components/layout/Header';
import PageHeaderEditorial from '@/components/PageHeaderEditorial';
import FadeIn from '@/components/FadeIn';
import ContactFormBlock from '@/components/ContactFormBlock';
import TextBlockNarrow from '@/components/TextBlockNarrow';

import { pageHeader, contactForm, studioInfo, closingNote } from '@/docs/content/contact';

export default function Contact() {
  return (
    <>
      <Header />
      <PageHeaderEditorial pageHeader={pageHeader} />
      <FadeIn>
        <ContactFormBlock contactForm={contactForm} studioInfo={studioInfo} />
      </FadeIn>
      <TextBlockNarrow block={closingNote} />
    </>
  );
}
