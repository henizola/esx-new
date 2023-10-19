"use client";
import { BackButton } from "@/components/Button/BackButton";
import LinkButton from "@/components/Button/LinkButton";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import bannerImage from "/public/images/about-banner.png";
interface TradingSystemProps {
  setStep: (value: number) => void;
  step: number;
}

const TradingSystem: React.FC<TradingSystemProps> = ({ setStep, step }) => {
  const items = ["Trading Market Structure", "Trading Rules", "Trading FAQ"];

  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner backgroundImage={bannerImage} title='Trading market structure' />
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
          <Card width='w-[100%]  flex  flex-col pt-5 pb-[30px] px-10 shadow-[0]'>
            <p className=' text-black pt-4 text-[14px] md:text-paragraphSmall font-light   '>
              Trading on ESX shall be in approved securities on only the ESX’s
              trading platform unless an the Exchange grants an express
              exemption inline with its trading rules.
            </p>
            <h1 className='text-black mt-5 text-[20px] md:text-subHeader ml-0 font-normal   '>
              Trading System
            </h1>
            <hr className=' border border-primary-golden opacity-70 mt-[12px]' />
            <main className=' space-y-[15px] pt-[30px]'>
              <p className=' text-black text-[14px] md:text-paragraphSmall font-light   '>
                All trading activity on ESX listed securities, (as well as its
                unlisted securities market) occurs via ESX’s proiopitery
                Automated Trading System.
              </p>
              <p className=' text-black text-[14px] md:text-paragraphSmall font-light   '>
                ESX adopts a hybrid market that provides both a central order
                book as well as platforms for bilateral and multilateral
                negotiated trade in the form of RFQs (request for Qiuote). ESX’s
                central order book allows trading members and their clients to
                enter buy and sell orders anonymously where trades are matched
                using ESX’ modern trading engine based on price time priority.
              </p>
              <p className=' text-black text-[14px] md:text-paragraphSmall font-light   '>
                The ATS seamlessly integrates with the Central Securities
                Depository that ensures efficent clearning and settlment.
              </p>
            </main>
          </Card>
          <div className='grid sm:grid-cols-1 gap-5'>
            <Card width='w-[100%] flex gap-4 flex-col shadow-[0] '>
              <div className='p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]' />
              <main className=' pt-2 pb-7 px-10 flex flex-col h-full'>
                <h1 className='text-black text-[20px] md:text-subHeader font-normal    flex items-end gap-5 '>
                  <span>Trading calendar</span>
                  <ChevronRightIcon className='w-8 h-8 mt-1 text-primary-golden' />
                </h1>
                <p className=' text-black text-[14px] pt-2 md:text-paragraphSmall  font-light   '>
                  All trading activity on ESX listed securities, (as well as its
                  unlisted securities market) occurs via ESX’s proiopitery
                  Automated Trading System.
                </p>

                <p className=' text-black text-[14px] pt-2 md:text-paragraphSmall  font-light   '>
                  The ATS seamlessly integrates with the Central Securities
                  Depository that ensures efficent clearning and settlment.
                </p>
                {/* <LinkButton className='mt-auto' href='#'>
                  View More
                </LinkButton> */}
              </main>
            </Card>
            <Card width='w-[100%] flex gap-4 flex-col  shadow-[0]'>
              <div className='p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]' />
              <main className=' pt-2 pb-7 px-10 flex flex-col h-full'>
                <h1 className='text-black text-[20px] md:text-subHeader font-normal    flex items-end gap-5 '>
                  <div>Public Holidays / Closing Days (2023 -2024)</div>
                  <ChevronRightIcon className='w-8 h-8 mt-1 text-primary-golden' />
                </h1>
                <p className=' text-black text-[14px] pt-2 md:text-paragraphSmall  font-light   '>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut
                </p>
                {/* <LinkButton className='mt-[30px]' href='#'>
                  View More
                </LinkButton> */}
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
