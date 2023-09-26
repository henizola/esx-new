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
interface ListingFaqsProps {
  setStep: (value: number) => void;
  step: number;
}

const ListingFaqs: React.FC<ListingFaqsProps> = ({ setStep, step }) => {
  const items = [
    "Market Segment",
    "Listing Rules",
    "Listing FAOs",
  ];

  return (
    <div className="flex flex-col w-full p-0 m-0">
      <Banner
        backgroundImage={bannerImage}
        title="Frequently asked questions"
        description=""
      />
      <div className="grid sm:grid-cols-7 gap-8 px-28 py-7">
        <Card width="col-span-2  flex flex-col text-left  py-[20px] px-[20px]">
          <h6 className="ml-2 mb-4 text-lg text-gray-600">
            <Link href={'/equity-market'}>Equity Market</Link> {"> Listing"}
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
          <Card width="w-[100%] flex gap-4 flex-col  py-[32px] px-[20px]">
            <h1 className="text-black text-[32px] font-normal font-['Open Sans']">
              Frequently asked questions
            </h1>
            <p className="text-black text-base font-normal font-['Open Sans'] leading-snug">
            Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            </p>
            <div className="w-full h-[0.5px] border bg-black opacity-50"></div>
            <main className=" space-y-6">
              <ExpandableCard question="- What is an IPO?">
                typically 6-9 months - however this depends on the company’s IPO
                readiness (prepared financial statements, company documents
                etc.).
              </ExpandableCard>
              <ExpandableCard question="- How long is the IPO process?">
                typically 6-9 months - however this depends on the company’s IPO
                readiness (prepared financial statements, company documents
                etc.).
              </ExpandableCard>
              <ExpandableCard question="- When is the best time to list / go public?">
                typically 6-9 months - however this depends on the company’s IPO
                readiness (prepared financial statements, company documents
                etc.).
              </ExpandableCard>
              <ExpandableCard question="- What is secondary market?">
                typically 6-9 months - however this depends on the company’s IPO
                readiness (prepared financial statements, company documents
                etc.).
              </ExpandableCard>
            </main>
          </Card>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default ListingFaqs;
