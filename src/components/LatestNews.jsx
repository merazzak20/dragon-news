import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-3 items-center bg-gray-200 p-3">
      <p className="text-white bg-[#D72050] px-3 py-2">Latest</p>
      <Marquee pauseOnHover={true} speed={100} className="space-x-9">
        <Link to="news">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus,
          nesciunt!
        </Link>
        <Link to="news">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus,
          nesciunt!
        </Link>
        <Link to="news">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus,
          nesciunt!
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
