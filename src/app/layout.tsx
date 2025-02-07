import { cn } from '@shared/lib';
import { AppShell, Header } from '@widgets/layout';
import type { Metadata, Viewport } from 'next';
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={cn(geistMono.variable, 'antialiased', 'dark')}>
        <AppShell config={{ header: { height: 80 } }} header={<Header />}>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
