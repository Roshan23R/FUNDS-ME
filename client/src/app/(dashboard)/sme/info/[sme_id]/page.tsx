'use client';
import { useEffect, useState } from 'react';
import { Card } from '@/components/cards/card';
import { Shell } from '@/components/shell';
import TableUiRepayed from '@/components/ui/table-ui-repayed';
import TableUiDeposit from '@/components/ui/table-ui-deposit';
import TableUiLoan from '@/components/ui/table-ui-loan';
import {
  depositHeadings,
  loanBorrowedHeadings,
  loanRepayedHeadings,
  loanRepayedData,
  depositData,
  loanBorrowedData
} from '@/lib/data';

export default function Page() {
  const [totalDeposit, setTotalDeposit] = useState(0);
  const [totalLoanBorrowed, setTotalLoanBorrowed] = useState(0);
  const [totalLoanRepayed, setTotalLoanRepayed] = useState(0);

  // Calculate total deposit
  useEffect(() => {
    const depositTotal:number = depositData.reduce((acc, curr) => acc + curr.amount, 0);
    setTotalDeposit(depositTotal);
  }, []);

  // Calculate total loan borrowed
  useEffect(() => {
    const loanBorrowedTotal:number = loanBorrowedData.reduce(
      (acc, curr) => acc + curr.loan_amount,
      0
    );
    setTotalLoanBorrowed(loanBorrowedTotal);
  }, []);

  // Calculate total loan repaid
  useEffect(() => {
    const loanRepayedTotal:number = loanRepayedData.reduce(
      (acc, curr) => acc + curr.paid_amount,
      0
    );
    setTotalLoanRepayed(loanRepayedTotal);
  }, []);

  return (
    <>
      <Shell>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img
              className="h-18 w-18 rounded-full"
              src="/images/user.png"
              alt="Rounded avatar"
            />
            <p className="ml-3 text-xl">House of Paints</p>
            <span className="me-2 rounded-xl bg-[#DC7DA63D] px-2.5 py-0.5 text-xs text-white shadow-none">
              1Ay00011DY...
            </span>
          </div>
          <p className="mt-10 text-xl">
            Total Deposits : <span className="text-[#ECB278]">{totalDeposit.toLocaleString()}</span>
          </p>
        </div>
        <div className="mx-auto flex w-full flex-col items-center justify-between gap-7">
          <Card
            className="w-[100%]"
            title="Deposit"
            description={`Total Deposit : ${totalDeposit.toLocaleString()}`}
          >
            <TableUiDeposit
              headings={depositHeadings}
              rowsData={depositData.map(item => ({
                ...item,
                amount: item.amount.toString() // Ensure amount is a string
              }))}
            />
          </Card>

          <Card
            className="w-[100%]"
            title="Loan Borrowed"
            description={`Total Loan Dues : ${totalLoanBorrowed.toLocaleString()}`}
          >
            <TableUiLoan
              headings={loanBorrowedHeadings}
              rowsData={loanBorrowedData.map(item => ({
                ...item,
                loan_amount: item.loan_amount.toString() // Ensure loan_amount is a string
              }))}
            />
          </Card>

          <Card
            className="w-[100%]"
            title="Loan Repayed"
            description={`Loan Payed Till : ${totalLoanRepayed.toLocaleString()}`}
          >
            <TableUiRepayed
              headings={loanRepayedHeadings}
              rowsData={loanRepayedData.map(item => ({
                ...item,
                paid_amount: item.paid_amount.toString() // Ensure paid_amount is a string
              }))}
            />
          </Card>
        </div>
      </Shell>
    </>
  );
}
