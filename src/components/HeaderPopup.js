import React from 'react';

import { NavLink } from 'react-router-dom';
import { FaHome, FaUserCircle, FaRegUserCircle } from 'react-icons/fa';
import { useJobContext } from './context/JobAppContext';

const HeaderPopup = () => {
  const { handleClicks } = useJobContext();
  return (
    <div className='glass21  shadow-lg  flex flex-col gap-1 rounded-b-lg group'>
      <div className='flex items-center  justify-between p-2 '>
        <NavLink className='  ' to='/'>
          Jobs
        </NavLink>
        <FaHome />
      </div>

      <div className='flex items-center  justify-between p-2 '>
        <NavLink className=' ' to='/'>
          Review
        </NavLink>
        <FaRegUserCircle />
      </div>

      <div className='flex items-center  justify-between p-2'>
        <NavLink className='   ' to='/'>
          Find Salaries
        </NavLink>
        <FaUserCircle />
      </div>

      <div className='flex items-center  justify-between p-2'>
        <button className=' ' onClick={handleClicks}>
          Post Job
        </button>
        <FaUserCircle />
      </div>
    </div>
  );
};

export default HeaderPopup;
