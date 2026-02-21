/**
 * Feature Flags — site de prezentare (fără blog, docs, dashboard)
 */

import type { FeatureFlags } from '../lib/types';

export const features: FeatureFlags = {
  blog: false,
  docs: false,
  changelog: false,
  testimonials: false,
  roadmap: false,
};
