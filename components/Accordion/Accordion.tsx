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
    <div>
      <div
        className={` p-0 cursor-pointer 
           ${!background ? " text-white" : "text-black"} flex justify-between
    `}
        onClick={toggleAccordion}
      >
        {title}
        {isOpen ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 15.75l7.5-7.5 7.5 7.5'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 8.25l-7.5 7.5-7.5-7.5'
            />
          </svg>
        )}
      </div>
      {isOpen && <div className={`${background} p-4`}>{children}</div>}
    </div>
  );
};

export default Accordion;
