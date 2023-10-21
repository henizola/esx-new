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
interface TradingRulesProps {
  setStep: (value: number) => void;
  step: number;
}

const TradingRules: React.FC<TradingRulesProps> = ({ setStep, step }) => {
  const items = [
    "Trading Market Structure",
    "Trading Rules",
    // // "Procedures & Manuals",
    "Trading FAQ",
    //     // "Trading Platform",
  ];

  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner
        backgroundImage={bannerImage}
        title='Trading rules'
        description='“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse'
      />
      <div className='grid sm:grid-cols-9 gap-8 lg:px-28 py-7'>
        <Card width='col-span-2  hidden lg:flex flex-col text-left  py-[20px] px-[20px]  shadow-[0]'>
          <h6 className='ml-2 mb-4'>
            <BackButton setStep={setStep} link='/equity-market'>
              Equity Market
            </BackButton>{" "}
            {"> Trading & Operations"}
          </h6>{" "}
          {items.map((item, index) => (
            <button
              key={index}
              className={`  text-left ml-5 my-2 font-light border-b border-black `}
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
        <div className='col-span-7 space-y-5 w-[100vw] lg:w-[auto] h-[auto]'>
          <Card width='w-[100%] px-10 flex flex-col  py-[36px] '>
            <h1 className='text-black text-[24px] lg:text-subHeader  font-normal   '>
              Every Trading Member shall be required at all times to:
            </h1>
            <hr className=' border border-primary-golden opacity-70 mt-[19px]' />
            <main className=''>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>
                  Address investor protection obligations with respect to their
                  clients when they, acting on behalf of their clients, execute
                  their orders on the exchange platform or system; and
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>
                  Adhere to the best execution principle by taking reasonable
                  steps to obtain the best available result for the client in a
                  timely manner, provided that the Trading Member shall at all
                  times act in accordance with the terms and conditions of the
                  order from the client.
                </span>
              </p>
            </main>
          </Card>
          <h1 className='text-black text-[24px] lg:text-3xl mt-[10px] lg:mt-[40px] ml-[19px] font-normal   '>
            Trading Fees
          </h1>
          <Card width='w-[100%] flex gap-3 mt-[10px] flex-col bg-white/0 '>
            <div>
              <div className='pt-[15px] pb-[13px] px-[20px] grid grid-cols-3 bg-primary-blue text-white'>
                <span className='text-white text-base font-semibold    '>
                  Fee type
                </span>
                <span className='text-white text-base font-semibold    '>
                  Buy side
                </span>
                <span className='text-white text-base font-semibold    '>
                  Sell side
                </span>
              </div>
              <div className='p-1 bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]' />
            </div>
            <div className='pt-[10px] pb-[8px]  px-[20px] grid sm:grid-cols-3 bg-white text-black'>
              <span className='text-black text-[14px] md:text-base font-normal    '>
                ESX fee
              </span>
            </div>
            <div className='pt-[10px] pb-[8px] px-[20px] grid sm:grid-cols-3 bg-white text-black'>
              <span className='text-black text-[14px] md:text-base font-normal    '>
                CSD fee
              </span>
            </div>
            <div className='pt-[10px] pb-[8px] px-[20px] grid sm:grid-cols-3 bg-white text-black'>
              <span className='text-black text-[14px] md:text-base font-normal    '>
                CMA fee
              </span>
            </div>
            <div className='pt-[10px] pb-[8px] px-[20px] grid sm:grid-cols-3 bg-white text-black'>
              <span className='text-black text-[14px] md:text-base font-normal    '>
                Member commission
              </span>
            </div>
            <div className='pt-[10px] pb-[8px] px-[20px] grid sm:grid-cols-3 bg-white text-black'>
              <span className='text-black text-[14px] md:text-base font-normal    '>
                Compensation fund
              </span>
            </div>
            <div className='pt-[10px] pb-[8px] px-[20px] grid sm:grid-cols-3 bg-white text-black'>
              <span className='text-black text-[14px] md:text-base font-normal    '>
                Taxes
              </span>
            </div>
          </Card>
          <div className='flex flex-col'>
            <Card width='pb-7'>
              <div className='h-[5px]  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]' />
              <main className='pt-5 px-[30px] flex flex-row gap-[10px]'>
                <p className='text-justify text-zinc-500 text-base font-normal  pt-2  leading-snug'>
                  For details of ESX trading rules, please refer to following
                  documents
                </p>

                <Link
                  href='#'
                  className='px-[15px] mr-[80px] py-1 ml-auto text-white bg-primary-blue rounded-md text-base not-italic font-normal '
                >
                  ESX Trading Rules
                </Link>
              </main>
            </Card>
          </div>
        </div>
      </div>
      {/* <div className='bg-white py-[20px] px-[20px] lg:py-[68px] '>
        <p className='max-w-[980px] mx-auto w-full  text-center text-black text-[14px] md:text-paragraphSmall font-light    leading-snug'>
          Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
          consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum
          dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat
        </p>
      </div> */}
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default TradingRules;
