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
interface ProceduresManualProps {
  setStep: (value: number) => void;
  step: number;
}

const ProceduresManual: React.FC<ProceduresManualProps> = ({
  setStep,
  step,
}) => {
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
        title="Procedures and manuals"
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
          <Card width="w-[100%] flex gap-4 flex-col grid grid-cols-5  py-[20px] px-[20px] place-items-center">
            <div className="col-span-3 h-full">
              <h1 className=" text-black text-[40px] not-italic font-normal leading-[normal]">
                Procedures & manuals
              </h1>
              <hr className="  border border-gray/30" />
              <main className="py-[20px] flex flex-col gap-8">
                <p className="text-gray text-base not-italic font-normal leading-[normal]">
                  The Ethiopian Securities Exchange (“ESX”) is Ethiopia’s first,
                  and only organized securities exchange. ESX is established as
                  a public private partnership inline with Article 31 of the
                  Capital Market Proclamation (No.1248/2021), and is licensed by
                  the Ethiopian Capital Market Authority (ECMA).
                </p>
                <Link
                  href="#"
                  className="px-3 py-1 ml-auto text-white bg-primary-blue rounded-md text-base not-italic font-normal "
                >
                  Procedures and Manuals
                </Link>
              </main>
            </div>
            <div className="col-span-2 h-full order-2">
              <Image
                src={"/images/career-1.png"}
                height={100}
                width={400}
                alt=""
                className="w-full aspect-square object-cover rounded-full"
              />
            </div>
          </Card>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default ProceduresManual;
