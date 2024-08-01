import React, { FC } from 'react';

type TableUiLoanProps = {
  headings: string[];
  rowsData: {
    loan_amount: string;
    start_date?: string;
    loan_start_date?: string;
    interest_rate?: number;
    amount_dues: { amount_due: number }[];
    status?: string;
  }[];
};

const TableUiLoan: FC<TableUiLoanProps> = ({ headings, rowsData }) => {
  return (
    <table className="min-w-full border-separate border-spacing-x-2 border-spacing-y-2">
      <thead className="hidden border-b lg:table-header-group">
        <tr>
          {headings.map((heading, index) => (
            <td
              key={index}
              className="whitespace-normal py-4 text-sm font-medium text-primary-300 sm:px-6"
            >
              {heading}
            </td>
          ))}
        </tr>
      </thead>
      <tbody className="lg:border-gray-300">
        {rowsData.map((row, index) => (
          <tr key={index}>
            <td className="sm:px-6">{index + 1}</td>
            <td className="whitespace-no-wrap py-4 text-sm text-white sm:px-6">
              {row.loan_amount}
              <div className="mt-1 lg:hidden">
                <p className="font-normal text-white">{row.start_date}</p>
              </div>
            </td>
            <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-white sm:px-6 lg:table-cell">
              {row.loan_start_date}
            </td>
            <td className="whitespace-no-wrap px-6 py-4 text-right text-sm text-white lg:text-left">
              {row.interest_rate}
            </td>
            <td className="whitespace-no-wrap px-6 py-4 text-right text-sm text-white lg:text-left">
              {row.amount_dues[row.amount_dues.length - 1]?.amount_due}
            </td>
            <td className="whitespace-no-wrap px-6 py-4 text-right text-sm text-white lg:text-left">
              {row.status}
            </td>
            <td className="whitespace-no-wrap px-6 py-4 text-right text-sm text-white lg:text-left">
              <button
                className="bg-green-300 text-black rounded-md p-2"
                onClick={() => {
                  window.open('https://rzp.io/i/MtcORaltn', '_blank');
                }}
              >
                Pay
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableUiLoan;
