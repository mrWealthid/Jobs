import React, {
  useContext,
  useState,
  useEffect,
  createContext,
  useRef,
} from 'react';
import Login from '../Login';
import { loginUser, registerUser } from '../utils/helpers';

const JobAppContext = createContext();

const JobAppProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

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

  const applyJobSubmit = (e) => {
    e.preventDefault();
    console.log(applyJob);
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

  const postJobSubmit = (e) => {
    e.preventDefault();
    console.log(postJob);
  };
  //Login
  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log(login);
      const data = await loginUser(login);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //Register
  const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleClicks = (e) => {
    setShow(!show);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log(register);

      const data = await registerUser(register);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [id, setId] = useState('');

  const getID = (id) => {
    console.log(id);
    setId(id);
  };

  const closeModal = () => {
    setShow(false);
    setApplyModal(false);
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
        postJobSubmit,
        applyJobSubmit,
        handleRegister,
        handleLogin,
        getID,
        id,
        closeModal,
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
