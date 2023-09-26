"use client";
import Image from "next/image";
import React from "react";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import bannerImage from "/public/images/CrowdexBanner.png";
import alternativeAndGrowth from "/public/images/alternativeAndGrowth.png";

interface PageProps {
  setStep: (value: number) => void;
  step: number;
}

const Page: React.FC<PageProps> = ({ setStep, step }) => {
  const items = [
    "Overview",
    "Crowdex",
    "Benefits for Issuers",
    "Issuers",
    "Investors",
  ];

  return (
    <div className='flex flex-col w-full'>
      <Banner
        backgroundImage={bannerImage}
        title='Alternative and Growth Market'
        description='The ESX alternative market is a platform that enables small and growing businesses in Ethiopia to raise capital through the capital market.'
      />
      <div className='flex w-full  px-28 py-7'>
        <Card width='w-[30%] mr-5 flex flex-col text-left  py-10 px-5'>
          <h6 className='ml-2 mb-4'>Alternative and Growth Market</h6>{" "}
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
            <div className='flex py-10 pt-6 mx-10'>
              <div className='w-[60%] '>
                <div className='w-[100%] flex  flex-col pt-0'>
                  <p className='text-[12px] font-semibold'>Overview</p>
                  <h1 className='text-[30px]  font-sans font-normal   mt-6 pt-0'>
                    Alternative and growth market
                  </h1>

                  <p className='w-[90%]  text-[16px] font-sans font-normal mt-2 pt-0 leading-6 text-gray'>
                    The Ethiopian Securities Exchange (“ESX”) is Ethiopia’s
                    first, and only organized securities exchange. ESX is
                    established as a public private partnership inline with
                    Article 31 of the Capital Market Proclamation
                    (No.1248/2021), and is licensed by the Ethiopian Capital
                    Market Authority (ECMA).
                  </p>
                  <p className='w-[90%]  text-[16px] font-sans font-normal mt-2 pt-0 leading-6 text-gray'>
                    To investors, the alternative market offers investment
                    options to diversify their portfolios and reduce overall
                    risk
                  </p>
                </div>
              </div>
              <div className='w-[38%] ml-[3%]'>
                {" "}
                <Image
                  height={300}
                  width={200}
                  src={alternativeAndGrowth.src}
                  alt='manager'
                  className='w-[100%] border object-cover rounded-full  border-'
                />
              </div>
            </div>
          </Card>
          <div className='flex-col my-0 justify-between'>
            <div className='w-[100%] flex flex-col '>
              <Card width='w-[100%] mt-3 p-4'>
                <div className='flex py-5 mx-10'>
                  <div className='w-[90%] flex  flex-col  mt-0 pt-0'>
                    <h1 className='text-[30px] font-sans font-normal mt-0 pt-0'>
                      ESX will put in place an alternative market for SMEs
                      offering
                    </h1>

                    <div className='w-[100%] relative flex justify-between  text-[15px] font-sans font-light mt-2 px-5 leading-6 text-gray'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-[60px] absolute -left-5 top-2 h-[20px]   '
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <p className='pl-2 py-1 text-[16px]'>
                        A Crowdfunding/crowd investment platform
                      </p>
                    </div>
                    <div className='w-[100%] relative flex justify-between  text-[15px] font-sans font-light mt-2 px-5 leading-6 text-gray'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-[60px] absolute -left-5 top-2 h-[20px]   '
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <p className='pl-2 py-1 text-[16px]'>
                        SME incubation, acceleration services – geared towards
                        capital market investor readiness
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;