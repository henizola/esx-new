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
    // "Trading FAQ",
    //     // "Trading Platform",
  ];

  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner
        backgroundImage={bannerImage}
        title='Trading & Operations'
        description='“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse'
      />
      <div className='grid sm:grid-cols-9 gap-8 lg:px-28 py-7'>
        <Card width='col-span-2  hidden lg:flex flex-col text-left  py-[20px] px-[20px]  shadow-[0] h-fit '>
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
          <Card width='w-[100%] px-10 flex flex-col  py-[36px] pb-15'>
            <h1 className='text-black text-[24px] lg:text-subHeader  font-[500]  border-b-[3px] border-light-golden w-fit '>
              {/* Every Trading Member shall be required at all times to: */}
              Trading rules
            </h1>
            <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
              ESX Trading rules set out specific guidelines and regulations that
              govern trading activities of trading members. These rules are
              designed to ensure fairness, transparency, and the orderly
              functioning of the market while protecting the interests of market
              participants. ESX trading members are at all times require to
              abide by the rules as they contribute to:
            </p>
            {/* <hr className=' border border-primary-golden opacity-70 mt-[19px]' /> */}
            <main className=''>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>
                  <strong> Orderly Trading: </strong>Rules help maintain order
                  in the market by specifying how orders should be placed,
                  executed, and canceled. They establish guidelines for trading
                  hours, circuit breakers, and trading halts in case of extreme
                  market volatility.
                </span>
              </p>

              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>
                  <strong> Market Integrity: </strong>ESX trading rules are
                  designed to maintain the integrity of the market by preventing
                  fraudulent and manipulative activities. They establish
                  guidelines to prevent market abuse, insider trading, and other
                  illicit practices.
                </span>
              </p>

              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>
                  <strong> Fairness: </strong>The rules promote a level playing
                  field for all market participants, ensuring that no one has an
                  unfair advantage. They help prevent market manipulation and
                  create an environment where investors can trade with
                  confidence.
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>
                  <strong> Investor Protection: </strong>The rules provide
                  safeguards to protect the interests of investors. They among
                  others require trading members to have certain financial
                  resources and risk management procedures in place to protect
                  clients&apos; assets.
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>
                  <strong> Risk Management: </strong> The rules incorporate risk
                  management measures to mitigate the potential for excessive
                  market volatility or sudden market crashes. These measures
                  include price limits, circuit breakers, and other types of
                  similar measures.
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>
                  <strong> Investor Confidence:</strong> Clear and consistently
                  applied rules enhance investor confidence in the market. When
                  investors believe that the market is well-regulated and
                  follows established rules, they are more likely to
                  participate.
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2'>
                  <strong> Standardization:</strong> Rules help standardize
                  trading procedures and ensure that everyone follows the same
                  set of guidelines, which simplifies trading and reduces the
                  potential for disputes.
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>○ </span>

                <span className='ml-2 mb-2'>
                  <strong>Dispute Resolution: </strong>ESX rules provide a
                  framework for resolving disputes between market participants.
                </span>
              </p>
            </main>
          </Card>
          {/* <h1 className='text-black text-[24px] md:text-header mt-[10px] lg:mt-[40px] ml-[19px] font-normal   '>
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
                <p className='text-justify      text-base font-normal  pt-2  leading-snug'>
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
          </div> */}
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
