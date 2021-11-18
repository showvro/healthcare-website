import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container w-11/12 mx-auto">
      <div className="flex justify-evenly sm:flex-col lg:flex-row mx-auto my-10 border-2 border-black border-opacity-60 p-5 rounded-lg">
        <img
          className="sm:w-full lg:w-6/12  w-6/12 p-8"
          src="https://raw.githubusercontent.com/Showvro/healthcare-img/289dce8cee7a4bf03934e959bf99386a027b77a6/banner.svg"
          alt=""
        />
        <div className="sm:w-full mt-8 lg:w-4/12 flex flex-col justify-center">
          <div>
            <h1 className="md:text-2xl lg:text-4xl text-left text-black font-bold">
              Doctor's for your disease and get treatment
            </h1>
            <p className="text-left text-gray-600 my-5">
              We provides progressive, and affordable healthcare, accessible on
              mobile and online for everyone. Some patients may wonder how to
              make a doctor's appointment by text. To make it easy, doctors'
              offices can simply update their website.
            </p>
          </div>
          <div className="mt-3 mb-5">
            <Link
              to="/blogs"
              className="bg-transparent border border-black text-black hover:bg-black hover:text-white text-center py-3 px-4  rounded-full font-bold transition-all"
            >
              Our Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
