/* eslint-disable react/no-unescaped-entities */
import React from "react";

/* import web1 from "../images/web1.png";
import web2 from "../images/web2.png";
import web3 from "../images/web3.png";
import web4 from "../images/web4.png";
import web5 from "../images/web5.png";
import web6 from "../images/web6.png"; */

import pic1 from "../project pics/sample sign up form.png";
import pic2 from "../project pics/sample dashboard.png";
import pic3 from "../project pics/Team Member tracker.png";
import pic4 from "../project pics/Ingredients.png";
import pic5 from "../project pics/stock tracker.png";
import pic6 from "../project pics/youtube clone.png";

const Projects = () => {
  const imgClass =
    "block w-full object-cover object-center hover:scale-110 transition ease-in-out delay-150 rounded-md";
  const contentClass =
    "absolute inset-0 text-center p-5 text-white bg-black-rgba dark:bg-white-rgba dark:text-black  flex justify-center items-center transition ease-in-out delay-200 opacity-0 hover:opacity-100 rounded-md";
  return (
    <section className="px-10 md:px-20 lg:px-40 ">
      <div>
        <h3 className="text-black text-3xl py-1 dark:text-white transition ease-linear delay-150">
          Portfolio
        </h3>
        <p className="text-md py-2 leading-8 text-black dark:text-white transition ease-linear delay-150 ">
          Since the unemployment I still try to expand my knowledge specifically
          about web development, I build mini projects from html,css up to
          React.
        </p>
        <p className="text-md py-2 leading-8 text-black dark:text-white ">
          Here are my done projects
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10">
        {/* html and css */}
        <div className="py-4 shadow-lg p-10 rounded-lg ">
          <h1 className="text-3xl text-center pb-4 dark:text-white">
            HTML and CSS basics
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative overflow-hidden cursor-pointer ">
              <a href="https://youtube.com">
                <img src={pic1} alt="web1" className={imgClass} />
                <div className={contentClass}>
                  This is a sample sign up form that I created using HTML and
                  CSS <br />
                  NOTE: this is not working it is purely FRONTEND.
                </div>
              </a>
            </div>
            <div className="relative overflow-hidden cursor-pointer">
              <a href="https://youtube.com">
                <img src={pic2} alt="web2" className={imgClass} />
                <div className={contentClass}>
                  This is a sample dashboard that I created using HTML and CSS
                  <br />
                  NOTE: this is not working it is purely FRONTEND.
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <hr className=" w-96  hidden dark:block border-4 border-cyan-500  rounded-lg "></hr>
        </div>

        {/* react basics */}
        <div className="shadow-lg p-10 rounded-lg ">
          <h1 className="text-3xl text-center pb-4 dark:text-white">
            React Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="relative overflow-hidden cursor-pointer">
              <a href="https://youtube.com">
                <img src={pic3} alt="web3" className={imgClass} />
                <div className={contentClass}>
                  This is a people & role tracker that can be used by the
                  management on who are working on a specific team
                  <br />
                  <br />
                  Technologies learned: Routing, State
                </div>
              </a>
            </div>
            <div className="relative overflow-hidden cursor-pointer">
              <a href="https://youtube.com">
                <img src={pic4} alt="web4" className={imgClass} />
                <div className={contentClass}>
                  This is a Meal CookBook where the user can search a meal and
                  can see the recipe to replicate the delicacy
                  <br />
                  <br />
                  Technologies learned: Routing, State, Search API
                </div>
              </a>
            </div>
            <div className="relative overflow-hidden cursor-pointer">
              <a href="https://youtube.com">
                <img src={pic5} alt="web5" className={imgClass} />
                <div className={contentClass}>
                  This is a Stock Tracker that can monitor the stock prices in
                  the market
                  <br />
                  <br />
                  Technologies learned: Routing, State, Search API, graphQL
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <hr className=" w-96  hidden dark:block border-4 border-cyan-500  rounded-lg "></hr>
        </div>

        {/* cool projects */}
        <div className="shadow-lg p-10 rounded-lg  ">
          <h1 className="text-3xl text-center pb-4 dark:text-white">
            Biggest Projects
          </h1>

          <div className="relative overflow-hidden cursor-pointer">
            <a href="https://youtube.com">
              <img src={pic6} alt="web6" className={imgClass} />
              <div className={contentClass}>
                This is a youtube Clone where the user can search, play and know
                about the channel who posted the video
                <br />
                <br />
                Technologies learned: Routing, State, Search API
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
