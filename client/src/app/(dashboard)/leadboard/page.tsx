import { Card } from '@/components/cards/card';
import { Shell } from '@/components/shell';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Icons } from '@/components/icons';
import { LeadBoardCard } from '@/components/cards/leadboard-card';
type LeadProps = {
  points: number;
  winner?: boolean;
};


const ChampionCard = () => {
  return (
    <div className="flex justify-between">
      <Card className="w-[55%]" title="Realxdeal Champion" description="View Full List">
        <div className="flex w-full flex-col gap-3">
          <LeadBoardCard points={2000} winner />
          <LeadBoardCard points={2000} winner />
          <LeadBoardCard points={2000} winner />
          <LeadBoardCard points={2000} />
          <LeadBoardCard points={2000} />
          <LeadBoardCard points={2000} />
        </div>
      </Card>
      <div className="flex w-[45%] flex-col items-end justify-center">
        <Image src="/images/purple.png" width={200} height={200} alt="Champion Image" />
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <Shell>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img className="h-10 w-10 rounded-full" src="/images/user.png" alt="Rounded avatar" />
          <p className="ml-3">Nikku Dev</p>
          <span className="me-2 rounded-xl bg-[#DC7DA63D] px-2.5 py-0.5 text-xs text-white shadow-none">
            1Ay00011DY...
          </span>
        </div>
        <p className="mt-2">
          Points: <span className="text-[#ECB278]">4,000</span>
        </p>
      </div>
      <div className="mt-4 flex flex-col gap-y-8">
        <ChampionCard />
        <ChampionCard />
        <ChampionCard />
        <ChampionCard />
      </div>
    </Shell>
  );
}
