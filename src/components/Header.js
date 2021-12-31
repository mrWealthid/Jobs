import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-primary flex flex-col text-white gap-10'>
      <div className='flex w-10/12 justify-between text-white mx-auto '>
        <div className=''>Find jobs</div>

        <div className='flex items-center gap-2 '>
          <NavLink to='/jobs'>Jobs</NavLink>
          <NavLink to='/reviews'>Company Review</NavLink>

          <NavLink to='/'>Find Salaries</NavLink>
          <button className='text-primary p-2 rounded'>Post Job</button>
        </div>
      </div>

      <section className='flex flex-col gap-10 w-9/12 mx-auto mb-16'>
        <p>Find Your Dream Job</p>
      </section>
    </header>
  );
};

export default Header;
