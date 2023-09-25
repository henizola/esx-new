// components/Slider.tsx

import React, { ReactNode } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import Card from "../Card/Card";

const settings = {
  dots: false,
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
      stroke='#00205B80'
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
      stroke='#00205B80'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15.75 19.5L8.25 12l7.5-7.5'
      />
    </svg>
  ), // Replace with your right arrow SVG icon component
};

const Testimonials: React.FC = () => {
  return (
    <Slider {...settings} className='h-[50vh]'>
      <div className='flex flex-col'>
        <Card width='w-[80%] mx-[10%] mt-10 py-5 px-5 flex h-[fit-content] '>
          <div className='w-[90%] ml-4'>
            <h1 className='text-[14px] font-light text-[#001F5980] p-5 text-center'>
              “Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
              ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie conse.”
            </h1>
          </div>
        </Card>
        <h1 className='text-center mt-5 '>Lorem ipsum dolor</h1>
        <h2 className='text-center mt-2 font-light'>
          Lorem ipsum dolor sit amet
        </h2>
      </div>
      <div className='flex flex-col'>
        <Card width='w-[80%] mx-[10%] mt-10 py-5 px-5 flex h-[fit-content] '>
          <div className='w-[90%] ml-4'>
            <h1 className='text-[14px] font-light text-[#001F5980] p-5 text-center'>
              “Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
              ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie conse.”
            </h1>
          </div>
        </Card>
        <h1 className='text-center mt-5 '>Lorem ipsum dolor</h1>
        <h2 className='text-center mt-2 font-light'>
          Lorem ipsum dolor sit amet
        </h2>
      </div>
    </Slider>
  );
};

export default Testimonials;
