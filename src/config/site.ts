/**
 * Site Configuration
 *
 * @description
 * Core site metadata and branding settings for Developero.
 */

import type { SocialLinks, LegalConfig } from '../lib/types';

/** Site name displayed in header, footer, and meta tags */
export const name = import.meta.env.SITE_NAME || 'Developero';

/** Site description for SEO and meta tags */
export const description =
  import.meta.env.SITE_DESCRIPTION || 'Soluții IT complete pentru afacerea ta';

/** Production URL of your site (used for sitemap, RSS, canonical URLs) */
export const url = import.meta.env.SITE_URL || 'https://develope.ro';

/** Author name for meta tags and copyright */
export const author = import.meta.env.SITE_AUTHOR || 'Developero';

/** Path to logo file (relative to /public). Empty = use text logo with brand font */
export const logo = '';

/** Path to Open Graph image (relative to /public) */
export const ogImage = '/images/og-image.png';

/** Social media links */
export const social: SocialLinks = {
  twitter: '',
  github: '',
  discord: '',
};

/** Legal configuration for privacy policy and terms pages */
export const legal: LegalConfig = {
  privacyEmail: 'contact@develope.ro',
  legalEmail: 'contact@develope.ro',
  lastUpdated: 'Februarie 2025',
};
