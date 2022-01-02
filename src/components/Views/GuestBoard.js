import React from 'react';
import Header from '../Header';
import { FaSearch } from 'react-icons/fa';
import JobCard from './JobCard';
import JobDescription from './JobDescription';
import Footer from '../Footer';
import ApplyModal from '../ApplyModal';
import { useJobContext } from '../context/JobAppContext';
import PostJobModal from '../PostJobModal';

const GuestBoard = () => {
  const { show, applyModal } = useJobContext();
  return (
    <div className='flex flex-col gap-15'>
      <Header />

      <div className=' rounded-lg flex items-center gap-2 bg-white overflow-hidden pl-2 shadow-2xl  w-9/12 mx-auto -mt-8'>
        <FaSearch />
        <input className='p-3 w-full bg-transparent' placeholder='' />
      </div>

      <main className='flex my-20 gap-10 w-9/12 mx-auto'>
        <section className='w-1/2 flex flex-col gap-5 '>
          {' '}
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </section>
        <section className='w-1/2'>
          <JobDescription />
        </section>
      </main>

      <Footer />

      {show ? (
        <div className='bg-white w-7/12 popup   '>
          {' '}
          <PostJobModal />
        </div>
      ) : null}

      {applyModal ? (
        <div className='bg-white w-7/12 popup   '>
          {' '}
          <ApplyModal />
        </div>
      ) : null}
    </div>
  );
};

export default GuestBoard;
