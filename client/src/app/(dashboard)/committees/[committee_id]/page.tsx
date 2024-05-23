'use client';
import React, { useState } from 'react';
import { Card } from '@/components/cards/card';
import { toast } from 'react-hot-toast';
import MemberCard from '@/components/ui/member-card';
import {SME} from '@/lib/SME';

const delay = ms => new Promise(res => setTimeout(res, ms));
const StatsSection = () => {
  const [showBidModal, setShowBidModal] = useState(false);
  const [maxBid, setMaxBid] = useState(1.25);
  const [yourBid, setYourBid] = useState(maxBid);
  const BidModal = () => {
    return (
      <>
        <div className="right-50 fixed left-0 top-0 z-50 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden backdrop-blur-md md:inset-0">
          <div className="relative flex h-[100%] max-h-full w-full items-center  justify-center p-4">
            <div className="relative w-1/3 rounded-lg bg-black/[0.20] shadow">
              <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Bidding
                </h3>
                <button
                  type="button"
                  onClick={() => setShowBidModal(false)}
                  className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                >
                  <svg
                    className="h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="h-[25%] space-y-4 overflow-y-scroll p-4 md:p-5">
                <div className="flex  flex-col rounded-b  p-4 md:p-5">
                  <div className=" flex items-center justify-between">
                    <label
                      htmlFor="bid"
                      className="text-md block font-medium text-gray-900 dark:text-white"
                    >
                      Loan Amount
                    </label>
                    <span className="rounded-md border px-3 py-2">10,000</span>
                  </div>
                  <div className=" mt-3 flex items-center justify-between">
                    <label
                      htmlFor="bid"
                      className="text-md block font-medium text-gray-900 dark:text-white"
                    >
                      Base Bidding %
                    </label>
                    <span className="rounded-md border px-3 py-2">1%</span>
                  </div>
                  <div className=" mt-3 flex items-center justify-between">
                    <label
                      htmlFor="bid"
                      className="text-md block font-medium text-gray-900 dark:text-white"
                    >
                      Current Max Bidding %
                    </label>
                    <span className="rounded-md border px-3 py-2">{maxBid} %</span>
                  </div>

                  <div className=" mt-3 flex items-center justify-between">
                    <label
                      htmlFor="bid"
                      className="text-md block font-medium text-gray-900 dark:text-white"
                    >
                      Place Your Bid
                    </label>
                    <input
                      onChange={e => {
                        setYourBid(e.target.value);
                      }}
                      className="rounded-md border bg-transparent px-3 py-2 text-white "
                      max="10"
                      min="0.5"
                      value={yourBid}
                      name="yourBid"
                      type="number"
                      step="0.05"
                    />
                  </div>
                  <button
                    data-modal-hide="default-modal"
                    onClick={async () => {
                      if (yourBid < maxBid || !yourBid) {
                        toast.error('Please enter a valid bid');
                        return;
                      }
                      await delay(3000);
                      setMaxBid(yourBid);
                      setShowBidModal(false);
                      
                      toast.success('Bid Placed Successfully');
                    }}
                    type="button"
                    className="ms-3 mt-4 rounded-lg border-2 border-gray-200 bg-pink-600 px-5 py-2.5 text-sm font-medium  text-gray-900 "
                  >
                    Set Bid
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="flex flex-col space-y-4 p-6">
        <div>
          <h2 className="mb-4 text-lg font-semibold">Committee Details</h2>
          <Card className="py-0 ">
            <div className="grid grid-cols-6 gap-6">
              <div className="rounded bg-transparent pb-4 pl-2 text-center shadow-md">
                <h3 className="mb-2 text-lg font-semibold">Members</h3>
                <p className="text-gray-300">10</p>
              </div>
              <div className="rounded bg-transparent text-center  shadow-md">
                <h3 className="mb-2 text-lg font-semibold">Total Fund</h3>
                <p className="text-gray-300">₹50,000</p>
              </div>
              <div className="rounded bg-transparent pl-2 text-center  shadow-md">
                <h3 className="mb-2 text-lg font-semibold">Loan Borrowed</h3>
                <p className="text-gray-300">₹1,10,000</p>
              </div>
              <div className="rounded bg-transparent pl-2 text-center shadow-md">
                <h3 className="mb-2 text-lg font-semibold">Loan Repayed</h3>
                <p className="text-gray-300">₹50,000</p>
              </div>
              <div className="rounded bg-transparent pl-2 text-center shadow-md">
                <h3 className="mb-2 text-lg font-semibold">Loan Pending</h3>
                <p className="text-gray-300">₹60,000</p>
              </div>
              <div className="rounded bg-transparent pr-2 text-center shadow-md">
                <h3 className="mb-2 text-lg font-semibold">Tenure</h3>
                <p className="text-gray-300">10 Months</p>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Loans</h2>
          <div className="">
            <div className="flex w-full flex-row items-start justify-between gap-2 rounded-lg border border-[#3B4F74] bg-black/[0.20] px-4 py-6 shadow-header backdrop-blur-[8px] backdrop-filter">
              <div className="flex w-full flex-col items-start justify-between gap-2 rounded-lg border border-[#3B4F74] bg-black/[0.20] px-4 py-6 shadow-header backdrop-blur-[8px] backdrop-filter">
                <div className="flex w-full items-center justify-between">
                  <h3 className="text-lg font-semibold">Loan 1</h3>
                  <button
                    onClick={() => setShowBidModal(true)}
                    className="small rounded bg-green-300 px-2 py-1 text-black"
                  >
                    Bid
                  </button>
                </div>
                <div className="flex w-full items-center justify-between">
                  <span className="text-gray-300">Loan Amount</span>
                  <span className="text-gray-300">₹10,000</span>
                </div>
                <div className=" flex w-full items-center justify-between">
                  <span className="text-gray-300">Loan Tenure</span>
                  <span className="text-gray-300">6 months</span>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-between gap-2 rounded-lg border border-[#3B4F74] bg-black/[0.20] px-4 py-6 shadow-header backdrop-blur-[8px] backdrop-filter">
                <div className="flex w-full items-center justify-between">
                  <h3 className="text-lg font-semibold">Loan 2</h3>
                  <button
                    onClick={() => setShowBidModal(true)}
                    className="small rounded bg-green-300 px-2 py-1 text-black"
                  >
                    Bid
                  </button>
                </div>
                <div className="flex w-full flex-row justify-between">
                  <span className="text-gray-300">Loan Amount</span>
                  <span className="text-gray-300">₹20,000</span>
                </div>
                <div className=" flex w-full items-center justify-between">
                  <span className="text-gray-300">Loan Tenure</span>
                  <span className="text-gray-300">6 months</span>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-between gap-2 rounded-lg border border-[#3B4F74] bg-black/[0.20] px-4 py-6 shadow-header backdrop-blur-[8px] backdrop-filter">
                <div className="flex w-full items-center justify-between">
                  <h3 className="text-lg font-semibold">Loan 3</h3>
                  <button
                    onClick={() => setShowBidModal(true)}
                    className="small rounded bg-green-300 px-2 py-1 text-black"
                  >
                    Bid
                  </button>
                </div>
                <div className="flex w-full items-center justify-between">
                  <span className="text-gray-300">Loan Amount</span>
                  <span className="text-gray-300">₹20,000</span>
                </div>
                <div className=" flex w-full items-center justify-between">
                  <span className="text-gray-300">Loan Tenure</span>
                  <span className="text-gray-300">6 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold">Members</h2>
          <div className="grid w-full grid-cols-3 gap-5">
            {SME.slice(0,10).map(data => (
              <MemberCard data={data} />
            ))}
          </div>
        </div>
      </div>
      {showBidModal && <BidModal />}
    </>
  );
};

export default StatsSection;
