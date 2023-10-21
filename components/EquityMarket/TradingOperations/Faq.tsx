"use client";
import { BackButton } from "@/components/Button/BackButton";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { ReactNode, useState } from "react";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import bannerImage from "/public/images/about-banner.png";
interface TradingFaqsProps {
  setStep: (value: number) => void;
  step: number;
}

const TradingFaqs: React.FC<TradingFaqsProps> = ({ setStep, step }) => {
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
        title='Frequently asked questions'
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
          <Card width='w-[100%] flex gap-4 flex-col  py-10 px-10'>
            <h1 className='text-black text-[24px] md:text-subHeader not-italic font-normal leading-[normal]'>
              Frequently asked questions
            </h1>

            <hr className='  border border-light-golden ' />
            <main className=' flex flex-col  '>
              <ExpandableCard question='What is a share?'>
                A share is a “piece” of ownership of a company. Each time you
                buy a share, you become part of the ownership of that company.
              </ExpandableCard>
              <ExpandableCard question='What are the benefits of investing?'>
                Some of the benefits of investing include income earned through
                dividends, capital gains, protection of saving from the effects
                of inflation (i.e. capital preservation), capital gains, and
                asset diversification.
              </ExpandableCard>
              <ExpandableCard question='How do I start trading?'>
                Answer
              </ExpandableCard>
              <ExpandableCard question='What is meant by suspension of trading?'>
                Suspension of trading is where buying and selling on a security
                listed on the ESX is put on hold.
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
  className,
}: ExpandableCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen((prev) => !prev)}
      className={` ${
        open ? "bg-gray/10 " : " lg:pb-[0px] "
      }  lg:px-[20px] lg:pt-[12px]  flex flex-col gap-4 transition-all  border-b border-gray   ${className}`}
    >
      <div className='rounded flex justify-between items-center'>
        <h1 className='text-black text-[14px] lg:text-paragraphSmall not-italic font-normal leading-[normal] '>
          {question}
        </h1>
        <ChevronDownIcon
          className={`w-10 h-10 p-2 rounded-full hover:bg-white/80 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      {open && <span className='pb-[52px]'>{children}</span>}
    </div>
  );
}
