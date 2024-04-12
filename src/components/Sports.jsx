import React, { memo } from "react";

const Sports = () => {
  return (
    <div className="mt-10 rounded-tr-[150px] bg-background-secondary px-10 md:px-20 py-20">
      <div className="flex justify-between">
        <h1 className="font-bold md:text-8xl text-primary">Conversation</h1>
        <button className="bg-gradient-to-r from-gradient to-blue-800 h-12 px-5 text-background-secondary rounded-3xl my-8">
          VIEW MORE
        </button>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-7">
        {Array(12)
          .fill(0)
          .map((ele) => (
            <div className="relative">
              <img src="photos/sports-1.png" alt="sports" className="w-44" />
              <img
                src="photos/sports-logo-2.png"
                alt="sports"
                className="w-1/2 absolute top-2 left-14"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default memo(Sports);
