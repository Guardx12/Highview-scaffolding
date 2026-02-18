import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.highviewscaffolding.co.uk';
  const routes = ['/', '/services', '/areas', '/gallery', '/about', '/contact', '/privacy', '/terms'];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
