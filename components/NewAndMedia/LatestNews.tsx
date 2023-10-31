"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import manager from "/public/images/manager.png";
import sliderbannerImage from "/public/images/slider-background.png";
import bannerImage from "/public/images/about-banner.png";
import Banner from "../Banner/banner";
import Card from "../Card/Card";

interface LatestNewsProps {
  setStep: (value: number) => void;
  step: number;
}

const LatestNews: React.FC<LatestNewsProps> = ({ setStep, step }) => {
  const items = [
    "Latest News",
    "Events",
    "Press Releases",
    "Gallery",
    "Downloads",
    "Contact Us",
  ];

  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner
        backgroundImage={bannerImage}
        title='Latest News'
        description='“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse'
      />
      <div className='grid sm:grid-cols-9 gap-8 lg:px-28 py-7'>
        <Card width='col-span-2 hidden lg:flex flex-col text-left  py-[20px] px-[20px] h-fit '>
          <h6 className='ml-2 mb-4 text-lg  -600'>{"News and Media Center"}</h6>
          {items.map((item, index) => (
            <button
              key={index}
              className={`  text-left ml-5 my-2 font-light border-b border-black `}
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

        <div className='col-span-7 space-y-8 w-[100vw] lg:w-[100%]'>
          <div className='col-span-3 flex flex-col gap-8'>
            <Card width=' flex flex-col lg:flex-row  py-4 px-4 lg:py-10 lg:px-10 gap-[42px]  '>
              <div className='lg:w-[40%] '>
                <Image
                  src={
                    "/images/Winston Salem Corporate Headshots & Personal Branding Photographer 1.png"
                  }
                  height={500}
                  width={400}
                  alt=''
                  className='h-[200px] bg-black lg:h-auto object-cover'
                />
              </div>
              <div className='lg:w-[60%] '>
                <main className=' '>
                  <h1 className=' text-black text-[20px] lg:text-subHeader font-light    capitalize lg:leading-[50px] '>
                    Lorem ipsum dolor sit
                  </h1>
                  <h1 className='text-black text-[12px] lg:text-paragraphBig not-italic font-normal leading-[normal] mt-2 lg:mt-0'>
                    Lorem ipsum
                  </h1>
                  <h1 className='text-justify text-black text-xs font-normal    mt-2 lg:mt-[4px]'>
                    Dolor sit
                  </h1>
                  <p className=' text-[14px] lg:text-base font-light    mt-3 lg:mt-5'>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euisLorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                    veniam, quis nostrud exerci tation ullamcorper suscipit
                    lobortis”
                  </p>
                  <Link
                    href='#'
                    className='flex text-justify text-black text-base font-semibold    mb-[10px] mt-[25px]'
                  >
                    View more
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
                  </Link>
                </main>
              </div>
            </Card>

            <Card width=' flex flex-col lg:flex-row  py-4 px-4 lg:py-10 lg:px-10 gap-[42px]  '>
              <div className='lg:w-[40%] '>
                <Image
                  src={
                    "/images/Salem Corporate Headshots & Personal Branding Photographer 1.png"
                  }
                  height={500}
                  width={400}
                  alt=''
                  className='h-[200px] bg-black lg:h-auto object-cover'
                />
              </div>
              <div className='lg:w-[60%] '>
                <main className=' '>
                  <h1 className=' text-black text-[20px] lg:text-subHeader font-light    capitalize lg:leading-[50px] '>
                    Lorem ipsum dolor sit
                  </h1>
                  <h1 className='text-black text-[12px] lg:text-paragraphBig not-italic font-normal leading-[normal] mt-2 lg:mt-0'>
                    Lorem ipsum
                  </h1>
                  <h1 className='text-justify text-black text-xs font-normal    mt-2 lg:mt-[4px]'>
                    Dolor sit
                  </h1>
                  <p className=' text-[14px] lg:text-base font-light    mt-3 lg:mt-5'>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euisLorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                    veniam, quis nostrud exerci tation ullamcorper suscipit
                    lobortis”
                  </p>
                  <Link
                    href='#'
                    className='flex text-justify text-black text-base font-semibold    mb-[10px] mt-[25px]'
                  >
                    View more
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
                  </Link>
                </main>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className='bg-white py-5 lg:py-[68px]'>
        <p className='max-w-[980px] mx-auto w-full lg:h-16 text-center text-black text-[14px] px-[20px] lg:text-base font-normal    leading-snug'>
          Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
          consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum
          dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat{" "}
        </p>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default LatestNews;
