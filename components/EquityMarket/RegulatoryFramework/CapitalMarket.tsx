"use client";
import { BackButton } from "@/components/Button/BackButton";
import Image from "next/image";
import React from "react";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import bannerImage from "/public/images/about-banner.png";
import LinkButton from "@/components/Button/LinkButton";
interface CapitalMarketProps {
  setStep: (value: number) => void;
  step: number;
}

const CapitalMarket: React.FC<CapitalMarketProps> = ({ setStep, step }) => {
  const items = ["Capital Market Regulatory Environment", "ESX Rulebook "];

  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner
        backgroundImage={bannerImage}
        title='Regulatory Framework'
        description='“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse'
      />
      <div className='grid sm:grid-cols-9 gap-8 lg:px-28 py-7'>
        <Card width='col-span-2  hidden lg:flex flex-col text-left  py-[20px] px-[20px]  shadow-[0] h-fit '>
          <h6 className='ml-2 mb-4'>
            <BackButton setStep={setStep} link='/equity-market'>
              Equity Market
            </BackButton>{" "}
            {"> Regulatory Framework"}
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
          <Card width='col-span-5 flex flex-col  px-10 pt-7'>
            <h1 className='text-header w-fit border-primary-golden border-b-[3px] mb-5'>
              Capital market regulatory environment
            </h1>

            <div className='flex flex-col md:flex-row pb-10 md:pb-0  '>
              <div className='  space-y-4 pb-10'>
                <main className='flex flex-col pt-2 gap-5 h-full '>
                  <p className='text-black text-paragraphSmall font-light   '>
                    ESX will serve as a licensed securities exchange platform by
                    the ECMA in line with Article 30 and 31 of the Capital
                    Market Proclamation No.1248/2021. ECMA is the apex regulator
                    of the capital markets in Ethiopia and is responsible for
                    setting the legal framework and regulating entities
                    interested in participating ESX
                  </p>

                  <LinkButton
                    className='text-black mt-[18px] text-base font-semibold   '
                    href='https://ecma.gov.et/'
                    target='_blank'
                  >
                    ECMA directives
                  </LinkButton>
                </main>
              </div>
              {/* <Image
                src={"/images/austin-distel-EMPZ7yRZoGw-unsplash 1.png"}
                height={500}
                width={400}
                alt=''
                className='aspect-square hidden md:block w-[40%] object-cover'
              /> */}
            </div>
          </Card>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default CapitalMarket;
