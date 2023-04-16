/* eslint-disable react/no-unescaped-entities */
import React from "react";

import design from "../images/design.png";
import code from "../images/code.png";
import consulting from "../images/consulting.png";

const About = () => {
  return (
    <section className="px-10 md:px-20 lg:px-40">
      <div>
        <h3 className="text-3xl py-2 text-black dark:text-white transition ease-linear delay-150">
          About Me
        </h3>
        <p className="text-md py-2 leading-8 text-black dark:text-white transition ease-linear delay-150">
          Since Elementary I do have the passion about computers. Then as
          growing up I get more curios and curios about it so that's the reason
          I take computer related course in college. <br />
          Computer Engineering is the course that I take because it helps me
          understand about Hardware and Software side of the computer.
        </p>
        <p className="text-md py-2 leading-8 text-black dark:text-white transition ease-linear delay-150 ">
          Here are additional info about me
        </p>
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:border border-white">
          <div className="flex justify-center">
            <img src={design} width={100} height={100} alt="design" />
          </div>

          <h3 className="text-lg font-medium pt-8 pb-2 text-black dark:text-white transition ease-linear delay-150">
            Skills & Characteristics
          </h3>
          <p className="py-2 text-black dark:text-white transition ease-linear delay-150">
            I do have the fundamentals of programming. I do also have good
            communication skills and has great time management skills. Lastly, I
            am willing to learn from a company like yours and loves to be
            challenged in the sake of improving.
          </p>
          <h4 className="py-4 text-teal-600">Programming languages</h4>
          <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
            Front-end Development (html,css,js,React)
          </p>
          <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
            basics of C++, JAVA, python, PHP, nodeJS
          </p>
          <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
            Principles of OOP
          </p>
          <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
            Relational Database (MySQL)
          </p>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:border border-white">
          <div className="flex justify-center">
            <img src={consulting} width={100} height={100} alt="design" />
          </div>

          <h3 className="text-lg font-medium pt-8 pb-2 text-black dark:text-white transition ease-linear delay-150">
            Experiences
          </h3>
          <p className="py-2 text-black dark:text-white transition ease-linear delay-150">
            Throughout my college life there are many challenges that i have
            encounter but there is no challenge yet that I backed down, in my
            journey I have learned that in order to grow we need to have
            consistency and persistence in learning. It will not be a smooth
            sailing journey but I know that in the end all things will be
            fruitful if we just stick to the process of learning.
          </p>
          <h4 className="py-4 text-teal-600">Challenges</h4>
          <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
            Hardware (Microcontroller)
          </p>
          <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
            UI Design
          </p>
          <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
            Cloud Computing
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-3xl text-black dark:text-white">Work Experience</h3>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:border border-white">
          <div className="flex justify-center">
            <img src={code} width={100} height={100} alt="design" />
          </div>

          <p className="py-2 text-black dark:text-white transition ease-linear delay-150">
            I do have a 4 months of working Experience as a Software Engineer in
            an internal management of of their products and passing of important
            documents through the website
          </p>

          <p className="py-2  text-black dark:text-white transition ease-linear delay-150">
            The reason I do just have little bit of experience is because I have
            been retrenched due to the budget issues of the client that time.
          </p>

          <h4 className="py-4 text-teal-600">Tech Stack used</h4>
          <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
            React
          </p>
          <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
            Redux
          </p>
          <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
            tailwind
          </p>
          <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
            Typescript
          </p>
          <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
            BitBucket (source control)
          </p>
          <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
            Jira (issue tracking and project management)
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
