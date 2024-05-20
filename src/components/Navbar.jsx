import React from 'react';
import logo from '../assets/images/logo.png'; // Import the logo image

// Define the Navbar functional component
const Navbar = () => {
  return (
    // The main <nav> element with background color and size classes
    <nav className='bg-slate-950 h-18 w-full'>
      {/* Container for the navbar content, with padding and flexbox layout */}
      <div className='text-white px-4 py-2 flex flex-col md:flex-row justify-between items-center'>
        
        {/* Logo and title section */}
        <div className='logo font-bold text-2xl md:text-3xl font-mono mb-2 md:mb-0'>
          <div className='flex items-center'>
            {/* Logo image with padding, width, and alt text */}
            <img className='p-1' src={logo} width={40} alt="logoimage" />
            {/* Title of the application */}
            <span className='ml-2'>Password Manager</span>
          </div>
          {/* Tagline with additional styling */}
          <p className='text-sm text-slate-400 font-serif md:px-10'>
            Remember your passwords for you
          </p>
        </div>
        
        {/* Button section */}
        <div className='flex gap-4'>
          {/* Sign In button with styling and hover effect */}
          <button className='bg-blue-900 border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Sign In
          </button>
          {/* Register button with different styling and hover effect */}
          <button className='bg-slate-950 border hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; // Export the Navbar component as the default export
