import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useJobContext } from './context/JobAppContext';
import Input from './Input';

const PostJobModal = () => {
  const { handleClicks, postJob, handleChangePostJob } = useJobContext();

  return (
    <div>
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
            <label htmlFor='title'>Job Title</label>
            <Input
              type='text'
              value={postJob.title}
              name='title'
              onchange={handleChangePostJob}
            />

            <label htmlFor='name'>Company Name</label>
            <Input
              type='text'
              value={postJob.company}
              name='company'
              onchange={handleChangePostJob}
            />

            <label htmlFor='location'>Location</label>
            <Input
              type='text'
              name='location'
              value={postJob.location}
              onchange={handleChangePostJob}
            />

            <label htmlFor='Employment Type'>
              What type of employment is it?
            </label>
            <select>
              <option>Select Option</option>
              <option>Part Time</option>
              <option>Full Time</option>
            </select>

            <label htmlFor='name'>Salary Range</label>
            <Input
              type='text'
              name='salary'
              value={postJob.salary}
              onchange={handleChangePostJob}
            />

            <label htmlFor='name'>Description</label>
            <Input
              type='text'
              name='description'
              value={postJob.description}
              onchange={handleChangePostJob}
            />

            <label htmlFor='category'>
              What Sector is this job categorized under?
            </label>
            <select>
              <option>Select Option</option>
              <option>Part Time</option>
              <option>Full Time</option>
            </select>

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

export default PostJobModal;
