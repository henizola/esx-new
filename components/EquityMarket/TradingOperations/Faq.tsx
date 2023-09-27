"use client";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import manager from "/public/images/manager.png";
import sliderbannerImage from "/public/images/slider-background.png";
import bannerImage from "/public/images/about-banner.png";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import CustomSlider from "../../Slider/Slider";
import { ArrowDownIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { BackButton } from "@/components/Button/BackButton";
interface TradingFaqsProps {
  setStep: (value: number) => void;
  step: number;
}

const TradingFaqs: React.FC<TradingFaqsProps> = ({ setStep, step }) => {
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
        title="Frequently asked questions"
        description=""
      />
      <div className="grid sm:grid-cols-7 gap-8 px-28 py-7">
        <Card width="col-span-2  flex flex-col text-left  py-[20px] px-[20px]">
        <h6 className="ml-2 mb-4"><BackButton setStep={setStep} link="/equity-market">
              Equity Market
            </BackButton>{" "} {"> FAQ"}</h6>{" "}
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
              Frequently asked questions
            </h1>
            
            <hr className="  border border-gray/30" />
            <main className=" flex flex-col  ">
              <ExpandableCard question="What is a share?">
                Some of the benefits of investing include income earned through dividends, protection of saving from the effects of inflation, capital gains, and diversification.
              </ExpandableCard>
              <ExpandableCard question="What are the benefits of investing?">
                Some of the benefits of investing include income earned through dividends, protection of saving from the effects of inflation, capital gains, and diversification.
              </ExpandableCard>
              <ExpandableCard question="How do I start trading?">
                Some of the benefits of investing include income earned through dividends, protection of saving from the effects of inflation, capital gains, and diversification.
              </ExpandableCard>
              <ExpandableCard question="What is meant by suspension of trading?">
                Some of the benefits of investing include income earned through dividends, protection of saving from the effects of inflation, capital gains, and diversification.
              </ExpandableCard>
            </main>
          </Card>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default TradingFaqs;




interface ExpandableCardProps {
  question: string;
  className?: string;
  children: string | ReactNode;
}

 function ExpandableCard({
  question,
  children,
  className
}: ExpandableCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={` ${open  ? 'bg-gray/10 pl-[20px]' : ' '}   pt-[12px]  flex flex-col gap-4 transition-all pb-[30px] border-b border-gray/40  ${className}`}>
      <div className="rounded flex justify-between items-center">
        <h1 className={`${open ? "text-black text-base  font-['Open Sans'] leading-snug" : "text-zinc-500 text-base font-normal font-['Open Sans'] leading-snug " } `}>
          {question}
        </h1>
        <ChevronDownIcon
          onClick={() => setOpen((prev) => !prev)}
          className={`w-10 h-10 p-2 rounded-full hover:bg-white/80 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      {open && <span className=" h-16 text-zinc-500 text-base font-normal font-['Open Sans'] leading-snug">{children}</span>}
    </div>
  );
}