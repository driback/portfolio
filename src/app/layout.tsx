import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import { Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '~/components/theme-provider';

import './globals.css';

const font = Geist_Mono({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 2,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'hsl(0, 0%, 100%)' },
    { media: '(prefers-color-scheme: dark)', color: 'hsl(240, 10%, 3.9%)' },
  ],
};

export const metadata: Metadata = {
  title: 'Fikri Febrianto | Software Developer',
  description:
    'A passionate software developer focused on building responsive and accessible web applications with modern technologies.',
  authors: [{ name: 'driback', url: 'https://github.com/driback' }],
  keywords: [
    'software developer',
    'web developer',
    'frontend developer',
    'react developer',
    'full-stack developer',
    'typescript',
    'javascript',
    'next.js',
    'portfolio',
  ],
  applicationName: 'Portfolio',
  generator: 'Next.js',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} scroll-smooth antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
