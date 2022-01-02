import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { useJobContext } from '../context/JobAppContext';
import { NavLink } from 'react-router-dom';

const JobCard = ({ title, salary, location, description, id }) => {
  // const { getID } = useJobContext();

  return (
    <NavLink
      to={`/${id}`}
      className={({ isActive }) =>
        isActive
          ? 'bg-primary text-white rounded-xl overflow-hidden shadow-lg'
          : 'bg-white rounded-xl shadow-lg overflow-hidden '
      }
    >
      <div className=' flex h-60 items-center justify-center flex-col gap-6 shadow-2xl '>
        <section className='p-6 flex flex-col gap-2 '>
          <div className='flex justify-between'>
            <p className=''>{title}</p>

            <p>{salary}</p>
          </div>
          <div className='flex items-center gap-2 text-sm'>
            <IoLocationOutline />
            <p>{location}</p>
          </div>
          <p className='text-xs leading-relaxed'>
            {description.slice(0, 200)}..
          </p>

          <div className='flex justify-end'>
            <button className=' bg-btncolor text-white p-2 rounded-lg text-sm'>
              See More
            </button>
          </div>
        </section>
      </div>
    </NavLink>
  );
};

export default JobCard;
