"use client";
import Image from "next/image";
import React from "react";
import report2 from "/public/images/Reports1.png";
import report3 from "/public/images/Reports2.png";
import report1 from "/public/images/Reports5.png";
import report4 from "/public/images/Reports7.png";

import Link from "next/link";
import reportsBanner from "/public/images/Reports6.png";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";

interface ReportsProps {
  setStep: (value: number) => void;
  step: number;
}

const Reports: React.FC<ReportsProps> = ({ setStep, step }) => {
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
        backgroundImage={reportsBanner}
        title='ESX Reports'
        description='“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci '
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
        <div className='grid grid-cols-1  gap-3 w-[100%]'>
          <Card width='w-[100%] my-0  h-[100%] '>
            <div className=' flex p-0  mx-0 '>
              <div className='w-[60%] flex  flex-col  p-5 px-10 pr-0 '>
                <h1 className='text-[40px]'>ESX reports</h1>
                <hr />
                <p className='text-[16px] font-light mt-4 pr-16  w-[100%] '>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                  erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
                  exerci tation
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
          <div className='grid grid-cols-2 gap-5 mt-5'>
            <Card width='w-[100%] my-0  h-[100%] '>
              <div className=' flex flex-col p-0  mx-0 '>
                <div className='w-[100%] '>
                  <Image
                    height={200}
                    width={200}
                    src={report2.src}
                    alt='manager'
                    className='w-[100%] h-[100%] object-cover'
                  />
                </div>
                <div className='w-[100%] flex  flex-col  p-5 px-5 pr-0 '>
                  <p className='text-[16px] font-normal mt-2 pr-16  w-[100%] '>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy
                  </p>
                  <p className='text-[12px] font-light mt-2 pr-16  w-[100%] '>
                    June, 2023
                  </p>
                  <p className='text-[16px] font-light mt-2 pr-16  w-[100%] '>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
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
              </div>
            </Card>
            <Card width='w-[100%] my-0  h-[100%] '>
              <div className=' flex flex-col p-0  mx-0 '>
                <div className='w-[100%] '>
                  <Image
                    height={200}
                    width={200}
                    src={report4.src}
                    alt='manager'
                    className='w-[100%] h-[100%] object-cover'
                  />
                </div>
                <div className='w-[100%] flex  flex-col  p-5 px-5 pr-0 '>
                  <p className='text-[16px] font-normal mt-2 pr-16  w-[100%] '>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy
                  </p>
                  <p className='text-[12px] font-light mt-2 pr-16  w-[100%] '>
                    June, 2023
                  </p>
                  <p className='text-[16px] font-light mt-2 pr-16  w-[100%] '>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
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
              </div>
            </Card>
            <Card width='w-[100%] my-0  h-[100%] '>
              <div className=' flex flex-col p-0  mx-0 '>
                <div className='w-[100%] '>
                  <Image
                    height={200}
                    width={200}
                    src={report3.src}
                    alt='manager'
                    className='w-[100%] h-[100%] object-cover'
                  />
                </div>
                <div className='w-[100%] flex  flex-col  p-5 px-5 pr-0 '>
                  <p className='text-[16px] font-normal mt-2 pr-16  w-[100%] '>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy
                  </p>
                  <p className='text-[12px] font-light mt-2 pr-16  w-[100%] '>
                    June, 2023
                  </p>
                  <p className='text-[16px] font-light mt-2 pr-16  w-[100%] '>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
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
              </div>
            </Card>
            <Card width='w-[100%] my-0  h-[100%] '>
              <div className=' flex flex-col p-0  mx-0 '>
                <div className='w-[100%] '>
                  <Image
                    height={200}
                    width={200}
                    src={report2.src}
                    alt='manager'
                    className='w-[100%] h-[100%] object-cover'
                  />
                </div>
                <div className='w-[100%] flex  flex-col  p-5 px-5 pr-0 '>
                  <p className='text-[16px] font-normal mt-2 pr-16  w-[100%] '>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy
                  </p>
                  <p className='text-[12px] font-light mt-2 pr-16  w-[100%] '>
                    June, 2023
                  </p>
                  <p className='text-[16px] font-light mt-2 pr-16  w-[100%] '>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
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
              </div>
            </Card>{" "}
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

export default Reports;
