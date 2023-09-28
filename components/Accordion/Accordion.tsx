import React, { ReactNode, useState } from "react";

interface AccordionProps {
  title: string;
  children?: ReactNode;
  background?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  background,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={background}>
      <div
        className={`p-4 cursor-pointer 
           ${
             background ? " text-black" : "text-gray bg-white"
           } flex justify-between
    `}
        onClick={toggleAccordion}
      >
        {title}
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </div>
      {isOpen && <div className=" bg-[#F0F0F0]">{children}</div>}
    </div>
  );
};

export default Accordion;
