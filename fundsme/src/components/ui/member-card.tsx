'use client';
import React, { useEffect } from 'react';
import {useRouter} from 'next/navigation';

interface MemberCardProps {
  data: any;
}

const MemberCard = ({ data }) => {
    const router = useRouter();
  return (
    <>
      <div className="h-[35vh] w-[100%] rounded-xl bg-gradient-to-tl from-gray-900  to-gray-800 p-6 text-white shadow-md">
        <div className="flex h-full flex-col space-y-6">
          <div className="flex items-start justify-between space-x-4">
            <div className=" tracking-tigh text-xl font-semibold">{data && data.name}</div>
            <div className="inline-flex flex-col items-center justify-center">
              <img
                src={data && data.logo}
                alt="logo"
                style={{ width: '50px', height: '50px', borderRadius: '50px' }}
              />
            </div>
          </div>

          <div className="flex flex-row justify-between space-x-4">
            <div className="">
              <div className="text-sm font-semibold tracking-tight">Deposit</div>
              <div className="text-2xl font-semibold">{data.deposit}</div>
            </div>

            <div className="">
              <div className="text-sm font-semibold tracking-tight">Loan Taken</div>
              <div className="text-2xl font-semibold">{data.loan_taken}</div>
            </div>
            <div className="">
              <div className="text-sm font-semibold tracking-tight">Dues</div>
              <div className="text-2xl font-semibold">{data.dues}</div>
            </div>
                  </div>
                  <div className="flex flex-row justify-between space-x-4">
                      
                      <button className="bg-white text-black rounded-md p-2" onClick={() => router.push('/sme/info/123')}>View Details</button>
                      {data.name === 'House of Paints' && (
                          <button className="bg-green-300 text-black rounded-md p-2" onClick={()=>{
                        window.open('https://rzp.io/i/1kDRKYf8','_blank');
                        router.push('/committees/123');
                     }}>Pay</button>)}
                </div>
        </div>
      </div>
    </>
  );
};

export default MemberCard;
