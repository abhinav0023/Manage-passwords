import React from "react";

const Manager = () => {
  return (
    <div class="absolute top-10 z-[-2] h-screen w-screen  transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
      <div className=" text-white bg-slate-200 mycontainer">
        
          <h1 className="logo font-bold text-3xl text-center">
            <span className="text-red-700">&lt;</span>
            <span className="text-green-700">pass</span>
            <span className="text-red-700">man /&gt;</span>
          </h1>
          <p className="text-center text-red-900 text-xl">
            {" "}
            your Password Manager{" "}
          </p>
        
        <div className="text-black w-full flex flex-col p-4">
          <input
            className=" rounded-full border border-red-500 w-full p-4 py-1"
            type="text"
            name=""
            id=""
          />
          <div className="flex gap-3 w-full justify-between">
            <input
              className=" rounded-full border border-red-500 w-full p-4 py-1"
              type="text"
              name=""
              id=""
            />
            <input
              className=" rounded-full border border-red-500 w-full p-4 py-1"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager;
