'use client';
import { Card } from '@/components/cards/card';
import Timeline from '@/components/ui/timeline';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Page() {
  const [page, setPage] = useState(1);

  const [isActivePage, setIsActivePage] = useState(0);
  const [activePanOtp, setActivePanOtp] = useState(false);
  const [activeAadharOtp, setActiveAadharOtp] = useState(false);
  const [founderDetails, setFounderDetails] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const [panOtpData, setPanOtpData] = useState({
    opt1: '',
    opt2: '',
    opt3: '',
    opt4: '',
    opt5: '',
    opt6: ''
  });

  const [smeAddressDetails, setSmeAddressDetails] = useState({
    building_number: '',
    street: '',
    city: '',
    state: '',
    pincode: ''
  });

  const [smeBankDetails, setSmeBankDetails] = useState({
    acc_no: '',
    ifsc_code: '',
    acc_name: '',
    bank_name: ''
  });

  const [founderVerificationData, setFounderVerificationData] = useState({
    pan_number: '',
    aadhar_number: ''
  });

  const [udhyamFile, setUdhyamFile] = useState('');
  const [taxReturnFile, setTaxReturnFile] = useState('');

  // Handle file input change
  const handleUdhyamFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setUdhyamFile(URL.createObjectURL(file));
    }
  };
  const handleTaxReturnFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setTaxReturnFile(URL.createObjectURL(file));
    }
  };

  const checkUdhyamVerification = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let id = toast.loading('Verifying Udyam Certificate...');
    try {
      await delay(5000);
      toast.success('Udyam Certificate Verified Successfully', { id });
      return { status: 200, data: 'Udyam Certificate Verified Successfully' };
    } catch (error) {
      console.error(error);
      toast.error('An error occurred', { id });
    }
  };

  const checkTaxReturnVerification = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let id = toast.loading('Verifying Tax Return...');
    try {
      await delay(5000);
      toast.success('Tax Return Verified Successfully', { id });
      window.location.href = '/committees';
      return { status: 200, data: 'Tax Return Verified Successfully' };
    } catch (error) {
      console.error(error);
      toast.error('An error occurred', { id });
    }
  };
  const handlePanOTP = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPanOtpData({
      ...panOtpData,
      [e.target.name]: e.target.value
    });

    let otp = Object.values(panOtpData).join('');

    console.log(otp);
  };
  const handleBankDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSmeBankDetails({
      ...smeBankDetails,
      [e.target.name]: e.target.value
    });
  };

  const registerSmeBankDetails = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      !smeBankDetails.acc_no ||
      !smeBankDetails.ifsc_code ||
      !smeBankDetails.acc_name ||
      !smeBankDetails.bank_name
    ) {
      return toast.error('All fields are required');
    }
    let id = toast.loading('Saving Bank Details...');
    try {
      await delay(2000);
      toast.success('Bank Details Saved Successfully', { id });
      return { status: 200, data: smeBankDetails };
    } catch (error) {
      console.error(error);
      toast.error('An error occurred', { id });
    }
  };
  const handleAddressDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSmeAddressDetails({
      ...smeAddressDetails,
      [e.target.name]: e.target.value
    });
  };
  const onClickHandleAddressDetails = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let id = toast.loading('Saving Address Details...');
    try {
      await delay(2000);
      toast.success('Address Details Saved Successfully', { id });
      return { status: 200, data: smeAddressDetails };
    } catch (error) {
      console.error(error);
      toast.error('An error occurred', { id });
    }
  };
  const handleFounderVerificationData = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFounderVerificationData({
      ...founderVerificationData,
      [e.target.name]: e.target.value
    });
    // let id = toast.loading('Verifying PAN Number...');
    // if (e.target.name === 'pan_number') {
    //   await delay(2000);
    //   toast.success('Entered OTP', { id });
    //   if (e.target.value.length === 10) {
    //     setActivePanOtp(true);
    //   }
    // }
    // if (e.target.name === 'aadhar_number') {
    //   if (e.target.value.length === 12) {
    //     setActiveAadharOtp(true);
    //   }
    // }
  };

  const handleRegisterFounderVerificationData = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (!founderVerificationData.pan_number || !founderVerificationData.aadhar_number) {
      return toast.error('All fields are required');
    }
    const regex = /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;

    if (!regex.test(founderVerificationData.pan_number)) {
      return toast.error('Invalid PAN Number of Founder');
    }

    e.preventDefault();
    let id = toast.loading('Verifying Founder Details...');
    try {
      await delay(2000);
      toast.success('Founder Verified Successfully', { id });
      return { status: 200, data: founderVerificationData };
    } catch (error) {
      console.error(error);
      toast.error('An error occurred', { id });
    }
  };

  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  const handleFounderDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFounderDetails({
      ...founderDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleRegisterFounderDetails = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // console.log('founderDetails', founderDetails);
    e.preventDefault();
    if (
      !founderDetails.name ||
      !founderDetails.email ||
      !founderDetails.phone ||
      !founderDetails.password
    ) {
      return toast.error('All fields are required');
    }

    e.preventDefault();
    let id = toast.loading('Registering Founder Details...');
    try {
      await delay(2000);
      toast.success('Founder Details Registered Successfully', { id });
      return { status: 200, data: founderDetails };
    } catch (error) {
      console.error(error);
      toast.error('An error occurred', { id });
    }

    console.log(founderDetails);
  };

  const PANOTP = () => {
    return (
      <div>
        <div className="flex flex-col space-y-16">
          <div className="mx-auto flex w-full max-w-xs flex-row items-center justify-between">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-12 w-12">
                <input
                  className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-pink-400 bg-transparent text-center text-lg outline-none"
                  type="text"
                  name={`otp${index + 1}`}
                  onChange={handlePanOTP}
                  id={`otp${index + 1}`}
                  aria-label={`OTP Digit ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const AadharOTP = () => {
    return (
      <div>
        <div className="flex flex-col space-y-16">
          <div className="mx-auto flex w-full max-w-xs flex-row items-center justify-between">
            <div className="h-12 w-12 ">
              <input
                className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-pink-400 bg-transparent  text-center text-lg outline-none "
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="h-12 w-12 ">
              <input
                className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-pink-400 bg-transparent  text-center text-lg outline-none "
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="h-12 w-12 ">
              <input
                className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-pink-400 bg-transparent  text-center text-lg outline-none "
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="h-12 w-12 ">
              <input
                className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-pink-400 bg-transparent  text-center text-lg outline-none "
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="h-12 w-12 ">
              <input
                className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-pink-400 bg-transparent  text-center text-lg outline-none "
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="h-12 w-12 ">
              <input
                className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-pink-400 bg-transparent  text-center text-lg outline-none "
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-grey-300 flex flex-row items-start gap-16 p-4 font-mono lg:justify-center  ">
      <Card className="flex w-1/3 items-center justify-center">
        <div className="bg-grey-300 mb-10 flex w-full flex-col overflow-hidden rounded-xl text-white md:flex-1 md:flex-row lg:max-w-screen-lg">
          <div className="px-4 md:flex-1">
            <h3 className=" text-2xl font-semibold  text-white">Register SME</h3>
            {page === 1 && (
              <div className="flex flex-col space-y-5">
                <h6 className="mt-4 flex justify-center">Founder Details</h6>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold ">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleFounderDetails}
                    className="rounded border border-[#3B4F74] bg-inherit px-4 py-4  "
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold ">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="phone"
                    onChange={handleFounderDetails}
                    className="rounded border border-[#3B4F74] bg-inherit px-4 py-4  "
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold ">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleFounderDetails}
                    className="rounded border border-[#3B4F74] bg-inherit px-4 py-4  "
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold ">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleFounderDetails}
                    className="rounded border border-[#3B4F74] bg-inherit px-4 py-4  "
                  />
                </div>

                <div className="flex flex-row justify-between">
                  <button
                    type="submit"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      let res = handleRegisterFounderDetails(e);
                      if (res && 'status' in res && res.status === 200) {
                        setPage(page + 1);
                      }
                    }}
                    className="w-200 flex justify-end rounded-md bg-blue-500 px-4 py-2 text-lg font-semibold text-white shadow transition-colors duration-300 hover:bg-blue-600 "
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {page === 2 && (
              <div className="flex flex-col space-y-5">
                <h6 className="mt-4 flex justify-center">Founder Verification Details</h6>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold ">
                    PAN
                  </label>
                  <input
                    type="text"
                    id="pan"
                    name="pan_number"
                    onChange={handleFounderVerificationData}
                    className="rounded border border-[#3B4F74] bg-inherit px-4 py-4  "
                  />
                </div>
                <div>{activePanOtp && <PANOTP />}</div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold ">
                    Aadhar
                  </label>
                  <input
                    type="text"
                    id="pan"
                    name="aadhar_number"
                    onChange={handleFounderVerificationData}
                    className="rounded border border-[#3B4F74] bg-inherit px-4 py-4  "
                  />
                </div>
                <div>{activeAadharOtp && <AadharOTP />}</div>
                <div className="flex flex-row justify-between">
                  <button
                    onClick={async e => {
                      setPage(page - 1);
                    }}
                    className="w-200 flex justify-end rounded-md bg-blue-500 px-4 py-2 text-lg font-semibold text-white shadow transition-colors duration-300 hover:bg-blue-600 "
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      let res = handleRegisterFounderVerificationData(e);
                      if (res && 'status' in res && res.status === 200) {
                        setPage(page + 1);
                      }
                    }}
                    className="w-200 flex justify-end rounded-md bg-blue-500 px-4 py-2 text-lg font-semibold text-white shadow transition-colors duration-300 hover:bg-blue-600 "
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {page === 3 && (
              <div className="flex flex-col space-y-5">
                <h6 className="flex justify-center">Address Details</h6>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold ">
                    Building No.
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="building_no"
                    onChange={handleAddressDetails}
                    className="rounded border border-[#3B4F74] bg-inherit px-4 py-4  "
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold ">
                    Street
                  </label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    onChange={handleAddressDetails}
                    className="rounded border border-[#3B4F74] bg-inherit px-4 py-4  "
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold ">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="rounded border border-[#3B4F74] bg-inherit px-4 py-4  "
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold ">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    onChange={handleAddressDetails}
                    className="rounded border border-[#3B4F74] bg-inherit px-4 py-4  "
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold ">
                    Pincode
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    onChange={handleAddressDetails}
                    className="rounded border border-[#3B4F74] bg-inherit px-4 py-4  "
                  />
                </div>

                <div className="flex flex-row justify-between">
                  <button
                    onClick={() => setPage(page - 1)}
                    className="w-200 flex justify-end rounded-md bg-blue-500 px-4 py-2 text-lg font-semibold text-white shadow transition-colors duration-300 hover:bg-blue-600 "
                  >
                    Back
                  </button>
                  <button
                    onClick={async e => {
                      await onClickHandleAddressDetails(e);
                      setPage(page + 1);
                    }}
                    className="w-200 flex justify-end rounded-md bg-blue-500 px-4 py-2 text-lg font-semibold text-white shadow transition-colors duration-300 hover:bg-blue-600 "
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {page === 4 && (
              <div className="flex flex-col space-y-5">
                <h6 className="flex justify-center">Bank Details</h6>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold ">
                    Account Number
                  </label>
                  <input
                    type="text"
                    id="accountNumber"
                    name="acc_no"
                    onChange={handleBankDetails}
                    className="rounded border border-[#3B4F74] bg-inherit px-4 py-4  "
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold ">
                    Account Holder Name
                  </label>
                  <input
                    type="text"
                    id="holderName"
                    name="acc_name"
                    onChange={handleBankDetails}
                    className="rounded border border-[#3B4F74] bg-inherit px-4 py-4  "
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold ">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    id="bankName"
                    name="bank_name"
                    onChange={handleBankDetails}
                    className="rounded border border-[#3B4F74] bg-inherit px-4 py-4  "
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold ">
                    IFSC Code
                  </label>
                  <input
                    type="text"
                    id="ifsc"
                    name="ifsc_code"
                    onChange={handleBankDetails}
                    className="rounded border border-[#3B4F74] bg-inherit px-4 py-4  "
                  />
                </div>

                <div className="flex flex-row justify-between">
                  <button
                    onClick={() => setPage(page - 1)}
                    className="w-200 flex justify-end rounded-md bg-blue-500 px-4 py-2 text-lg font-semibold text-white shadow transition-colors duration-300 hover:bg-blue-600 "
                  >
                    Back
                  </button>
                  <button
                    onClick={async e => {
                      await registerSmeBankDetails(e);
                      setPage(page + 1);
                    }}
                    className="w-200 flex justify-end rounded-md bg-blue-500 px-4 py-2 text-lg font-semibold text-white shadow transition-colors duration-300 hover:bg-blue-600 "
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {page === 5 && (
              <div className="flex flex-col space-y-5">
                <h6 className="mt-4 flex justify-center">Documents</h6>
                <h6 className="justify-left flex">Udhyam Aadhar</h6>

                <div className="flex w-full flex-col items-center  justify-center">
                  <label
                    htmlFor="dropzone-file"
                    className="dark:hover:bg-bray-800 flex h-32 w-full cursor-pointer flex-col items-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                      <svg
                        className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> Udhyam Aadhar
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      onChange={handleUdhyamFileChange}
                      className="hidden"
                    />
                  </label>

                  {udhyamFile && (
                    <div className="file-preview mt-4 w-[50%] overflow-hidden shadow-2xl">
                      <img
                        src={udhyamFile}
                        alt="Preview"
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-row justify-between">
                  <button
                    onClick={() => setPage(page - 1)}
                    className="w-200 flex justify-end rounded-md bg-blue-500 px-4 py-2 text-lg font-semibold text-white shadow transition-colors duration-300 hover:bg-blue-600 "
                  >
                    Back
                  </button>
                  <button
                    onClick={async e => {
                      await checkUdhyamVerification(e);
                      setPage(page + 1);
                    }}
                    className="w-200 flex justify-end rounded-md bg-blue-500 px-4 py-2 text-lg font-semibold text-white shadow transition-colors duration-300 hover:bg-blue-600 "
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {page === 6 && (
              <div className="flex flex-col space-y-5">
                <h6 className="mt-4 flex justify-center">Documents</h6>
                <h6 className="justify-left flex">Tax Return File</h6>

                <div className="flex w-full flex-col items-center  justify-center">
                  <label
                    htmlFor="dropzone-file"
                    className="dark:hover:bg-bray-800 flex h-32 w-full cursor-pointer flex-col items-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                      <svg
                        className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> Tax Return File
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      onChange={handleTaxReturnFileChange}
                      className="hidden"
                    />
                  </label>

                  {taxReturnFile && (
                    <div className="file-preview mt-4 w-[50%] overflow-hidden shadow-2xl">
                      <img
                        src={taxReturnFile}
                        alt="Preview"
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-row justify-between">
                  <button
                    onClick={() => setPage(page - 1)}
                    className="w-200 flex justify-end rounded-md bg-blue-500 px-4 py-2 text-lg font-semibold text-white shadow transition-colors duration-300 hover:bg-blue-600 "
                  >
                    Back
                  </button>
                  <button
                    onClick={async e => {
                      await checkTaxReturnVerification(e);
                      toast.success('SME Registered Successfully');
                    }}
                    className="w-200 flex justify-end rounded-md bg-blue-500 px-4 py-2 text-lg font-semibold text-white shadow transition-colors duration-300 hover:bg-blue-600 "
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
      <div className="mt-12">
        <Timeline page={page} />
      </div>
    </div>
  );
}
