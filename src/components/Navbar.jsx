import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='bg-slate-800 h-24'>
        <div className='text-white px-4 h-10 mycontainer flex justify-between items-center ' >

        <div className='logo font-bold text-3xl'>
        <span className='text-red-700'>&lt;</span>
        pass
        <span className='text-red-700'>man /&gt;</span>
        </div>
        <ul>
            <li className='flex gap-4'>
                <a className='hover: font-bold' href='/'>About</a>
                <a className='hover: font-bold' href='/'>Contact</a>
                <a className='hover: font-bold' href='/'>Home</a>
            </li>
        </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar