'use client';

import { useState } from 'react';
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from '../ui/alert-dialog';
import { ConnectWalletIcon, WalletIcon, WalletIconType } from '../wallet-icon';
import { Icons } from '../icons';
import Link from 'next/link';
export default function ConnectWallet() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (


        <button className="flex mr-12 items-center gap-2 rounded-lg border border-primary-300 px-[45px] py-4 font-heading text-[1rem] font-medium text-primary-300 hover:border-white hover:text-white">
          <Link href="/register-sme">Explore More</Link>
        </button>

    

  );
}

interface WalletButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  name: string;
  icon: WalletIconType;
  isRecommended?: boolean;
}

export function WalletButton({ name, icon, isRecommended, ...props }: WalletButtonProps) {
  const Icon = WalletIcon[icon];
  return (
    <button
      className="flex w-full items-center justify-between rounded-lg border border-white px-4 py-2 transition-colors duration-300 hover:border-primary-foreground"
      {...props}
    >
      <div className="flex items-center gap-2">
        <Icon className="size-[42px]" />
        <span className="text-[1rem]/[1.5rem]">{name}</span>
      </div>
      {isRecommended ? (
        <span className="rounded-lg bg-primary px-2 text-center text-[0.75rem]/[1.5rem] font-light text-primary-300">
          Recommended
        </span>
      ) : null}
    </button>
  );
}
