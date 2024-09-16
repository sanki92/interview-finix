import React from 'react'
import { RxChevronDown } from 'react-icons/rx'
import { FiBarChart2 } from "react-icons/fi";
import { SlGraph } from "react-icons/sl";
import { AiOutlineRise } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";


const TableFooter = () => {
  return (
    <div className='w-[95%] flex justify-between mx-auto  mt-2  '>
      <div className='flex bg-white w-fit rounded-ss-md rounded-se-md shadow-sm h-full py-3 px-3'>
        <div className='flex items-center justify-center gap-x-2 px-3 relative'>
          <p className='text-sm'>LTP View</p>
          <RxChevronDown />
          <hr className='h-[2.8rem] right-0 absolute w-[2px] bg-gray-300' />
        </div>
        <div className='flex items-center justify-center gap-x-2 px-3 relative'>
          <p className='text-sm'>Greeks View</p>
          <RxChevronDown />
          <hr className='h-[2.8rem] right-0 absolute w-[2px] bg-gray-300' />
        </div>
        <div className='flex items-center justify-center gap-x-2 px-3 relative whitespace-nowrap '>
          <p className='text-sm'>All Columns View</p>
          <RxChevronDown />
        </div>
      </div>

      <div className='flex gap-x-2 '>
        <div className='text-sm flex items-center gap-x-3'>
          <p>Open with</p>
          <div className='flex gap-x-2 items-center bg-white py-1 px-2 rounded-md shadow-sm'>
            <FiBarChart2 />
            <p>OI</p>
          </div>
          <div className='flex gap-x-2 items-center bg-white py-1 px-2 rounded-md shadow-sm'>
            <SlGraph />
            <p>IV</p>
          </div>
          <div className='flex gap-x-2 items-center bg-white py-1 px-2 rounded-md shadow-sm'>
            <AiOutlineRise />
            <p>Live Charts</p>
          </div>
        </div>
          <div className='flex gap-x-2 text-sm items-center text-blue-500 font-medium bg-white py-1 px-2 rounded-ss-md rounded-se-md  shadow-sm'>
            <FiSettings />
            <p>Settings</p>
          </div>
      </div>

    </div>
  )
}

export default TableFooter