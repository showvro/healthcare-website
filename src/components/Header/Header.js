import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  //Get User from useAuth Function
  const { user, logOut } = useAuth();

  //Return Function
  return (
    <div className="bg-gray-100 shadow-lg">
      <header className="text-gray-600">
        <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <img
            className="w-10 h-10 text-white p-1 bg-gray-300 rounded-full"
            src={
              "https://raw.githubusercontent.com/Showvro/healthcare-img/866d17d0d3f470c5f7384f2765bf386efde4af32/fav.svg"
            }
            alt=""
          />
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold">
            <Link
              className="mr-5 lg:mr-10 text-gray-400 hover:text-black"
              to="/home"
            >
              Home
            </Link>
            <Link
              className="mr-5 lg:mr-10 text-gray-400 hover:text-black"
              to="/blogs"
            >
              Blogs
            </Link>

            <Link
              className="mr-5 text-gray-400 hover:text-black"
              to="/testimonial"
            >
              Testimonial
            </Link>
            <Link
              className="mr-5 lg:mr-10 text-gray-400 hover:text-black"
              to="/about"
            >
              About
            </Link>
          </nav>
          <div className="flex justify-between items-center">
            <p className="text-black mr-2">
              {user.displayName && <span>Hello! {user.displayName}</span>}
            </p>
            {user.email ? (
              <button
                className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0 transition-all mr-5"
                onClick={logOut}
              >
                Log Out
                <FontAwesomeIcon icon={faSignOutAlt} className="w-4 h-4 ml-2" />
              </button>
            ) : (
              <Link
                className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0 transition-all"
                to="/register"
              >
                Login / Register
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-2" />
              </Link>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
