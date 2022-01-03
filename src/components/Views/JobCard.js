import React from 'react';

import { IoLocationOutline } from 'react-icons/io5';

import { NavLink, useParams } from 'react-router-dom';

const JobCard = ({ title, salary, location, description, id }) => {
  // const { getID } = useJobContext();

  const { id: ids } = useParams();

  return (
    <NavLink
      to={`/${id}`}
      className={({ isActive }) =>
        isActive
          ? 'bg-primary text-white rounded-xl overflow-hidden shadow-lg'
          : 'bg-white rounded-xl shadow-lg overflow-hidden '
      }
    >
      <div className=' flex lg:h-60 items-center justify-center flex-col gap-8 shadow-2xl '>
        <section className='p-6 flex flex-col gap-2 '>
          <div className='flex justify-between'>
            <p
              className={` ${
                id === Number(ids) ? 'text-white' : 'text-primary'
              }  font-medium`}
            >
              {title}
            </p>

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
            <button
              className={`${
                id === Number(ids) && 'text-btncolor bg-white'
              } bg-btncolor text-white p-2 w-1/3 lg:w-1/4 rounded-xl text-sm`}
            >
              See More
            </button>
          </div>
        </section>
      </div>
    </NavLink>
  );
};

export default JobCard;
