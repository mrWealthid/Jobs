import React from 'react';
import { NavLink } from 'react-router-dom';
import { useJobContext } from './context/JobAppContext';
import HeaderLogo from './assets/FindJobs.png';
import { FaBars, FaTimes, FaBell } from 'react-icons/fa';

import { BiUserCircle } from 'react-icons/bi';
import HeaderPopup from './HeaderPopup';

const Header = ({ type }) => {
  const { handleClicks, showPopup, togglePopup } = useJobContext();
  return (
    <header className='bg-primary flex flex-col  gap-10 py-4'>
      <div className='flex text-white w-10/12 justify-between items-center text-white mx-auto '>
        <div className='flex flex-col gap-4 text-xs'>
          <img src={HeaderLogo} alt='headerLogo' className='w-5/6' />
          <p className='text-center'>For Employers</p>
        </div>

        {type === 'Guest' ? (
          <div className='hidden md:flex  items-center text-sm gap-4 '>
            <NavLink to='/'>Jobs</NavLink>
            <NavLink to='/reviews'>Company Review</NavLink>

            <NavLink to='/register'>Register</NavLink>
            <button
              className='text-primary bg-white py-1 px-2 rounded Post'
              onClick={handleClicks}
            >
              Post Job
            </button>
          </div>
        ) : (
          <div className='flex gap-4 items-center'>
            <FaBell />
            <BiUserCircle />
          </div>
        )}

        {!showPopup ? (
          <FaBars
            color='white'
            className='md:hidden cursor-pointer'
            onClick={togglePopup}
          />
        ) : (
          <FaTimes
            color='white'
            className='md:hidden animate-slideOut cursor-pointer'
            onClick={togglePopup}
          />
        )}
      </div>
      <section className='flex flex-col text-white gap-10 w-9/12 mx-auto mb-16'>
        {type === 'Guest' ? (
          <p className='text-2xl'>Find Your Dream Job</p>
        ) : (
          <p className='text-2xl'>Jobs</p>
        )}
      </section>

      {showPopup ? (
        <div className='popups animate-slideIn text-primary'>
          <HeaderPopup />
        </div>
      ) : null}
    </header>
  );
};

Header.defaultProps = {
  type: 'Guest',
};
export default Header;
