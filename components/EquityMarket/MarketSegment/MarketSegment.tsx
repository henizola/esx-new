"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import manager from "/public/images/manager.png";
import sliderbannerImage from "/public/images/slider-background.png";
import bannerImage from "/public/images/about-banner.png";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import CustomSlider from "../../Slider/Slider";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { BackButton } from "@/components/Button/BackButton";
interface ListingRulesProps {
  setStep: (value: number) => void;
  step: number;
}

const MarketSegment: React.FC<ListingRulesProps> = ({ setStep, step }) => {
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
        title='Listing On Esx'
        background='bg-light-blue'
      />
      <div className='grid sm:grid-cols-9 gap-8 lg:px-28 py-7'>
        <Card width='col-span-2 hidden lg:flex flex-col text-left  py-[20px] px-[20px] h-fit '>
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
          {/* <button
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
          <div className='grid sm:grid-cols-5 gap-5'>
            <Card width='col-span-5 flex flex-col pb-3'>
              <h1 className='text-header w-fit  font-[400] pt-0 mt-5 mx-10 mb-0 border-b-[3px] border-light-golden'>
                Market Segments
              </h1>

              {/* <Image
                src={"/images/behnam.png"}
                height={500}
                width={400}
                alt=''
                className='col-span-1 lg:hidden block w-[100%] h-[200px] object-cover'
              /> */}
              <div className='flex w-full'>
                <div className='pt-[20px] px-[20px] w-[100%] space-y-[30px]'>
                  <main className=' px-5 pt-0'>
                    <h1 className='text-black text-[20px] lg:text-subHeader font-normal    flex items-center gap-5 '>
                      <span>Main Market</span>{" "}
                      {/* <ChevronRightIcon className='w-8 h-8 mt-1 text-primary-golden' /> */}
                    </h1>
                    <p className='text-black mt-[13px] text-paragraphSmall font-light   '>
                      Serves as a platform for large and mature issuers that are
                      capable of meeting ESX’s listing requirements
                    </p>
                    <p className='text-black mt-[15px] text-paragraphSmall font-light   '>
                      Listing on ESX is a testament of commitment by companies
                      to transparency and integrity
                    </p>
                    <p className='text-black mt-[15px] text-paragraphSmall font-light  '>
                      ESX’s full fledged market infrastructure provides the
                      professional guidance, innovation and reliability, and
                      opportunity companies need to create wealth, growth and
                      prosperity
                    </p>
                    <hr className=' mt-[25px] border border-gray/30 ' />
                  </main>
                  <main className='px-5 pt-0'>
                    <h1 className='text-black text-[20px] lg:text-subHeader font-normal    flex items-center gap-5 '>
                      <span>Enterprise Growth Market</span>{" "}
                      {/* <ChevronRightIcon className='w-8 h-8 mt-1 text-primary-golden' /> */}
                    </h1>
                    <p className='text-black mt-[15px] text-paragraphSmall font-light  '>
                      Market for small and medium sized companies with lighter
                      listing requirements adopted to SMEs and high growth, high
                      potential equity issuers
                    </p>
                    <p className='text-black mt-[15px] text-paragraphSmall font-light   '>
                      Provides issuers access with a wide range of capital to
                      accelerate their growth and development and serve as a
                      springboard into ESX’s Main Market
                    </p>
                  </main>
                </div>
                {/* <Image
                  src={"/images/behnam.png"}
                  height={500}
                  width={400}
                  alt=''
                  className='col-span-1 hidden lg:block h-full w-[45%] object-cover'
                /> */}
              </div>
              <h1 className='col-span-5 pb-[20px]  lg:py-[30px] px-[40px] text-black  text-paragraphSmall font-light    '>
                Both markets provide businesses the platform to list and trade
                securities in an efficient and reliable manner.
              </h1>
            </Card>
            <div className='col-span-5 grid sm:grid-cols-2 gap-5'>
              <Card width='py-[23px] px-[20px] '>
                <h1 className='text-black text-[20px] lg:text-subHeader font-normal    flex items-center gap-5 '>
                  Listing on ESX
                </h1>
                <p className='mt-[8px] text-justify   text-paragraphSmall font-light    leading-snug'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy
                </p>
              </Card>
              <Card width='py-[23px] px-[20px] '>
                <h1 className='text-black text-[20px] lg:text-subHeader font-normal    flex items-center gap-5 '>
                  Trading and operations on ESX
                </h1>
                <p className='text-justify mt-[8px]   text-paragraphSmall font-light    leading-snug'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy
                </p>
                {/* <Link href='#' className='flex text-[16px] mt-[15px]'>
                  View more
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
                </Link> */}
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default MarketSegment;
