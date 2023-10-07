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
interface ListingFaqsProps {
  setStep: (value: number) => void;
  step: number;
}

const ListingFaqs: React.FC<ListingFaqsProps> = ({ setStep, step }) => {
  const items = ["Market Segment", "Listing Rules", "Listing FAQs"];

  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner
        backgroundImage={bannerImage}
        title='Frequently asked questions'
        description=''
      />
      <div className='grid sm:grid-cols-7 gap-8  lg:px-28 py-7'>
        <Card width=' hidden lg:flex col-span-2  flex flex-col text-left  py-[20px] px-[20px]'>
          <h6 className='ml-2 mb-4 text-lg text-gray-600'>
            <BackButton setStep={setStep} link='/equity-market'>
              Equity Market
            </BackButton>{" "}
            {"> Listing"}
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
        <div className='col-span-5 space-y-8 w-[100vw] lg:w-[auto]'>
          <Card width='w-[100%] flex gap-4 flex-col  py-[32px] px-[20px]'>
            <h1 className="text-black text-[20px]  lg:text-[32px] font-normal font-['Open Sans']">
              Frequently asked questions
            </h1>
            <p className="text-black text-[12px] lg:text-base lg:font-normal font-['Open Sans'] leading-snug">
              Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
              ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat
            </p>
            <div className='w-full h-[0.5px] border bg-black opacity-50'></div>
            <main className=' lg:space-y-6'>
              <ExpandableCard question='- What is an IPO?'>
                typically 6-9 months - however this depends on the company’s IPO
                readiness (prepared financial statements, company documents
                etc.).
              </ExpandableCard>
              <ExpandableCard question='- How long is the IPO process?'>
                typically 6-9 months - however this depends on the company’s IPO
                readiness (prepared financial statements, company documents
                etc.).
              </ExpandableCard>
              <ExpandableCard question='- When is the best time to list / go public?'>
                typically 6-9 months - however this depends on the company’s IPO
                readiness (prepared financial statements, company documents
                etc.).
              </ExpandableCard>
              <ExpandableCard question='- What is secondary market?'>
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
        open ? "bg-gray/10 " : " lg:pb-[30px] "
      }  lg:px-[20px] lg:pt-[12px]  flex flex-col gap-4 transition-all  border-b border-gray   ${className}`}
    >
      <div className='rounded flex justify-between items-center'>
        <h1 className='text-black text-[14px] lg:text-[19px] not-italic font-normal leading-[normal] '>
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
