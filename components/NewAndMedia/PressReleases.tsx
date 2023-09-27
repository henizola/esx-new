"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import manager from "/public/images/manager.png";
import sliderbannerImage from "/public/images/slider-background.png";
import bannerImage from "/public/images/about-banner.png";
import Banner from "../Banner/banner";
import Card from "../Card/Card";

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
    "Contact I-Js",
  ];

  return (
    <div className="flex flex-col w-full p-0 m-0">
      <Banner
        backgroundImage={bannerImage}
        title="Latest News"
        description="“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse"
      />
      <div className="grid sm:grid-cols-7 gap-8 px-28 py-7">
        <Card width="col-span-2  flex flex-col text-left  py-[20px] px-[20px]">
          <h6 className="ml-2 mb-4 text-lg text-gray-600">
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
        <div className="col-span-5 space-y-8">
          <div className="flex gap-5">
            <div className="flex flex-col w-[60%] gap-5">
              <Card width=" flex  flex-col   pb-[20px] pl-[36px] pr-[37px] ">
                <h1 className=" text-zinc-400 text-sm font-normal font-['Open Sans'] mt-[8px]">
                  Press Releases
                </h1>
                <h1 className=" text-zinc-500 text-xl font-semibold font-['Open Sans'] leading-snug mt-[16px]">
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                  erat
                </h1>
                <p className="text-zinc-500 text-sm font-semibold font-['Open Sans'] leading-snug mt-[20px]">
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh
                </p>
                <main className="flex flex-col  mt-[6px] ">
                  <Link
                    href="#"
                    className="flex gap-3 text-xl items-center font-semibold font-['Open Sans'] mt-[20px]"
                  >
                    <span>Read more</span>
                    <svg
                      width="18"
                      height="21"
                      viewBox="0 0 18 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 10.5L0.750001 20.4593L0.750002 0.540707L18 10.5Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </Link>
                </main>
                <div className="w-full h-[177px] mt-[30px] bg-zinc-300" />
              </Card>
              <Card width=" flex  flex-col   pb-[20px] pl-[36px] pr-[37px] ">
                <h1 className=" text-zinc-400 text-sm font-normal font-['Open Sans'] mt-[8px]">
                  News
                </h1>
                <h1 className=" text-zinc-500 text-xl font-semibold font-['Open Sans'] leading-snug mt-[16px]">
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                  erat
                </h1>
                <p className="text-zinc-500 text-sm font-semibold font-['Open Sans'] leading-snug mt-[20px]">
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh
                </p>
                <main className="flex flex-col  mt-[6px] ">
                  <Link
                    href="#"
                    className="flex gap-3 text-xl items-center font-semibold font-['Open Sans'] mt-[20px]"
                  >
                    <span>Read more</span>
                    <svg
                      width="18"
                      height="21"
                      viewBox="0 0 18 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 10.5L0.750001 20.4593L0.750002 0.540707L18 10.5Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </Link>
                </main>
                <div className="w-full h-[177px] mt-[30px] bg-zinc-300" />
              </Card>
              <Card width=" flex  flex-col   pb-[20px] pl-[36px] pr-[37px] ">
                <h1 className=" text-zinc-400 text-sm font-normal font-['Open Sans'] mt-[8px]">
                  Press Releases
                </h1>
                <h1 className=" text-zinc-500 text-xl font-semibold font-['Open Sans'] leading-snug mt-[16px]">
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                  erat
                </h1>
                <p className="text-zinc-500 text-sm font-semibold font-['Open Sans'] leading-snug mt-[20px]">
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh
                </p>
                <main className="flex flex-col  mt-[6px] ">
                  <Link
                    href="#"
                    className="flex gap-3 text-xl items-center font-semibold font-['Open Sans'] mt-[20px]"
                  >
                    <span>Read more</span>
                    <svg
                      width="18"
                      height="21"
                      viewBox="0 0 18 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 10.5L0.750001 20.4593L0.750002 0.540707L18 10.5Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </Link>
                </main>
                <div className="w-full h-[177px] mt-[30px] bg-zinc-300" />
              </Card>
            </div>
            <Card width="w-[40%] h-fit flex  pb-[293px] flex-col    ">
              <h1 className="pt-[20px] pb-[27px] px-[20px]  bg-primary-blue text-white text-2xl font-normal font-['Open Sans']">
                List of Members
              </h1>
              <main className="flex flex-col gap-2 pt-[40px]  px-[20px] ">
                <h1 className=" text-black text-xl font-normal font-['Open Sans']">ESX Insights
                </h1>
                <p className="text-zinc-500 text-base font-normal font-['Open Sans'] leading-snug">Read Our Latest Thinking
                </p>
              </main>
              <hr className=" mt-[37px] px-[20px] mb-[40px] border border-gray/30" />
              <main className="flex flex-col gap-2  px-[20px] ">
                <h1 className=" text-black text-xl font-normal font-['Open Sans']">ESX Facts and Figures
                </h1>
                <p className="text-zinc-500 text-base font-normal font-['Open Sans'] leading-snug">ESX and its subsidiaries recorded $21.9 billion in US revenues in the fiscal year ended June 1,2023
                </p>
              </main>
            </Card>
          </div>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default PressReleases;
