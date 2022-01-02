import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useJobContext } from './context/JobAppContext';
import Input from './Input';

const PostJobModal = () => {
  const {
    handleClicks,
    postJob,
    handleChangePostJob,
    postJobSubmit,
  } = useJobContext();

  return (
    <div>
      <div className='flex flex-col text-xs animate-slideIn gap-3 min-h-screen text-primary py-10 w-10/12 mx-auto Post'>
        <div className='flex justify-end '>
          {' '}
          <FaTimes onClick={handleClicks} />
        </div>
        <p>New Job</p>
        <p>
          Kindly provide the required information to get matched with suitable
          candidates
        </p>

        <form className=' flex flex-1   items-center' onSubmit={postJobSubmit}>
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
            <select
              value={postJob.type}
              className=' border rounded p-2'
              name='type'
              onChange={handleChangePostJob}
            >
              <option>Select Option</option>
              <option value='part-time'>Part Time</option>
              <option value='full-time'>Full Time</option>
              <option value='remote'>Remote</option>
              <option value='on-site'>On Site</option>
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
            <select
              value={postJob.category}
              className=' border rounded p-2'
              name='category'
              onChange={handleChangePostJob}
            >
              <option>Select Option</option>
              <option value='Frontend'>Frontend</option>
              <option value='Backend'>Backend</option>
              <option value='UI/UX'>UI/UX</option>
              <option value='Devops'>Devops</option>
            </select>

            <button className='p-2 mt-2 block rounded-lg w-full text-white bg-primary'>
              Login
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default PostJobModal;
