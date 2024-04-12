import React, { memo } from "react";

const HeaderBoxes = () => {
  const boxData = [
    {
      imgUrl: "photos/latest-news-img-1.svg",
      title: "Swasti Singh's gold powers Odisha past 50 medals",
      subTitle:
        "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh. ",
    },
    {
      imgUrl: "photos/latest-news-img-1.svg",
      title: "Swasti Singh's gold powers Odisha past 50 medals",
      subTitle:
        "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh. ",
    },
    {
      imgUrl: "photos/latest-news-img-1.svg",
      title: "Swasti Singh's gold powers Odisha past 50 medals",
      subTitle:
        "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh. ",
    },
    {
      imgUrl: "photos/latest-news-img-1.svg",
      title: "Swasti Singh's gold powers Odisha past 50 medals",
      subTitle:
        "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh. ",
    },
    {
      imgUrl: "photos/latest-news-img-1.svg",
      title: "Swasti Singh's gold powers Odisha past 50 medals",
      subTitle:
        "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh. ",
    },
    {
      imgUrl: "photos/latest-news-img-1.svg",
      title: "Swasti Singh's gold powers Odisha past 50 medals",
      subTitle:
        "Odisha won another medal on Wednesday at the 37th National Games in Goa thanks to the skill of Swasti Singh. ",
    },
  ];

  return (
    <div className="p-12">
      <h1 className="font-style text-primary text-4xl font-medium pb-5 ">
        LATEST NEWS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {boxData.map((ele, ind) => (
          <div
            key={`item-${ind}`}
            className="flex flex-col md:flex-row p-5 items-start border-l-2 border-border"
          >
            <img src={ele.imgUrl} alt="Box Images" className="w-56 pt-3" />
            <div className="flex flex-row md:flex-col p-5 md:pt-0 gap-3">
              <h1 className="text-2xl font-semibold">{ele.title}</h1>
              <p className="text-base font-normal text-muted">{ele.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(HeaderBoxes);
