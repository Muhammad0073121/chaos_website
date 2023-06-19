import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <>
      <video
        source
        src="CHAOS.mp4"
        type="video/mp4"
        autoPlay
        muted
        loop
        id="background_video"
      />
      <Navbar />
      <div className="landingpagecontent">
        <Outlet />
      </div>
    </>
  );
};

export default LandingPage;
