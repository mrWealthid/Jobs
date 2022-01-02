import logo from './logo.svg';

import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import JobBoard from './components/Views/JobBoard';
import Navbar from './components/Navbar';
import GuestBoard from './components/Views/GuestBoard';
import AdminBoard from './components/Views/AdminBoard';
import { useRef, useState } from 'react';

function App() {
  return (
    <div className='App'>
      {/* <Navbar /> */}

      {/* <GuestBoard /> */}

      <Routes>
        <Route path='/admin' element={<AdminBoard />} />

        <Route path='/' element={<GuestBoard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {/* <Route to='/jobs' element={<JobBoard />} />  */}
      </Routes>
    </div>
  );
}

export default App;
