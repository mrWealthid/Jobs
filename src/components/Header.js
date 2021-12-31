import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ type }) => {
  return (
    <header className='bg-primary flex flex-col text-white gap-10 py-4'>
      <div className='flex w-10/12 justify-between items-center text-white mx-auto '>
        <div className=''>Find jobs</div>

        {type === 'Guest' ? (
          <div className='flex items-center gap-2 '>
            <NavLink to='/jobs'>Jobs</NavLink>
            <NavLink to='/reviews'>Company Review</NavLink>

            <NavLink to='/'>Find Salaries</NavLink>
            <button className='text-primary p-2 rounded'>Post Job</button>
          </div>
        ) : (
          <p> Icons</p>
        )}
      </div>
      <section className='flex flex-col gap-10 w-9/12 mx-auto mb-16'>
        {type === 'Guest' ? <p>Find Your Dream Job</p> : <p>Jobs</p>}
      </section>
    </header>
  );
};

Header.defaultProps = {
  type: 'Guest',
};
export default Header;
