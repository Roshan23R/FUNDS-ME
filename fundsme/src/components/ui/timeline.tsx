import React from 'react';

const Timeline = ({ page }: { page: number }) => {
  const steps = [
    "Founder's Details",
    "Founder's Verification",
    "Company's Address Details",
    "Company's Bank Account Details",
    "Company's Udyann Verification",
    "Company's Tax Return Verifiaction"
  ];

  return (
    <div className="flex h-full flex-col items-center justify-center">
      {steps.map((step, index) => {
        console.log(step,index,page,"here values")
        return (
          <div className="flex items-start" key={index}>
            <div className="flex flex-col items-center">
              <div
                className={`h-6 w-6 rounded-full border-2 border-gray-300 ${index <= page - 1 ? 'bg-green-500' : 'bg-gray-300'}`}
              ></div>
              {index !== steps.length - 1 && (
                <div
                  className={`my-2 h-12  w-1 ${index < page - 1 ? 'bg-green-500' : 'bg-gray-300'}`}
                ></div>
              )}
            </div>
            <div className="ml-2 w-32 whitespace-nowrap text-gray-500">{step}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
