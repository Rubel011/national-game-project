import React, { memo } from "react";

const Conversation = () => {
  return (
    <div className="grid bg-background-secondary grid-cols-1 md:grid-cols-2 p-1 md:rounded-tr-[235px]">
      <div className="p-2 md:p-10 my-auto">
        <div className="mb-10">
          <p>Join the</p>
          <h1 className="font-bold text-3xl md:text-8xl text-primary">
            Conversation
          </h1>
          <p className="font-light text-3xl my-2">#uttrakhandgames2024</p>
        </div>
        <div>
          <div className="grid grid-cols-3 py-10">
            <div className="border-r border-border">
              <p className="pb-20">ALL TOGETHER</p>
              <p className="font-bold text-6xl">28</p>
              <p className="text-muted">STATES</p>
            </div>
            <div className="pl-10 border-r border-border">
              <p className="pb-20">ALL TOGETHER</p>
              <p className="font-bold text-6xl">28</p>
              <p className="text-muted">STATES</p>
            </div>
            <div className="pl-10">
              <p className="pb-20">ALL TOGETHER</p>
              <p className="font-bold text-6xl">28</p>
              <p className="text-muted">STATES</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 border-t border-border py-10">
            <div className="border-r border-border ">
              <p className="pb-20">COMPETITION</p>
              <h1 className="font-bold text-6xl">22</h1>
              <p className="text-muted">days</p>
            </div>
            <div className="">
              <p className="pb-20">SERVICE</p>
              <h1 className="font-bold text-6xl">4000</h1>
              <p className="text-muted">Volunteers</p>
            </div>
          </div>
        </div>
      </div>
      <img src="photos/conversation-1.png" alt="" />
    </div>
  );
};

export default memo(Conversation);
