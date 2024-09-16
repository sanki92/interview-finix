'use client';
import React, { useState } from 'react'
import TableHeader from './TableHeader'
import TableFooter from './TableFooter'
import CallsTable from './CallsTable'
import PutsTable from './PutsTable'
import StrikeTable from './StrikeTable'
import { TbLetterASmall, TbLetterBSmall, TbLetterCSmall, TbLetterDSmall } from "react-icons/tb";

const TableContainer = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const data = {
    callsData: [
      { gamma: "0.0006", vega: 13, theta: -5, delta: "0.19", oiLakh: "14.9", ltp: 49.05 },
      { gamma: "0.0007", vega: 18, theta: -8, delta: "0.65", oiLakh: "1.3", ltp: 352.40 },
      { gamma: "0.0007", vega: 19, theta: -8, delta: "0.59", oiLakh: "2.0", ltp: 283.60 },
      { gamma: "0.0007", vega: 18, theta: -7, delta: "0.32", oiLakh: "14.0", ltp: 106.45 },
      { gamma: "0.0007", vega: 19, theta: -8, delta: "0.55", oiLakh: "116.7", ltp: 248.40 },
      { gamma: "0.0006", vega: 15, theta: -6, delta: "0.22", oiLakh: "11.6", ltp: 61.30 },
      { gamma: "0.0008", vega: 19, theta: -8, delta: "0.51", oiLakh: "2.4", ltp: 221.30 },
      { gamma: "0.0008", vega: 19, theta: -8, delta: "0.40", oiLakh: "25.4", ltp: 145.85 },
      { gamma: "0.0006", vega: 17, theta: -8, delta: "0.68", oiLakh: "17.0", ltp: 385.65 },
      { gamma: "0.0006", vega: 17, theta: -7, delta: "0.25", oiLakh: "11.4", ltp: 71.05 },
      { gamma: "0.0008", vega: 19, theta: -8, delta: "0.48", oiLakh: "15.5", ltp: 192.90 },
      { gamma: "0.0008", vega: 19, theta: -8, delta: "0.44", oiLakh: "1.3", ltp: 168.55 },
      { gamma: "0.0007", vega: 18, theta: -7, delta: "0.36", oiLakh: "1.5", ltp: 122.20 },
      { gamma: "0.0007", vega: 18, theta: -8, delta: "0.62", oiLakh: "16.3", ltp: 313.95 },
      { gamma: "0.0006", vega: 17, theta: -7, delta: "0.29", oiLakh: "1.6", ltp: 89.65 },
      { gamma: "0.0006", vega: 16, theta: -8, delta: "0.71", oiLakh: "1.7", ltp: 422.50 },
    ],
    strikeData: [
      25050, 25100, 25150, 25200, 25250, 25300, 25350, 25400, 25450,
      25500, 25550, 25600, 25650, 25700, 25750, 25800,
    ],
    putsData: [
      { gamma: "0.0006", vega: 13, theta: -5, delta: "0.19", oiLakh: "14.9", ltp: 49.05 },
      { gamma: "0.0007", vega: 19, theta: -8, delta: "0.55", oiLakh: "16.7", ltp: 248.40 },
      { gamma: "0.0007", vega: 18, theta: -8, delta: "0.65", oiLakh: "1.3", ltp: 352.40 },
      { gamma: "0.0006", vega: 16, theta: -8, delta: "0.71", oiLakh: "1.7", ltp: 422.50 },
      { gamma: "0.0008", vega: 19, theta: -8, delta: "0.48", oiLakh: "15.5", ltp: 192.90 },
      { gamma: "0.0008", vega: 19, theta: -8, delta: "0.44", oiLakh: "1.3", ltp: 168.55 },
      { gamma: "0.0008", vega: 19, theta: -8, delta: "0.40", oiLakh: "25.4", ltp: 145.85 },
      { gamma: "0.0008", vega: 19, theta: -8, delta: "0.51", oiLakh: "2.4", ltp: 221.30 },
      { gamma: "0.0006", vega: 17, theta: -8, delta: "0.68", oiLakh: "17.0", ltp: 385.65 },
      { gamma: "0.0007", vega: 18, theta: -7, delta: "0.36", oiLakh: "1.5", ltp: 122.20 },
      { gamma: "0.0006", vega: 17, theta: -7, delta: "0.25", oiLakh: "11.4", ltp: 71.05 },
      { gamma: "0.0006", vega: 15, theta: -6, delta: "0.22", oiLakh: "11.6", ltp: 61.30 },
      { gamma: "0.0006", vega: 17, theta: -7, delta: "0.29", oiLakh: "1.6", ltp: 89.65 },
      { gamma: "0.0007", vega: 18, theta: -8, delta: "0.62", oiLakh: "16.3", ltp: 313.95 },
      { gamma: "0.0007", vega: 19, theta: -8, delta: "0.59", oiLakh: "2.0", ltp: 283.60 },
      { gamma: "0.0007", vega: 18, theta: -7, delta: "0.32", oiLakh: "14.0", ltp: 106.45 },
    ]
  };

  const highestOiLakh = Math.max(
    ...[...data.callsData, ...data.putsData].map(item => parseFloat(item.oiLakh))
  );

  const getBarWidth = (oiLakh) => `${Math.min((oiLakh / highestOiLakh) * 100, 100)}%`;



  const handleMouseEnter = (index) => {
    setHoveredRow(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  const hoverMenu = <ul className='flex justify-evenly items-center h-full'>
    <li onClick={() => console.log("A clicked")} className='bg-gray-500 text-white rounded-sm'><TbLetterASmall className='text-lg' /></li>
    <li onClick={() => console.log("B clicked")} className='bg-gray-500 text-white rounded-sm'><TbLetterBSmall className='text-lg' /></li>
    <li onClick={() => console.log("C clicked")} className='bg-gray-500 text-white rounded-sm'><TbLetterCSmall className='text-lg' /></li>
    <li onClick={() => console.log("D clicked")} className='bg-gray-500 text-white rounded-sm'><TbLetterDSmall className='text-lg' /></li>
  </ul>

  return (
    <div>
      <TableHeader />
      <div className='grid grid-cols-13'>
        <CallsTable
          getBarWidth={getBarWidth}
          data={data.callsData}
          hoverMenu={hoverMenu}
          hoveredRow={hoveredRow}
          onHover={handleMouseEnter}
          onLeave={handleMouseLeave}
        />
        <StrikeTable
          data={data.strikeData}
          hoveredRow={hoveredRow}
          onHover={handleMouseEnter}
          onLeave={handleMouseLeave}
        />
        <PutsTable
          getBarWidth={getBarWidth}
          data={data.putsData}
          hoverMenu={hoverMenu}
          hoveredRow={hoveredRow}
          onHover={handleMouseEnter}
          onLeave={handleMouseLeave}
        />
      </div>
      <TableFooter />
    </div>
  )
}

export default TableContainer