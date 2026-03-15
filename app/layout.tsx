import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lightup | קהילת עובדים',
  description: 'מאירים את הדרך בזהות וערכים משותפים - מרחב בטוח לחיבור לזהות היהודית ולמורשת המשותפת',
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
