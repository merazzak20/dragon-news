import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold my-3">Find Us On</h2>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start">
          {" "}
          <FaFacebook /> Facebook
        </button>
        <button className="btn join-item justify-start">
          {" "}
          <BsTwitterX /> Twitter
        </button>
        <button className="btn join-item justify-start">
          {" "}
          <FaSquareInstagram /> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
