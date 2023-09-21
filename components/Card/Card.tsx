import React, { ReactNode } from "react";

interface CardProps {
  width: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ width, children }) => {
  return <div className={`p-0 bg-white shadow-lg ${width}`}>{children}</div>;
};

export default Card;
