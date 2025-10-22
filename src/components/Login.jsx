import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-xl">Login With: </h2>
      <button className="btn btn-outline">
        <FcGoogle></FcGoogle>
        Login with Google</button>
      <button className="btn btn-outline">
        <FaGithub></FaGithub>
        Login with Github</button>
    </div>
  );
};

export default Login;
