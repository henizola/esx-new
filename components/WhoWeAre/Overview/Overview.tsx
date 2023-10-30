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
    // "ESX Reports",
    // "Careers",
    // "Tender",
  ];

  return (
    <div className='flex flex-col w-full'>
      <Banner backgroundImage={image} title='About Us' />
      <div className='flex w-full  px-5 lg:px-28 py-7'>
        <Card width='w-[25%] hidden lg:flex mr-5 h-fit   flex-col text-left  py-10 px-5'>
          <h6 className='ml-7 mb-4'>About Us</h6>
          {items.map((item, index) => (
            <button
              key={index}
              className={`text-left ml-8 my-2 font-light  `}
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
          <Card width='w-[100%]  p-4 pt-0'>
            <div className='flex ml-4 md:py-10 md:pt-5 md:mx-10'>
              <div className='w-[100%]  '>
                <div className='w-[100%] flex  flex-col  md:mt-6  pt-0'>
                  <p className='w-[100%]  text-paragraphSmall  font-light mt-2 pt-0 leading-6 '>
                    As the pioneer securities exchange, ESX aims to play a
                    critical role in the development and growth of the Ethiopian
                    capital market. ESX’s core objective is to facilitate access
                    to capital and support effective capital allocation in a
                    manner that supports Ethiopia’s economic growth. By
                    developing a well-regulated and efficient capital market
                    ecosystem, ESX will enable mobilization of financial
                    resources for the Government, and private sector
                    institutions while providing investors a reliable platform
                    to invest in reliable and efficent environment.
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <Card width='w-[100%]  p-4 pt-0'>
            <div className='flex ml-4 md:py-10   md:pt-5 md:mx-10'>
              {/* <div className='w-[100%] md:w-[60%] '> */}
              <div className='w-[100%]  '>
                <div className='w-[100%] flex  flex-col  md:mt-6  pt-0'>
                  <h1 className='text-header w-fit mb-4 font-[400] mt-0 pt-0 border-b-[3px] border-light-golden'>
                    Who We Are
                  </h1>

                  <p className='w-[100%]  text-paragraphSmall  font-light mt-4 pt-0 leading-6 '>
                    The Ethiopian Securities Exchange (ESX) is Ethiopia’s first,
                    and only organized securities exchange. ESX is established
                    as a public private partnership in line with Article 31 of
                    the Capital Market Proclamation (No.1248/2021), and is
                    licensed by the Ethiopian Capital Market Authority (ECMA).
                  </p>
                  <p className='w-[100%]  text-paragraphSmall  font-light my-4 pt-0 leading-6 '>
                    ESX operates the business of a securities exchange,
                    functions as a Self-Regulatory Organization (“SRO”), and
                    serves as the central market organizer providing an
                    integrated product suite covering the equities, fixed
                    income, and money market segments of the capital markets.{" "}
                  </p>
                  <p className='w-[100%]  text-paragraphSmall  font-light mt-2 pt-0 leading-6 '>
                    As the pioneer securities exchange, ESX aims to play a
                    critical role in the development and growth of the Ethiopian
                    capital markets. ESX’s core objective is to facilitate
                    access to capital and support effective capital allocation
                    in a manner that supports Ethiopia’s economic growth. By
                    developing a well-regulated and efficient capital market
                    ecosystem, ESX will enable mobilization of financial
                    resources for both public and private sector institutions
                    while providing investors a reliable platform to invest in a
                    reliable and efficient environment.{" "}
                  </p>
                </div>
              </div>
              {/* <div className='hidden md:block w-[38%] ml-[3%]'>
                {" "}
                <Image
                  height={300}
                  width={200}
                  src={whoweare.src}
                  alt='manager'
                  className='w-[100%] border object-cover rounded-full  border-'
                />
              </div> */}
            </div>
          </Card>
          <div className='flex-col my-0 justify-between'>
            <div className='w-[100%] flex flex-col '>
              <Card width='w-[100%]  p-4'>
                <div className='flex mx-4 my-2 md:py-5 md:mx-10'>
                  <div className='w-[100%] flex  flex-col  mt-0 pt-0'>
                    <h1 className='text-header w-fit mb-4 font-[400] mt-0 pt-0 border-b-[3px] border-light-golden'>
                      ESX markets
                    </h1>

                    <p className='w-[100%]  text-paragraphSmall  font-light mt-2 pt-0 leading-6 '>
                      ESX is organized as having two main markets - ESX Equity
                      Market and ESX Fixed Income Market - and an Alternative
                      Market that hosts various capital market products and
                      services geared towards supporting the growth of Small and
                      Medium Enterprises (SMEs).
                    </p>

                    {/* <p className='w-[100%]  text-paragraphSmall  font-light mt-2 pt-0 leading-6 '>
                      Our Main Markets
                    </p> */}
                  </div>
                </div>
              </Card>
            </div>
            <div className='grid  grid-cols-1  gap-3 mt-4 '>
              <Card width='w-[100%] pb-0 h-[100%]'>
                <div className='flex p-0 mx-0'>
                  <div className='w-[100%] flex   flex-col  mt-0 pt-0'>
                    <h1 className='text-header w-fit  font-[400] pt-0 mt-5 mx-12 mb-0 border-b-[3px] border-light-golden'>
                      ESX Equity Market
                    </h1>

                    <div className='w-[100%] flex  flex-col  mt-0 px-12 py-10'>
                      <p className='w-[100%]  text-paragraphSmall  font-light  pt-0 leading-6 '>
                        ESX Equity Market is composed of a main market segment
                        for large companies and a growth market segment for
                        SMEs. The growth market segment offers companies
                        flexible listing requirements in recognition of the
                        company’s growth phase. ESX’s role in developing the
                        equities market will be focused on developing a formal,
                        transparent, and regulated venue for the listing of
                        equity securities and subsequently other structured
                        products.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
              <Card width='w-[100%] pb-0 h-[100%]'>
                <h1 className='text-header w-fit  font-[400] pt-0 mt-5 mx-12 mb-0 border-b-[3px] border-light-golden'>
                  ESX Fixed Income Market
                </h1>

                <div className='w-[100%] flex  flex-col  mt-0 px-12 py-10'>
                  <p className='w-[100%]  text-paragraphSmall  font-light  pt-0 leading-6 '>
                    ESX Fixed Income Market facilitates the trading of debt
                    securities with the aim to increase the efficiency,
                    transparency, and liquidity of the fixed income market. The
                    fixed income segment will include a quotation and trading
                    platform for short-term money market instruments such as
                    Government T-Bills, Commercial Papers, and the interbank
                    market including Repurchase Agreements (Repos) as well as
                    long term debt instruments such as Treasury and Corporate
                    Bonds.
                  </p>
                </div>
              </Card>

              <Card width='w-[100%] pb-0 h-[100%]'>
                <h1 className='text-header w-fit  font-[400] pt-0 mt-5 mx-12 mb-0 border-b-[3px] border-light-golden'>
                  ESX Alternative Market
                </h1>

                <div className='w-[100%] flex  flex-col  mt-0 px-12 py-10'>
                  <p className='w-[100%]  text-paragraphSmall  font-light  pt-0 leading-6 '>
                    ESX Alternative Market segment provides a platform for SME’s
                    to raise growth and working capital via dedicated equity
                    crowdfunding and electronic receivables discounting
                    platforms.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <Card width='w-[100%] mr-0 flex flex-col text-left p-4 py-5 md:py-14 '>
        <div className=''>
          <h1 className='text-primary-blue text-[20px] md:text-[24px] font-[500] w-[100%] text-center'>
            Contact the team
          </h1>
          <p className=' text-primary-black text-[14px] md:text-[16px] font-normal py-3 w-[100%] text-center'>
            Get in touch with our dedicated team today! Whether you have
            questions, feedback, or collaboration ideas, were here to assist
            you. Contact us now for a prompt response.
          </p>
          <div className='flex justify-center items-center '>
            <button className=' rounded-lg text-white text-[16px] font-semibold w-fit justify-center align-middle text-center bg-primary-blue p-2 my-1 md:my-4 px-8'>
              Contact
            </button>
          </div>
        </div>
      </Card> */}
    </div>
  );
};

export default WhoWeAre;
