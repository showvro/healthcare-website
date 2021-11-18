import React from "react";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { id, name, img, spacility, fee } = props.service;
  return (
    <div>
      <div className="flex flex-col justify-between mx-auto max-w-sm rounded-lg border hover:shadow-lg transition-shadow">
        <div>
          <img className="w-96 h-96" src={img} alt="" />
        </div>
        <div className="px-5 text-left font-bold mt-8">
          <h1 className="text-black text-xl mb-2">Dr. {name}</h1>
          <p className="text-gray-700 text-base">{}</p>
          <p className="text-gray-700 text-base">
            Apoinment Charge:
            <span className="text-gray-900 font-bold">{fee}</span>
          </p>
          <p className=" text-base text-gray-700 mt-3">
            Specility: {spacility}
          </p>
        </div>
        <div className="my-8">
          <Link to={`/details/${id}`}>
            <button className="bg-transparent border hover:shadow-lg border-black text-black hover:bg-black hover:text-white text-center py-2 px-4 rounded-full font-bold transition">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
