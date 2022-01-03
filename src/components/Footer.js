import React from 'react';
import {
  FaTwitter,
  FaFacebook,
  
  FaInstagram,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=' bg-primary py-8 text-white  '>
      <section className='w-10/12 flex justify-center  mx-auto gap-12'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 w-1/2'>
          <div className='flex flex-col gap-2  '>
            <p className='mb-0 text-sm md:text-lg  font-medium'>Find Jobs</p>

            <p className='text-xs '>&copy; 2021 Find Jobs</p>
          </div>
          <div className=' font-light text-xs flex flex-col gap-2'>
            <p className='text-sm font-normal md:text-base  font-medium'>
              Quick Links
            </p>

            <NavLink className='block cursor-pointer' to='/'>
              Home
            </NavLink>
            <NavLink className='block cursor-pointer' to='/'>
              About
            </NavLink>
            <NavLink className='block   cursor-pointer' to='/'>
              Resume
            </NavLink>
            <NavLink className='block cursor-pointer' to='Project'>
              Projects
            </NavLink>
          </div>
        </div>

        <section className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 w-1/2'>
          <div className='font-light text-xs flex flex-col gap-2'>
            <p className='text-sm md:text-base  font-normal'>Quick Links</p>

            <NavLink className='block cursor-pointer' to='/'>
              Home
            </NavLink>
            <NavLink className='block cursor-pointer' to='About'>
              About
            </NavLink>
            <NavLink className='block cursor-pointer' to='About'>
              Resume
            </NavLink>
            <NavLink className='block  cursor-pointer' to='Project'>
              Projects
            </NavLink>
          </div>

          <div className=''>
            <p className=' font-normal text-sm md:text-base'>Social Media</p>

            <p className='flex md:mb-0 gap-3'>
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
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Footer;
