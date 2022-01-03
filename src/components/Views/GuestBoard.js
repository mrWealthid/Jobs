import React from 'react';
import Header from '../Header';
import { FaSearch } from 'react-icons/fa';
import JobCard from './JobCard';
import JobDescription from './JobDescription';
import Footer from '../Footer';
import ApplyModal from '../ApplyModal';
import { useJobContext } from '../context/JobAppContext';
import PostJobModal from '../PostJobModal';
import { useParams } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';

const GuestBoard = () => {
  const { show, applyModal, closeModal, showPopup } = useJobContext();

  const { id } = useParams();

  const jobs = [
    {
      id: 1,
      title: 'Front end developer ',
      company: 'Tedbree Limited',
      company_logo:
        'https://content.app-sources.com/s/14630223212260103/uploads/Logos/Tedbree-5151946.png',
      location: 'Yaba, Lagos',
      category: 'Tech',
      salary: 'N150k - N200k',
      description:
        'In this role, you will be responsible for developing and implementing user interface components using React.js concepts and workflow such as Redux, Flux, and Webpack. You will also be responsible for profiling and improving front-end performance and documenting our front-end codebase.',
      benefits: 'Job Benefits goes here formatted in markdown',
      type: 'Full-time',
      work_condition: 'Part Remote',
      created_at: '2021-01-22 06:00:00',
      updated_at: '2021-01-22 06:00:00',
    },
    {
      id: 2,
      title: 'Back end developer',
      company: 'Andela',
      company_logo:
        'https://content.app-sources.com/s/14630223212260103/uploads/Logos/Tedbree-5151946.png',
      location: 'Maitama, Abuja',
      category: 'Tech',
      salary: 'N150k- N200k',
      description:
        ' We seek an experienced Javascript web application developer who is proficient with React.js and has excellent communication skills.',
      benefits: 'Job Benefits goes here formatted in markdown',
      type: 'Full-time',
      work_condition: 'Part Remote',
      created_at: '2021-01-22 06:00:00',
      updated_at: '2021-01-22 06:00:00',
    },
    {
      id: 3,
      title: 'Back end developer',
      company: 'Wealth Limited',
      company_logo:
        'https://content.app-sources.com/s/14630223212260103/uploads/Logos/Tedbree-5151946.png',
      location: 'Lekki, Lagos',
      category: 'Tech',
      salary: 'N150k - N200k',
      description:
        'In this role, you will be responsible for developing and implementing user interface components using React.js concepts and workflows such as Redux, Flux, and Webpack.',
      benefits: 'Job Benefits goes here formatted in markdown',
      type: 'Full-time',
      work_condition: 'Part Remote',
      created_at: '2021-01-22 06:00:00',
      updated_at: '2021-01-22 06:00:00',
    },
    {
      id: 4,
      title: 'Front end developer',
      company: 'Amazons',
      company_logo:
        'https://content.app-sources.com/s/14630223212260103/uploads/Logos/Tedbree-5151946.png',
      location: 'Ijero, Ekiti',
      category: 'Tech',
      salary: 'N150k - N200k',
      description:
        'The ideal candidate should be comfortable with the following technology stacks: HTML, CSS, JavaScript & Vue.js and/or React.js and everything in between.',
      benefits: 'Job Benefits goes here formatted in markdown',
      type: 'Full-time',
      work_condition: 'Part Remote',
      created_at: '2021-01-22 06:00:00',
      updated_at: '2021-01-22 06:00:00',
    },
  ];
  return (
    <div className='flex flex-col gap-15 '>
      <Header />

      <div className=' rounded-lg flex items-center gap-2 bg-white overflow-hidden  shadow  w-9/12 mx-auto -mt-6'>
        <div className='flex gap-2 pl-2 items-center w-1/2'>
          <FaSearch color='cadetblue' />
          <input
            className='p-3 w-full text-sm bg-transparent outline-none'
            placeholder='Front end developer'
          />
        </div>
        <div className='flex gap-2 w-1/2 pl-2 items-center border-l  border-gray'>
          <IoLocationOutline color='cadetblue' />
          <input
            className='p-3 w-full text-sm  bg-transparent outline-none'
            placeholder='Lagos, Nigeria'
          />
        </div>
      </div>

      <main
        className={`${
          id ? 'flex flex-col md:flex-row items-center md:items-start' : ''
        } my-20 gap-10 justify-center sm:w-11/12 lg:w-9/12 mx-auto`}
      >
        <section
          className={` grid ${
            id
              ? 'grid-cols-1 w-10/12 sm:w-8/12  md:w-1/2 '
              : 'md:grid-cols-2 md:w-auto w-10/12 mx-auto '
          } gap-5 `}
        >
          {jobs.map((job) => (
            <JobCard {...job} key={job.id} />
          ))}
        </section>
        <section
          className={`${id ? 'w-10/12 md:w-1/2 h-full sticky top-4' : ''} `}
        >
          <JobDescription jobs={jobs} id={id} />
        </section>
      </main>

      <Footer />

      {show ? (
        <div className='bg-white w-10/12 lg:w-6/12 popup shadow-2xl   '>
          {' '}
          <PostJobModal id={id} />
        </div>
      ) : null}

      {applyModal ? (
        <div className='bg-white w-10/12 lg:w-6/12 popup shadow-2xl   '>
          {' '}
          <ApplyModal id={id} jobs={jobs} />
        </div>
      ) : null}

      {show || applyModal || showPopup ? (
        <div className='overlay ' onClick={closeModal}></div>
      ) : null}
    </div>
  );
};

export default GuestBoard;
