// FAQ content — rendered on the page and used for the page's structured data,
// so the questions and answers are defined once here.
export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'What does Rise Advisory do?',
    answer:
      'Rise Advisory is a business advisory firm based in Kuwait. We provide financial and business consultation for both companies and individuals, helping you improve how your business runs and plan for what comes next.',
  },
  {
    question: 'Where is Rise Advisory located?',
    answer:
      'Our office is in Kuwait, Sharq, Block 5, Parcel 41, Group A Building, Floor 9. You can reach us by email at info@rise-advisory.com.',
  },
  {
    question: 'What services does Rise Advisory offer?',
    answer:
      'We offer Business Consultation, Business Inspection (pre-purchase reviews), Business Assessment (identifying issues and solutions), Personal Financial Planning, and Investment Review. We work with both businesses and individuals.',
  },
  {
    question: 'Can Rise Advisory help me before I buy a business?',
    answer:
      'Yes. Our Business Inspection is a thorough review carried out before you buy a business, so you know exactly what you would be taking on.',
  },
  {
    question: 'How does working with Rise Advisory begin?',
    answer:
      'Every engagement begins with a conversation. We start by listening to understand your goals and concerns, then diagnose the real issue, recommend prioritized solutions in plain language, and follow through while you put the plan in place.',
  },
  {
    question: 'How can I get in touch with Rise Advisory?',
    answer:
      'The best way to reach us is by email at info@rise-advisory.com. Write to us about what you are dealing with, and we will let you know whether and how we can help.',
  },
];
