import React from "react";
import Navbar from "../components/Navbar";
import HeaderBoxes from "../components/HeaderBoxes";
import MedalTally from "../components/MedalTally";
import Schedule from "../components/Schedule";
import TheMascot from "../components/TheMascot";
import Conversation from "../components/Conversation";
import Sports from "../components/Sports";
import FollowUs from "../components/FollowUs";
import Competition from "../components/Competition";

const HomePage = () => {
  return (
    <div>
      <div className="bg-background-secondary">
        <div className="">
          <img
            src="photos/top-photo.svg"
            alt="Top header 1"
            className="rounded-bl-[100px] md:rounded-bl-[200px] relative"
          />
          <img
            src="photos/top-img.svg"
            alt="Top header 2"
            className="rounded-bl-[100px] md:rounded-bl-[200px] absolute top-0 left-0"
          />
          <Navbar />
          {/* <div></div> */}
        </div>
        <HeaderBoxes />
      </div>
      <MedalTally />
      <Schedule />
      <TheMascot />
      <Conversation />
      <Sports />
      <FollowUs />
      <Competition />
    </div>
  );
};

export default HomePage;
