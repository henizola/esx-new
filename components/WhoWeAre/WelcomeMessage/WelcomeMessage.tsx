"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import manager from "/public/images/manager.png";
import chariman from "/public/images/Helaway Tadesse.jpg";

import sliderbannerImage from "/public/images/slider-background.png";
import bannerImage from "/public/images/about-banner.png";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import CustomSlider from "../../Slider/Slider";
interface WelcomeMessageProps {
  setStep: (value: number) => void;
  step: number;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ setStep, step }) => {
  const items = [
    "Welcome Message",
    "Overview",
    "Vision & Mission",
    "Organizational Structure",
    "Board of Directors",
    "Management",
    // "ESX Reports",
    // "Careers",
    // "Tender",
  ];

  const slides = [
    {
      image: sliderbannerImage.src,
      alt: "Image 1",
      title: "Wellcome to ESX",
      description:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis ",
    },
    {
      image: sliderbannerImage.src,
      alt: "Image 2",
      title: "Wellcome to ESX",
      description:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis ",
    },
    {
      image: sliderbannerImage.src,
      alt: "Image 2",
      title: "Wellcome to ESX",
      description:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis ",
    },
    {
      image: sliderbannerImage.src,
      alt: "Image 2",
      title: "Wellcome to ESX",
      description:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis ",
    },
    {
      image: sliderbannerImage.src,
      alt: "Image 2",
      title: "Wellcome to ESX",
      description:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis ",
    },
  ];

  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner
        backgroundImage={bannerImage}
        title='About Us'
        background='bg-light-blue'
      />
      <div className='flex w-full lg:px-28 sm:pt-0 lg:py-7  '>
        <Card width='w-[25%] hidden lg:flex mr-5 h-fit   flex-col text-left h-fit  py-10 px-5'>
          <h6 className='ml-7 mb-4'>About Us</h6>
          {items.map((item, index) => (
            <button
              key={index}
              className={`text-left ml-8 my-2 font-light  `}
              style={{
                borderBottom: "0.7px solid black",
                fontSize: step === index ? "16px" : "14px",
                fontWeight: step === index ? "400" : "300",
              }}
              onClick={() => setStep(index)}
            >
              {item}
            </button>
          ))}
        </Card>
        <Card width='w-full sm:w-[100%] lg:flex flex-col '>
          <div className='w-full sm:w-[100%] lg:flex lg:flex-row sm:flex-col sm:pt-0 lg:py-10 lg:px-14'>
            <div className='w-full lg:w-[38%] h-[300px] lg:h-[100%] '>
              <Image
                height={200}
                width={200}
                src={manager.src}
                alt='manager'
                className='w-full object-cover h-[100%]'
              />
            </div>
            <div className='w-full  sm:w-[100%] lg:w-[62%] flex flex-col mt-12 lg:mt-0 px-5 pb-12'>
              <h1 className=' text-center border-b-[3px] border-light-golden lg:text-left text-header   font-[400] mt-0 pt-0'>
                Message from our CEO
              </h1>
              <h1 className=' text-center lg:text-left text-subHeader sm:text-[24px]  mt-2 font-normal pt-0'>
                Abebe Legese
              </h1>
              <p className=' text-center lg:text-left text-sm sm:text-[12px]   font-normal mt-0 pt-0'>
                Chief executive officer
              </p>

              <p className=' text-base text-[14px] lg:text-[16px] font-roboto font-normal mt-2 pt-0 leading-6  '>
                Lorem ipsum dolor sit amet, consectLorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis”
              </p>
              {/* <Link href='#' className='flex text-base sm:text-[16px] mt-5'>
                View more{" "}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4 mt-1.5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                  />
                </svg>
              </Link> */}
            </div>
          </div>

          <div className='w-full sm:w-[100%] lg:flex lg:flex-row sm:flex-col sm:pt-0 lg:py-10 lg:pt-5 lg:px-14'>
            <div className='w-full lg:w-[38%] h-[200px] lg:h-[100%] '>
              <Image
                height={200}
                width={200}
                src={chariman.src}
                alt='manager'
                className='w-full object-cover h-[100%]'
              />
            </div>
            <div className='w-full  sm:w-[100%] lg:w-[62%] flex flex-col mt-12 lg:mt-0 px-5 pb-12'>
              <h1 className=' text-center  border-b-[3px] border-light-golden lg:text-left text-header   font-[400] mt-0 pt-0'>
                Message from the Board of Directors
              </h1>
              <h1 className=' text-center lg:text-left text-xl sm:text-[24px]   font-light mt-2 pt-0'>
                Helaway Tadesse
              </h1>
              <p className=' text-center lg:text-left text-sm sm:text-[12px]   font-normal mt-0 pt-0'>
                Chairman of Board of Directors
              </p>

              <p className=' text-base text-[14px] lg:text-[16px] font-roboto font-normal mt-2 pt-0 leading-6  '>
                Lorem ipsum dolor sit amet, consectLorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis”
              </p>
            </div>
          </div>
        </Card>
      </div>
      <CustomSlider slides={slides} />
    </div>
  );
};

export default WelcomeMessage;
