import type { Metadata } from 'next';
import { Unbounded } from 'next/font/google';
import { fontHeading } from '@/lib/fonts';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from 'react-hot-toast';
const unbounded = Unbounded({
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-unbounded'
});

export const metadata: Metadata = {
  title: 'FUNDS ME',
  description: 'Empowering MSMEs, Empowering Growth'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          unbounded.variable,
          fontHeading.variable
        )}
      >
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
