import type { MetadataRoute } from 'next';
import { services } from '@/lib/servicesData';
import { areas } from '@/lib/areasData';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.highviewscaffolding.co.uk';
  const routes = ['/', '/services', '/areas', '/gallery', '/about', '/contact', '/privacy', '/terms'];

  const serviceRoutes = services.map((s) => `/services/${s.slug}`);
  const areaRoutes = areas.map((a) => `/areas/${a.slug}`);

  const all = [...routes, ...serviceRoutes, ...areaRoutes];

  return all.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
