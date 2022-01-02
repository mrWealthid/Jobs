import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { useJobContext } from '../context/JobAppContext';

const JobDescription = () => {
  const { handleApplyModal } = useJobContext();
  return (
    <div className='shadow-2xl py-10  flex flex-col gap-3'>
      <section className='flex px-4 flex-col gap-4 border-b-btncolor border-b pb-8'>
        <p>Front end Developer</p>

        <div className='flex gap-1'>
          <FaLocationArrow />
          <p>Lagos, Nigeria</p>
        </div>

        <button
          className='w-1/3 bg-primary rounded p-2 text-white text-sm Apply'
          onClick={handleApplyModal}
        >
          Apply via Find Job
        </button>
      </section>

      <section className='px-4 flex flex-col gap-4'>
        <p className='text-xs leading-relaxed'>
          In this role, you will be responsible for developing and implementing
          user interface components using React.js concepts and workflow such as
          Redux, Flux, and Webpack. You will also be responsible for profiling
          and improving front-end performance and documenting our front-end
          codebase.
        </p>

        <ul className='text-sm flex flex-col gap-3 '>
          <li>Minimum Qualification: Degree</li>

          <li>Experience Level: Senior level</li>
          <li>Experience Length: 5 years</li>
        </ul>

        <p className='font-bold'>Job Description/Requirements</p>

        <ul className='text-xs flex flex-col gap-6'>
          <li className='leading-relaxed'>
            5+ years experience of front-end related (HTML5 + JS + CSS3)
            development work experience, familiar with mobile application
            development;
          </li>

          <li className='leading-relaxed'>
            Proficient in JavaScript / Typescript, mastering technologies such
            as HTML, CSS, DOM, AJAX, etc., can quickly complete the established
            interactive design functions; At least 4 years experience is
            required.
          </li>

          <li>
            5+ years experience of front-end related (HTML5 + JS + CSS3)
            development work experience, familiar with mobile application
            development;
          </li>

          <li>Thorough understanding of React.js and its core principles</li>

          <li>Thorough understanding of React.js and its core principles</li>
          <li>Thorough understanding of React.js and its core principles</li>
          <li>Thorough understanding of React.js and its core principles</li>
        </ul>
      </section>
    </div>
  );
};

export default JobDescription;
