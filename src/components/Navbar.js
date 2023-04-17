import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useScrollPosition } from "../hooks/NavbarTransition";
import { useGlobalContext } from "../hooks/AppContext";
function Navbar() {
  /* useContext */
  const { darkMode, setDarkMode } = useGlobalContext();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  /* scroll y */
  const scrollPosition = useScrollPosition();

  return (
    <nav
      className={classNames(
        scrollPosition > 200 ? "py-6" : "py-10",
        "flex px-10 justify-between sticky top-0 bg-black dark:bg-white transition ease-linear delay-150 md:px-20 lg:px-40 z-10 "
      )}
    >
      <h1 className="text-2xl font-burtons text-white dark:text-black transition ease-linear delay-150">
        Alcoriza's Portfolio Website
      </h1>
      <ul className="flex items-center">
        <li
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          className="text-white  dark:text-black transition ease-in-out delay-150 "
        >
          <BsFillMoonStarsFill className="cursor-pointer text-2xl hover:text-teal-500 transition ease-in-out delay-150" />
        </li>
        <li>
          <a
            href="./CV_Emmanuel_P_Alcoriza.pdf"
            download
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:bg-gradient-to-l hover:text-pink-500 px-4 py-2 rounded-md ml-8 transition ease-linear delay-150"
          >
            Download Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
