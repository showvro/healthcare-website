import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faComment,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

//declearFunction for Blogs
const Blogs = () => {
  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 sm:w-full md:w-1/2  lg:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfesx-5b_3d0hqDILanMToaLmNvfSFMZd4pg&usqp=CAU"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  BLOG
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Delish Knowledge
                </h1>
                <p className="leading-relaxed mb-3 text-justify">
                  Think of this as healthy vegetarian cooking, made simple.
                  Writer Alex is a registered dietitian, and her ingredient
                  shopping tips and cooking videos — check out the one for vegan
                  paella! — are the next best thing to an office visit.
                  Vegetarians or anybody curious about the lifestyle can
                  consider this blog their starter kit for plant-based recipes
                  that range in ingredients and complexity.
                </p>
                <div className="flex items-center flex-wrap justify-between">
                  <Link
                    className="text-black inline-flex items-center md:mb-2 lg:mb-0"
                    to="#"
                  >
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </Link>
                  <div>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <FontAwesomeIcon icon={faEye} className="mr-1" />
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FontAwesomeIcon icon={faComment} className="mr-1" /> 6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 sm:w-full md:w-1/2  lg:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfesx-5b_3d0hqDILanMToaLmNvfSFMZd4pg&usqp=CAU"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  BLOG
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  The Real Food Dietitians
                </h1>
                <p className="leading-relaxed mb-3 text-justify">
                  This blog is for people who love their Instant Pot, slow
                  cooker, and Whole30 plan. It features recipes for each, plus
                  tips for meal prep efficiency. Not only are there tons of
                  dietitian-authored recipes, but you can also opt in for
                  customized meal plans. Not only are there tons of
                  dietitian-authored recipes, but you can also opt in for
                  customized meal plans.
                </p>
                <div className="flex items-center flex-wrap justify-between">
                  <Link
                    className="text-black inline-flex items-center md:mb-2 lg:mb-0"
                    to="#"
                  >
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </Link>
                  <div>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <FontAwesomeIcon icon={faEye} className="mr-1" />
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FontAwesomeIcon icon={faComment} className="mr-1" /> 6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 sm:w-full md:w-1/2  lg:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfesx-5b_3d0hqDILanMToaLmNvfSFMZd4pg&usqp=CAU"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  BLOG
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Fit Bottomed Girls
                </h1>
                <p className="leading-relaxed mb-3 text-justify">
                  For those who get frustrated with the status quo and ideals of
                  what we “should” be, Fit Bottomed Girls offers a refreshing
                  change of pace. The founders, both certified fitness pros,
                  preach confidence and body positivity. They take a thoughtful
                  approach to fitness, instead of quick, lose-fat-in-10-days
                  results. Their roadmap to a healthier life is a combination of
                  nutrition-packed recipes, doable daily workouts, and a good
                  dose of meditation.
                </p>
                <div className="flex items-center flex-wrap justify-between">
                  <Link
                    className="text-black inline-flex items-center md:mb-2 lg:mb-0"
                    to="#"
                  >
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </Link>
                  <div>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <FontAwesomeIcon icon={faEye} className="mr-1" />
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FontAwesomeIcon icon={faComment} className="mr-1" /> 6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 sm:w-full md:w-1/2  lg:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfesx-5b_3d0hqDILanMToaLmNvfSFMZd4pg&usqp=CAU"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  BLOG
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Fit Foodie Finds
                </h1>
                <p className="leading-relaxed mb-3 text-justify">
                  Fit Foodie Finds is a wellness blog tailor-made for serial
                  Instagram scrollers. The gorgeous photos of healthy meals are
                  just as exciting as making them. Who knew oats could look so
                  pretty? Healthy living posts primarily focus on recipes, but
                  they also include workouts (booty, legs, you name it),
                  do-it-yourself (DIY) beauty, mental health, and relationships.
                  Style-conscious readers will love it, too, with its gallery
                  after gallery of fashion articles.
                </p>
                <div className="flex items-center flex-wrap justify-between">
                  <Link
                    className="text-black inline-flex items-center md:mb-2 lg:mb-0"
                    to="#"
                  >
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </Link>
                  <div>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <FontAwesomeIcon icon={faEye} className="mr-1" />
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FontAwesomeIcon icon={faComment} className="mr-1" /> 6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 sm:w-full md:w-1/2  lg:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfesx-5b_3d0hqDILanMToaLmNvfSFMZd4pg&usqp=CAU"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  BLOG
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Mommypotamus
                </h1>
                <p className="leading-relaxed mb-3 text-justify">
                  Moms looking for that trust-me-I’ve-been-there perspective and
                  healthy ways to take care of their families and themselves
                  will find it on Mommypotamus. This blog is full of information
                  for pregnant women and first-time moms, touching on everything
                  from ultrasound safety to birth plans. You’ll also find a
                  wealth of content on motherhood, natural health, clean beauty,
                  and more.
                </p>
                <div className="flex items-center flex-wrap justify-between">
                  <Link
                    className="text-black inline-flex items-center md:mb-2 lg:mb-0"
                    to="#"
                  >
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </Link>
                  <div>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <FontAwesomeIcon icon={faEye} className="mr-1" />
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FontAwesomeIcon icon={faComment} className="mr-1" /> 6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 sm:w-full md:w-1/2  lg:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfesx-5b_3d0hqDILanMToaLmNvfSFMZd4pg&usqp=CAU"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  BLOG
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Toby Amidor Nutrition
                </h1>
                <p className="leading-relaxed mb-3 text-justify">
                  Blogger Toby is a registered dietitian and author who helps
                  home cooks up their game with the latest in nutrition and food
                  news, including ingredient recalls and safety tips. Toby helps
                  you see your kitchen in an exciting new way and reignite your
                  love of cuisine and cooking. There’s a heavy focus on creative
                  meal prep, along with more serious articles on things like
                  foods to fight depression.
                </p>
                <div className="flex items-center flex-wrap justify-between">
                  <Link
                    className="text-black inline-flex items-center md:mb-2 lg:mb-0"
                    to="#"
                  >
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </Link>
                  <div>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <FontAwesomeIcon icon={faEye} className="mr-1" />
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FontAwesomeIcon icon={faComment} className="mr-1" /> 6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
