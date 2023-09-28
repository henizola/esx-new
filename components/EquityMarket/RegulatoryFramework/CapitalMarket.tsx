"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import manager from "/public/images/manager.png";
import sliderbannerImage from "/public/images/slider-background.png";
import bannerImage from "/public/images/about-banner.png";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import CustomSlider from "../../Slider/Slider";
import { ArrowDownIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import ExpandableCard from "@/components/Card/ExpandableCard";
import LinkButton from "@/components/Button/LinkButton";
interface CapitalMarketProps {
  setStep: (value: number) => void;
  step: number;
}

const CapitalMarket: React.FC<CapitalMarketProps> = ({ setStep, step }) => {
  const items = ["Capital Market Regulatory Environment", "Tax"];

  return (
    <div className="flex flex-col w-full p-0 m-0">
      <Banner
        backgroundImage={bannerImage}
        title="Capital market regulatory environment"
        description="“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse"
      />
      <div className="grid sm:grid-cols-7 gap-8 px-28 py-7">
        <Card width="col-span-2  flex flex-col text-left  py-[20px] px-[20px]">
          <h6 className="ml-2 mb-4 text-lg text-gray-600">
            {"Regulatory Framework"}
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
          <Card width="col-span-5 flex flex-col ">
            <h1 className="py-[18px] px-[19px]  bg-primary-blue text-white text-[32px] font-normal font-['Open Sans']">
              Capital market regulatory environment
            </h1>
            <div className="flex  ">
              <div className="py-[21px] px-[25px] w-[60%] space-y-4">
                <main className="flex flex-col pt-[39px] gap-5 h-full ">
                  <p className="text-black text-base font-normal font-['Open Sans']">
                    ESX is licensed by the Ethiopian Capital Market Authority
                    (“ECMA” or “the Authority”) as a securities exchange in line
                    with Article 30 and 31 of the Capital Market Proclamation
                    No.1248/2021 (“the Proclamation”).
                  </p>
                  <p className="text-black text-base font-normal font-['Open Sans']">
                    ECMA is the apex regulator of the capital markets in
                    Ethiopia
                  </p>
                  <p className="text-black text-base font-normal font-['Open Sans']">
                    ECMA is responsible for setting the legal framework and
                    regulating entities interested in participating ESX
                  </p>
                  <LinkButton className="text-black mt-[18px] text-base font-semibold font-['Open Sans']" href="#">View More</LinkButton>
                </main>
              </div>
              <Image
                src={"/images/austin-distel-EMPZ7yRZoGw-unsplash 1.png"}
                height={500}
                width={400}
                alt=""
                className="aspect-square w-[40%] object-cover"
              />
            </div>
          </Card>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default CapitalMarket;
