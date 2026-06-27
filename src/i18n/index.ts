import en from './en';
import ar from './ar';

export type Lang = 'en' | 'ar';

export interface ServiceItem {
  title: string;
  audience: string;
  body: string;
}
export interface StepItem {
  number: string;
  title: string;
  body: string;
}
export interface NamedItem {
  title: string;
  body: string;
}
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}
export interface FaqItem {
  question: string;
  answer: string;
}

export interface Content {
  meta: { title: string; description: string };
  nav: {
    about: string;
    strengths: string;
    approach: string;
    services: string;
    clients: string;
    getInTouch: string;
  };
  hero: { h1: string; body: string; ctaPrimary: string; ctaSecondary: string };
  about: {
    eyebrow: string;
    h2: string;
    p1: string;
    p2: string;
    visionLabel: string;
    vision: string;
    missionLabel: string;
    mission: string;
  };
  strengths: { eyebrow: string; h2: string; lead: string; items: NamedItem[] };
  approach: { eyebrow: string; h2: string; steps: StepItem[] };
  services: {
    eyebrow: string;
    h2: string;
    items: ServiceItem[];
    ctaLead: string;
    ctaLink: string;
    ctaTail: string;
  };
  values: { h2: string; items: NamedItem[] };
  testimonials: { eyebrow: string; h2: string; items: Testimonial[] };
  faq: { eyebrow: string; h2: string; items: FaqItem[] };
  contact: {
    h2: string;
    intro: string;
    emailLabel: string;
    emailLead: string;
    officeLabel: string;
    addressLines: string[];
  };
  footer: { brand: string; blurb: string; rights: string };
}

export const content: Record<Lang, Content> = { en, ar };

// Per-locale presentation config
export const locales: Record<
  Lang,
  { dir: 'ltr' | 'rtl'; htmlLang: string; label: string; switchLabel: string; path: string }
> = {
  en: { dir: 'ltr', htmlLang: 'en', label: 'English', switchLabel: 'عربي', path: '/' },
  ar: { dir: 'rtl', htmlLang: 'ar', label: 'العربية', switchLabel: 'EN', path: '/ar/' },
};

export const otherLang: Record<Lang, Lang> = { en: 'ar', ar: 'en' };
