
import React from 'react';
import { RxQuestionMarkCircled } from "react-icons/rx";

const CallsTable = ({ hoveredRow, onHover, onLeave, hoverMenu, data, getBarWidth }) => {

  return (
    <div className="overflow-x-auto text-xs w-full col-span-6 bg-white">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <td className='bg-red-50 p-2 uppercase text-right text-red-500 font-bold border border-red-200' colSpan={7}>Calls</td>
          </tr>
          <tr className="bg-white whitespace-nowrap">
            <td className="border px-4 py-2 cursor-pointer text-center">Gamma <RxQuestionMarkCircled className='inline mb-1' /></td>
            <td className="border px-4 py-2 cursor-pointer text-center">Vega <RxQuestionMarkCircled className='inline mb-1' /></td>
            <td className="border px-4 py-2 cursor-pointer text-center">Theta <RxQuestionMarkCircled className='inline mb-1' /></td>
            <td className="border px-4 py-2 cursor-pointer text-center">Delta <RxQuestionMarkCircled className='inline mb-1' /></td>
            <td className="border-b px-4 py-2 cursor-pointer text-center">OI-lakh</td>
            <td className="border-b px-2 py-2 w-[150px] cursor-pointer">
              <span className='flex items-center justify-end gap-x-2 font-medium text-red-500'>
                Call OI
                <div className='bg-red-500 h-3 w-7 rounded-full'></div>
              </span>
            </td>
            <td className="border px-4 py-2 cursor-pointer text-center">LTP</td>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              onMouseEnter={() => onHover(index)}
              onMouseLeave={onLeave}
              className={`${hoveredRow === index ? 'bg-gray-50' : index < 7 ? 'bg-highlight' : ''} cursor-pointer hover:bg-gray-50`}
            >
              <td className="border px-4 py-2 text-center">{row.gamma}</td>
              <td className="border px-4 py-2 text-center">{row.vega}</td>
              <td className="border px-4 py-2 text-center">{row.theta}</td>
              <td className="border px-4 py-2 text-center">{row.delta}</td>
              <td className="border-b px-4 py-2 text-center">{row.oiLakh}</td>
              <td className="border-b flex justify-end py-2 relative">
                {hoveredRow === index && <div className='absolute w-full h-full top-0 left-0'>
                  {hoverMenu}
                </div>}
                <div className="bg-red-100 h-4 rounded-s-full" style={{ width: getBarWidth(row.oiLakh) }}></div>
              </td>
              <td className="border px-4 py-2 text-center">{row.ltp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CallsTable;
