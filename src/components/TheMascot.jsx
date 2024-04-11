import React, { memo } from "react";

const TheMascot = () => {
  return (
    <div className="m-28 relative flex gap-20">
      <div>
        <p className="font-normal text-4xl text-primary">HI!, I AM</p>
        <h1 className="font-bold text-8xl text-primary max-w-xs my-5">
          THE MASCOT
        </h1>
        <p className="">
          Meet Himalayan Monal, The Mascot for the 38th National Games
          Uttarakhand 2024. Known as the Impeyan Monal. This bird is also the
          state bird of Uttarakhand.
        </p>
        <button className="bg-gradient-to-r from-gradient to-blue-800 h-12 px-5 text-background-secondary rounded-3xl my-8">
          Meet Mascot
        </button>
      </div>
      <div className="flex justify-center relative">
        <img
          src="photos/the-mascot-pic-1.png"
          alt=""
          className="absolute top-0 left-0"
        />
        <img
          src="photos/the-mascot-pic-2.png"
          alt=""
          className="relative mt-28 w-1/2"
        />
      </div>
    </div>
  );
};

export default memo(TheMascot);
