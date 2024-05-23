import React from 'react'

const CreditCard = ({yes}) => {
  return (
    <>
        <div className="bg-gradient-to-tl from-gray-900 to-gray-800 text-white h-[35vh]  w-[50%] p-6 rounded-xl shadow-md">
                <div className="h-full flex flex-col justify-between">
                    <div className="flex items-start justify-between space-x-4">
                        <div className=" text-xl font-semibold tracking-tigh">
                            FUND'S ME
                        </div>

                        <div className="inline-flex flex-col items-center justify-center">
                            <svg className="h-10 w-10" width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2 15V9C2 5.68629 4.68629 3 8 3H16C19.3137 3 22 5.68629 22 9V15C22 18.3137 19.3137 21 16 21H8C4.68629 21 2 18.3137 2 15Z"
                                    stroke="currentColor" stroke-width="1.5"></path>
                                <path
                                    d="M13 15.5V12.7M15.8571 12.7C16.5714 12.7 18 12.7 18 10.6C18 8.5 16.5714 8.5 15.8571 8.5L13 8.5V12.7M15.8571 12.7C14.7143 12.7 13.4762 12.7 13 12.7M15.8571 12.7L18 15.5"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M11 8.5L8 15.5L5 8.5" stroke="currentColor" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </svg>

                            <div
                                className="font-semibold text-white">
                                wallet
                            </div>
                        </div>
                    </div>

                    <div
                        className="inline-block w-12 h-8 bg-gradient-to-tl from-yellow-200 to-yellow-100 rounded-md shadow-inner overflow-hidden">
                        <div className="relative w-full h-full grid grid-cols-2 gap-1">
                            <div className="absolute border border-gray-900 rounded w-4 h-6 left-4 top-1"></div>
                            <div className="border-b border-r border-gray-900 rounded-br"></div>
                            <div className="border-b border-l border-gray-900 rounded-bl"></div>
                            <div className=""></div>
                            <div className=""></div>
                            <div className="border-t border-r border-gray-900 rounded-tr"></div>
                            <div className="border-t border-l border-gray-900 rounded-tl"></div>
                        </div>
                    </div>

                    <div className="">
                        <div className="text-sm font-semibold tracking-tight">
                            Balance
                        </div>

                        <div className="text-2xl font-semibold">
                            500 
                        </div>
                    </div>
                </div>
            </div>

           
            {yes && <div className="relative -mt-3">
                <div
                    className="absolute right-30 flex space-x-2 items-start bg-white text-gray-900 border-gray-200 shadow-2xl -mt-16 w-[400px] px-2 py-3 rounded-lg">
                    <div className="flex-initial">
                        <div
                            className="inline-flex mt-1 items-center justify-center rounded-lg bg-gradient-tl from-green-400 via-green-400 bg-green-300">
                            <div className="p-2">
                                <svg className="h-4 w-4 text-white opacity-90" width="24" height="24" stroke-width="1.5"
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path
                                        d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872M9 15C9.64448 15.8593 10.8428 16.3494 12 16.391M12 7.30872C10.6809 7.27322 9.5 7.86998 9.5 9.50001C9.5 12.5 15 11 15 14C15 15.711 13.5362 16.4462 12 16.391M12 7.30872V5.5M12 16.391V18.5"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 inline-flex items-start justify-between">
                        <div>
                            <h2 className="text-xs font-semibold tracking-tight">Got SME Performance Score</h2>
                            <p className="text-xs text-gray-500 font-light mt-1">You received 500 credit</p>
                        </div>

                        <div className="text-xs text-gray-400">17:15</div>
                    </div>
                </div>
            </div>}
    </>
  )
}

export default CreditCard