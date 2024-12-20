import React from "react";
import { categories } from "../Data/Categories";
const Category = () => {
  return (
    <div className="max-w-[1640px] px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center"> Top Related Menu Items</h1>
      <div  className=" grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((item,index) => (
          <div key={index} className=" bg-gray-100 rounded-lg p-4 flex justify-between items-center">
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
