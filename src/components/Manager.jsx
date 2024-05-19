import React from 'react'

const Manager = () => {
  return (
    <>
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <div className="  mycontainer">
      <h1 className='text-white text-3xl'>Password Manager</h1>
      <div className='text-white flex flex-col p-4'>
        <input className='rounded-full' type="text" />
        <div className='flex'>
          <input type="text" />
          <input type="text" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Manager