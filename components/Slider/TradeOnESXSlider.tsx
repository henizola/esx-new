// components/Slider.tsx

import React, { ReactNode } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/Card";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={3.5}
      stroke='#ffffff'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M8.25 4.5l7.5 7.5-7.5 7.5'
      />
    </svg>
  ), // Replace with your left arrow SVG icon component
  prevArrow: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={3.5}
      stroke='#ffffff'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15.75 19.5L8.25 12l7.5-7.5'
      />
    </svg>
  ), // Replace with your right arrow SVG icon component
};

const TradeOnESXSlider: React.FC = () => {
  return (
    <Slider {...settings} className='relative '>
      <div className='flex flex-col '>
        <div className='relative '>
          <div className='absolute max-h-[400px] h-full  mt-24 inset-0 bg-light-blue z-10'></div>
          <img
            src={"/images/slider-background.png"}
            alt={"slide.alt"}
            className='absolute max-h-[400px] mt-24  h-full w-full z-0'
          />
          <div className='h-[400px] w-full relative -pt-64 px-[20%] z-20  '>
            <div className='max-w-[1020px] bg-white   absolute top-0 left-1/2 transform -translate-x-1/2 w-full px-[24px] py-[40px] mx-auto z-20 flex flex-col gap-5 '>
              <h2 className="text-center text-black text-[20px] lg:text-[32px] font-semibold font-['Open Sans']">
                How do investors access the market ?
              </h2>
              <p className=" text-center text-black text-[14px] lg:text-xl font-normal font-['Open Sans'] leading-relaxed">
                ESX is a fully electronic and intermeidated market. To access
                the markets investors should have a CSD account, and select a
                licensed member of the exchange/ brokerage firm (Member)
              </p>
            </div>
            <p className="pt-5 w-[70%] lg:w-[780px] h-[350px] absolute top-64 left-1/2 transform -translate-x-1/2 text-center text-white lg:text-xl z-20 font-normal font-['Open Sans'] leading-relaxed">
              Investors can choose and appoint a licensed member/ broker from
              members directory of ESX website
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col '>
        <div className='relative '>
          <div className='absolute max-h-[400px] h-full  mt-24 inset-0 bg-light-blue z-10'></div>
          <img
            src={"/images/slider-background.png"}
            alt={"slide.alt"}
            className='absolute max-h-[400px] mt-24  h-full w-full z-0'
          />
          <div className='h-[400px] w-full relative -pt-64 px-[20%] z-20  '>
            <div className='max-w-[1020px] bg-white   absolute top-0 left-1/2 transform -translate-x-1/2 w-full px-[24px] py-[40px] mx-auto z-20 flex flex-col gap-5 '>
              <h2 className="text-center text-black text-[20px] lg:text-[32px] font-semibold font-['Open Sans']">
                How do investors access the market ?
              </h2>
              <p className=" text-center text-black text-[14px] lg:text-xl font-normal font-['Open Sans'] leading-relaxed">
                ESX is a fully electronic and intermeidated market. To access
                the markets investors should have a CSD account, and select a
                licensed member of the exchange/ brokerage firm (Member)
              </p>
            </div>
            <p className=" w-[70%] lg:w-[780px] h-[350px] absolute top-64 left-1/2 transform -translate-x-1/2 text-center text-white lg:text-xl z-20 font-normal font-['Open Sans'] leading-relaxed">
              Investors can choose and appoint a licensed member/ broker from
              members directory of ESX website
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default TradeOnESXSlider;
