import React from "react";

interface ComicListProps {
  heading?: string;
  children: React.ReactNode;
}

const ComicList = ({ heading, children }: ComicListProps) => {
  return (
    <div className="my-[20px]">
      {heading && <h3 className="heading">{heading}</h3>}
      <div className="comic-list">{children}</div>
    </div>
  );
};

export default ComicList;
