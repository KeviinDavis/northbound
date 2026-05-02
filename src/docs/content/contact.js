// src/content/contact.js
// Northbound — Contact page copy
// Source of truth: Northbound_Site_Copy_v2.md, §9 (Contact)
//
// Consumers: PageHeaderEditorial, ContactFormBlock, TextBlockNarrow.

// Component: PageHeaderEditorial
export const pageHeader = {
  eyebrow: '06 \u00B7 CONTACT',
  headline: {
    desktop: 'TELL US ABOUT THE PROJECT.',
    mobile: 'TELL US ABOUT THE PROJECT.',
  },
  subParagraph:
    'Northbound takes on roughly twelve projects a year. If you\u2019re working on something in the outdoors \u2014 a brand, a relaunch, a digital build \u2014 we\u2019d like to hear about it.',
}

// Component: ContactFormBlock
// §9.2 — Two columns on desktop: form left, studio info right.
export const contactForm = {
  fields: [
    { name: 'name', label: 'Your name', type: 'text', required: true },
    { name: 'company', label: 'Company', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    {
      name: 'companyType',
      label: 'What kind of company is it?',
      type: 'select',
      required: false,
      options: [
        'Gear / hardgoods',
        'Apparel',
        'Guide service / outfitter',
        'Retail',
        'Outdoor media',
        'Nonprofit',
        'Other',
      ],
    },
    { name: 'message', label: 'What are you working on?', type: 'textarea', required: true },
    {
      name: 'budget',
      label: 'Approximate budget',
      type: 'select',
      required: false,
      options: [
        'Under $25K',
        '$25K \u2013 $50K',
        '$50K \u2013 $100K',
        '$100K+',
        'Not sure yet',
      ],
    },
    { name: 'timeline', label: 'Timeline', type: 'text', required: false },
  ],
  submitLabel: 'Send the brief',
}

// Studio info — right column of the contact form layout.
export const studioInfo = {
  studio: {
    label: 'Studio',
    lines: ['Northbound \u00AE', 'Northeast Portland, Oregon'],
  },
  direct: {
    label: 'Direct',
    email: 'hello@northbound.studio',
  },
  press: {
    label: 'Press',
    email: 'press@northbound.studio',
  },
  social: {
    label: 'Social',
    links: [
      { label: 'Instagram', href: null }, // TODO: confirm Instagram URL
      { label: 'LinkedIn', href: null }, // TODO: confirm LinkedIn URL
    ],
  },
}

// Component: TextBlockNarrow
// §9.3 — Quiet send-off below the form.
export const closingNote = {
  eyebrow: 'NEXT',
  headline: {
    desktop: 'What happens next.',
    mobile: 'What happens next.',
  },
  body:
    'We read every brief that comes through. If the project is a fit, we\u2019ll get back to you within a week with a few questions and next steps. If it\u2019s not, we\u2019ll tell you that too \u2014 and try to point you toward someone who\u2019d be a better match.',
}
