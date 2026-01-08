import type { MetadataRoute } from 'next';
import { SITE_URL } from './lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.origin;
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified },
    { url: `${base}/article`, lastModified },
    { url: `${base}/compare`, lastModified },
    { url: `${base}/guide`, lastModified },
    { url: `${base}/faq`, lastModified },
    { url: `${base}/sources`, lastModified },
    { url: `${base}/about`, lastModified },
  ];
}

