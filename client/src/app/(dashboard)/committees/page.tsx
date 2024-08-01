'use client';
import { Card } from '@/components/cards/card';
import {
  FaCalendarAlt,
  FaUsers,
  FaMoneyBillAlt,
  FaClock,
  FaMoneyCheckAlt
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect, useCallback } from 'react';
import useRazorpay from 'react-razorpay';
import { toast } from '../../../../node_modules/react-hot-toast/dist/index';
import { committeesData } from '@/lib/data';
const CommitteePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [depositActive, setDepositActive] = useState(false);
  const [Razorpay, isLoaded] = useRazorpay();
  const router = useRouter();
  const handlePayment = useCallback(async () => {
    const options = {
      key: 'rzp_test_qxK6BfwVnAlQAn',
      amount: '3000',
      currency: 'INR',
      name: 'fund sme',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',
      order_id: 'order_9A33XWu170gUtm',
      prefill: {
        name: 'Piyush Garg',
        email: 'youremail@example.com',
        contact: '9999999999'
      },
      notes: {
        address: 'Razorpay Corporate Office'
      },
      theme: {
        color: '#3399cc'
      }
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  const JoinCommitteeModal = () => {
    return (
      <>
        <div className="right-50 fixed left-0 top-0 z-50 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0">
          <div className="relative flex h-[100%] max-h-full w-full items-center justify-center p-4">
            <div className="relative w-1/2 rounded-lg border bg-white shadow dark:bg-gray-700">
              <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600">
                <h3 className="text-xl  text-gray-900 dark:text-white">
                  {depositActive ? 'Deposit SIP' : 'Terms of Service'}
                </h3>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
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
                {depositActive ? (
                  <>
                    <button
                      className="rounded-xl bg-blue-500 px-3 py-2 text-white shadow-md"
                      onClick={() => {
                        window.open('https://rzp.io/i/hAYIOcmKy', '_blank');
                        toast.success('Committee Joined Successfully');
                        router.push('/committees/123');
                      }}
                    >
                      Pay With Razor Pay
                    </button>
                  </>
                ) : (
                  <>
                    <ul>
                      <li className="mt-2">
                        {`By joining the committee, you agree to abide by the platform's rules
                        and regulations.`}
                      </li>
                      <li className="mt-2">
                        Members consent to undergo verification processes for authentication
                        purposes.
                      </li>
                      <li className="mt-2">
                        Participation in virtual meetings is mandatory for all committee
                        members.
                      </li>
                      <li className="mt-2">
                        Deposits must be made through authorized banking channels or approved
                        digital payment platforms.
                      </li>
                      <li className="mt-2">
                        Committee members acknowledge the platform fees applicable for
                        registration.
                      </li>
                      <li className="mt-2">
                        {`Users understand that last year's bank statements may be required for
                        verification and authorization.`}
                      </li>
                      <li className="mt-2">
                        The platform reserves the right to take legal action against fraudulent
                        activities.
                      </li>
                      <li className="mt-2">
                        Collaborative lending entails collective responsibility for loan
                        repayment.
                      </li>
                      <li className="mt-2">
                        Members agree to maintain confidentiality regarding sensitive platform
                        information.
                      </li>
                      <li className="mt-2">
                        Any disputes or discrepancies will be resolved through arbitration as
                        per platform guidelines.
                      </li>
                    </ul>

                    <div className="flex items-center rounded-b border-t border-gray-200 p-4 md:p-5 dark:border-gray-600">
                      <button
                        data-modal-hide="default-modal"
                        onClick={() => setDepositActive(true)}
                        type="button"
                        className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        I accept
                      </button>
                      <button
                        data-modal-hide="default-modal"
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      >
                        Decline
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="flex flex-col overflow-auto p-8">
        <h1 className="text-xl">Committees</h1>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {committeesData.map((committee, index) => (
            <Card className="" key={index}>
              <h2 className="mb-4 text-lg font-semibold">Committee {index + 1}</h2>
              <div className="mb-2 flex items-center">
                <p className="text-sm">
                  {' '}
                  <FaCalendarAlt className="mr-2 text-yellow-500" size={20} /> Start Date:{' '}
                  <br /> <span className="mt-4 text-primary-300"> {committee.startDate}</span>
                </p>
              </div>
              <div className="mb-2 flex items-center">
                <FaUsers className="mr-2 text-yellow-500" size={20} />
                <p className="text-sm">
                  Members Limit:{' '}
                  <span className=" text-md  mx-3 text-primary-300">
                    {' '}
                    {committee.membersLimit}{' '}
                  </span>
                </p>
              </div>
              <div className="mb-2 flex items-center">
                <FaMoneyBillAlt className="mr-2 text-yellow-500" size={20} />
                <p className="text-sm">
                  Total Fund:{' '}
                  <span className=" text-md  mx-3 text-primary-300">
                    {' '}
                    {committee.totalFund}{' '}
                  </span>
                </p>
              </div>
              <div className="mb-2 flex items-center">
                <FaMoneyCheckAlt className="mr-2 text-yellow-500" size={20} />
                <p className="text-sm">
                  SIP Amount:{' '}
                  <span className=" text-md  mx-3 text-primary-300">
                    {' '}
                    {committee.SIPAmount}{' '}
                  </span>
                </p>
              </div>
              <div className="mb-2 flex items-center">
                <FaClock className="mr-2 text-yellow-500" size={20} />
                <p className="text-sm">
                  Tenure:{' '}
                  <span className=" text-md  mx-3 text-primary-300"> {committee.tenure} </span>
                </p>
              </div>
              <div className="mb-2 flex items-center">
                <FaCalendarAlt className="mr-2 text-yellow-500" size={20} />
                <p className="text-sm">
                  SIP Period:{' '}
                  <span className=" text-md  mx-3 text-primary-300">
                    {' '}
                    {committee.SIPPeriod}{' '}
                  </span>
                </p>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="width-[1/4]  small rounded bg-green-300 px-2 py-1 text-black"
              >
                Join
              </button>
            </Card>
          ))}
        </div>
      </div>

      {showModal && <JoinCommitteeModal />}
    </>
  );
};

export default CommitteePage;
