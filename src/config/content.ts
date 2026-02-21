/**
 * Content Strings Configuration — Developero
 */

import type { AnnouncementConfig, ContentStrings } from '../lib/types';

/** Announcement bar — dezactivat pentru site de prezentare */
export const announcement: AnnouncementConfig = {
  enabled: false,
  id: 'developero',
  text: '',
  href: '/contact',
  linkText: 'Contactează-ne',
  variant: 'primary',
  dismissible: true,
};

export const content: ContentStrings = {
  newsletter: {
    title: 'Fii la curent cu noutățile IT',
    description: 'Sfaturi, tutoriale și oferte speciale direct în inbox-ul tău.',
    placeholder: 'Adresa ta de email',
    buttonText: 'Abonează-te',
    successMessage: 'Mulțumim! Verifică inbox-ul pentru confirmare.',
    errorMessage: 'Ceva nu a mers bine. Încearcă din nou.',
    privacyNote: 'Respectăm confidențialitatea. Te poți dezabona oricând.',
  },
};
