import React from 'react';
import LoginImg from '../components/assets/login.png';
import BlueBg from '../components/assets/Rectangle1.png';
import PinkBg from '../components/assets/Rectangle12.png';
import { useJobContext } from './context/JobAppContext';
import Input from './Input';

const Login = ({ type }) => {
  const styles = {
    backgroundImage: `url(${BlueBg})`,
    backgroundPosition: 'right',
  };

  const styles2 = {
    backgroundImage: `url(${PinkBg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const {
    handleChangeLogin,
    register,
    handleChangeRegister,
    login,
    loading,
    handleRegister,
    handleLogin,
  } = useJobContext();
  return (
    <div className='flex max-h-screen w-full'>
      <section className='flex min-h-screen flex-1'>
        <div
          className='w-11/12 flex justify-center items-center  '
          style={styles}
        >
          <div className='flex flex-col gap-8 justify-center items-center text-white'>
            <p className='text-4xl'>
              Find the best <br />
              candidates for your
              <br /> organisation.
            </p>
            <img src={LoginImg} alt='imgs' className='w-6/12 object-contain' />
          </div>
        </div>
        <div className='w-4/12  -ml-32 z-10 max-h-screen' style={styles2}></div>
      </section>

      <form
        className=' flex flex-1 h-screen items-center'
        onSubmit={type === 'register' ? handleRegister : handleLogin}
      >
        <section className='flex-col flex gap-4 w-8/12'>
          {type === 'register' && (
            <label htmlFor='name' className='flex flex-col'>
              Name
              <Input
                type='text'
                className=' border rounded p-2'
                name='name'
                value={register.name}
                onchange={handleChangeRegister}
              />
            </label>
          )}

          {type === 'login' ? (
            <label htmlFor='email' className='flex flex-col'>
              Email
              <Input
                type='email'
                className=' border rounded p-2'
                name='email'
                value={login.email}
                onchange={handleChangeLogin}
              />
            </label>
          ) : (
            <label htmlFor='email' className='flex flex-col'>
              Email
              <Input
                type='email'
                className=' border rounded p-2'
                name='email'
                value={register.email}
                onchange={handleChangeRegister}
              />
            </label>
          )}

          {type === 'login' ? (
            <label htmlFor='email' className='flex flex-col'>
              Password
              <Input
                type='password'
                className=' border rounded p-2'
                name='password'
                value={login.password}
                onchange={handleChangeLogin}
              />
            </label>
          ) : (
            <label htmlFor='password' className='flex flex-col'>
              Password
              <Input
                type='password'
                className=' border rounded p-2'
                name='password'
                value={register.password}
                onchange={handleChangeRegister}
              />
            </label>
          )}
          <button
            className='p-2 rounded-lg w-1/3 text-white bg-primary'
            disabled={loading}
          >
            {type === 'login' ? 'Login' : 'Register'}{' '}
          </button>
        </section>
      </form>
    </div>
  );
};

Login.defaultProps = {
  type: 'login',
};

export default Login;
