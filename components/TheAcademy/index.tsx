"use client";
import Image from "next/image";
import React from "react";
import report1 from "/public/images/academy1.png";

import Link from "next/link";
import Banner from "../Banner/banner";
import Card from "../Card/Card";
import reportsBanner from "/public/images/bg.jpg";

interface ReportsProps {
  setStep: (value: number) => void;
  step: number;
}

const TheAcademy: React.FC<ReportsProps> = ({ setStep, step }) => {
  const items = [
    "Overview",
    "Courses and programs",
    "ESX Training Academy Calendar",
    "FAQ's",
  ];

  return (
    <div className='flex flex-col w-full'>
      <Banner
        backgroundImage={reportsBanner}
        title='The Academy'
        description='ESX has observed capacity gaps across financial institutions and government agencies on key aspects of capital market products, services, and infrastructures. As ESX will be operating in a market where the development of the Ethiopian Capital Markets ecosystem is just beginning, it is crucial for ESX to play a leading role in investor education, capacity development, and financial literacy and inclusion in Ethiopia.
        In addition to various levels of communication and awareness efforts, e.g., consultation workshops, media and public relations activities, ESX aims to set up an academy to provide continuous education and capacity building activities to various stakeholders.'
      />
      <div className='flex w-full  px-28 py-7'>
        <Card width='w-[30%] mr-5 flex flex-col text-left  py-10 px-5'>
          <h6 className='ml-2 mb-4'>ESX Academy</h6>{" "}
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
        <div className='grid grid-cols-1  gap-3 w-[100%]'>
          <Card width='w-[100%] my-0  h-[100%] '>
            <div className=' flex p-0  mx-0 '>
              <div className='w-[60%] flex  flex-col  p-5 pt-[50px] px-10 pr-0 '>
                <h1 className='text-[30px]'>Overview</h1>

                <p className='text-[16px] font-light mt-4 text-[#707377] pr-16  w-[100%] '>
                  ESX has observed capacity gaps across financial institutions
                  and government agencies on key aspects of capital market
                  products, services, and infrastructures. As ESX will be
                  operating in a market where the development of the Ethiopian
                  Capital Markets ecosystem is just beginning, it is crucial for
                  ESX to play a leading role in investor education, capacity
                  development, and financial literacy and inclusion in Ethiopia.
                </p>
                <Link
                  href='#'
                  className='flex text-[16px] mb-[50px] mt-5 px-0 '
                >
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
                  src={report1.src}
                  alt='manager'
                  className='w-[100%] h-[90%] pt-[5%] pr-[20px] object-cover'
                />
              </div>
            </div>
          </Card>
          <Card width='w-[100%] my-0  h-[100%] '>
            <div className=' flex p-0  mx-0 '>
              <div className='w-[60%] flex  flex-col  p-5 px-10 pr-0 '>
                <h1 className='text-[40px]'>Overview</h1>

                <p className='text-[16px] font-light mt-4 pr-16  w-[100%] '>
                  ESX has observed capacity gaps across financial institutions
                  and government agencies on key aspects of capital market
                  products, services, and infrastructures. As ESX will be
                  operating in a market where the development of the Ethiopian
                  Capital Markets ecosystem is just beginning, it is crucial for
                  ESX to play a leading role in investor education, capacity
                  development, and financial literacy and inclusion in Ethiopia.
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
                  src={report1.src}
                  alt='manager'
                  className='w-[100%] h-[100%] object-cover'
                />
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card width='w-[100%] mr-0 flex flex-col text-left p-4 py-14 '>
        <div className=''>
          <h1 className='text-primary-blue text-[24px] font-bold w-[100%] text-center'>
            Contact the team
          </h1>
          <p className=' text-primary-black text-[16px] font-normal py-3 w-[100%] text-center'>
            Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
            consectetuer adipiscing
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

export default TheAcademy;
