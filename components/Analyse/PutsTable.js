import React from 'react';
import { RxQuestionMarkCircled } from "react-icons/rx";


const PutsTable = ({ hoveredRow, onHover, onLeave, hoverMenu, data, getBarWidth }) => {

  return (
    <div className="overflow-x-auto text-xs w-full col-span-6 bg-white">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <td className='bg-green-50 p-2 uppercase text-left text-green-500 font-bold border border-green-200' colSpan={7}>PUTS</td>
          </tr>
          <tr className="bg-white whitespace-nowrap">
            <td className="border px-4 py-2 text-center cursor-pointer">LTP</td>
            <td className="border-b px-2 py-2 text-center cursor-pointer  w-[150px]">

              <span className='flex items-center justify-start gap-x-2 font-medium text-green-500'>
                Put OI
                <div className='bg-green-500 h-3 w-7 rounded-full'></div>
              </span>
            </td>
            <td className="border-b px-4 py-2 cursor-pointer">OI-lakh</td>
            <td className="border px-4 py-2 text-center cursor-pointer ">Delta <RxQuestionMarkCircled className='inline mb-1' /></td>
            <td className="border px-4 py-2 text-center cursor-pointer ">Theta <RxQuestionMarkCircled className='inline mb-1' /></td>
            <td className="border px-4 py-2 text-center cursor-pointer ">Vega <RxQuestionMarkCircled className='inline mb-1' /></td>
            <td className="border px-4 py-2 text-center cursor-pointer">Gamma <RxQuestionMarkCircled className='inline mb-1' /></td>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              onMouseEnter={() => onHover(index)}
              onMouseLeave={onLeave}
              className={`${hoveredRow === index ? 'bg-gray-50' : index > 7 ? 'bg-highlight' : ''} cursor-pointer`}
            >
              <td className="border px-4 py-2 text-center">{row.ltp}</td>
              <td className="border-b flex justify-start py-2 relative">
                {hoveredRow === index && <div className='absolute w-full h-full top-0 left-0'>
                  {hoverMenu}
                </div>}
                <div className="bg-green-100 h-4 rounded-e-full" style={{ width: getBarWidth(row.oiLakh) }}></div>
              </td>
              <td className="border-b px-4 py-2">{row.oiLakh}</td>
              <td className="border px-4 py-2 text-center">{row.delta}</td>
              <td className="border px-4 py-2 text-center">{row.theta}</td>
              <td className="border px-4 py-2 text-center">{row.vega}</td>
              <td className="border px-4 py-2 text-center">{row.gamma}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PutsTable;
