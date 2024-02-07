import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './(providers)/_store/reducers/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '띨띨 :: TILTIL',
  description: 'TIL 모음집',
};

export default function HTMLLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
