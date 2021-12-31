import React from 'react';
import { FaDotCircle } from 'react-icons/fa';

const AdminJobCard = () => {
  return (
    <div className='flex items-center justify-between text-sm shadow py-2 px-2 rounded-lg'>
      <section className='flex item-center'>
        <p className='w-14'>
          <FaDotCircle color='red' />
        </p>
        <p className='w-72'>Customer success intern</p>
        <p className='w-56'>12/7/21</p>
        <p className='w-60'>50</p>
      </section>

      <div className='flex gap-5'>
        <button className='bg-btncolor rounded py-1 text-white px-2 w-24 '>
          Edit
        </button>

        <button className='border border-green text-green rounded py-1 px-2  w-24 '>
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminJobCard;
