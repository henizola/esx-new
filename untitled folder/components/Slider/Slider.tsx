// components/Slider.tsx

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderStyles.css";
interface Slide {
  image: string;
  alt: string;
  title: string;
  description: string;
}

interface SliderProps {
  slides: Slide[];
}

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
      stroke='white'
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
      stroke='white'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15.75 19.5L8.25 12l7.5-7.5'
      />
    </svg>
  ), // Replace with your right arrow SVG icon component
};

const CustomSlider: React.FC<SliderProps> = ({ slides }) => {
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className='relative'>
          <div className='absolute inset-0 bg-light-blue z-10'></div>
          <img
            src={slide.image}
            alt={slide.alt}
            className='absolute inset-0 h-full w-full z-0'
          />
          <div
            className='h-[350px] w-full relative py-[7%] px-[20%] '
            style={{ zIndex: "999999" }}
          >
            <h1 className='w-full  text-center text-white font-bold text-4xl'>
              {slide.title}
            </h1>
            <p className='w-full  text-center text-white font-normal text-sm mt-7'>
              {slide.description}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
