import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';

import './globals.css';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Watcher',
  description: 'Приложение для отслеживания индикаторов',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
