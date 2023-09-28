"use client";
import "./HomeSliderStyles.css";
import Image from "next/image";
import Slider from "react-slick";
import background from "../../public/images/Addis Ababa Ethiopia 1.png";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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
  const slides = [
    {
      image: background.src,
      alt: "image",
      title: "Attracting new issuers and investors to the market",
    },
    {
      image: background.src,
      alt: "image",
      title: "Attracting new issuers and investors to the market",
    },
    {
      image: background.src,
      alt: "image",
      title: "Attracting new issuers and investors to the market",
    },
  ];
  return (
    <div className='max-w-[100vw]'>
      <Slider {...settings} className=' m-0 p-0'>
        {slides.map((slide, index) => (
          <>
            <div className='absolute inset-0 opacity-10 bg-light-blue '></div>
            <div className='relative'>
              <h1 className='absolute top-[50%] -translate-y-[50%] text-white text-[40px] font-semibold  w-[100%] text-center z-50'>
                {slide.title}
              </h1>
              <Image
                src={slide.image}
                alt={slide.alt}
                height={100}
                width={100}
                className=' inset-0  w-[100vw] max-height-[90vh] z-0 object-cover'
              />
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
}
