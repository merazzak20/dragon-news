import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCart from "../components/NewsCart";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  return (
    <div>
      <h2 className="font-semibold mb-3">Dragon News Home</h2>
      <p className="font-medium text-gray-400">
        {news.length} News in this Category
      </p>
      <div className="space-y-4">
        {news.map((singleNews) => (
          <NewsCart key={singleNews._id} news={singleNews}></NewsCart>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
