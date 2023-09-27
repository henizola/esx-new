"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import manager from "/public/images/manager.png";
import sliderbannerImage from "/public/images/slider-background.png";
import bannerImage from "/public/images/about-banner.png";
import Banner from "../Banner/banner";
import Card from "../Card/Card";

interface GalleryProps {
  setStep: (value: number) => void;
  step: number;
}

const Gallery: React.FC<GalleryProps> = ({ setStep, step }) => {
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
        <div className="col-span-5 flex flex-col">
          <Card width="w-[100%] h-fit flex pt-[50px] pb-[38px] px-[43px] flex-col    ">
            <Image
              src={
                "/images/16 Black Chefs Changing Food in America (Published 2019) 1.png"
              }
              height={500}
              width={400}
              alt=""
              className=" bg-black w-full object-cover  "
            />

            <div className="grid grid-cols-3 gap-[91px] mt-[60px]">
              <div className="flex flex-col gap-[9px] ">
                <Image
                  src={
                    "/images/Black Chefs Changing Food in America (Published 2019) 1.png"
                  }
                  height={500}
                  width={400}
                  alt=""
                  className=" bg-black w-full object-cover "
                />
                <span className="text-black text-base font-normal font-['Open Sans']">
                  Lorem, ipsum dolor.
                </span>
              </div>
              <div className="flex flex-col  h-full gap-[9px] ">
                <Image
                  src={
                    "/images/16 Black Chefs Changing Food in America (Published 2019) 1.png"
                  }
                  height={500}
                  width={400}
                  alt=""
                  className=" bg-black w-full   h-full object-cover "
                />
                <span className="text-black text-base font-normal font-['Open Sans']">
                  Lorem, ipsum dolor.
                </span>
              </div>
              <div className="flex flex-col gap-[9px] ml-[0px]">
                <Image
                  src={
                    "/images/Guide to running an effective crowdfunding campaign 1.png"
                  }
                  height={500}
                  width={400}
                  alt=""
                  className=" bg-black w-full object-cover "
                />
                <span className="text-black text-base font-normal font-['Open Sans']">
                  Lorem, ipsum dolor.
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-[91px] mt-[60px]">
              <div className="flex flex-col gap-[9px] ">
                <Image
                  src={
                    "/images/16 aChefs Changing Food in America (Published 2019) 1.png"
                  }
                  height={500}
                  width={400}
                  alt=""
                  className=" bg-black w-full object-cover "
                />
                <span className="text-black text-base font-normal font-['Open Sans']">
                  Lorem, ipsum dolor.
                </span>
              </div>
              <div className="flex flex-col  h-full gap-[9px] ">
                <Image
                  src={
                    "/images/0d19a242-c484-4c64-86d5-86e5d1910288 1.png"
                  }
                  height={500}
                  width={400}
                  alt=""
                  className=" bg-black w-full   h-full object-cover "
                />
                <span className="text-black text-base font-normal font-['Open Sans']">
                  Lorem, ipsum dolor.
                </span>
              </div>
              <div className="flex flex-col gap-[9px] ml-[0px]">
                <Image
                  src={
                    "/images/Guide to running an crowdfunding campaign 1.png"
                  }
                  height={500}
                  width={400}
                  alt=""
                  className=" bg-black w-full object-cover "
                />
                <span className="text-black text-base font-normal font-['Open Sans']">
                  Lorem, ipsum dolor.
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-[91px] mt-[60px]">
              <div className="flex flex-col gap-[9px] ">
                <Image
                  src={
                    "/images/Black Chefs Changing Food in America (Published 2019) 1.png"
                  }
                  height={500}
                  width={400}
                  alt=""
                  className=" bg-black w-full object-cover "
                />
                <span className="text-black text-base font-normal font-['Open Sans']">
                  Lorem, ipsum dolor.
                </span>
              </div>
              <div className="flex flex-col  h-full gap-[9px] ">
                <Image
                  src={
                    "/images/16 Black Chefs Changing Food in America (Published 2019) 1.png"
                  }
                  height={500}
                  width={400}
                  alt=""
                  className=" bg-black w-full   h-full object-cover "
                />
                <span className="text-black text-base font-normal font-['Open Sans']">
                  Lorem, ipsum dolor.
                </span>
              </div>
              <div className="flex flex-col gap-[9px] ml-[0px]">
                <Image
                  src={
                    "/images/Guide to running an effective crowdfunding campaign 1.png"
                  }
                  height={500}
                  width={400}
                  alt=""
                  className=" bg-black w-full object-cover "
                />
                <span className="text-black text-base font-normal font-['Open Sans']">
                  Lorem, ipsum dolor.
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-[91px] mt-[60px]">
              <div className="flex flex-col gap-[9px] ">
                <Image
                  src={
                    "/images/16 aChefs Changing Food in America (Published 2019) 1.png"
                  }
                  height={500}
                  width={400}
                  alt=""
                  className=" bg-black w-full object-cover "
                />
                <span className="text-black text-base font-normal font-['Open Sans']">
                  Lorem, ipsum dolor.
                </span>
              </div>
              <div className="flex flex-col  h-full gap-[9px] ">
                <Image
                  src={
                    "/images/0d19a242-c484-4c64-86d5-86e5d1910288 1.png"
                  }
                  height={500}
                  width={400}
                  alt=""
                  className=" bg-black w-full   h-full object-cover "
                />
                <span className="text-black text-base font-normal font-['Open Sans']">
                  Lorem, ipsum dolor.
                </span>
              </div>
              <div className="flex flex-col gap-[9px] ml-[0px]">
                <Image
                  src={
                    "/images/Guide to running an crowdfunding campaign 1.png"
                  }
                  height={500}
                  width={400}
                  alt=""
                  className=" bg-black w-full object-cover "
                />
                <span className="text-black text-base font-normal font-['Open Sans']">
                  Lorem, ipsum dolor.
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default Gallery;
