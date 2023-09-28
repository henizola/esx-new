"use client";
import React, { useState } from "react";
import Card from "../../Card/Card";
import Banner from "../../Banner/banner";
import image from "/public/images/who-we-are.png";
import whoweare from "/public/images/who-we-are-circle.png";
import Link from "next/link";
import Image from "next/image";

interface WhoWeAreProps {
  setStep: (value: number) => void;
  step: number;
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({ setStep, step }) => {
  const items = [
    "Welcome Message",
    "Overview",
    "Vision & Mission",
    "Organizational Structure",
    "Board of Directors",
    "Management",
    "ESX Reports",
    "Careers",
    "Tender",
  ];

  return (
    <div className='flex flex-col w-full'>
      <Banner
        backgroundImage={image}
        title='Who we are'
        description='As the pioneer securities exchange, ESX aims to play a critical role in the development and growth of the Ethiopian capital market. ESX’s core objective is to facilitate access to capital and support effective capital allocation in a manner that supports Ethiopia’s economic growth. By developing a well-regulated and efficient capital market ecosystem, ESX will enable mobilization of financial resources for the Government, and private sector institutions while providing investors a reliable platform to invest in reliable and efficent environment.'
      />
      <div className='flex w-full  px-28 py-7'>
        <Card width='w-[30%] mr-5 flex flex-col text-left  py-10 px-5'>
          <h6 className='ml-2 mb-4'>About Us</h6>{" "}
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
        <div className='grid grid-cols-1 gap-3 w-[100%]'>
          <Card width='w-[100%] p-4'>
            <div className='flex py-10 mx-10'>
              <div className='w-[60%] '>
                <div className='w-[100%] flex  flex-col  mt-6 pt-0'>
                  <h1 className='text-[30px] font-sans font-normal mt-0 pt-0'>
                    Who We Are
                  </h1>

                  <p className='w-[90%]  text-[16px] font-sans font-normal mt-2 pt-0 leading-6 text-gray'>
                    The Ethiopian Securities Exchange (“ESX”) is Ethiopia’s
                    first, and only organized securities exchange. ESX is
                    established as a public private partnership inline with
                    Article 31 of the Capital Market Proclamation
                    (No.1248/2021), and is licensed by the Ethiopian Capital
                    Market Authority (ECMA).
                  </p>
                  <Link href='#' className='flex text-[16px] mt-10'>
                    View more{" "}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-4 h-4 mt-1.5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M8.25 4.5l7.5 7.5-7.5 7.5'
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className='w-[38%] ml-[3%]'>
                {" "}
                <Image
                  height={300}
                  width={200}
                  src={whoweare.src}
                  alt='manager'
                  className='w-[100%] border object-cover rounded-full  border-'
                />
              </div>
            </div>
          </Card>
          <div className='flex-col my-0 justify-between'>
            <div className='w-[100%] flex flex-col '>
              <Card width='w-[100%] my-3 p-4'>
                <div className='flex py-5 mx-10'>
                  <div className='w-[100%] flex  flex-col  mt-0 pt-0'>
                    <h1 className='text-[24px] font-sans font-normal mt-0 pt-0'>
                      ESX markets
                    </h1>

                    <p className='w-[100%]  text-[15px] font-sans font-normal mt-2 pt-0 leading-6 text-gray'>
                      ESX Equity Market is composed of a main market segment for
                      large companies and a growth market segment for small and
                      medium sized firms. The growth market segment offers
                      companies flexible listing requirements in recognition of
                      the company’s growth phase. ESX’s role in developing the
                      equities market will be focused on developing a formal,
                      transparent, and regulated venue listing equity securities
                      and subsequently other structured products.
                    </p>
                    <Link href='#' className='flex text-[16px] mt-5'>
                      View more{" "}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-4 h-4 mt-1.5'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M8.25 4.5l7.5 7.5-7.5 7.5'
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
            <div className='grid grid-cols-2 gap-3 mt-4 '>
              <Card width='w-[100%] pb-10 h-[100%]'>
                <div className='flex p-0 mx-0'>
                  <div className='w-[100%] flex   flex-col  mt-0 pt-0'>
                    <h1 className='text-[24px] px-10 py-5  text-left text-white  w-[100%] bg-primary-blue font-sans font-normal '>
                      Main markets
                    </h1>

                    <div className='w-[100%] flex  flex-col  mt-0 px-10 py-5'>
                      <p className='w-[100%]  text-[14px] font-sans font-normal  pt-0 leading-6 text-gray'>
                        ESX is organized as having two main markets (ESX equity
                        and fixed income markets) and an alternative market that
                        hosts various market place offerings and services geared
                        towards supporting the growth of small and medium
                        enterprises (SMEs)
                      </p>
                    </div>

                    <p className='w-[100%]  text-[14px] font-sans font-normal  pt-0  mt-0 px-10  leading-6 text-gray'>
                      ESX Alternative Market segment provides platform for SME’s
                      to raise growth and working capital via dedicated equity
                      crowdfunding and electronic receivables discounting
                      platforms.
                    </p>
                    <Link href='#' className='flex text-[16px] mt-5 px-10 '>
                      View more{" "}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-4 h-4 mt-1.5'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M8.25 4.5l7.5 7.5-7.5 7.5'
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Card>
              <Card width='w-[100%] pb-10 h-[100%]'>
                <h1 className='text-[24px] px-10 py-5  text-left text-white  w-[100%] bg-primary-blue font-sans font-normal '>
                  Functions
                </h1>

                <div className='w-[100%] flex  flex-col  mt-0 px-10 py-5'>
                  <p className='w-[100%]  text-[14px] font-sans font-normal  pt-0 leading-6 text-gray'>
                    The ESX Fixed Income Market facilitates the trading of debt
                    securities with the aim to increase efficiency,
                    transparency, and liquidity of the fixed income market. The
                    fixed income segment will also include a trading platform
                    for short-term money market instruments such as governmetn
                    t-bills, commercial papers and interbank money market
                    including Repurchase Agreements (Repos).
                  </p>
                </div>

                <Link href='#' className='flex text-[16px] mt-5 px-10 '>
                  View more{" "}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-4 h-4 mt-1.5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M8.25 4.5l7.5 7.5-7.5 7.5'
                    />
                  </svg>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Card width='w-[100%] mr-0 flex flex-col text-left p-4 py-14 '>
        <div className=''>
          <h1 className='text-primary-blue text-[24px] font-bold w-[100%] text-center'>
            Contact the team
          </h1>
          <p className=' text-primary-black text-[16px] font-normal py-3 w-[100%] text-center'>
            Get in touch with our dedicated team today! Whether you have
            questions, feedback, or collaboration ideas, were here to assist
            you. Contact us now for a prompt response.
          </p>
          <div className='flex justify-center items-center '>
            <button className=' rounded-lg text-white text-[16px] font-semibold w-fit justify-center align-middle text-center bg-primary-blue p-2 my-4 px-8'>
              Contact
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WhoWeAre;
