/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Projects = () => {
  const imgClass =
    "block w-full object-cover object-center hover:scale-110 transition ease-in-out delay-150 rounded-md";
  const contentClass =
    "absolute inset-0 text-center p-5 text-white bg-black-rgba dark:bg-white-rgba dark:text-black  flex justify-center items-center transition ease-in-out delay-200 opacity-0 hover:opacity-100 rounded-md flex-wrap overflow-auto";
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
          Here are my some of my done projects :
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10">
        {/* html and css */}
        <div className="py-4 shadow-xl dark:shadow-none p-10 rounded-lg ">
          <h1 className="text-3xl text-center pb-4 dark:text-white">
            HTML and CSS basics
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative overflow-hidden cursor-pointer ">
              <a href="https://sample-signupform.netlify.app">
                <img
                  src="./sample sign up form.png"
                  alt="web1"
                  className={imgClass}
                />
                <div className={contentClass}>
                  <p>
                    This is a sample sign up form that I created using HTML and
                    CSS <br />
                    <span className="text-red-500 font-medium">NOTE</span> :
                    this is not working it is purely FRONTEND.
                  </p>
                </div>
              </a>
            </div>
            <div className="relative overflow-hidden cursor-pointer">
              <a href="https://sample-dashboard-emman.netlify.app">
                <img
                  src="./sample dashboard.png"
                  alt="web2"
                  className={imgClass}
                />
                <div className={contentClass}>
                  <p>
                    This is a sample dashboard that I created using HTML and CSS
                    <br />
                    <span className="text-red-500 font-medium">NOTE:</span> this
                    is not working it is purely FRONTEND.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <hr className=" w-96  hidden dark:block border-4 border-cyan-500  rounded-lg "></hr>
        </div>

        {/* react basics */}
        <div className="shadow-xl dark:shadow-none p-10 rounded-lg ">
          <h1 className="text-3xl text-center pb-4 dark:text-white">
            React Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="relative overflow-hidden cursor-pointer">
              <a href="https://team-member-tracker.netlify.app">
                <img
                  src="./Team Member tracker.png"
                  alt="web3"
                  className={imgClass}
                />
                <div className={contentClass}>
                  <p>
                    This is a people & role tracker that can be used by the
                    management on who are working on a specific team
                    <br />
                    <br />
                    <span className="text-teal-500 font-medium">
                      Technologies learned
                    </span>
                    : Routing, State, File Structure
                  </p>
                </div>
              </a>
            </div>
            <div className="relative overflow-hidden cursor-pointer">
              <a href="https://ingredients-emman.netlify.app">
                <img src="./Ingredients.png" alt="web4" className={imgClass} />
                <div className={contentClass}>
                  <p>
                    This is a Meal CookBook where the user can search a meal and
                    can see the recipe to replicate the delicacy
                    <br />
                    <br />
                    <span className="text-teal-500 font-medium">
                      Technologies learned
                    </span>
                    : Routing, State, API integration, Search API
                  </p>
                </div>
              </a>
            </div>
            <div className="relative overflow-hidden cursor-pointer">
              <a href="https://github.com/lolomodown4/Stock-tracker">
                <img
                  src="./stock tracker.png"
                  alt="web5"
                  className={imgClass}
                />
                <div className={contentClass}>
                  <p>
                    This is a Stock Tracker that can monitor the stock prices in
                    the market
                    <br />
                    <br />
                    <span className="text-teal-500 font-medium">
                      Technologies learned
                    </span>
                    : Routing, State, API integration, Context, Search API,
                    graphQL
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <hr className=" w-96  hidden dark:block border-4 border-cyan-500  rounded-lg "></hr>
        </div>

        {/* cool projects */}
        <div className="shadow-xl dark:shadow-none p-10 rounded-lg  ">
          <h1 className="text-3xl text-center pb-4 dark:text-white">
            Biggest Projects
          </h1>

          <div className="relative overflow-hidden cursor-pointer">
            <a href="https://youtube-clone-alcoriza.netlify.app">
              <img src="./youtube clone.png" alt="web6" className={imgClass} />
              <div className={contentClass}>
                <p>
                  This is a youtube Clone where the user can search, play and
                  know about the channel who posted the video
                  <br />
                  <br />
                  <span className="text-teal-500 font-medium">
                    Technologies learned
                  </span>
                  : Routing, State, API integration,Search API
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
