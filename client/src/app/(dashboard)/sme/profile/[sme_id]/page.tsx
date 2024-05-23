'use client';
import { Card } from '@/components/cards/card';
import Upload from '@/components/cards/Upload';
import SidebarNav from '@/components/layouts/sidebar-nav';
import { Shell } from '@/components/shell';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import CreditCard from '@/components/ui/credit-card';
export default function Page() {
  return (
    <>
      <Shell>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <img
              className="h-24 w-24 rounded-full"
              src="/images/profile.jpeg"
              alt="Rounded avatar"
              style={{ boxShadow: '0px 0px 24px 0px #ECB278', border: '4px solid #DAB436' }}
            />
            <div className="ml-3 mt-2 flex flex-col">
              <p className="ml-1 font-bold">Nikku Dev</p>
              <span className=" mt-3 rounded-xl bg-[#DC7DA63D] px-2.5  py-0.5 text-xs text-white shadow-none ">
                smeId
              </span>
              <p className="mt-3 text-sm">
                Credit score : <span className="text-[#DAB436]">World No 1</span>
              </p>
            </div>
          </div>
          <div>
            <span className="text-[0.875rem] text-primary-foreground">
              Loan Dues : <span className="text-[#DAB436]">4,000 INR</span>
            </span>
          </div>
        </div>
        <div className="mx-auto flex w-full flex-row items-center justify-between gap-7">
          <Card className="mt-10  w-[50%] gap-2" title="SME Details">
            <div className="mx-auto mt-3 flex w-full flex-row justify-between">
              <h3 className="text-[#DAB436]">EmailId</h3>
              <h2>sneahGupta989i@gmail.com</h2>
            </div>
            <div className="mx-auto mt-3 flex w-full flex-row justify-between">
              <h3 className="text-[#DAB436]">PAN Number</h3>
              <h2>12345678</h2>
            </div>
            <div className="mx-auto mt-3 flex w-full flex-row justify-between">
              <h3 className="text-[#DAB436]">GSTIN Number</h3>
              <h2>12345</h2>
            </div>
            <div className="mx-auto mt-3 flex w-full flex-row justify-between">
              <h3 className="text-[#DAB436]">Address</h3>
              <h2>Sweetberry sahara city</h2>
            </div>
          </Card>
          <Card className="mt-10  w-[50%] gap-2" title="SME Bank Details">
            <div className="mx-auto mt-3 flex w-full flex-row justify-between gap-2">
              <h3 className="whitespace-nowrap text-[#DAB436]">Account Number</h3>
              <h2>1234567890</h2>
            </div>
            <div className="mx-auto mt-3 flex w-full flex-row justify-between">
              <h3 className="text-[#DAB436]">Account Holder Network</h3>
              <h2>12345678</h2>
            </div>
            <div className="mx-auto mt-3 flex w-full flex-row justify-between">
              <h3 className="text-[#DAB436]">Bank Name</h3>
              <h2>12345</h2>
            </div>
            <div className="mx-auto mt-3 flex w-full flex-row justify-between">
              <h3 className="text-[#DAB436]">Bank IFSC Code</h3>
              <h2>Sweetberry sahara city</h2>
            </div>
          </Card>
        </div>
        <div className="mx-auto flex w-full flex-row items-center justify-between gap-7">
          <CreditCard yes={false} />
        </div>
        <Card className="mt-10 flex w-[100%]  flex-col gap-2">
          <div className="flex w-full items-center justify-center">
            <label
              htmlFor="dropzone-file"
              className=" flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-[#26344c] hover:bg-[#131a27] "
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
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          <div className="mt-3 text-[#DAB436]">
            <h3 className="text-sm">Uploaded Documents</h3>
            <div className="mt-4 flex flex-row flex-wrap gap-4">
              <Upload docName="Udyam Aadhar" size={3} uploadedAt="12 feb 2024" />
              <Upload docName="Tax Return 2023" size={3} uploadedAt="12 feb 2024" />
              <Upload docName="Pan Card" size={3} uploadedAt="12 feb 2024" />
            </div>
          </div>
        </Card>
        <div className="mx-auto flex w-full flex-row items-center justify-between gap-7">
          <Card className="mt-10  w-[50%] gap-2" title="SME Founder's Details">
            <div className="mx-auto mt-3 flex w-full flex-row justify-between gap-2">
              <h3 className="whitespace-nowrap text-[#DAB436]">Name</h3>
              <h2>1234567890</h2>
            </div>
            <div className="mx-auto mt-3 flex w-full flex-row justify-between">
              <h3 className="text-[#DAB436]">AAdhar Number</h3>
              <h2>12345678</h2>
            </div>
            <div className="mx-auto mt-3 flex w-full flex-row justify-between">
              <h3 className="text-[#DAB436]">PAN Number</h3>
              <h2>12345</h2>
            </div>
            <div className="mx-auto mt-3 flex w-full flex-row justify-between">
              <h3 className="text-[#DAB436]">Contact</h3>
              <h2>Sweetberry sahara city</h2>
            </div>
            <div className="mx-auto mt-3 flex w-full flex-row justify-between">
              <h3 className="text-[#DAB436]">Email</h3>
              <h2>Sweetberry sahara city</h2>
            </div>
          </Card>
          <Card className="mt-10  w-[50%] gap-2" title="SME Co-Founder's Details">
            <div className="mx-auto mt-3 flex w-full flex-row justify-between gap-2">
              <h3 className="whitespace-nowrap text-[#DAB436]">Name</h3>
              <h2>1234567890</h2>
            </div>
            <div className="mx-auto mt-3 flex w-full flex-row justify-between">
              <h3 className="text-[#DAB436]">AAdhar Number</h3>
              <h2>12345678</h2>
            </div>
            <div className="mx-auto mt-3 flex w-full flex-row justify-between">
              <h3 className="text-[#DAB436]">PAN Number</h3>
              <h2>12345</h2>
            </div>
            <div className="mx-auto mt-3 flex w-full flex-row justify-between">
              <h3 className="text-[#DAB436]">Contact</h3>
              <h2>Sweetberry sahara city</h2>
            </div>
            <div className="mx-auto mt-3 flex w-full flex-row justify-between">
              <h3 className="text-[#DAB436]">Email</h3>
              <h2>Sweetberry sahara city</h2>
            </div>
          </Card>
        </div>
      </Shell>
    </>
  );
}
