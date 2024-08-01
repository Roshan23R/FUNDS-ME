import SiteFooter from '@/components/layouts/site-footer';
import { SiteHeader } from '@/components/layouts/site-header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FUNDS ME',
  description: 'Empowering MSMEs, Empowering Growth'
};

export default function PageLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-full bg-[url("/images/bg-blur.svg")] bg-cover bg-center bg-no-repeat'>
      <SiteHeader />
      <main className="w-full">{children}</main>
      <SiteFooter />
    </div>
  );
}
