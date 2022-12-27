import { WrapLink } from "components/link";
import React from "react";

interface ComicTitleProps {
  children: React.ReactNode;
}

const ComicTitle = ({ children }: ComicTitleProps) => {
  return (
    <WrapLink className="inline-block mt-[10px] text-[17px] font-bold leading-[22px] line-clamp-2 text-dark33">
      {children}
    </WrapLink>
  );
};

export default ComicTitle;
