import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Todo Application',
  description: 'A basic Todo application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} flex min-h-screen items-center justify-center bg-green-300 `}
      >
        {children}
      </body>
    </html>
  );
}
