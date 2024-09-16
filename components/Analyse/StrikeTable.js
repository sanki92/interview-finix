
import React from 'react';
import { TfiArrowDown } from "react-icons/tfi";

const StrikeTable = ({ hoveredRow, onHover, onLeave, data }) => {


  return (
    <div className="overflow-x-auto text-xs col-span-1 bg-white">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <td className='py-4'></td>
          </tr>
          <tr className="bg-white">
            <td className="border px-4 py-2 text-center cursor-pointer">Strike <TfiArrowDown className='inline mb-1 font-normal' /></td>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => (
            <tr key={index}
              onMouseEnter={() => onHover(index)}
              onMouseLeave={onLeave}
            >
              <td className={`border px-4 py-2 text-center ${hoveredRow === index ? 'bg-gray-50' :""} cursor-pointer`}>
               <span className={`${ index === 7 ? 'bg-blue-100' : 'bg-gray-100'} p-2 `}> {value}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StrikeTable;
