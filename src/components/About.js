/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
            Computer Engineering is the course that I took because it helps me
            understand about Hardware and Software side of the computer.
          </p>
        </div>
        <p className="text-md mt-5 leading-8 text-black dark:text-white transition ease-linear delay-150 ">
          Additional info :
        </p>
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-10" data-aos="fade-up">
        <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:border border-white">
          <div className="flex justify-center">
            <img src="./design.png" width={100} height={100} alt="design" />
          </div>

          <h3 className="text-lg font-medium pt-8 pb-2 text-black dark:text-white transition ease-linear delay-150">
            Skills & Characteristics
          </h3>
          <p className="py-2 text-black dark:text-white transition ease-linear delay-150">
            I have a strong grasp of programming basics, coupled with excellent
            communication and time management skills. I'm enthusiastic about
            learning from companies like yours and thrive on challenges that
            help me improve but will also help the company's growth.
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
            College Experience
          </h3>
          <p className="py-2 text-black dark:text-white transition ease-linear delay-150">
            Throughout my college journey, I've faced numerous challenges, and
            I've never backed down from any of them. I've come to realize that
            growth requires consistent and persistent learning. While the path
            may not always be easy, I believe that sticking to the learning
            process leads to rewarding outcomes in the end.
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

      <div data-aos="fade-up">
        <h3 className="text-3xl text-black dark:text-white">Work Experience</h3>

        <div className="md:grid md:grid-cols-2 md:gap-10">
          <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:border border-white">
            <div className="flex justify-center">
              <img src="./code.png" width={100} height={100} alt="design" />
            </div>

            <p className="py-2 text-black dark:text-white transition ease-linear delay-150">
              During my time at Hooli Software Inc., I worked for 4 months as a
              Software Engineer. I was part of a team that developed an internal
              management system for our client's products. This system allowed
              client branches to easily order supplies for their warehouses and
              share important documents through a web application.
            </p>

            <p className="py-2  text-black dark:text-white transition ease-linear delay-150">
              The reason I do just have little bit of experience is because I
              have been retrenched due to the budget issues of the client that
              time.
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

          <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:border border-white">
            <div className="flex justify-center">
              <img src="./code.png" width={100} height={100} alt="design" />
            </div>

            <p className="py-2 text-black dark:text-white transition ease-linear delay-150">
              In my second professional role, I joined NEC Telecom Inc. as a
              Software Design Engineer I (SDE I) for 10 months. This position
              afforded me a comprehensive understanding of the application
              development lifecycle, from conception to deployment. My
              responsibilities encompassed the design, development, and testing
              phases of various applications, providing me with invaluable
              hands-on experience in software engineering.
            </p>

            <p className="py-2  text-black dark:text-white transition ease-linear delay-150">
              The reason I leave the company is because It focuses more in VNF
              which I believe will not be useful for the career path I am aiming
              to specialize for which is the Frontend Developer role
            </p>

            <h4 className="py-4 text-teal-600">Tech Stack used/learned</h4>
            <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
              Gitlab (source control)
            </p>
            <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
              FrontEnd Development (React)
            </p>
            <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
              Linux environment navigation
            </p>
            <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
              Virtual Network Function (VNF)
            </p>
            <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
              Nginx Server
            </p>
            <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
              Concepts in Deployment (docker and kubernetes)
            </p>
            <p className="text-gray-800 py-1 dark:text-white transition ease-linear delay-150">
              VBA development(Excel)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
