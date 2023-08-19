import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import data from 'config.js';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: data.name,
  description: data.about,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={data.profile_img}></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
