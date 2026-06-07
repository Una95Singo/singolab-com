import type { Metadata, Viewport } from 'next';
import { Newsreader, Literata, Spline_Sans_Mono } from 'next/font/google';
import './globals.css';

// Self-hosted at build time by next/font (no render-blocking request, no FOUT).
const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  axes: ['opsz'],
  variable: '--font-newsreader',
});
const literata = Literata({
  subsets: ['latin'],
  display: 'swap',
  axes: ['opsz'],
  variable: '--font-literata',
});
const splineMono = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-spline-mono',
});

const SVG_FAVICON =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='7' fill='%230F0E0B'/><path d='M3 16h4l2.5-8 3 15 3-11 2 6h11.5' fill='none' stroke='%234272FF' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'/></svg>";

export const metadata: Metadata = {
  metadataBase: new URL('https://singolab.com'),
  title: 'Unarine Singo — singolab',
  description:
    'Unarine “Una” Singo — advisor, musician and husband, upskilling in AI in public.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://singolab.com',
    title: 'Unarine “Una” Singo — singolab',
    description: 'Advisor, musician and husband — upskilling in AI, in public.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: SVG_FAVICON, type: 'image/svg+xml' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '64x64' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#FAF7F2',
};

// Runs before paint: applies the saved/system theme so there's no flash.
const THEME_SCRIPT = `(function(){try{var s=localStorage.getItem('singolab-theme');var d=matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',s||(d?'dark':'light'));}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Unarine Singo',
  alternateName: 'Una Singo',
  url: 'https://singolab.com',
  jobTitle: 'Advisor & AI Engineer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New York',
    addressRegion: 'NY',
  },
  sameAs: [
    'https://www.linkedin.com/in/unarine-singo-884718203',
    'https://github.com/Una95Singo',
    'https://usingo.substack.com',
    'https://music.apple.com/us/album/sex-rap/1885221086',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${literata.variable} ${splineMono.variable}`}
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        {children}
      </body>
    </html>
  );
}
