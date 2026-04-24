// Utility to generate sitemap data
export const siteUrl = 'https://liquorconcepts.co.nz';

export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const routes: SitemapUrl[] = [
  {
    loc: '/',
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    loc: '/services',
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    loc: '/process',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    loc: '/courses',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    loc: '/faq',
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    loc: '/about',
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    loc: '/contact',
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    loc: '/referrals',
    changefreq: 'monthly',
    priority: 0.6,
  },
  {
    loc: '/insights',
    changefreq: 'weekly',
    priority: 0.8,
  },
  {
    loc: '/terms',
    changefreq: 'yearly',
    priority: 0.3,
  },
];

export const generateSitemapXML = (): string => {
  const currentDate = new Date().toISOString();

  const urlsXML = routes
    .map((route) => {
      return `  <url>
    <loc>${siteUrl}${route.loc}</loc>
    <lastmod>${route.lastmod || currentDate}</lastmod>
    <changefreq>${route.changefreq || 'monthly'}</changefreq>
    <priority>${route.priority || 0.5}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXML}
</urlset>`;
};
