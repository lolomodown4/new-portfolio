import React from "react";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

/* import emman from "../images/png.png"; */

const LandingPageInfo = () => {
  return (
    <section className="min-h-screen ">
      <div className="text-center p-10 px-10 md:px-20 lg:px-40">
        <h2 className="text-5xl py-2 text-teal-500 font-bold md:text-7xl">
          Emmanuel Alcoriza
        </h2>
        <h3 className="text-2xl py-2 text-black md:text-3xl dark:text-white transition ease-linear delay-150">
          Aspiring Web Developer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-900 md:text-xl dark:text-white transition ease-linear delay-150">
          I am a <span className="text-teal-500">Computer Engineer</span>{" "}
          graduate that is seeking for opportunies in web development industry.
        </p>
      </div>

      <div className="flex justify-center text-5xl text-black gap-8 py-3 dark:text-white transition ease-linear delay-150">
        <a
          href="https://www.facebook.com/emmanuel.alcoriza"
          className="hover:bg-teal-500 transition ease-in-out delay-150"
        >
          <AiFillFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/emmanuel-alcoriza-4765b2184/"
          className="hover:bg-teal-500 transition ease-in-out delay-150"
        >
          <AiFillLinkedin />
        </a>
      </div>

      <div className="bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:w-96 md:h-96">
        <div className="mt-5">
          <img src="./emman.png" height="600px" width="600px" alt="emman" />
        </div>
      </div>
    </section>
  );
};

export default LandingPageInfo;
