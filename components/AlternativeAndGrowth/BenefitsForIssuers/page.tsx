"use client";
import Image from "next/image";
import React from "react";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import benefitsForIssuersBanner from "/public/images/BenefitsForIssuersBanner.png";
import benefit3 from "/public/images/benefit3.png";

interface BenefitsForIssuersProps {
  setStep: (value: number) => void;
  step: number;
}

const Page: React.FC<BenefitsForIssuersProps> = ({ setStep, step }) => {
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
        backgroundImage={benefitsForIssuersBanner}
        title='Benefits for Issuers'
        description='“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci '
      />
      <div className='flex w-full  lg:px-28 py-7'>
        <Card width='w-[30%] mr-5 hidden  lg:flex flex-col text-left  py-10 px-5'>
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
          <Card width='w-[100%] my-0 h-[100%] pb-5'>
            <div className='flex flex-col py-5 mx-5 md:mx-10  p-2'>
              <div className='w-[100%] flex  flex-col  mt-0 pt-0'>
                <h1 className='text-[20px] md:text-[40px]'>
                  Benefits for Issuers
                </h1>
                <p className='text-[14px] md:text-[16px] text-primary-blue  w-[100%] mt-2'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt
                </p>
              </div>
            </div>
          </Card>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 '>
            <div className='w-[100%] '>
              <div className='h-[239px]'>
                <Image
                  height={200}
                  width={200}
                  src={benefit3.src}
                  alt='manager'
                  className='w-[100%] object-cover h-[100%]'
                />
              </div>
              <h1 className='text-[24px] h-[77px] px-10 py-0 my-0 md:my-5 text-left text-white  w-[100%] bg-primary-blue   font-normal '></h1>

              <Card width='w-[100%] pb-10  md:mt-5 px-5 py-5 '>
                <h1 className='text-[20px] '>Benefits for Issuers</h1>
                <p className='w-[100%] mt-3 text-[14px]   font-normal  pt-0 leading-6 text-gray'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy
                </p>
              </Card>
            </div>
            <div className='w-[100%] '>
              <div className='h-[239px]'>
                <Image
                  height={200}
                  width={200}
                  src={benefit3.src}
                  alt='manager'
                  className='w-[100%] object-cover h-[100%]'
                />
              </div>
              <h1 className='text-[24px] h-[77px] px-10 py-0 my-0 md:my-5 text-left text-white  w-[100%] bg-primary-blue   font-normal '></h1>

              <Card width='w-[100%] pb-10  md:mt-5 px-5 py-5 '>
                <h1 className='text-[20px] '>Benefits for Issuers</h1>
                <p className='w-[100%] mt-3 text-[14px]   font-normal  pt-0 leading-6 text-gray'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy
                </p>
              </Card>
            </div>

            <div className='w-[100%] '>
              <div className='h-[239px]'>
                <Image
                  height={200}
                  width={200}
                  src={benefit3.src}
                  alt='manager'
                  className='w-[100%] object-cover h-[100%]'
                />
              </div>
              <h1 className='text-[24px] h-[77px] px-10 py-0 my-0 md:my-5 text-left text-white  w-[100%] bg-primary-blue   font-normal '></h1>

              <Card width='w-[100%] pb-10  md:mt-5 px-5 py-5 '>
                <h1 className='text-[20px] '>Benefits for Issuers</h1>
                <p className='w-[100%] mt-3 text-[14px]   font-normal  pt-0 leading-6 text-gray'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Card width='w-[100%] mr-0 mb-8  flex flex-col text-left  '>
        <div className='md:p-10 bg-primary-blue font-normal py-5 md:py-20 w-[100%] '>
          <p className=' text-white text-[14px] md:text-[16px] text-center px-5 w-[100%] md:w-[72%] ml-[50%] -translate-x-[50%]'>
            Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum
            dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam erat
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Page;
