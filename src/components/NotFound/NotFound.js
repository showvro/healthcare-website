import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="my-28 p-10 container mx-auto lg:w-6/12">
      <div className="mt-20 flex md:flex-wrap justify-center items-center bg-gray-100 rounded-lg p-20">
        <div className="mr-6 border-r-4">
          <h1 className="text-5xl text-gray-700 mr-7 font-bold">404</h1>
        </div>
        <div>
          <h1 className="text-4xl text-gray-700 font-bold">Page not Found</h1>
          <small className="text-gray-500">
            Please check the URL in the address bar and try again.
          </small>
        </div>
      </div>
      <div className="my-14">
        <Link
          className="bg-transparent border border-black text-black hover:bg-black hover:text-white text-center py-3 px-4  rounded-full font-bold"
          to="/home"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
