import type { Metadata } from 'next';

export const SITE_URL = new URL('https://robot-web-six.vercel.app');
export const SITE_NAME = 'רובוט.פרו';

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}` | '/';
};

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'he_IL',
      type: 'website',
      images: [
        {
          url: '/window.svg', // קיים ב-public כדי שלא תהיה תמונה שבורה בשיתוף
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/window.svg'],
    },
  };
}

