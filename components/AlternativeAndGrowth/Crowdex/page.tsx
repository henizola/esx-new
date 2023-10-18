"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import alternativeAndGrowthBanner from "/public/images/AlternativeAndGrowthBanner.png";
import youtube from "/public/images/youtube.png";

interface AlternativeAndGrowthProps {
  setStep: (value: number) => void;
  step: number;
}

const Page: React.FC<AlternativeAndGrowthProps> = ({ setStep, step }) => {
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
        backgroundImage={alternativeAndGrowthBanner}
        title='What is CrowdEx?'
        description='“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci '
      />
      <div className='flex w-full  lg:px-28 py-7'>
        <Card width='w-[30%] hidden mr-5 lg:flex flex-col text-left  py-10 px-5'>
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
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-3  '>
            <Card width='w-[100%] pb-10 h-[100%]'>
              <div className='flex flex-col p-0 mx-0'>
                <div className='lg:h-[40vh]'>
                  <h1 className='text-[24px] px-5 lg:px-10 mt-5 lg:mt-10  text-left text-primary-blue   font-normal '>
                    What is CrowdEx?
                  </h1>

                  <div className='w-[100%] flex  flex-col  mt-0 px-5 lg:px-10 py-5'>
                    <p className='w-[100%]  text-[14px]   font-normal  pt-0 leading-6 text-gray'>
                      ESX’s CrownEX is a securities-based crowd-invest platform,
                      offering the SMEs not only a chance to raise equity and/or
                      to receive loans from specialized investors and from the
                      general public, but also to receive support for their
                      business plan and preparation for the funding operation
                      itself.
                    </p>
                  </div>
                  <Link
                    href='#'
                    className='flex text-[16px] mb-5 px-5 lg:px-10'
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

                <div className='w-[100%] flex   flex-col  mt-0 pt-0'>
                  <h1 className='text-[24px] h-[77px] px-5 lg:px-10 py-0  text-left text-white  w-[100%] bg-primary-blue   font-normal '></h1>

                  <div className='w-[100%] flex  flex-col  mt-0 px-5 lg:px-10 py-5'>
                    <p className='w-[100%]  text-[14px]   font-normal  pt-0 leading-6 text-gray'>
                      The platform provides a safe and easier avenue to access
                      (equity and/or debt) to SMEs, it raises awareness amongst
                      investors and serves as a stepping stone to attract
                      listings to ESX main markets
                    </p>
                  </div>

                  <Link
                    href='#'
                    className='flex text-[16px] lg:mt-5 px-5 lg:px-10 '
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
              </div>
            </Card>
            <Card width='w-[100%] mt-5 lg:mt-0 pb-10 h-[100%]'>
              <div className='flex flex-col p-0 mx-0'>
                <div className='h-[fit-content] lg:h-[40vh]'>
                  <div className='w-[100%] flex flex-col lg:flex-row h-[250px]  lg:h-[45%]    mt-0 px-5 lg:px-10 pt-5'>
                    <Image
                      height={200}
                      width={200}
                      src={youtube.src}
                      alt='manager'
                      className='w-[auto] object-cover h-[220px] lg:h-[100%]'
                    />
                    <div className='height-[100%]  '>
                      <Link
                        href='#'
                        className='flex text-[16px] mt-2 lg:mt-[85%] pl-0 lg:pl-5  '
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
                  </div>
                  <div className='w-[100%] flex flex-col lg:flex-row h-[250px] lg:h-[45%]    mt-0 px-5 lg:px-10 pt-5'>
                    <Image
                      height={200}
                      width={200}
                      src={youtube.src}
                      alt='manager'
                      className='w-[auto] object-cover h-[220px] lg:h-[100%]'
                    />
                    <div className='height-[100%]  '>
                      <Link
                        href='#'
                        className='flex text-[16px] mt-2 lg:mt-[85%] pl-0 lg:pl-5  '
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
                  </div>
                </div>

                <div className='w-[100%] flex   flex-col mt-5 md:mt-10 lg:mt-0 pt-0'>
                  <h1 className='text-[24px] h-[77px] px-5 lg:px-10 py-0  text-left text-white  w-[100%] bg-primary-blue   font-normal '></h1>

                  <div className='w-[100%] flex  flex-col  mt-0 px-5 lg:px-10 py-5'>
                    <p className='w-[100%]  text-[14px]   font-normal  pt-0 leading-6 text-gray'>
                      The platform provides a safe and easier avenue to access
                      (equity and/or debt) to SMEs, it raises awareness amongst
                      investors and serves as a stepping stone to attract
                      listings to ESX main markets
                    </p>
                  </div>

                  <Link
                    href='#'
                    className='flex text-[16px] mt-5 px-5 lg:px-10 '
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
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Card width='w-[100%] mr-0 mb-8 mt-5 lg:mt-0  flex flex-col text-left  '>
        <div className='lg:p-10 bg-primary-blue font-normal py-10 lg:py-20 w-[100%] '>
          <p className=' text-white text-[16px] text-center w-[100%] lg:w-[72%] ml-[50%] -translate-x-[50%]'>
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
