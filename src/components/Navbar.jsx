import React from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className='bg-slate-950 h-18 w-screen'>
      <div className='text-white px-4 py-2 flex justify-between items-center'>
        <div className='logo font-bold text-3xl font-mono'>
          <div className='flex items-center'>
            <img className='p-1' src={logo} width={40} alt="logoimage" />
            <span className='ml-2'>Password Manager</span>
          </div>
          <p className='text-sm text-slate-400 font-serif px-10'>Remember your passwords for you</p>
        </div>
        <div className='flex gap-4'>
          <button className='bg-blue-900 border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Sign In
          </button>
          <button className='bg-slate-950 border hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
