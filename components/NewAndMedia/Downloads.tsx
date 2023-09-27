"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import manager from "/public/images/manager.png";
import sliderbannerImage from "/public/images/slider-background.png";
import bannerImage from "/public/images/about-banner.png";
import Banner from "../Banner/banner";
import Card from "../Card/Card";

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
    "Contact I-Js",
  ];

  return (
    <div className="flex flex-col w-full p-0 m-0">
      <Banner
        backgroundImage={bannerImage}
        title="Downloads"
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
        <div className="col-span-5 space-y-[30px]">
          <Card width=" w-full py-[30px] pb-[31px] px-[20px] ">
            <h1 className="text-black text-[40px] font-normal font-['Open Sans']">
              Lorem Ipsum
            </h1>
            <p className="text-primary-blue text-base font-normal font-['Open Sans'] leading-snug">
              Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
              ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt
            </p>
          </Card>
          <Card width=" w-full py-[30px] pb-[31px] px-[20px] ">
            <h1 className="text-black text-[40px] font-normal font-['Open Sans']">
              Lorem Ipsum
            </h1>
            <p className="text-primary-blue text-base font-normal font-['Open Sans'] leading-snug">
              Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
              ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt
            </p>
          </Card>
          <Card width=" w-full py-[30px] pb-[31px] px-[20px] ">
            <h1 className="text-black text-[40px] font-normal font-['Open Sans']">
              Lorem Ipsum
            </h1>
            <p className="text-primary-blue text-base font-normal font-['Open Sans'] leading-snug">
              Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
              ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt
            </p>
          </Card>
          <Card width=" w-full py-[30px] pb-[31px] px-[20px] ">
            <h1 className="text-black text-[40px] font-normal font-['Open Sans']">
              Lorem Ipsum
            </h1>
            <p className="text-primary-blue text-base font-normal font-['Open Sans'] leading-snug">
              Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
              ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt
            </p>
          </Card>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default Downloads;
