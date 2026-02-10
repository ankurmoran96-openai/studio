import type { Metadata } from 'next';
import { Pacifico, Caveat } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-caveat',
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Angel's Digital Birthday",
  description: 'A special birthday surprise for Angel Thapa',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pacifico.variable} ${caveat.variable}`}>
      <head />
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
