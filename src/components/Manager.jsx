import React from "react";

const Manager = () => {
  return (
    <>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="  mycontainer  ">
        <div className="headingLogo flex flex-col items-center">
          <h1 className="text-white font-mono font-bold text-3xl">
            PASSWORD MANAGER
          </h1>
          <p className="text-slate-300 font-sans ">
            Securely store and manage your passwords
          </p>
        </div>
        <div className="font-serif items-center text-white flex flex-col p-4">
          <input
            placeholder="Website URL"
            className="w-full p-2 rounded-full border border-white bg-black text-white"
            type="text"
          />
          <div className="flex w-full p-4 gap-2 justify-between ">
            <input
              placeholder="website username"
              className="w-1/2 p-2 rounded-full border border-white bg-black font-serif"
              type="text"
            />
            <input
              placeholder="website password"
              className="w-1/2 p-2 rounded-full border border-white bg-black font-serif"
              type="text"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow sm:py-3 sm:px-6">
            Add Passwords
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
