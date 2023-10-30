import React, { useState } from "react";

const Pagination = () => {
  const totalPages = 30;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='flex max-w-[90vw] justify-between items-center  lg:max-w-[40vw] mb-6 mt-6 w-[100%] bg-primary-blue py-4 px-8 bg-gray-200'>
      <button
        className='flex items-center  -600 hover: -900'
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='white'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 19.5L8.25 12l7.5-7.5'
          />
        </svg>
      </button>

      <div className='flex overflow-x-auto space-x-4'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-white ${
              index + 1 !== currentPage
                ? "font-light text-[12px]"
                : "font-[500] text-[16px]"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button
        className='flex items-center  -600 hover: -900'
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='white'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 4.5L15.75 12l-7.5 7.5'
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
