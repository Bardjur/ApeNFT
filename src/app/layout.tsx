import type { Metadata } from 'next';

import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ape NFT',
  description: 'Apes are every where',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-['RGrotCB']">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
