import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useJobContext } from './context/JobAppContext';
import Input from './Input';

const ApplyModal = () => {
  const {
    handleApplyModal,
    handleChangeApply,
    applyJob,
    applyJobSubmit,
  } = useJobContext();

  return (
    <div className='flex flex-col gap-3 min-h-screen text-primary py-10 w-10/12 mx-auto Post'>
      <div className='flex justify-end '>
        {' '}
        <FaTimes onClick={handleApplyModal} />
      </div>
      <p>Front end Developer</p>
      <p>Ikeja Lagos</p>

      <form className=' flex flex-1   items-center' onSubmit={applyJobSubmit}>
        <section className='flex-col flex gap-2 w-full'>
          <label htmlFor='firstname'>First Name</label>
          <Input
            type='text'
            name='firstName'
            value={applyJob.firstName}
            onchange={handleChangeApply}
          />

          <label htmlFor='firstname'>Last Name</label>
          <Input
            type='text'
            name='lastName'
            value={applyJob.lastName}
            onchange={handleChangeApply}
          />

          <label htmlFor='email'>Email Address</label>
          <Input
            type='email'
            name='email'
            value={applyJob.email}
            onchange={handleChangeApply}
          />

          <label htmlFor='name'>Location</label>
          <Input
            type='text'
            value={applyJob.location}
            name='location'
            onchange={handleChangeApply}
          />

          <label htmlFor='name'>Phone Number</label>
          <Input
            type='text'
            name='number'
            value={applyJob.number}
            onchange={handleChangeApply}
          />

          <input
            type='file'
            className='border-gray border rounded p-2'
            name='file'
            value={applyJob.file}
            onChange={handleChangeApply}
          />

          <button className='p-2 block rounded-lg w-full text-white bg-primary'>
            Submit Application
          </button>
        </section>
      </form>
    </div>
  );
};

export default ApplyModal;
