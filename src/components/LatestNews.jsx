import React, { use } from "react";
import Marquee from "react-fast-marquee";
const latestNewsPromise = fetch(
  "https://openapi.programming-hero.com/api/news/category/01"
).then((res) => res.json());

const LatestNews = () => {
  const latestnews = use(latestNewsPromise);
  return (
    <div className="bg-base-200 flex justify-between container mx-auto items-center my-3">
      <div className="bg-secondary text-white p-3">Latest</div>
      <Marquee className="gap-3 font-bold" pauseOnHover={true}>
        {latestnews.data.map((news) => (
          <p> {news.title + " | "}</p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
