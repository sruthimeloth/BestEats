import React, { useState } from "react";
import { data } from "../Data/Data.jsx";
const Foods = () => {
   console.log(data);
  const [foods, setFoods] = useState(data);

const filterType = (filterCategory) => {
    // setFoods(
    //     data.filter((item) => {
    //         return item.category === category;
    //     })
    // );
    const filterData=foods.filter(item=>item.category===filterCategory)
    setFoods(filterData)
    


}
const filterPrice = (price) => {
    setFoods(
        data.filter((item) => {
            return item.price === price;
        })
    );


}



  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text text-center">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className=" flex justify-between flex-wrap">
            <button onClick={()=>filterType('ALL')}   className="m-1 border-orange-600 bg-orange-600  hover:bg-orange-600 hover:text-white">
              ALL
            </button>
            <button onClick={()=>filterType('burger')}  className="m-1 border-orange-600 bg-orange-600  hover:bg-orange-600 hover:text-white">
              Burger
            </button>
            <button onClick={()=>filterType('pizza')}  className="m-1 border-orange-600 bg-orange-600  hover:bg-orange-600 hover:text-white">
              {" "}
              Pizza
            </button>
            <button  onClick={()=>filterType('salad')} className=" m-1 border-orange-600 bg-orange-600  hover:bg-orange-600 hover:text-white">
              Salads
            </button>
            <button  onClick={()=>filterType('Chicken')} className="m-1 border-orange-600 bg-orange-600  hover:bg-orange-600 hover:text-white">
              Chiken
            </button>
          </div>
        </div>
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className=" flex justify-between max-w-[390px] w-full">
            <button onClick={()=>filterPrice('$')} className="m-1 border-orange-600 bg-orange-600  hover:bg-orange-600 hover:text-white">
              $
            </button>
            <button  onClick={()=>filterPrice('$$')} className="m-1 border-orange-600 bg-orange-600  hover:bg-orange-600 hover:text-white">
              $$
            </button>
            <button  onClick={()=>filterPrice('$$$')}  className="m-1 border-orange-600 bg-orange-600  hover:bg-orange-600 hover:text-white">
              $$$
            </button>
            <button   onClick={()=>filterPrice('$$$$')}  className="m-1 border-orange-600 bg-orange-600  hover:bg-orange-600 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4"> 
      {foods.map((item, index) => (
        <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
          <img src={item.image} alt={item.name}  className="w-full h-[200px] object-cover rounded-t-lg"/>
          <div className="flex justify-between px-2 py-4">
            <p>{item.name}</p>
            <p><span className="bg-orange-500 text-white p-1 rounded-full" >{item.price}</span></p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Foods;
