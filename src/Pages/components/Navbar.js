import React from "react";
import { Link } from "react-router-dom";
import DropdownButton from "./DropdownButton";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <img
              src="chaos_logo.png"
              className="h-11 mr-3"
              alt="Flowbite Logo"
            />
            <span
              className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              style={{ "font-family": "Bebas Neue" }}
            >
              CHAOS OFFICIAL
            </span>
          </a>
          <DropdownButton />
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <p>
                <Link
                  to="/home"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
                >
                  Home
                </Link>
              </p>
              <p id="About">
                <Link
                  to="/about"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </p>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
