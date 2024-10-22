import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Submithandler = (e) => {
    e.preventDefault();
    console.log( "email",email);


    
    setEmail("")
    setPassword("")
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2  rounded-xl border-emerald-300 p-20">
        <form
          onSubmit={(e) => {
            Submithandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border-2 border-green-600 py-4 outline-none bg-transparent text-xl px-5 rounded-full placeholder:text-white"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 mt-3 border-green-600 py-4 outline-none bg-transparent text-xl px-5 rounded-full placeholder:text-white"
            type="password"
            placeholder="Enter Password"
          />
          <button className="border-2 mt-5 bg-red-700 py-4 outline-none bg-transparent text-white text-xl px-5  rounded-full">
          LOG  IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
