import React, { useState, useEffect } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { useJobContext } from '../context/JobAppContext';
// import { useParams } from 'react-router-dom';

const JobDescription = ({ jobs, id }) => {
  const { handleApplyModal } = useJobContext();
  const [desc, setDesc] = useState({});
  const [show, setShow] = useState('hidden');

  console.log(Number(id));
  useEffect(() => {
    if (!id) return;
    const data = jobs.find((job) => job.id === Number(id));
    setDesc(data);
    // setShow('flex');
  }, [id]);
  return (
    <div
      className={`shadow-2xl ${
        id ? 'flex' : show
      } py-10  flex-col gap-3 animate-slideIn `}
    >
      <section className='flex px-4 flex-col gap-4 border-b-btncolor border-b pb-8'>
        <p>{desc.title}</p>

        <div className='flex items-center gap-2'>
          <IoLocationOutline />
          <p>{desc.location}</p>
        </div>

        <button
          className='w-1/3 bg-primary rounded p-2 text-white text-sm Apply'
          onClick={handleApplyModal}
        >
          Apply via Find Job
        </button>
      </section>

      <section className='px-4 flex flex-col gap-4'>
        <p className='text-xs leading-relaxed'>{desc.description}</p>

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
