import React, { memo } from "react";

const Schedule = () => {
  const tableHeadData = ["Time", "Sports", "Events", "Round/Pool", "Venue"];
  const tableBodyData = [
    {
      Time: { logo: "photos/schedule-logo-1.png", time: "08:30:00" },
      Sports: "Golf",
      Events: "Men's Individual",
      "Round/Pool": "Round 3",
      Venue: "Indira Gandhi International Sports Stadium",
    },
    {
      Time: { logo: "photos/schedule-logo-1.png", time: "08:30:00" },
      Sports: "Golf",
      Events: "Men's Individual",
      "Round/Pool": "Round 3",
      Venue: "Indira Gandhi International Sports Stadium",
    },
    {
      Time: { logo: "photos/schedule-logo-1.png", time: "08:30:00" },
      Sports: "Golf",
      Events: "Men's Individual",
      "Round/Pool": "Round 3",
      Venue: "Indira Gandhi International Sports Stadium",
    },
    {
      Time: { logo: "photos/schedule-logo-1.png", time: "08:30:00" },
      Sports: "Golf",
      Events: "Men's Individual",
      "Round/Pool": "Round 3",
      Venue: "Indira Gandhi International Sports Stadium",
    },
    {
      Time: { logo: "photos/schedule-logo-1.png", time: "08:30:00" },
      Sports: "Golf",
      Events: "Men's Individual",
      "Round/Pool": "Round 3",
      Venue: "Indira Gandhi International Sports Stadium",
    },
    {
      Time: { logo: "photos/schedule-logo-1.png", time: "08:30:00" },
      Sports: "Golf",
      Events: "Men's Individual",
      "Round/Pool": "Round 3",
      Venue: "Indira Gandhi International Sports Stadium",
    },
  ];
  return (
    <div className="bg-background-secondary md:p-16">
      <div className="flex justify-between flex-col md:flex-row">
        <h1 className=" text-gradient-schedule text-6xl md:text-8xl">
          SCHEDULE
        </h1>
        <div className="flex gap-10 items-center">
          <select class="block w-44 px-4  h-12 text-gray-700 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500">
            <option value="">Select Date</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <select class="block w-full px-4  h-12 text-gray-700 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500">
            <option value="">All Games</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
      </div>
      <table className="w-full my-10">
        <thead className="">
          <tr
            className="bg-primary 
          text-background-secondary"
          >
            {tableHeadData.map((ele, ind) => (
              <th key={`${ele}-${ind + 1}`} className="text-center h-20">
                {ele}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBodyData.map((ele, ind) => (
            <tr key={`${ele}-${ind + 1}`} className="">
              <th className="flex flex-col md:flex-row font-normal">
                <img
                  src={ele.Time.logo}
                  alt={ele.Sports}
                  className="w-12 py-2"
                />
                <p className="text-center md:py-4 md:px-2 ">{ele.Time.time}</p>
              </th>
              <th className="font-normal">{ele.Sports}</th>
              <th className="font-normal">{ele.Events}</th>
              <th className="font-normal">{ele["Round/Pool"]}</th>
              <th className="font-normal">{ele.Venue}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(Schedule);
