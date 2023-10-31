"use client";
import Slider from "react-slick";
import slider1 from "../../public/images/home-slider-1.jpg";
import slider2 from "../../public/images/home-slider-2.jpg";
import slider3 from "../../public/images/home-slider-3.jpg";
import "./HomeSliderStyles.css";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { SliderProps } from "@mui/material";
import React, { ReactNode } from "react";

export default function HomeSlider() {
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
        strokeWidth={2}
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
        strokeWidth={2}
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
  const slides = [
    {
      image: slider2.src,
      alt: "image",
      title: "Attracting new issuers and investors to the market",
    },
    {
      image: slider1.src,
      alt: "image",
      title: "Attracting new issuers and investors to the market",
    },
    {
      image: slider3.src,
      alt: "image",
      title: "Attracting new issuers and investors to the market",
    },
  ];
  return (
    <div className='max-w-[100vw] bg-white'>
      <Slider {...settings} className=' mt-0  p-0'>
        {
          slides.map((slide, index) => (
            <React.Fragment key={index}>
              <div>
                <div className='absolute inset-0 opacity-10 bg-light-blue '></div>
                <div className='relative'>
                  <h1 className='absolute top-[50%] px-5 w-[40vw] left-[15vw] lg:px-0 -translate-y-[50%] text-white text-[20px] lg:text-header font-[500] text-center lg:text-left z-40'>
                    {slide.title}
                  </h1>
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    height={100}
                    width={100}
                    className='inset-0 h-[40vh] lg:h-[80vh] w-[100vw] max-height-[90vh] z-0 object-cover'
                  />
                </div>
              </div>
            </React.Fragment>
          )) as React.ReactNode[]
        }
      </Slider>
    </div>
  );
}
