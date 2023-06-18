import React, { useState } from "react";
import DropdownButton from "../components/DropdownButton";

const LandingPage = () => {
    const [activeTab, setActiveTab] = useState("Home")
    const tabChange = (e) => {
        setActiveTab(e.currentTarget.innerText)
    }
 
    return<>
        <video source src="CHAOS.mp4" type="video/mp4" autoPlay muted loop id="background_video" />
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
            <img src="chaos_logo.png" className="h-11 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" style={{"font-family": 'Bebas Neue'}}>CHAOS OFFICIAL</span>
        </a>
        <DropdownButton/>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <p>
                <a href="#" onClick={tabChange} className={activeTab==="Home" ? "md:text-red-700":"" + "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "}>Home</a>
            </p>
            <p id="About">
                <a href="#" onClick={tabChange} className={activeTab==="About" ? "md:text-red-700":"" + "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}>About</a>
            </p>
            </ul>
        </div>
        </div>
        </nav>
        <div>

        </div>

    </>
}

export default LandingPage