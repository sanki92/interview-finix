import React, { useState } from 'react'
import { AiOutlineRise } from "react-icons/ai";
import { RxChevronDown } from 'react-icons/rx';
import { GoVideo } from "react-icons/go";
import { IoSearch } from "react-icons/io5";


const TableHeader = () => {

  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className=' w-[90%] py-3 px-3 grid grid-cols-8 mx-auto bg-white my-3 rounded-md shadow-sm'>
      <div className='col-span-2  flex items-center relative  '>
        <h3 className='text-sm flex items-center gap-x-1 font-medium'><IoSearch className='text-gray-400' /> NIFTY 25356.50 <span className='text-red-500 text-xs font-normal'>-0.1%</span> </h3>
        <span className=' h-4 px-[2px] text-blue-500 border border-blue-500 rounded-sm ml-8'>

          <AiOutlineRise />
        </span>
        <span className=' h-4 px-[2px] text-blue-500 border border-blue-500 rounded-sm ml-2 text-[9px]'>
          info
        </span>
        <hr className='h-[2.8rem] right-0 absolute w-[2px]  bg-gray-300' />
      </div>
      <div className='col-span-1 flex items-center gap-x-2 justify-center relative'>
        <h3 className='text-xs text-gray-500'>Expiry</h3>
        <span className='text-sm'>26 Sep</span>
        <RxChevronDown />

        <hr className='h-[2.8rem] right-0 absolute w-[2px] bg-gray-300' />

      </div>
      <div className='col-span-1 flex items-center gap-x-2 justify-center relative'>
        <span className='text-xs font-medium'>ATM IV 10.0 <span className='text-red-500 font-normal'>-0.3</span></span>
        <hr className='h-full right-0 absolute w-[2px] bg-gray-300' />
      </div>
      <div className='col-span-1 flex items-center gap-x-2 justify-center relative'>
        <span className='text-xs font-medium'>INDIAVIX 12.6 <span className='text-red-500 font-normal'>-0.6</span></span>
        <hr className='h-full right-0 absolute w-[2px] bg-gray-300' />
      </div>
      <div className='col-span-1 flex items-center gap-x-2 justify-center relative'>
        <span className='text-xs font-medium'>IVP 28</span>
        <hr className='h-[2.8rem] right-0 absolute w-[2px] bg-gray-300' />
      </div>
      <div className='col-span-1 flex items-center gap-x-2 justify-center relative'>
        <div className="flex items-center">
          <button
            id='perlat'
            onClick={handleToggle}
            className={`relative inline-flex items-center h-4 rounded-full w-8 ${isOn ? 'bg-blue-300' : 'bg-gray-300'
              } transition-colors duration-300`}
          >
            <span
              className={`absolute left-0 inline-block h-3 w-3 mx-[2px] transform bg-white rounded-full transition-transform duration-300 ${isOn ? 'translate-x-4' : 'translate-x-0'
                }`}
            ></span>
          </button>
        </div>
        <label className='cursor-pointer text-xs font-medium ml-2' htmlFor="perlat">Per Lat</label>
        <hr className='h-[2.8rem] right-0 absolute w-[2px] bg-gray-300' />

      </div>
      <div className='col-span-1 flex items-center gap-x-2 justify-center relative'>
        <GoVideo className='text-blue-500' />
        <span className='text-xs font-semibold text-blue-500' >Demo</span>

      </div>
    </div>
  )
}

export default TableHeader