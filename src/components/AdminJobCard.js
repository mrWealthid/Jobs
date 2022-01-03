import React from 'react';

const AdminJobCard = () => {
  return (
    <div className='flex items-center flex-wrap justify-between text-sm shadow py-2 px-2 rounded-lg'>
      <section className='flex items-center gap-6 text-sm'>
        <p className='w-2 h-2 bg-btncolor rounded-full'></p>
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
