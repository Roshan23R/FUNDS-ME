import React, { FC } from 'react';

type TableUiProps = {
  headings: string[];
  rowsData: { amount: string; date?: string; time?: string; transaction_ref_id: string }[];
};

const TableUi: FC<TableUiProps> = ({ headings, rowsData }) => {
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
              {row.amount}
            </td>
            <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-white sm:px-6 lg:table-cell">
              {row?.date} / {row?.time}
            </td>
            <td className="whitespace-no-wrap px-6 py-4 text-right text-sm text-white lg:text-left">
              {row?.transaction_ref_id}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableUi;
