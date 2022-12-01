import { ComicCard, ComicList } from "modules/comic";
import React from "react";

const HomeNewest = () => {
  return (
    <div className="!mt-4 layout-container">
      <ComicList heading="Truyện mới cập nhật">
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
        <ComicCard />
      </ComicList>
    </div>
  );
};

export default HomeNewest;
