import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lightup | מאירים את הסביבה',
  description: 'מאירים את הדרך בזהות וערכים משותפים - מרחב בטוח לחיבור לזהות היהודית ולמורשת המשותפת',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Lightup | מאירים את הסביבה',
    description: 'מאירים את הדרך בזהות וערכים משותפים - מרחב בטוח לחיבור לזהות היהודית ולמורשת המשותפת',
    images: ['/og-image.svg'],
    locale: 'he_IL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lightup | מאירים את הסביבה',
    description: 'מאירים את הדרך בזהות וערכים משותפים',
    images: ['/og-image.svg'],
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
