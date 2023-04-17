/* eslint-disable react/no-unescaped-entities */
import React from "react";

/* import design from "../images/design.png";
import code from "../images/code.png";
import consulting from "../images/consulting.png"; */

const About = () => {
  return (
    <section className="px-10 md:px-20 lg:px-40">
      <div>
        <h3 className="text-3xl py-2 text-black dark:text-white transition ease-linear delay-150">
          About Me
        </h3>
        <div className="text-md py-2 leading-8 text-black dark:text-white transition ease-linear delay-150">
          <p>
            Since Elementary I do have the passion about computers. I tend to
            play for hours in computer shops and got more curious on how the
            computer works then it became the reason I take computer related
            course in college.
          </p>

          <p className="mt-5">
            Computer Engineering is the course that I take because it helps me
            understand about Hardware and Software side of the computer.
          </p>
        </div>
        <p className="text-md mt-5 leading-8 text-black dark:text-white transition ease-linear delay-150 ">
          Additional info :
        </p>
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-10">
        <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:border border-white">
          <div className="flex justify-center">
            <img src="./design.png" width={100} height={100} alt="design" />
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

        <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:border border-white">
          <div className="flex justify-center">
            <img src="./consulting.png" width={100} height={100} alt="design" />
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
          <h4 className="py-4 text-teal-600">Related to Tech learnings</h4>
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
        <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:border border-white">
          <div className="flex justify-center">
            <img src="./code.png" width={100} height={100} alt="design" />
          </div>

          <p className="py-2 text-black dark:text-white transition ease-linear delay-150">
            Right now, I do have 4 months of working Experience as a Software
            Engineer. The app is an internal management system of the client's
            products where their branches can order supplies to their warehouse
            and also can pass important document through the web app.
          </p>

          <p className="py-2  text-black dark:text-white transition ease-linear delay-150">
            The reason I do just have little bit of experience is because I have
            been retrenched due to the budget issues of the client that time.
          </p>

          <h4 className="py-4 text-teal-600">Tech Stack used</h4>
          <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
            BitBucket (source control)
          </p>
          <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
            Jira (issue tracking and project management)
          </p>
          <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
            Redux
          </p>
          <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
            React
          </p>
          <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
            Typescript
          </p>
          <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
            Tailwind
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
