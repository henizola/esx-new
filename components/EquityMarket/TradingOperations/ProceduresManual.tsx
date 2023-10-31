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
import { BackButton } from "@/components/Button/BackButton";
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
    // "Procedures & Manuals",
    "Trading FAQ",
    // "Trading Platform",
  ];

  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner
        backgroundImage={bannerImage}
        title='Procedures and manuals'
        description='“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse'
      />
      <div className='grid sm:grid-cols-7 gap-8 lg:px-28 py-7'>
        <Card width='col-span-2 hidden lg:flex flex-col text-left  py-[20px] px-[20px] h-fit '>
          <h6 className='ml-2 mb-4'>
            <BackButton setStep={setStep} link='/equity-market'>
              Equity Market
            </BackButton>{" "}
            {"> Procedures & Manuals"}
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
              onClick={() => {
                setStep(index);
              }}
            >
              {item}
            </button>
          ))}
        </Card>
        <div className='col-span-5 space-y-8 w-[100vw] lg:w-[auto]'>
          <Card width='w-[100%] flex gap-10 flex-col grid grid-cols-5  lg:pt-[36px] pb-[23px] lg:px-[20px] items-end'>
            <div className='col-span-6 lg:col-span-3 h-fit'>
              <Image
                src={
                  "/images/Career Advancement Myths_ 10  Mistakes That Keep You From Getting Ahead 1.png"
                }
                height={100}
                width={400}
                alt=''
                className='w-full h-[200px] mb-5 lg:hidden object-cover '
              />
              <h1 className=' px-5 lg:px-0 text-black text-xl md:text-3xl font-normal   '>
                Procedures & manuals
              </h1>
              <hr className=' px-5 lg:px-0 mt-[17px] border border-gray/30' />
              <main className='flex flex-col  px-5 lg:px-0'>
                <p className='      mt-[25px] text-base font-normal    leading-snug'>
                  The Ethiopian Securities Exchange (“ESX”) is Ethiopia’s first,
                  and only organized securities exchange. <br />
                  ESX is established as a public private partnership inline with
                  Article 31 of the Capital Market Proclamation (No.1248/2021),
                  and is licensed by the Ethiopian Capital Market Authority
                  (ECMA).
                </p>
                <Link
                  href='#'
                  className='px-3 py-1 mr-auto lg:ml-auto mb-[17px] mt-[39px] text-white bg-primary-blue rounded-md text-base not-italic font-normal '
                >
                  Procedures and Manuals
                </Link>
              </main>
            </div>
            <div className='col-span-2 self-end order-2'>
              <Image
                src={
                  "/images/Career Advancement Myths_ 10  Mistakes That Keep You From Getting Ahead 1.png"
                }
                height={100}
                width={400}
                alt=''
                className='w-full hidden lg:block aspect-square object-cover rounded-full'
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
