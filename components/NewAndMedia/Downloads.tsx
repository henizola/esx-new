"use client";
import React from "react";
import Banner from "../Banner/banner";
import Card from "../Card/Card";
import bannerImage from "/public/images/how-can-your-start-up-can-finish-with-success_1.png";

interface DownloadsProps {
  setStep: (value: number) => void;
  step: number;
}

const Downloads: React.FC<DownloadsProps> = ({ setStep, step }) => {
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
        title='Downloads'
        description='“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse'
      />
      <div className='grid sm:grid-cols-7 gap-8 lg:px-28 py-7'>
        <Card width='col-span-2  hidden lg:flex flex-col text-left  py-[20px] px-[20px]'>
          <h6 className='ml-2 mb-4 text-lg text-gray-600'>
            {"News and Media Center"}
          </h6>
          {items.map((item, index) => (
            <button
              key={index}
              className={`  text-left ml-10 my-2 font-light border-b border-black `}
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
        <div className='col-span-5 space-y-[30px] w-[100vw] lg:w-[100%]'>
          <Card width=' w-full py-[30px] pb-[31px] px-[20px] '>
            <h1 className='text-black text-[24px] lg:text-[40px] font-normal   '>
              Lorem Ipsum
            </h1>
            <p className='text-primary-blue text-[14px] lg:text-base font-normal    leading-snug'>
              Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
              ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt
            </p>
          </Card>
          <Card width=' w-full py-[30px] pb-[31px] px-[20px] '>
            <h1 className='text-black text-[24px] lg:text-[40px] font-normal   '>
              Lorem Ipsum
            </h1>
            <p className='text-primary-blue text-[14px] lg:text-base font-normal    leading-snug'>
              Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
              ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt
            </p>
          </Card>{" "}
          <Card width=' w-full py-[30px] pb-[31px] px-[20px] '>
            <h1 className='text-black text-[24px] lg:text-[40px] font-normal   '>
              Lorem Ipsum
            </h1>
            <p className='text-primary-blue text-[14px] lg:text-base font-normal    leading-snug'>
              Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
              ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt
            </p>
          </Card>{" "}
          <Card width=' w-full py-[30px] pb-[31px] px-[20px] '>
            <h1 className='text-black text-[24px] lg:text-[40px] font-normal   '>
              Lorem Ipsum
            </h1>
            <p className='text-primary-blue text-[14px] lg:text-base font-normal    leading-snug'>
              Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
              ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt
            </p>
          </Card>
        </div>
      </div>
      <div className='bg-white px-5 py-5 md:py-[68px]'>
        <p className='max-w-[980px] mx-auto w-full  md:h-16 text-center text-black text-base font-normal    leading-snug'>
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

export default Downloads;
