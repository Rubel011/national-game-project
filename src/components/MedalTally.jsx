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
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="py-36 mx-4 ml-5">
        <div className="flex">
          <img
            src="photos/medal-batch-1.png"
            alt="Batch one"
            className="w-20 p-4"
          />
          <h1 className="text-6xl md:text-8xl font-bold text-gradient-medal-tally ">
            Medal Tally
          </h1>
        </div>
        <table className="font-medium w-full mt-5">
          <thead className="">
            <tr className="border border-black">
              <th className="">NO.</th>
              <th className=""></th>
              <th className="">
                <img src="photos/g-tag.png" className="w-7 mx-auto pb-2" alt="" />
              </th>
              <th className="">
                <img src="photos/s-tag.png" className="w-7 mx-auto pb-2" alt="" />
              </th>
              <th className="">
                <img src="photos/b-tag.png" className="w-7 mx-auto pb-2" alt="" />
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
                <td className="text-center">{ind + 1}</td>
                <td className="text-center">{ele.state}</td>
                <td className="text-center">{ele.gTagNum}</td>
                <td className="text-center">{ele.sTagNum}</td>
                <td className="text-center">{ele.bTagNum}</td>
                <td className="text-center">{ele.total}</td>
              </tr>
            ))}

            <tr className="bg-background-secondary">
              <td className="pl-5" colSpan={2}>
                Grand Total
              </td>
              <td className="text-center">55</td>
              <td className="text-center">55</td>
              <td className="text-center">55</td>
              <td className="text-center">55</td>
            </tr>
          </tbody>
        </table>
        <div className="flex py-10 md:p-10 gap-5">
          <button className="h-12 py-1 px-10 bg-primary rounded-full text-background-secondary">
            Refresh
          </button>
          <button className="h-12 py-1 px-10 rounded-full text-primary whitespace-nowrap border border-primary">
            View More
          </button>
        </div>
      </div>
      <img
        src="photos/medal-tally.png"
        alt="medal-tally-Big"
        className="h-[951px] pt-12"
      />
    </div>
  );
};

export default memo(MedalTally);
