import React, { memo } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full md:px-20 md:py-10">
      <div className="flex justify-between items-center">
        <div className="flex">
          <IoReorderThreeOutline className="bg-background rounded-full w-12 h-12 p-2" />
          <p className="text-background-secondary my-3 mx-2">Menu</p>
        </div>
        <img src="photos/navbar-logo.png" alt="" className="w-28" />
        <div className="flex gap-5 text-background-secondary">
          <div className="flex gap-2 items-center">
            <img src="photos/ticket-logo.png" alt="" className="w-5 h-5" />
            <p>Ticketing</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src="photos/ticket-logo.png" alt="" className="w-5 h-5" />
            <p>Shop</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src="photos/ticket-logo.png" alt="" className="w-5 h-5" />
            <p>Login</p>
          </div>
          <input
            type="text"
            placeholder="Search...."
            className="h-12 w-36 px-10 bg-transparent border border-background-secondary rounded-3xl placeholder:text-white"
          />
        </div>
      </div>
      <div className="flex justify-around rounded-full bg-background-secondary py-5 px-10 w-1/2 mx-auto mt-20">
        <div className="flex gap-5">
          <img src="photos/gas-logo.png" alt="" className="w-14 h-14" />
          <img src="photos/uttarakhand-logo.png" alt="" className="w-14 h-14" />
          <img src="photos/gas-logo.png" alt="" className="w-14 h-14" />
          <img src="photos/india-logo.png" alt="" className="w-14 h-14" />
          <img src="photos/medal-batch-1.png" alt="" className="w-14 h-14" />
        </div>
        <div className="flex gap-3 ">
          <div className="">
            <h1>179</h1>
            <p>Days</p>
          </div>
          <div className="">
            <h1>179</h1>
            <p>Days</p>
          </div>
          <div className="">
            <h1>179</h1>
            <p>Days</p>
          </div>
          <div className="">
            <h1>179</h1>
            <p>Days</p>
          </div>
        </div>
      </div>
      <div className="flex gap-32 text-background-secondary mt-28 flex-col md:flex-row">
        <div className="max-w-3xl">
          <h1 className="text-7xl">
            The 38th National Games, Uttarakhand 2024
          </h1>
          <p className="mt-5">
            Where fervour converges with brilliance! Immerse yourself in the
            exhilarating spectacle as athletes hailing from every corner of
            Uttarakhand vie for victory in a dazzling display of skill and
            camaraderie. Come together to commemorate our abundant sporting
            legacy and kindle the flame of togetherness. Brace yourself for an
            indelible odyssey towards sporting eminence. Prepare to dive into
            the excitement and witness the enchantment of the National Games
            hosted in Uttarakhand!
          </p>
          <button className="h-14 bg-background-secondary px-5 border rounded-[40px] text-black md:mt-10">
            Uttarakhand Unleashed
          </button>
        </div>
        <div className="md:p-20">
          <div>
            <button>Live Registration</button>
            <h1>The Game Live Registration</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div>
            <button>Live Registration</button>
            <h1>The Game Live Registration</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
