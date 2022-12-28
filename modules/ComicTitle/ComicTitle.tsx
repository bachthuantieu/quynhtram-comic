import { WrapLink } from "components/link";
import React, { AnchorHTMLAttributes } from "react";

interface ComicTitleProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const ComicTitle = ({ children, ...props }: ComicTitleProps) => {
  return (
    <WrapLink
      className="inline-block mt-1 text-[17px] font-bold leading-[22px] line-clamp-2 text-dark33"
      {...props}
    >
      {children}
    </WrapLink>
  );
};

export default ComicTitle;
