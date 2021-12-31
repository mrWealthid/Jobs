import React from 'react';
import Header from '../Header';
import { FaSearch } from 'react-icons/fa';

const GuestBoard = () => {
  return (
    <div className=''>
      <Header />

      <div className='border rounded flex  w-9/12 mx-auto -mt-8'>
        <FaSearch />
        <input className='p-4' placeholder='' />

        {/* <input className='p-4' /> */}
      </div>
    </div>
  );
};

export default GuestBoard;
