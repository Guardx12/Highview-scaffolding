export type Service = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
};

export const services: Service[] = [
  {
    slug: 'domestic-scaffolding',
    title: 'Domestic scaffolding',
    summary: 'Safe, tidy scaffolds for homes — roof access, chimneys, repairs and renovations.',
    body: [
      'Home scaffolds for roof work, chimneys, rendering, painting, guttering and general repairs.',
      'We keep sites tidy and communicate clearly so you know what’s happening and when.',
      'Fully insured, compliance-first approach with a team that respects your property.',
    ],
  },
  {
    slug: 'commercial-scaffolding',
    title: 'Commercial scaffolding',
    summary: 'Professional scaffolding for contractors and site managers across Sussex.',
    body: [
      'Reliable scaffolding for commercial projects with clear scheduling and documentation.',
      'Built to suit access needs, safety requirements and practical site logistics.',
      'A dependable team that turns up, keeps standards high, and keeps projects moving.',
    ],
  },
  {
    slug: 'temporary-roofs',
    title: 'Temporary roofs & weather protection',
    summary: 'Keep work moving with secure, practical temporary roof solutions.',
    body: [
      'Temporary roof systems to protect properties and reduce downtime from weather.',
      'Ideal for re-roofs, loft conversions, major renovations and long-running projects.',
      'Designed and installed with safety and site access in mind.',
    ],
  },
  {
    slug: 'chimney-scaffolding',
    title: 'Chimney scaffolding',
    summary: 'Stable access for chimney repairs, pointing, pots, flaunching and leadwork.',
    body: [
      'Secure access for chimney repairs and maintenance with minimal disruption.',
      'Designed to protect roofs and provide the working space trades need.',
      'Quick, tidy installation and removal with clear communication throughout.',
    ],
  },
  {
    slug: 'access-towers',
    title: 'Access towers & short-term hire',
    summary: 'Fast access solutions for smaller jobs that still need a professional finish.',
    body: [
      'Access towers and smaller scaffold setups for short-duration work.',
      'Ideal for repairs, inspections and small domestic projects.',
      'We’ll advise the safest, most cost-effective setup for your job.',
    ],
  },
];
