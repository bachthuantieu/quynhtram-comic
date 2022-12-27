import React from "react";

interface HeadingProps {
  children: React.ReactNode;
}

const Heading = ({ children }: HeadingProps) => {
  return <h2 className="text-2xl font-bold text-dark33">{children}</h2>;
};

export default Heading;
