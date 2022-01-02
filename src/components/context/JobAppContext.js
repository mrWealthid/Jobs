import React, {
  useContext,
  useState,
  useEffect,
  createContext,
  useRef,
} from 'react';

const JobAppContext = createContext();

const JobAppProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleClicks = (e) => {
    setShow(!show);
  };

  //Job appplication
  const [applyModal, setApplyModal] = useState(false);

  const [applyJob, setApplyJob] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    number: '',
    file: '',
  });
  const handleApplyModal = (e) => {
    setApplyModal(!applyModal);
  };

  const handleChangeApply = (e) => {
    const { name, value } = e.target;
    setApplyJob({ ...applyJob, [name]: value });
  };

  //post job

  const [postJob, setPostJob] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    salary: '',
    category: '',
    description: '',
  });

  const handleChangePostJob = (e) => {
    const { name, value } = e.target;
    setPostJob({ ...postJob, [name]: value });
  };
  //Login
  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  //Register
  const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };
  return (
    <JobAppContext.Provider
      value={{
        handleClicks,
        handleChangeLogin,
        show,
        login,
        register,
        handleChangeRegister,
        handleApplyModal,
        handleChangeApply,
        applyJob,
        applyModal,
        postJob,
        handleChangePostJob,
      }}
    >
      {children}
    </JobAppContext.Provider>
  );
};

const useJobContext = () => {
  return useContext(JobAppContext);
};

export { useJobContext, JobAppProvider };
