import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold my-3">Login With</h2>
      <div className="flex flex-col gap-3">
        <button className="btn">
          {" "}
          <FaGoogle /> Login with Google
        </button>
        <button className="btn">
          {" "}
          <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
