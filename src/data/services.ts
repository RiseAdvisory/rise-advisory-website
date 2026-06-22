// Service offerings — rendered in the Services section and used for the page's
// structured data, so the list is defined once here.
export interface Service {
  title: string;
  audience: string;
  body: string;
}

export const services: Service[] = [
  {
    title: 'Business Consultation',
    audience: 'For businesses',
    body: 'Guidance on the decisions that shape your business, from growth plans to day-to-day operations.',
  },
  {
    title: 'Business Inspection',
    audience: 'For businesses',
    body: 'A thorough review before you buy a business, so you know exactly what you would be taking on.',
  },
  {
    title: 'Business Assessment',
    audience: 'For businesses',
    body: 'We identify the issues holding your business back and set out practical solutions you can prioritize.',
  },
  {
    title: 'Personal Financial Planning',
    audience: 'For individuals',
    body: 'A plan that protects your future without giving up the things that matter to you today.',
  },
  {
    title: 'Investment Review',
    audience: 'For individuals',
    body: 'A professional review of your portfolio before you make your next decision.',
  },
];
