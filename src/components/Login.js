import React from 'react';
import LoginImg from '../components/assets/login.png';
import BlueBg from '../components/assets/Rectangle1.png';

const Login = () => {
  const styles = {
    backgroundImage: url(`${BlueBg}`),
  };
  const handleChange = () => {
    console.log('clicked');
  };
  return (
    <div className='flex'>
      <div className='w-1/2 h-screen ' style={styles}>
        {/* <img src={BlueBg} alt='loginImg' /> */}
      </div>
      <form className='w-1/2 flex flex-col gap-4 '>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' onChange={handleChange} />

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' onChange={handleChange} />

        <button className='p-2 rounded-lg bg-primary'>Login</button>
      </form>
    </div>
  );
};

export default Login;
