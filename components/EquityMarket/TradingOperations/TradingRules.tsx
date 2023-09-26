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
import {
  ArrowDownIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import ExpandableCard from "@/components/Card/ExpandableCard";
import LinkButton from "@/components/Button/LinkButton";
interface TradingRulesProps {
  setStep: (value: number) => void;
  step: number;
}

const TradingRules: React.FC<TradingRulesProps> = ({ setStep, step }) => {
  const items = [
    "Trading Market Structure",
    "Trading Rules",
    "Procedures & Manuals",
    "Trading FAQ",
    "Trading Platform",
  ];

  return (
    <div className="flex flex-col w-full p-0 m-0">
      <Banner
        backgroundImage={bannerImage}
        title="Trading rules"
        description="“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse"
      />
      <div className="grid sm:grid-cols-7 gap-8 px-28 py-7">
        <Card width="col-span-2  flex flex-col text-left  py-[20px] px-[20px]">
          <h6 className="ml-2 mb-4 text-lg text-gray-600">
            {"Equity Market > Trading System"}
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
          <Card width="w-[100%] flex gap-4 flex-col  py-[20px] px-[20px]">
            <h1 className="text-black text-2xl not-italic font-normal leading-[normal]">
              Every Trading Member shall be required at all times to:
            </h1>
            <hr className="  border border-gray/30" />
            <main className=" space-y-6">
              <div className="flex  gap-2">
                <ChevronRightIcon className="w-6 h-6 " />

                <p className="text-black text-base flex-1 ">
                  Address investor protection obligations with respect to their
                  clients when they, acting on behalf of their clients, execute
                  their orders on the exchange platform or system
                </p>
              </div>
              <div className="flex  gap-2">
                <ChevronRightIcon className="w-6 h-6 " />

                <p className="text-black text-base flex-1 ">
                  Adhere to the best execution principle by taking reasonable
                  steps to obtain the best available result for the client in a
                  timely manner, provided that the Trading Member shall at all
                  times act in accordance with the terms and conditions of the
                  order from the client
                </p>
              </div>
            </main>
          </Card>
          <h1 className="text-black text-2xl not-italic font-normal leading-[normal]">
            Trading Fees
          </h1>
          <Card width="w-[100%] flex gap-3 flex-col bg-white/0 ">
            <div>
              <div className="py-[20px] px-[20px] grid sm:grid-cols-3 bg-primary-blue text-white">
                <span className="text-base flex-1 ">Fee type</span>
                <span className="text-base flex-1 ">Buy side</span>
                <span className="text-base flex-1 ">Sell side</span>
              </div>
              <div className="p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]" />
            </div>
            <div className="py-[10px] px-[20px] grid sm:grid-cols-3 bg-white text-black">
              <span className="text-base flex-1 ">ESX fee</span>
            </div>
            <div className="py-[10px] px-[20px] grid sm:grid-cols-3 bg-white text-black">
              <span className="text-base flex-1 ">CSD fee</span>
            </div>
            <div className="py-[10px] px-[20px] grid sm:grid-cols-3 bg-white text-black">
              <span className="text-base flex-1 ">CMA fee</span>
            </div>
            <div className="py-[10px] px-[20px] grid sm:grid-cols-3 bg-white text-black">
              <span className="text-base flex-1 ">Member commission</span>
            </div>
            <div className="py-[10px] px-[20px] grid sm:grid-cols-3 bg-white text-black">
              <span className="text-base flex-1 ">Compensation fund</span>
            </div>
            <div className="py-[10px] px-[20px] grid sm:grid-cols-3 bg-white text-black">
              <span className="text-base flex-1 ">Taxes</span>
            </div>
          </Card>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default TradingRules;
