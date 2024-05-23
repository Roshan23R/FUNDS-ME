"use client";
import { Shell } from '@/components/shell';
import React from 'react';
import Image from 'next/image';

const Success = () => {
    return (<div className="guess-card-bg mx-auto flex h-[80vh] w-[40%] flex-col items-center justify-center">
    <div className="border-3 h-[50%] w-1/2 overflow-hidden rounded-lg shadow-xl shadow-[#172234]">
      <Image src="/images/sucess-guess.png" width={603} height={603} />
    </div>
    <h1 className="mt-2 text-xl font-bold">Great Guess !!</h1>
    <p className="mt-2 text-center">
      You have won this property NFT and have gained +10 points{' '}
    </p>
    <button className="mt-4 rounded-md bg-[#DC7DA6] px-3 py-2 text-sm text-[#FFFFFF]">
      Continue
    </button>
  </div>);
}

const Fail = () => {
    return(
        <div className="guess-card-bg mx-auto flex h-[80vh] w-[40%] flex-col items-center justify-center">
          <div className="border-3 h-[50%] w-1/2 overflow-hidden rounded-lg border border-red-400 shadow-2xl drop-shadow-xl shadow-red-500">

          </div>
          <h1 className="mt-12 text-xl font-bold">Sorry wrong guess</h1>
          <p className="mt-2 text-center">
          You have lost -10 points
          </p>
          <button className="mt-4 rounded-md bg-[#DC7DA6] px-3 py-2 text-sm text-[#FFFFFF]">
            Continue
          </button>
        </div>
    );
}
export default function GamePlay() {

    const [result,setResult] = React.useState(false);
  return (
    <>
      <Shell className="px-20 ">
        <h1 className="text-center">
          Points : <span className="text-[#ECB278]">4,000X</span>
        </h1>
        
        {result ? <Success /> : <Fail />}
        
      </Shell>
    </>
  );
}
