"use client";

import Card from "@/components/Card/Card";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import MarketSummary from "@/components/MarkerSummary/MarketSummary";
import StockPriceAutoScroller from "@/components/priceScroller/priceSlider";
import { useNumber } from "@/context/nav.context";
import Image from "next/image";
import Link from "next/link";
import chart from "../public/images/chart.png";
import { useState } from "react";
import up from "../public/images/up.svg";
import down from "../public/images/down.svg";
import home from "../public/images/home-banner.png";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
export default function Home() {
  const items = [
    "About Us",
    "Equity Market",
    "Fixed Income Market",
    "Alternative and Growth Market",
    "News and Media Center",
    "ESX Academy",
  ];

  const [step, setStep] = useState(0);

  return (
    <main className='flex  flex-col items-center p-0'>
      <HomeSlider />

      <div className='bg-primary-blue -mt-2 w-[100vw]'>
        <StockPriceAutoScroller />
      </div>
      <MarketSummary />

      <div className='flex w-full  px-28 py-7'>
        <Card width='w-[660px] mr-5 flex flex-col text-left  py-10 px-5'>
          <h6 className='ml-2 mb-4'>ESX</h6>{" "}
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
        <div className='' style={{ display: "flex", flexDirection: "column" }}>
          <div className='flex flex-row gap-3 w-[100%]'>
            <Card width='w-[67%] mr-[0%] pb-10 h-[100%]'>
              <div className='flex p-0 mx-0'>
                <div className='w-[100%] flex   flex-col  mt-0 pt-0'>
                  <h1 className='text-[24px] px-10 py-5  text-left text-white  w-[100%] bg-primary-blue font-sans font-normal '>
                    Market summary
                  </h1>

                  <Image
                    height={200}
                    width={200}
                    src={chart.src}
                    alt='manager'
                    className='w-[95%] ml-[5%] object-cover'
                  />
                </div>
              </div>
            </Card>
            <Card width='w-[40%] pb-10 h-[100%]'>
              <div className='flex p-0 mx-0'>
                <div className='w-[100%] flex   flex-col  mt-0 pt-0'>
                  <h1 className='text-[24px] px-10 py-5  text-left text-white  w-[100%] bg-primary-blue font-sans font-normal '>
                    Other markets
                  </h1>
                  <div className='p-8 '>
                    {[1, 2, 3, 4, 5].map(() => (
                      <>
                        <div className='text-[14px] text-center  flex flex-row justify-between w-[92%] text-black pl-0 relative'>
                          <h1 className='text-[13px]  py-4  text-left text-[#1F263E]'>
                            Lorem ipsum{" "}
                          </h1>{" "}
                          <div className='w-[70px] flex flex-row text-[13px]  py-4   text-[#1F263E]'>
                            {Math.random().toFixed(2)}{" "}
                            {Math.random() * 107 - 5 > 60 ? (
                              <Image
                                height={0}
                                width={0}
                                src={up.src}
                                alt='manager'
                                className='w-5 h-5 -right-8 absolute '
                              />
                            ) : (
                              <Image
                                height={0}
                                width={0}
                                src={down.src}
                                alt='manager'
                                className='w-5 h-5 -right-8 absolute '
                              />
                            )}
                            <div
                              className={`text-[14px] ${
                                Math.random() * 107 - 5 > 60
                                  ? "text-[#A8965B]"
                                  : "text-[red]"
                              } pl-4 relative w-fit`}
                            >
                              {" "}
                              {(Math.random() * 10 - 5).toFixed(0)} %
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <Card width='w-[100%] my-6 mb-0  h-[100%] '>
            <div className=' flex p-0  mx-0 '>
              <div className='w-[60%] flex  flex-col  p-5 px-10 pr-0 '>
                <span className='text-[12px] font-semibold text-primary-blue'>
                  Trade on ESX
                </span>
                <h1 className='text-[40px] mt-3'>Why invest?</h1>
                <hr className='mr-10 border-[#A8965B]' />
                <p className='text-[16px] text-[#707377]  font-light mt-5 pr-16  w-[100%] '>
                  A benefit to investing and trading on ESX is price
                  transparency. As prices are publicly available, investors are
                  able to make informed decisions based on real-time market data
                </p>
                <p className='text-[16px] text-[#707377]  font-light mt-4 pr-16  w-[100%] '>
                  The regulatory oversight of ESX maintains market integrity.
                  This ensures that participants are adhering to trading
                  practices.
                </p>
                <p className='text-[16px] text-[#707377] font-light mt-4 pr-16  w-[100%] '>
                  The ESX trading platform will be linked with a fully
                  electronic central securities depository (CSD) to ensure
                  efficient post-trade clearing and settlement processes from
                  the launch of the exchange.
                </p>

                <Link href='#' className='flex text-[16px] mt-5 px-0 '>
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
              <div className='w-[40%] '>
                <Image
                  height={200}
                  width={200}
                  src={home.src}
                  alt='manager'
                  className='w-[100%] h-[100%] object-cover'
                />
              </div>
            </div>
          </Card>
          <div className='mt-5 flex'>
            <Card width='w-[50%] flex gap-4 flex-col shadow-[0] '>
              <div className='p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]' />
              <main className='pb-[20px] px-[20px] flex flex-col h-full'>
                <span className='text-[12px] font-semibold text-primary-blue'>
                  Listing and Admission to Trading
                </span>
                <h1 className="text-black text-2xl mt-[5px] font-normal font-['Open Sans'] flex items-center gap-5 ">
                  <span>ESX Listing Rules</span>
                  <ChevronRightIcon className='w-8 h-8 mt-1 text-primary-golden' />
                </h1>
                <p className="text-black text-sm font-light mt-[15px] font-['Open Sans']">
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut
                </p>

                <Link className='mt-auto' href='#'>
                  View More
                </Link>
              </main>
            </Card>
            <Card width='w-[50%] ml-5 flex gap-4 flex-col shadow-[0] '>
              <div className='p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]' />
              <main className='pb-[20px] px-[20px] flex flex-col h-full'>
                <span className='text-[12px] font-semibold text-primary-blue'>
                  Members
                </span>
                <h1 className="text-black text-2xl mt-[5px] font-normal font-['Open Sans'] flex items-center gap-5 ">
                  <span>ESX Membership Rules</span>
                  <ChevronRightIcon className='w-8 h-8 mt-1 text-primary-golden' />
                </h1>
                <p className="text-black text-sm font-light mt-[15px] font-['Open Sans']">
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut
                </p>

                <Link className='mt-auto' href='#'>
                  View More
                </Link>
              </main>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
