import React from 'react';
import Header from '../Header';
import {
  FaSearch,
  FaPlus,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaFilter,
} from 'react-icons/fa';

import AdminJobCard from '../AdminJobCard';

const AdminBoard = () => {
  return (
    <div className='flex flex-col gap-10'>
      <Header type='Admin' />

      <section className='flex justify-between items-center w-10/12 mx-auto'>
        <div className='flex gap-2 shadow-2xl  items-center py-3 px-2'>
          <FaSearch />
          <input />
          <button className='py-1 px-2 rounded bg-btncolor text-white text-sm w-1/3'>
            Search
          </button>
        </div>

        <button className='py-2 px-2 rounded-lg bg-btncolor flex items-center gap-1 text-white text-sm'>
          <FaPlus />
          New Job
        </button>
      </section>

      <div className='flex flex-col gap-4'>
        <section className='bg-primary text-white w-10/12 mx-auto p-2 rounded-lg '>
          <div className='flex justify-between w-10/12 mx-auto '>
            <div className='w-10/12 text-sm flex '>
              <p className='w-60'>Job Title</p>
              <p className='w-48'>Date modified</p>
              <p className='w-44'>Candidates</p>
            </div>

            <div className='text-sm flex items-center gap-3'>
              <FaFilter />
              <p>Filter</p>
            </div>
          </div>
        </section>

        <section className='w-10/12 flex flex-col gap-2 mx-auto'>
          <AdminJobCard />
          <AdminJobCard />
          <AdminJobCard />

          <AdminJobCard />
          <AdminJobCard />
          <AdminJobCard />
          <AdminJobCard />
          <AdminJobCard />
          <AdminJobCard />
          <AdminJobCard />
        </section>
      </div>

      <footer className='bg-primary py-6  '>
        <section className=' w-11/12 mx-auto flex justify-between items-center text-white'>
          <section className='flex gap-3'>
            <p>Jobs</p>
            <p>Terms and condition</p>

            <p>Jobs</p>
            {/* <p></p></p> */}
          </section>

          <div className='flex  md:mb-0 gap-3'>
            <a
              className='bg-gray-500 block hover:scale-110 transform cursor-pointer rounded-full text-white p-2'
              href='https://github.com/mrWealthid'
            >
              <FaInstagram />
            </a>
            <a
              className='bg-gray-500 hover:scale-110 transform cursor-pointer block rounded-full text-white p-2'
              href='/'
            >
              <FaFacebook />
            </a>{' '}
            <a
              className='bg-gray-500 block hover:scale-110 transform cursor-pointer rounded-full text-white p-2'
              href='/'
            >
              <FaTwitter />
            </a>{' '}
          </div>
        </section>
      </footer>
    </div>
  );
};

export default AdminBoard;
