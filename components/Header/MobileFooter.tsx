import Link from "next/link";
import React from "react";

const MobileFooter: React.FC = () => {
  return (
    <footer className='bg-primary-blue lg:hidden  text-white py-8 sm:px-4'>
      <div className='container mx-auto'>
        <div className='flex flex-col sm:flex-row'>
          <div className='flex-1 sm:w-1/3'>
            <h1 className='font-[500] text-center text-2xl sm:text-3xl lg:text-4xl mb-2'>
              ESX
            </h1>
            <div className='grid grid-cols-1 '>
              <Link href='/about-us' className='text-[14px] text-center  mt-4'>
                ABOUT US{" "}
              </Link>

              <Link
                href='/equity-market'
                className='text-[14px] text-center  mt-4'
              >
                {" "}
                EQUITY MARKET{" "}
              </Link>

              <Link
                href='/fixed-income-market'
                className='text-[14px] text-center  mt-4'
              >
                FIXED INCOME MARKET{" "}
              </Link>

              <Link
                href='/alternative-and-growth-market'
                className='text-[14px] text-center  mt-4'
              >
                {" "}
                ALTERNATIVE AND GROWTH MARKET{" "}
              </Link>

              <Link
                href='/new-and-market'
                className='text-[14px] text-center  mt-4'
              >
                {" "}
                NEWS AND MEDIA CENTER{" "}
              </Link>

              <Link
                href='/esx-academy'
                className='text-[14px] text-center  mt-4'
              >
                {" "}
                ESX Academy{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;
