import React, { useEffect, useRef, useState } from "react";
import addUser from "../assets/images/add-user.png";
import eyeOpen from "../assets/images/eye-3-24.png";
import eyeHide from "../assets/images/eye-24.png";

const Manager = () => {
  const imageRef = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const showPassword = () => {
    passwordRef.current.type = "text";
    if (imageRef.current.src.includes(eyeOpen)) {
      imageRef.current.src = eyeHide;
      passwordRef.current.type = "password";

    } else {
      imageRef.current.src = eyeOpen;
      passwordRef.current.type = "text";
    }
  };

  const savePassword = () => {
    console.log(form);
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log(passwordArray);
  };

  return (
    <>
      {/* Background container that covers the entire viewport height */}
      <div className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="mycontainer">
          <div className="headingLogo flex flex-col items-center">
            <h1 className="text-white font-mono font-bold text-3xl">
              PASSWORD MANAGER
            </h1>
            <p className="text-slate-300 font-sans">
              Securely store and manage your passwords
            </p>
          </div>
          <div className="font-serif items-center text-white flex flex-col p-4">
            <input
              value={form.site}
              onChange={handleChange}
              placeholder="Website URL"
              className="w-full p-3 rounded-full border border-white bg-black text-white"
              type="text"
              name="site"
            />
            <div className="flex w-full p-4 gap-2">
              <input
                value={form.username}
                onChange={handleChange}
                placeholder="website username"
                className="w-full p-3 rounded-full border border-white bg-black font-serif"
                type="text"
                name="username"
              />
              <div className="relative w-full">
                <input
                  ref={passwordRef}
                  onChange={handleChange}
                  value={form.password}
                  placeholder="website password"
                  className="w-full p-3 rounded-full border border-white bg-black font-serif"
                  type="password"
                  name="password"
                />
                <span
                  className="absolute right-0 top-1 p-2 cursor-pointer"
                  onClick={showPassword}
                >
                  <img ref={imageRef} src={eyeOpen} width={30} alt="Show" />
                </span>
              </div>
            </div>
            <button
              onClick={savePassword}
              className="border border-black flex gap-2 bg-slate-200 font-mono hover:bg-blue-700 text-black hover:text-white font-bold px-4 rounded shadow sm:py-3 sm:px-6"
            >
              <img src={addUser} width={20} alt="+" />
              Add Passwords
            </button>
          </div>
          <div className="passwords mt-4">
            <h2 className="text-white font-mono text-3xl">Saved Passwords</h2>
            {passwordArray.length === 0 && (
              <div className="text-white">No passwords available</div>
            )}
            {passwordArray.length !== 0 && (
              <table className="rounded-md overflow-hidden table-auto w-full text-white">
                <thead className="bg-green-600">
                  <tr>
                    <th className="py-2">Site</th>
                    <th className="py-2">Username</th>
                    <th className="py-2">Passwords</th>
                  </tr>
                </thead>
                <tbody>
                  {passwordArray.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="py-2 text-center w-32 text-white">
                          {item.site}
                        </td>
                        <td className="py-2 text-center w-32 text-white">
                          {item.username}
                        </td>
                        <td className="py-2 text-center w-32 text-white">
                          {item.password}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
