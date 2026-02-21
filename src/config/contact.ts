/**
 * Contact Page Configuration
 *
 * @description
 * Contact information for Developero.
 */

import type { ContactInfo, ContactMethod, ContactFAQ } from '../lib/types';

/** Contact information used across contact page and legal pages */
export const contact: ContactInfo = {
  email: 'contact@develope.ro',
  supportEmail: 'contact@develope.ro',
  salesEmail: 'contact@develope.ro',
  address: {
    street: '',
    city: '',
    state: '',
    zip: '',
    country: 'România',
  },
};

/** Contact methods displayed on the contact page */
export const contactMethods: ContactMethod[] = [
  {
    icon: 'lucide:mail',
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
];

/** FAQ items displayed on the contact page */
export const contactFAQs: ContactFAQ[] = [
  {
    question: 'Care este termenul de răspuns?',
    answer: 'Răspundem la majoritatea solicitărilor în 24–48 de ore în zilele lucrătoare.',
  },
  {
    question: 'Oferiți suport telefonic?',
    answer: 'Putem stabili apeluri sau întâlniri online după ce ne contactați prin email.',
  },
  {
    question: 'Cum obțin o ofertă?',
    answer: 'Completați formularul de contact sau trimiteți-ne un email cu cerințele dvs. și vă trimitem o ofertă personalizată.',
  },
];
