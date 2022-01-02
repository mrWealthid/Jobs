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
