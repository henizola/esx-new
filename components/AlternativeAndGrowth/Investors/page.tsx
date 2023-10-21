"use client";
import Image from "next/image";
import React from "react";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import issuersBanner from "/public/images/InvestorsBanner.png";
import whoweare from "/public/images/who-we-are-circle.png";

interface InvestorsProps {
  setStep: (value: number) => void;
  step: number;
}

const Page: React.FC<InvestorsProps> = ({ setStep, step }) => {
  const items = [
    "Overview",
    "Crowdex",
    "Benefits for Investors",
    "Investors",
    "Investors",
  ];

  return (
    <div className='flex flex-col w-full'>
      <Banner
        backgroundImage={issuersBanner}
        title='Investors'
        description='“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci '
      />
      <div className='flex w-full  lg:px-28 py-7'>
        <Card width='w-[30%] mr-5 hidden lg:flex flex-col text-left  py-10 px-5'>
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
          <Card width='w-[100%] md:px-4 '>
            <div className='flex flex-col md:flex-row md:py-8 md:mx-10 '>
              <div className='md:w-[35%] w-[100%] md:mr-[3%]'>
                {" "}
                <Image
                  height={300}
                  width={200}
                  src={whoweare.src}
                  alt='manager'
                  className='w-[100%] h-[250px] md:h-[auto] border object-cover md:rounded-full '
                />
              </div>{" "}
              <div className='md:w-[60%] px-5 py-5 md:px-0 md:py-0'>
                <div className='w-[100%] flex  flex-col  mt-0 pt-0'>
                  <p className='text-[12px] font-semibold'>Crowdex</p>
                  <h1 className='text-[30px]    font-normal   mt-3   pt-0'>
                    Investors
                  </h1>
                  <hr className='  mt-3  mb-3' />
                  <p className='w-[90%]  text-[16px]   font-normal mt-2 pt-0 leading-6  '>
                    They have access to a new mechanism for getting funds that
                    is not dependent on the banking system, that does not
                    generate any dilution of their capital and that does not
                    require much in terms of disclosure.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Card width='w-[100%] mr-0 mb-8  flex flex-col text-left  '>
        <div className='p-10 bg-primary-blue font-normal py-20 w-[100%] '>
          <p className=' text-white text-[16px] text-center w-[72%] ml-[50%] -translate-x-[50%]'>
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
