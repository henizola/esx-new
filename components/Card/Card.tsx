import React, { ReactNode } from "react";

interface CardProps {
  width: string;
  children: ReactNode;
  background?: string;
}

const Card: React.FC<CardProps> = ({ width, children, background }) => {
  return (
    <div
      className={`p-0 ${
        background ? background : "bg-white"
      } shadow-lg ${width}`}
    >
      {children}
    </div>
  );
};

export default Card;
