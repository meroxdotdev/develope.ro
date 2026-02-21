/**
 * Navigation Configuration
 *
 * @description
 * Centralized navigation for Developero — site de prezentare.
 */

import type { Navigation } from '../lib/types';

export const navigation: Navigation = {
  header: {
    main: [
      { label: 'Web', href: '/servicii/web' },
      { label: 'Infrastructură', href: '/servicii/infrastructura' },
      { label: 'Externalizare IT', href: '/servicii/externalizare-it' },
      { label: 'Despre noi', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: [{ label: 'Solicită o ofertă', href: '/contact', variant: 'primary' as const }],
  },

  footer: {
    product: [
      { label: 'Servicii Web', href: '/servicii/web' },
      { label: 'Infrastructură', href: '/servicii/infrastructura' },
      { label: 'Externalizare IT', href: '/servicii/externalizare-it' },
    ],
    solutions: [],
    resources: [],
    company: [
      { label: 'Despre noi', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    legal: [
      { label: 'Confidențialitate', href: '/privacy' },
      { label: 'Termeni', href: '/terms' },
    ],
  },
};
