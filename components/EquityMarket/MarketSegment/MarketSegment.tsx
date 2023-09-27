"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import manager from "/public/images/manager.png";
import sliderbannerImage from "/public/images/slider-background.png";
import bannerImage from "/public/images/about-banner.png";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import CustomSlider from "../../Slider/Slider";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { BackButton } from "@/components/Button/BackButton";
interface ListingRulesProps {
  setStep: (value: number) => void;
  step: number;
}

const MarketSegment: React.FC<ListingRulesProps> = ({ setStep, step }) => {
  const items = ["Market Segment", "Listing Rules", "Listing FAOs"];

  return (
    <div className="flex flex-col w-full p-0 m-0">
      <Banner
        backgroundImage={bannerImage}
        title="Market Segment"
        description=""
      />
      <div className="grid sm:grid-cols-7 gap-8 px-28 py-7">
        <Card width="col-span-2  flex flex-col text-left  py-[20px] px-[20px]">
          <h6 className="ml-2 mb-4 text-lg text-gray-600">
          <BackButton setStep={setStep} link="/equity-market">
              Equity Market
            </BackButton>{" "} {"> Listing"}
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
          <button
            className={`  text-left ml-10 my-2 font-light border-b border-black `}
            style={{
              borderBottom: "0.7px solid black",
              fontSize: "14px",
              fontWeight: "300",
            }}
          >
            Listing Companies
          </button>
          <button
            className={`  text-left ml-10 my-2 font-light border-b border-black `}
            style={{
              borderBottom: "0.7px solid black",
              fontSize: "14px",
              fontWeight: "300",
            }}
          >
            Notice to Issuers
          </button>
          <button
            className={`  text-left ml-10 my-2 font-light border-b border-black `}
            style={{
              borderBottom: "0.7px solid black",
              fontSize: "14px",
              fontWeight: "300",
            }}
          >
            Other Products
          </button>
        </Card>
        <div className="col-span-5 space-y-8">
          <div className="grid sm:grid-cols-5 gap-8">
            <Card width="col-span-5 flex flex-col ">
              <h1 className="pt-[19px] pb-5 px-[20px]  bg-primary-blue text-white text-[40px] font-normal font-['Open Sans']  leading-[normal]">
                Market Segments
              </h1>
              <div className="flex w-full">
                <div className="py-[20px] px-[20px] w-[55%] space-y-[30px]">
                  <main className=" ">
                    <h1 className="text-black text-2xl font-normal font-['Open Sans'] flex items-center gap-5 ">
                      <span>Main Market</span>{" "}
                      <ChevronRightIcon className="w-8 h-8 mt-1 text-primary-golden" />
                    </h1>
                    <p className="text-black mt-[13px] text-sm font-normal font-['Open Sans']">
                      Serves as a platform for large and mature issuers that are
                      capable of meeting ESX’s listing requirements
                    </p>
                    <p className="text-black mt-[15px] text-sm font-normal font-['Open Sans']">
                      Listing on ESX is a testament of commitment by companies
                      to transparency and integrity
                    </p>
                    <p className="text-black mt-[15px] text-sm font-normal font-['Open Sans']">
                      ESX’s full fledged market infrastructure provides the
                      professional guidance, innovation and reliability, and
                      opportunity companies need to create wealth, growth and
                      prosperity
                    </p>
                    <hr className=" mt-[15px] border border-gray/30" />
                  </main>
                  <main className="">
                    <h1 className="text-black text-2xl font-normal font-['Open Sans'] flex items-center gap-5 ">
                      <span>Enterprise Growth Market</span>{" "}
                      <ChevronRightIcon className="w-8 h-8 mt-1 text-primary-golden" />
                    </h1>
                    <p className="text-black mt-[15px] text-sm font-normal font-['Open Sans']">
                      Market for small and medium sized companies with lighter
                      listing requirements adopted to SMEs and high growth, high
                      potential equity issuers
                    </p>
                    <p className="text-black mt-[15px] text-sm font-normal font-['Open Sans']">
                      Provides issuers access with a wide range of capital to
                      accelerate their growth and development and serve as a
                      springboard into ESX’s Main Market
                    </p>
                  </main>
                </div>
                <Image
                  src={"/images/behnam.png"}
                  height={500}
                  width={400}
                  alt=""
                  className="col-span-1 h-full w-[45%] object-cover"
                />
              </div>
              <h1 className="col-span-5 py-[30px] px-[20px] text-black text-2xl font-normal font-['Open Sans']">
                Both markets provide businesses the platform to list and trade
                securities in an efficient and reliable manner.
              </h1>
            </Card>
            <div className="col-span-5 grid sm:grid-cols-2 gap-8">
              <Card width="py-[20px] px-[20px] ">
                <h1 className="text-black text-2xl font-normal font-['Open Sans'] ">
                  Listing on ESX
                </h1>
                <p className="mt-[8px] text-justify text-zinc-500 text-[15px] font-normal font-['Open Sans'] leading-snug">
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy
                </p>
                <Link href="#" className="flex text-[16px] mt-[15px]">
                  View more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 mt-1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
              </Card>
              <Card width="pt-[23px] pb-[17px] px-[20px] ">
                <h1 className="text-black text-2xl font-normal font-['Open Sans']">
                  Trading and operations on ESX
                </h1>
                <p className="text-justify mt-[8px] text-zinc-500 text-base font-normal font-['Open Sans'] leading-snug">
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy
                </p>
                <Link href="#" className="flex text-[16px] mt-[15px]">
                  View more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 mt-1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default MarketSegment;
