import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useJobContext } from './context/JobAppContext';
import Input from './Input';

const PostJob = () => {
  const { handleClicks, postJob, handleChangePostJob } = useJobContext();
  const handleChange = () => {
    console.log('clicked');
  };
  return (
    <div>
      return (
      <div className='flex flex-col gap-3 min-h-screen text-primary py-10 w-10/12 mx-auto Post'>
        <div className='flex justify-end '>
          {' '}
          <FaTimes onClick={handleClicks} />
        </div>
        <p>New Job</p>
        <p>
          Kindly provide the required information to get matched with suitable
          candidates
        </p>

        <form className=' flex flex-1   items-center'>
          <section className='flex-col flex gap-2 w-full'>
            <label htmlFor='name'>Name</label>
            <Input
              type='text'
              value={}
              name='title'
              onChange={handleChangePostJob}
            />

            <label htmlFor='email'>Email</label>
            <input
              type='email'
              className=' border rounded border-gray p-2'
              id='email'
              onChange={handleChange}
            />

            <label htmlFor='name'>Name</label>
            <input
              type='text'
              className=' border-gray border rounded p-2'
              id='name'
              onChange={handleChange}
            />

            <label htmlFor='name'>Name</label>
            <input
              type='text'
              className=' border-gray border rounded p-2'
              id='name'
              onChange={handleChange}
            />

            <label htmlFor='name'>Name</label>
            <input
              type='text'
              className='border-gray border rounded p-2'
              id='name'
              onChange={handleChange}
            />

            <label htmlFor='name'>Name</label>
            <input
              type='text'
              className='border-gray border rounded p-2'
              id='name'
              onChange={handleChange}
            />

            <label htmlFor='name'>Name</label>
            <input
              type='text'
              className='border-gray border rounded p-2'
              id='name'
              onChange={handleChange}
            />

            <button className='p-2 block rounded-lg w-full text-white bg-primary'>
              Login
            </button>
          </section>
        </form>
      </div>
      );
    </div>
  );
};

export default PostJob;
