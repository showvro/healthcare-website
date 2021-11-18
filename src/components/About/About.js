import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="text-gray-600 body-font w-8/12 mx-auto border-black border rounded-lg my-10">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://33t2km132djh3q21qa47elmw-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/best-healthcare-website-design-feature-image.jpg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Doctors Lab
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              The website of the Doctors Lab combines traditional website design
              with the usability best practices. The result is a regal and
              trustworthy look that goes well with their storied history of 170
              years. They present all the information that a patient or general
              visitor might need in great details. This makes their homepage
              very actionable and encourages the visitors to interact with the
              site. And we are giving the best for you.
            </p>
            <div className="flex justify-center">
              <Link
                to="/home"
                className="bg-transparent border border-black text-black hover:bg-black hover:text-white text-center py-2 px-4  rounded-full font-bold"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
