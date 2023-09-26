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
            <h1 className="text-black text-[40px] not-italic font-normal leading-[normal]">
              Trading calendar
            </h1>
            <hr className="  border border-gray/30" />
            <main className=" space-y-6">
              <p className="text-gray text-base not-italic font-normal leading-[normal]">
                All trading activity on ESX listed securities, (as well as its
                unlisted securities market) occurs via ESX’s proiopitery
                Automated Trading System.
              </p>

              <p className="text-gray text-base not-italic font-normal leading-[normal]">
                ESX adopts a hybrid market that provides both a central order
                book as well as platforms for bilateral and multilateral
                negotiated trade in the form of RFQs (request for Qiuote). ESX’s
                central order book allows trading members and their clients to
                enter buy and sell orders anonymously where trades are matched
                using ESX’ modern trading engine based on price time priority.
              </p>
              <p className="text-gray text-base not-italic font-normal leading-[normal]">
                The ATS seamlessly integrates with the Central Securities
                Depository that ensures efficent clearning and settlment.
              </p>
            </main>
          </Card>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card width="w-[100%] flex gap-4 flex-col  ">
              <div className="p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]" />
              <main className="pb-[20px] px-[20px] space-y-4">
                <h1 className="text-black text-2xl not-italic font-normal leading-[normal]">
                  Trading System
                </h1>
                <p className="text-gray text-base not-italic font-normal leading-[normal]">
                  All trading activity on ESX listed securities, (as well as its
                  unlisted securities market) occurs via ESX’s proiopitery
                  Automated Trading System.
                </p>

                <p className="text-gray text-base not-italic font-normal leading-[normal]">
                  The ATS seamlessly integrates with the Central Securities
                  Depository that ensures efficent clearning and settlment.
                </p>
                <LinkButton href="#">View More</LinkButton>
              </main>
            </Card>
            <Card width="w-[100%] flex gap-4 flex-col  ">
              <div className="p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]" />
              <main className="pb-[20px] px-[20px] space-y-4">
                <h1 className="text-black text-2xl not-italic font-normal leading-[normal]">
                  Public Holidays / Closign Days (2023 -2024)
                </h1>
                <p className="text-gray text-base not-italic font-normal leading-[normal]">
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut
                </p>
                <LinkButton href="#">View More</LinkButton>
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
