import React from "react";
import photo3 from '../assets/photo3.jpeg'
import photo6 from '../assets/photo6.webp'
// import photo3 from '../assets/photo3.jpeg'
const Headlinecards = () => {
  return (
    <div className="max-w[1640px] max-auto p-4 py-12 grid grid-cols-3 gap-6">
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}

        <div className="absolute h-full w-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's out,BOGO's OUT</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4  ">Order Now</button>
        </div>
        <img  className="max-h[100px] md:max-h-[750px] "  src={photo3} alt="/" />
      </div>
      <div className="rounded-xl relative">
        {/* overlay */}

        <div className="absolute h-full w-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts Too</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4  ">Order Now</button>
        </div>
        <img  className="max-h[100px] md:max-h-[750px] "  src={photo3} alt="/" />
      </div>
      <div className="rounded-xl relative">
        {/* overlay */}

        <div className="absolute h-full w-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4  ">Order Now</button>
        </div>
        <img  className="object-cover "  src={photo3} alt="/" />
      </div>
    </div>
  );
};

export default Headlinecards;
