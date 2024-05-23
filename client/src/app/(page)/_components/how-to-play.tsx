import { cn } from '@/lib/utils';
import Image from 'next/image';

type PlayCardProps = {
  title: string;
  desc: string;
  color: string;
};

export function HowToPlay() {
  return (
    <section className="container mx-auto flex w-full max-w-screen-2xl flex-col gap-[100px] px-[100px] pb-[150px] pt-[100px]">
      <div className="flex items-start justify-start font-heading text-[1.3rem]/[1.5rem] font-medium">
        <h3 className="font-bold uppercase">Features that we have</h3>
      </div>
      <div className="items-start] flex justify-between">
        <div className="flex items-center justify-center overflow-hidden p-0 w-[30%] h-[30%] mt-16 backdrop-blur-md backdrop-brightness-75 backdrop-opacity-40 rounded-md shadow-xl">
          <Image src={'/images/feature2.webp'} alt="" width={473} height={473} priority />
        </div>

        <div className="flex h-full w-[50%] flex-col items-start gap-6 bg-primary p-6">
          <PlayCard
            title="Collaborative Lending"
            desc="Join forces with a group of SMEs to access loans collectively, fostering community support and financial strength."
            color="bg-primary-200/[0.32]"
          />
          <PlayCard
            title="Competitive Bidding"
            desc="Bid for loans across three categories, ensuring fair access to funds while maintaining competitive interest rates."
            color="bg-primary-300/[0.50]"
          />
          <PlayCard
            title="Passive Earnings"
            desc="Earn interest on monthly deposits, providing a passive income stream while supporting fellow SMEs in their growth endeavors."
            color="bg-primary-400/[0.50]"
          />
          <PlayCard
            title="Rewarding Responsibility"
            desc="Build your credit score through timely repayments, unlocking rewards such as gift vouchers, and additional financial benefits."
            color="bg-[#77C500]/[0.23]"
          />
        </div>
      </div>
    </section>
  );
}

const PlayCard = ({ title, desc, color }: PlayCardProps) => {
  return (
    <div
      className={cn('flex-col items-start  justify-end gap-4 rounded-lg  px-3 py-2', color)}
    >
      <dt className="font-heading text-[1.2rem]/[1.8rem] font-medium">{title}</dt>
      <dd className="text-[0.875rem]/[1.5rem] font-light">{desc}</dd>
    </div>
  );
};
