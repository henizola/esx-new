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
import { BackButton } from "@/components/Button/BackButton";
interface TradingSystemProps {
  setStep: (value: number) => void;
  step: number;
}

const TradingSystem: React.FC<TradingSystemProps> = ({ setStep, step }) => {
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
        title="Trading market structure"
        description="Trading on ESX shall be in approved securities on only the ESX’s trading platform unless an the Exchange grants an express exemption inline with its trading rules."
      />
      <div className="grid sm:grid-cols-7 gap-8 px-28 py-7">
        <Card width="col-span-2  flex flex-col text-left  py-[20px] px-[20px]  shadow-[0]">
          <h6 className="ml-2 mb-4">
            <BackButton setStep={setStep} link="/equity-market">
              Equity Market
            </BackButton>{" "}
            {"> Trading System"}
          </h6>{" "}
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
        <div className="col-span-5 space-y-5">
          <Card width="w-[100%] flex  flex-col pt-[40px] pb-[30px] px-[20px] shadow-[0]">
            <h1 className="text-black text-[32px] ml-[11px] font-normal font-['Open Sans']">
              Trading calendar
            </h1>
            <hr className=" border border-primary-golden opacity-70 mt-[12px]" />
            <main className=" space-y-[15px] pt-[30px]">
              <p className=" text-black text-base font-normal font-['Open Sans']">
                All trading activity on ESX listed securities, (as well as its
                unlisted securities market) occurs via ESX’s proiopitery
                Automated Trading System.
              </p>

              <p className=" text-black text-base font-normal font-['Open Sans']">
                ESX adopts a hybrid market that provides both a central order
                book as well as platforms for bilateral and multilateral
                negotiated trade in the form of RFQs (request for Qiuote). ESX’s
                central order book allows trading members and their clients to
                enter buy and sell orders anonymously where trades are matched
                using ESX’ modern trading engine based on price time priority.
              </p>
              <p className=" text-black text-base font-normal font-['Open Sans']">
                The ATS seamlessly integrates with the Central Securities
                Depository that ensures efficent clearning and settlment.
              </p>
            </main>
          </Card>
          <div className="grid sm:grid-cols-2 gap-5">
            <Card width="w-[100%] flex gap-4 flex-col shadow-[0] ">
              <div className="p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]" />
              <main className="pb-[20px] px-[20px] flex flex-col h-full">
                <h1 className="text-black text-2xl mt-[5px] font-normal font-['Open Sans'] flex items-center gap-5 ">
                  <span>Trading calendar</span>
                  <ChevronRightIcon className="w-8 h-8 mt-1 text-primary-golden" />
                </h1>
                <p className="text-black text-sm font-light mt-[15px] font-['Open Sans']">
                  All trading activity on ESX listed securities, (as well as its
                  unlisted securities market) occurs via ESX’s proiopitery
                  Automated Trading System.
                </p>

                <p className="text-black text-sm font-light mt-[10px] font-['Open Sans']">
                  The ATS seamlessly integrates with the Central Securities
                  Depository that ensures efficent clearning and settlment.
                </p>
                <LinkButton className="mt-auto" href="#">
                  View More
                </LinkButton>
              </main>
            </Card>
            <Card width="w-[100%] flex gap-4 flex-col  shadow-[0]">
              <div className="p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]" />
              <main className="pb-[20px] px-[20px] flex flex-col h-full">
                <h1 className="text-black text-2xl font-normal font-['Open Sans'] flex items-end gap-5 ">
                  <div>
                    Public Holidays / <br />
                    Closing Days (2023 -2024)
                  </div>
                  <ChevronRightIcon className="w-8 h-8 mt-1 text-primary-golden" />
                </h1>
                <p className="text-black text-sm font-light mt-[15px] font-['Open Sans']">
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut
                </p>
                <LinkButton className="mt-[30px]" href="#">
                  View More
                </LinkButton>
              </main>
            </Card>
          </div>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default TradingSystem;
