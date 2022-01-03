import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

import GuestBoard from './components/Views/GuestBoard';
import AdminBoard from './components/Views/AdminBoard';

function App() {
  return (
    <div className='App'>
      {/* <Navbar /> */}

      {/* <GuestBoard /> */}

      <Routes>
        <Route path='/admin' element={<AdminBoard />} />

        <Route path='/' element={<GuestBoard />} />
        <Route path='/:id' element={<GuestBoard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
