import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { TeamSection } from './_components/team';
import { HowToPlay } from './_components/how-to-play';
import CreditCard from '@/components/ui/credit-card';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section className="container mx-auto flex w-full max-w-screen-2xl items-center justify-center gap-[91px] px-[100px] pb-[150px] pt-[100px]">
        <div className="flex w-full max-w-[610px] flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-4">
            <h1 className="font-heading text-[2.5rem]/[3rem] font-medium uppercase">
              Empowering SME's, Fueling Innovation
            </h1>
            <p className="text-[1rem]/[1.5rem] font-light">
              Empowering SMEs through collective lending. Bid for loans, earn interest on
              deposits, and boost your credit score for rewards. Access funds easily, invest
              wisely, and watch your business thrive.
            </p>
          </div>
          <Button><Link href="/sme/profile/123">Let's Go</Link></Button>
        </div>
        <div className="">
          <Image src={'/images/hero.png'} alt="funds-me" width={538} height={538} priority />
        </div>
      </section>
      <HowToPlay />
      <section className="container mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-center gap-10 px-[100px] pb-[150px] pt-[100px]">
        <div className=" text-center w-full font-heading text-[1.3rem]/[1.9rem] font-medium">
          <h2 className='text-3xl whitespace-nowrap mt-4 uppercase '>Power We Are Giving to sme's</h2>
        </div>
        <div className="flex items-start gap-5">
          <div className="flex flex-col items-center gap-6">
            <div className=" rounded-lg bg-primary-300/35 p-1 backdrop-blur backdrop-filter">
              <div className="bg-primary overflow-hidden">
                <Image src={'/images/trace.webp'} alt="" width={266} height={275} />
              </div>
            </div>
            <p className="text-[1.23rem]">Tracebility</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className=" rounded-lg bg-primary-300/35 p-1 backdrop-blur backdrop-filter">
              <div className="bg-primary overflow-hidden">
                <Image src={'/images/trans.webp'} alt="" width={266} height={275} />
              </div>
            </div>
            <p className="text-[1.23rem]">Transparency</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className=" rounded-lg bg-primary-300/35 p-1 backdrop-blur backdrop-filter">
              <div className="bg-primary overflow-hidden">
                <Image src={'/images/verified.webp'} alt="" width={266} height={275} />
              </div>
            </div>
            <p className="text-[1.23rem]">Verified Organisers </p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className=" rounded-lg bg-primary-300/35 p-1 backdrop-blur backdrop-filter">
              <div className="bg-primary overflow-hidden">
                <Image src={'/images/easy.webp'} alt=""  width={266} height={275} />
              </div>
            </div>
            <p className="text-[1.23rem]">Easy and Fast Process</p>
          </div>
        </div>
      </section>
      <section className="container mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-center gap-10 px-[100px] pb-[150px] pt-[100px]">
        <div className="w-[72%]  flex-col items-center gap-4 text-center ">
          <h3 className="leading-12 font-heading text-3xl font-medium uppercase">
            Empowering SMEs with every <span className="text-pink-400">credit score</span>, for
            every loan and SIP payment
          </h3>
          <p className="mt-4 text-[1rem]/[1.5rem] font-light">
            The world of property guessing.
          </p>
        </div>
        <CreditCard yes={true} />
      </section>
      <TeamSection />
      
    </>
  );
}
