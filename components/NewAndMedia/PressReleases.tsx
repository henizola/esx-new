"use client";
import Link from "next/link";
import React from "react";
import Banner from "../Banner/banner";
import Card from "../Card/Card";
import bannerImage from "/public/images/press-banner.png";

interface PressReleasesProps {
  setStep: (value: number) => void;
  step: number;
}

const PressReleases: React.FC<PressReleasesProps> = ({ setStep, step }) => {
  const items = [
    "Latest News",
    "Events",
    "Press Releases",
    "Gallery",
    "Downloads",
  ];

  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner
        backgroundImage={bannerImage}
        title='Press Releases'
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
          <div className='flex flex-col lg:flex-row gap-5'>
            <div className='flex flex-col lg:w-[60%] gap-5'>
              <Card width=' flex  flex-col   py-[34px] pl-[36px] pr-[37px] '>
                <h1 className='text-sm font-light    '>Press Releases</h1>
                <h1 className='      text-[14px] lg:text-xl font-light   leading-snug mt-[16px]'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                  erat
                </h1>
                <p className='     text-sm font-normal    leading-snug mt-[20px]'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh
                </p>
                <main className='flex flex-col  mt-[6px] '>
                  <Link
                    href='#'
                    className='flex gap-3 text-[14px] lg:text-xl items-center font-normal    mt-[20px]'
                  >
                    <span>Read more</span>
                    <svg
                      width='18'
                      height='21'
                      viewBox='0 0 18 21'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M18 10.5L0.750001 20.4593L0.750002 0.540707L18 10.5Z'
                        fill='#D9D9D9'
                      />
                    </svg>
                  </Link>
                </main>
                <div className='w-full h-[177px] mt-[30px] bg-zinc-300' />
              </Card>
              <Card width=' flex  flex-col   py-[34px] pl-[36px] pr-[37px] '>
                <h1 className='text-sm font-light    '>Press Releases</h1>
                <h1 className='      text-[14px] lg:text-xl font-light   leading-snug mt-[16px]'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                  erat
                </h1>
                <p className='     text-sm font-normal    leading-snug mt-[20px]'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh
                </p>
                <main className='flex flex-col  mt-[6px] '>
                  <Link
                    href='#'
                    className='flex gap-3 text-[14px] lg:text-xl items-center font-normal    mt-[20px]'
                  >
                    <span>Read more</span>
                    <svg
                      width='18'
                      height='21'
                      viewBox='0 0 18 21'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M18 10.5L0.750001 20.4593L0.750002 0.540707L18 10.5Z'
                        fill='#D9D9D9'
                      />
                    </svg>
                  </Link>
                </main>
                <div className='w-full h-[177px] mt-[30px] bg-zinc-300' />
              </Card>
              <Card width=' flex  flex-col   py-[34px] pl-[36px] pr-[37px] '>
                <h1 className='text-sm font-light    '>Press Releases</h1>
                <h1 className='      text-[14px] lg:text-xl font-light   leading-snug mt-[16px]'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                  erat
                </h1>
                <p className='     text-sm font-normal    leading-snug mt-[20px]'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh
                </p>
                <main className='flex flex-col  mt-[6px] '>
                  <Link
                    href='#'
                    className='flex gap-3 text-[14px] lg:text-xl items-center font-normal    mt-[20px]'
                  >
                    <span>Read more</span>
                    <svg
                      width='18'
                      height='21'
                      viewBox='0 0 18 21'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M18 10.5L0.750001 20.4593L0.750002 0.540707L18 10.5Z'
                        fill='#D9D9D9'
                      />
                    </svg>
                  </Link>
                </main>
                <div className='w-full h-[177px] mt-[30px] bg-zinc-300' />
              </Card>
            </div>
            <Card width='lg:w-[40%] h-[350px] lg:h-fit flex  pb-10 flex-col    '>
              <h1 className='pt-[20px] pb-[0px] mx-[20px]   text-subHeader border-b-[3px] border-light-golden w-fit text-left '>
                For More Information
              </h1>
              <main className='flex flex-col gap-2 pt-[20px]  px-[20px] '>
                <h1 className=' text-black text-paragraphBig font-normal   '>
                  ESX Insights
                </h1>
                <p className='     text-base font-normal    leading-snug'>
                  Read Our Latest Thinking
                </p>
              </main>
              <hr className=' mt03 lg:mt-[37px] mx-[20px] mb-3 lg:mb-[40px] border border-gray/30' />
              <main className='flex flex-col gap-2  px-[20px] '>
                <h1 className=' text-black text-xl font-normal   '>
                  ESX Facts and Figures
                </h1>
                <p className='     text-base font-normal    leading-snug'>
                  ESX and its subsidiaries recorded $21.9 billion in US revenues
                  in the fiscal year ended June 1,2023
                </p>
              </main>
            </Card>
          </div>
        </div>
      </div>

      <div className='bg-white py-5 px-5 lg:py-[68px]'>
        <p className='max-w-[980px] mx-auto w-full lg:h-16 text-center text-black text-base font-normal    leading-snug'>
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

export default PressReleases;
