"use client";
import LinkButton from "@/components/Button/LinkButton";
import Image from "next/image";
import React from "react";
import Card from "../../Card/Card";
interface CapitalMarketProps {
  setStep: (value: number) => void;
  step: number;
}

const CapitalMarket: React.FC<CapitalMarketProps> = ({ setStep, step }) => {
  const items = ["Capital Market Regulatory Environment", "ESX Rulebook "];

  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <div className='grid sm:grid-cols-9 gap-8 '>
        <div className='col-span-9 space-y-5 w-[100vw] lg:w-[auto] h-[auto]'>
          <Card width='col-span-5 flex flex-col '>
            <h1 className='py-[18px] mx-10 text-[20px] md:text-header border-b-[3px] border-light-golden w-fit text-left pb-0'>
              Capital market regulatory environment
            </h1>
            <Image
              src={"/images/austin-distel-EMPZ7yRZoGw-unsplash 1.png"}
              height={500}
              width={400}
              alt=''
              className='aspect-square md:hidden  w-[100%] h-[200px] object-cover'
            />
            <div className='flex flex-col md:flex-row pb-10 md:pb-0 px-5 '>
              <div className='md:py-[10] px-[25px]  space-y-4 pt-0 pb-10'>
                <main className='flex flex-col pt-[39px] gap-5 h-full '>
                  <p className='text-black text-paragraphSmall font-light   '>
                    ESX is licensed by the ECMA as a securities exchange in line
                    with Article 30 and 31 of the Capital Market Proclamation
                    No.1248/2021
                  </p>
                  <p className='text-black text-paragraphSmall font-light   '>
                    ECMA is the apex regulator of the capital markets in
                    Ethiopia and is responsible for setting the legal framework
                    and regulating entities interested in participating ESX
                  </p>
                  <p className='text-black text-paragraphSmall font-light   '>
                    ECMA is responsible for setting the legal framework and
                    regulating entities interested in participating ESX
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
