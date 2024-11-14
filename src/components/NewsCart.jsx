import React from "react";
import { FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCart = ({ news }) => {
  const { author, title, details, thumbnail_url, rating, total_view } = news;

  console.log(news);
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md">
      {/* Author and Date */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <img
            src={author.img}
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">{author.published_date}</p>
          </div>
        </div>
        <FaShareAlt className="text-gray-400 cursor-pointer" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>

      {/* Thumbnail Image */}
      <img
        src={thumbnail_url}
        className="w-full object-cover h-60 rounded-lg mb-2"
      />

      {/* Description */}
      <p className="text-gray-600 text-sm mb-2">
        {details.slice(0, 150)}...{" "}
        <span className="text-blue-500 cursor-pointer">Read More</span>
      </p>

      {/* Rating and Views */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-1">
          {/* Star icons */}
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`text-sm ${
                index < Math.round(rating.number)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
            />
          ))}
          {/* Rating number */}
          <span className="text-sm font-medium text-gray-700 ml-1">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center space-x-1 text-gray-400">
          <FaEye />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCart;
