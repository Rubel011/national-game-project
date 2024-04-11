import React, { memo } from "react";

const MedalTally = () => {
  const tableData = [
    { state: "Maharashtra", gTagNum: 80, sTagNum: 69, bTagNum: 79, total: 228 },
    { state: "Maharashtra", gTagNum: 80, sTagNum: 69, bTagNum: 79, total: 228 },
    { state: "Maharashtra", gTagNum: 80, sTagNum: 69, bTagNum: 79, total: 228 },
    { state: "Maharashtra", gTagNum: 80, sTagNum: 69, bTagNum: 79, total: 228 },
    { state: "Maharashtra", gTagNum: 80, sTagNum: 69, bTagNum: 79, total: 228 },
  ];
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 py-36 mx-4 ml-5">
        <div className="flex ">
          <img
            src="photos/medal-batch-1.png"
            alt="Batch one"
            className="w-20 p-4"
          />
          <h1 className="text-6xl md:text-8xl font-bold text-gradient-medal-tally ">
            Medal Tally
          </h1>
        </div>
        <table className="w-[350px] md:w-[680px] text-lg font-medium m-5 font-">
          <thead className="m-5">
            <tr className="border border-black">
              <th className="w-7"></th>
              <th className=""></th>
              <th className="pb-4">
                <img src="photos/g-tag.png" className="w-7 mx-auto" alt="" />
              </th>
              <th className="pb-4">
                <img src="photos/s-tag.png" className="w-7 mx-auto" alt="" />
              </th>
              <th className="pb-4">
                <img src="photos/b-tag.png" className="w-7 mx-auto" alt="" />
              </th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((ele, ind) => (
              <tr
                key={`row-${ind + 1}`}
                className={ind % 2 !== 0 && "bg-background-secondary"}
              >
                <td className="text-center ">{ind + 1}</td>
                <td className="text-center">{ele.state}</td>
                <td className="text-center">{ele.gTagNum}</td>
                <td className="text-center">{ele.sTagNum}</td>
                <td className="text-center">{ele.bTagNum}</td>
                <td className="text-center">{ele.total}</td>
              </tr>
            ))}

            <tr className="bg-background-secondary py-2">
              <td className="pl-5" colSpan={2}>
                Grand Total
              </td>
              <td className="text-center">55</td>
              <td className="text-center">55</td>
              <td className="text-center">55</td>
              <td className="text-center">55</td>
            </tr>
            <div className="flex p-10 gap-5">
              <button className="h-12 py-1 px-10 bg-primary rounded-full text-background-secondary">
                Refresh
              </button>
              <button className="h-12 py-1 px-10 rounded-full text-primary whitespace-nowrap border border-primary">View More</button>
            </div>
          </tbody>
        </table>
      </div>
      <img
        src="photos/medal-tally.png"
        alt="medal-tally-Big"
        className="h-[951px] md:w-1/2 pt-12"
      />
    </div>
  );
};

export default memo(MedalTally);
