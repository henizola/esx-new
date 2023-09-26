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
interface ESXRuleBookProps {
  setStep: (value: number) => void;
  step: number;
}

const ESXRuleBook: React.FC<ESXRuleBookProps> = ({ setStep, step }) => {
  const items = ["Capital Market Regulatory Environment", "Tax"];

  return (
    <div className="flex flex-col w-full p-0 m-0">
      <Banner
        backgroundImage={bannerImage}
        title="ESX Rule Book"
        description=""
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
        <div className="col-span-5 grid sm:grid-cols-2 gap-8">
        <Card width="w-[100%] flex gap-4 flex-col  ">
              <div className="p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]" />
              <main className="pb-[20px] px-[20px] space-y-4">
                <h1 className="text-black text-2xl not-italic font-normal leading-[normal]">
                ESX Listing Rules                </h1>
                <p className="text-gray text-base not-italic font-normal leading-[normal]">
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut
                </p>
                <LinkButton href="#">View More</LinkButton>
              </main>
            </Card>
              
        <Card width="w-[100%] flex gap-4 flex-col  ">
              <div className="p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]" />
              <main className="pb-[20px] px-[20px] space-y-4">
                <h1 className="text-black text-2xl not-italic font-normal leading-[normal]">
                ESX Membership Rules
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
              
        <Card width="w-[100%] flex gap-4 flex-col  ">
              <div className="p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]" />
              <main className="pb-[20px] px-[20px] space-y-4">
                <h1 className="text-black text-2xl not-italic font-normal leading-[normal]">
                ESX Trading Rules
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
              
        <Card width="w-[100%] flex gap-4 flex-col  ">
              <div className="p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]" />
              <main className="pb-[20px] px-[20px] space-y-4">
                <h1 className="text-black text-2xl not-italic font-normal leading-[normal]">
                ESX Dispute Settlment Rules
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

export default ESXRuleBook;
