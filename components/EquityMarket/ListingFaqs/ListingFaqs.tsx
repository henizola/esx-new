"use client";
import { BackButton } from "@/components/Button/BackButton";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { ReactNode, useState } from "react";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import bannerImage from "/public/images/about-banner.png";
interface ListingFaqsProps {
  setStep: (value: number) => void;
  step: number;
}

const ListingFaqs: React.FC<ListingFaqsProps> = ({ setStep, step }) => {
  const items = [
    "Why List ?",
    "Market Segment",
    "Listing Rules, Requirements, Benefits ",
    "Listing FAQs",
  ];

  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner
        backgroundImage={bannerImage}
        title='Listing on ESX'
        description=''
      />
      <div className='grid sm:grid-cols-9 gap-8 lg:px-28 py-7'>
        <Card width='col-span-2 hidden lg:flex flex-col text-left  py-[20px] px-[20px]'>
          <h6 className='ml-2 mb-4 text-lg  -600'>
            <BackButton setStep={setStep} link='/equity-market'>
              Equity Market
            </BackButton>{" "}
            {"> Listing"}
          </h6>
          {items.map((item, index) => (
            <button
              key={index}
              className={`  text-left  ml-5 
 my-2 font-light border-b border-black `}
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
          {/*  {/* <button
            className={`  text-left  ml-5 
 my-2 font-light border-b border-black `}
            style={{
              borderBottom: "0.7px solid black",
              fontSize: "14px",
              fontWeight: "300",
            }}
          >
            Listing Companies
          </button>
          <button
            className={`  text-left  ml-5 
 my-2 font-light border-b border-black `}
            style={{
              borderBottom: "0.7px solid black",
              fontSize: "14px",
              fontWeight: "300",
            }}
          >
            Notice to Issuers
          </button>
          <button
            className={`  text-left  ml-5 
 my-2 font-light border-b border-black `}
            style={{
              borderBottom: "0.7px solid black",
              fontSize: "14px",
              fontWeight: "300",
            }}
          >
            Other Products
          </button> */}
        </Card>
        <div className='col-span-7 space-y-8  w-[100vw] lg:w-[auto]'>
          <Card width='w-[100%] flex gap-4 flex-col  py-[32px] px-10'>
            <h1 className='text-black text-[20px]  lg:text-header font-normal   '>
              Frequently asked questions
            </h1>
            {/* <p className='text-black text-[12px] lg:text-base lg:font-normal    leading-snug'>
              Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
              ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat
            </p> */}
            {/* <div className='w-full h-[0.5px] border bg-black opacity-50'></div> */}
            <main className=' lg:space-y-0'>
              <ExpandableCard question='What is an IPO?'>
                An Initial public offering (IPO) is the process of when a
                private corporation offers its shares to the public for the
                first time.
              </ExpandableCard>
              <ExpandableCard question='How long is the IPO process?'>
                Typically 6-9 months - however this depends on the company’s IPO
                readiness (prepared financial statements, company documents
                etc.).
              </ExpandableCard>
              <ExpandableCard question='When is the best time to list/go public?'>
                The right time varies for every company. Generally, a company
                decides to go public when they are in need of funding for
                expansion plans. However, the best time to prepare to go public
                is now. This will allow the company to be ready once they decide
                to go public.
              </ExpandableCard>
              <ExpandableCard question='	What is the secondary market'>
                A secondary market is where investors trade/exchange securities
                such as shares, bonds, ETFs etc. from other investors, rather
                than from issuing companies.
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
