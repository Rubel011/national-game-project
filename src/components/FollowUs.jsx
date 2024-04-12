import React, { memo } from "react";

const FollowUs = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 gap-10  my-10 bg-background-secondary md:rounded-tr-[235px]">
      <div className="mx-5 py-10">
        <h1 className="font-bold text-6xl md:text-8xl text-primary">
          FOLLOW US
        </h1>
        <div className="flex gap-5 my-10">
          <img src="photos/x-logo.png" alt="" className="w-6 h-6" />
          <img src="photos/facebook-logo.png" alt="" className="w-6 h-6" />
          <img src="photos/instagram-logo.png" alt="" className="w-6 h-6" />
          <img src="photos/koo-logo.png" alt="" className="w-6 h-6" />
          <img src="photos/linkdin-logo.png" alt="" className="w-6 h-6" />
        </div>
        <h1>#uttrakhandgames2024</h1>
      </div>
      <img src="photos/conversation-1.png" alt="" />
    </div>
  );
};

export default memo(FollowUs);
