"use client";
import { BackButton } from "@/components/Button/BackButton";
import LinkButton from "@/components/Button/LinkButton";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import bannerImage from "/public/images/about-banner.png";
interface ESXRuleBookProps {
  setStep: (value: number) => void;
  step: number;
}

const ESXRuleBook: React.FC<ESXRuleBookProps> = ({ setStep, step }) => {
  const items = ["Capital Market Regulatory Environment", "ESX Rulebook"];

  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner
        backgroundImage={bannerImage}
        title='ESX Rule Book'
        description=''
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
          <div className='col-span-5 grid md:grid-cols-2 gap-8'>
            <Card width='w-[100%] flex gap-4 flex-col shadow-[0] '>
              <div className='p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]' />
              <main className='pb-[20px] px-[20px] flex flex-col h-full'>
                <h1 className='text-black text-2xl mt-[5px] font-normal    flex items-center gap-5 '>
                  <span> ESX Listing Rules</span>
                  <ChevronRightIcon className='w-8 h-8 mt-1 text-primary-golden' />
                </h1>
                <p className='text-black text-sm font-light mt-[15px]   '>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut
                </p>

                <LinkButton className='mt-auto' href='#'>
                  View More
                </LinkButton>
              </main>
            </Card>
            <Card width='w-[100%] flex gap-4 flex-col shadow-[0] '>
              <div className='p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]' />
              <main className='pb-[20px] px-[20px] flex flex-col h-full'>
                <h1 className='text-black text-2xl mt-[5px] font-normal    flex items-center gap-5 '>
                  <span>ESX Membership Rules</span>
                  <ChevronRightIcon className='w-8 h-8 mt-1 text-primary-golden' />
                </h1>
                <p className='text-black text-sm font-light    mt-[15px]'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut
                </p>

                <LinkButton className='mt-[12px]' href='#'>
                  View More
                </LinkButton>
              </main>
            </Card>
            <Card width='w-[100%] flex gap-4 flex-col shadow-[0] '>
              <div className='p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]' />
              <main className='pb-[20px] px-[20px] flex flex-col h-full'>
                <h1 className='text-black text-2xl mt-[5px] font-normal    flex items-center gap-5 '>
                  <span>ESX Trading Rules</span>
                  <ChevronRightIcon className='w-8 h-8 mt-1 text-primary-golden' />
                </h1>
                <p className='text-black text-sm font-light mt-[15px]   '>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut
                </p>

                <LinkButton className='mt-auto' href='#'>
                  View More
                </LinkButton>
              </main>
            </Card>
            <Card width='w-[100%] flex gap-4 flex-col shadow-[0] '>
              <div className='p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]' />
              <main className='pb-[20px] px-[20px] flex flex-col h-full'>
                <h1 className='text-black text-2xl font-normal    mt-[5px]  flex items-center gap-5 '>
                  <span> ESX Dispute Settlment Rules</span>
                  <ChevronRightIcon className='w-8 h-8 mt-1 text-primary-golden' />
                </h1>
                <p className='text-black text-sm font-light mt-[15px]   '>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut
                </p>

                <LinkButton className='mt-[12px]' href='#'>
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

export default ESXRuleBook;
