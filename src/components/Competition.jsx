import React from "react";

const Competition = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h1 className="font-bold text-6xl md:text-8xl text-primary">
          COMPETITION ZONE
        </h1>
        <div>
          <img src="photos/competition-logo-3.png" alt="" className="w-20" />
          <div>
            <h1>DELHI</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quis
              porro a eos qui! Expedita suscipit, vitae, quis obcaecati eaque
              voluptate impedit error odio corporis natus ratione provident
              perferendis quo deleniti in, ipsam at velit voluptatibus! Quas
              veniam recusandae eaque sed, commodi rem corrupti quo distinctio,
              explicabo perferendis repellat. Deleniti!
            </p>
            <div className="flex">
              <button>EXPLORE</button> <h1>VENUE</h1>
            </div>
          </div>
        </div>
      </div>
      <img
        src="photos/competition-logo-2.png"
        alt=""
        className="rounded-tr-[235px]"
      />
    </div>
  );
};

export default Competition;
