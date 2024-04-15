import React from "react";

const Manager = () => {
  return (
    <div class="absolute top-10 z-[-2] h-screen w-screen transform bg-red-50 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
      <div className=" text-white mycontainer">
        <h1 className="logo font-bold text-3xl text-center">
          <span className="text-red-700">&lt;</span>
          <span className="text-green-700">pass</span>
          <span className="text-red-700">man /&gt;</span>
        </h1>
        <p className="text-center text-red-900 text-xl">
          {" "}
          your Password Manager{" "}
        </p>

        <div className="text-black w-full flex flex-col p-4 gap-8 items-center">
          <input
            placeholder="Enter website URL"
            className=" rounded-full border border-red-500 w-full p-4 py-1"
            type="text"
            name=""
            id=""
          />
          <div className="flex gap-8 w-full justify-between ">
            <input placeholder="Enter website Username"
              className=" rounded-full border border-red-500 w-full p-4 py-1"
              type="text"
              name=""
              id=""
            />
            <input placeholder="Enter website password"
              className=" rounded-full border border-red-500 w-full p-4 py-1"
              type="text"
              name=""
              id=""
            />
          </div>
          <button className= " flex w-fit font-bold  justify-center items-center gap-2 border-2  border-red-500 bg-green-500 hover:bg-green-400 rounded-full px-8 py-2">
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="hover"
            ></lord-icon>
            Add passwords{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Manager;
