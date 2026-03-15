import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://lightup.community'),
  title: 'Lightup | מאירים את הסביבה',
  description: 'מאירים את הדרך בזהות וערכים משותפים - מרחב בטוח לחיבור לזהות היהודית ולמורשת המשותפת',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Lightup | מאירים את הסביבה',
    description: 'מאירים את הדרך בזהות וערכים משותפים - מרחב בטוח לחיבור לזהות היהודית ולמורשת המשותפת',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Lightup - מאירים את הדרך',
      },
    ],
    locale: 'he_IL',
    type: 'website',
    siteName: 'Lightup Community',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lightup | מאירים את הסביבה',
    description: 'מאירים את הדרך בזהות וערכים משותפים',
    images: ['/api/og'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" style={{ scrollBehavior: 'smooth' }}>
      <body>{children}</body>
    </html>
  );
}
