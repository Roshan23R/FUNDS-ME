'use client';

import { cn } from '@/lib/utils';
import { NavItem } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icons } from '../icons';
import { siteConfig } from '@/config/site';
import logoImage from "../../../public/images/logo-fund-removebg.png"

export default function SidebarNav() {
  return (
    <aside className="fixed z-10 box-border flex min-h-full w-[214px] min-w-[214px] max-w-[214px] shrink-0 basis-[214px] flex-col items-start gap-[80px] border-r border-primary-foreground bg-primary pl-6 pt-4">
     
      <div className="px-4 pt-10 mr-6 overflow-hidden flex items-center justify-center">
        <Image src={logoImage} alt="" width={600} height={600} priority />
      </div>

      <SidebarNavList items={siteConfig.sideNav} />
    </aside>
  );
}

const SidebarNavList = ({ items }: { items: NavItem[] }) => {
  const path = usePathname();
  return (
    <aside className="flex flex-col items-start gap-[131px]">
      <div className="flex flex-col items-start gap-6">
        {items.map((item: NavItem) => {
          const Icon = Icons[item.icon];
          const isActive = path.includes(item.href);
          return (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                'flex w-[174px] items-center gap-2 rounded-lg p-2 transition-colors duration-300',
                isActive
                  ? 'bg-primary-300 text-primary hover:bg-primary-300/85'
                  : 'text-white hover:text-primary-300'
              )}
            >
              <Icon className="size-6" /> {item.title}
            </Link>
          );
        })}
      </div>
      <button className="group flex w-[174px] items-center gap-2 rounded-lg p-2 text-white transition-colors duration-300 hover:bg-primary-400 hover:text-primary">
        <Icons.Power className="size-6 text-primary-300 group-hover:text-primary" /> Logout
      </button>
    </aside>
  );
};
