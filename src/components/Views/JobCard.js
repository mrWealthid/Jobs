import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';

const JobCard = () => {
  return (
    <div className='rounded-xl flex flex-col gap-6 shadow-2xl '>
      <section className='p-6 flex flex-col gap-2 '>
        <div className='flex justify-between'>
          <p className=''>Front end Developer</p>

          <p>2k-5k</p>
        </div>
        <div className='flex items-center gap-1 text-sm'>
          <FaLocationArrow />
          <p>Lagos, Nigeria</p>
        </div>
        <p className='text-xs leading-relaxed'>
          We seek an experienced Javascript web application developer who is
          proficient with React.js and has excellent communication skills.
        </p>

        <div className='flex justify-end'>
          <button className='bg-white bg-btncolor text-white p-2 rounded-lg text-sm'>
            See More
          </button>
        </div>
      </section>
    </div>
  );
};

export default JobCard;
