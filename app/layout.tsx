import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Provider } from '@/components/provider';
import { cn } from '@/lib/cn';
import { siteUrl } from '@/lib/shared';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const interVar = localFont({
  src: './fonts/InterVariable.woff2',
  variable: '--font-inter-var',
  weight: '100 900',
  display: 'swap',
});

const geistMono = localFont({
  src: './fonts/GeistMono[wght].woff2',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={cn(
        inter.variable,
        interVar.variable,
        geistMono.variable,
        'antialiased',
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
