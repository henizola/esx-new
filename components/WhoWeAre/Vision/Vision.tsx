"use client";
import React, { useState } from "react";
import Card from "../../Card/Card";
import Banner from "../../Banner/banner";
import image from "/public/images/vision-banner.png";
import values from "/public/images/value.png";
import mission from "/public/images/mission.png";
import vision from "/public/images/vision.png";
import Link from "next/link";
import Image from "next/image";

interface VisionProps {
  setStep: (value: number) => void;
  step: number;
}

const Vision: React.FC<VisionProps> = ({ setStep, step }) => {
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
        backgroundImage={image}
        title='Our vision & mission'
        description='“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse'
      />
      <div className='flex w-full border px-4 lg:px-28 py-7'>
        <Card width='hidden lg:flex w-[30%] mr-5 flex flex-col text-left  py-10 px-5'>
          <h6 className='ml-2 mb-4'>About Us</h6>
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

        <div className='flex flex-col w-100% lg:w-[70%]'>
          <div className='grid grid-cols-1 gap-3 lg:gap-0 w-[100%]'>
            <Card width='w-[100%] my-0 h-[100%] pb-2 md:pb-5'>
              <div className=' bg-primary-blue h-[68px] w-[100%] lg:w-[94%] mt-0  md:mt-5 float-right'>
                <Image
                  height={200}
                  width={200}
                  src={mission.src}
                  alt='manager'
                  className='w-[auto] object-cover h-[40px] ml-[30px] mt-4'
                />
              </div>
              <div className=' w-[95%] flex md:py-5 mx-4 md:mx-10  p-4'>
                <div className='w-[100%] flex  flex-col lg:ml-10  mt-0 pt-0'>
                  <h1 className='text-[24px] italic  py-0 mb-0 pl-0 mt-0 text-left  w-[100%] font-sans font-normal '>
                    Our Mission
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
                      To provide a modern, reliable, transparent, and efficient
                      environment for securities trading in Ethiopia, through
                      adaptation of modern exchange business operations, skill,
                      technology, and trust.
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
                      Contribute to the economic development of Ethiopia by
                      promoting savings and the efficient aggregation of capital
                      for long term investment.
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
                      Building a sustainable institution that is dynamic and
                      fitting to both Ethiopian and regional issuers and
                      investors.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            <Card width='w-[100%] my-0 h-[100%] pb-5 md:pb-10'>
              <div className=' bg-primary-blue h-[68px] w-[100%] lg:w-[94%] mt-0  float-right'>
                <Image
                  height={200}
                  width={200}
                  src={vision.src}
                  alt='manager'
                  className='w-[auto] object-cover h-[40px] ml-[30px] mt-4'
                />
              </div>
              <div className=' w-[95%] flex py-0 ml-4 md:mx-10  p-4'>
                <div className='w-[100%] flex  flex-col lg:ml-10  mt-0 pt-0'>
                  <h1 className='text-[24px] italic  py-0 mb-2 pl-0 mt-5 text-left  w-[100%] font-sans font-normal '>
                    Our Vision
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
                      To become a leading innovative and integrated securities
                      exchange in Africa.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            <Card width='w-[100%] my-0 h-[100%] pb-5 md:pb-10'>
              <div className=' bg-primary-blue h-[68px] w-[100%] lg:w-[94%] mt-0  float-right'>
                <Image
                  height={200}
                  width={200}
                  src={values.src}
                  alt='manager'
                  className='w-[auto] object-cover h-[40px] ml-[30px] mt-4'
                />
              </div>
              <div className=' w-[95%] flex py-5 ml-4 md:mx-10   p-4'>
                <div className='w-[100%] flex  flex-col lg:ml-10  mt-0 pt-0'>
                  <h1 className='text-[24px] italic  py-2 mb-0 pl-0 mt-0 text-left  w-[100%] font-sans font-normal '>
                    Our Values
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
                      Transparency, Innovation, Efficiency, Sustainability,
                      Integrity, Fairness, Excellence
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 mt-5 gap-3 w-[100%]'>
            <Card width='w-[100%] my-0 h-[100%] pb-5'>
              <div className=' flex py-5 mx-4 md:mx-10  p-2'>
                <div className='w-[100%] flex  flex-col  mt-0 pt-0'>
                  <span className='text-[12px] font-semibold text-primary-blue'>
                    Primary Function
                  </span>
                  <p className='text-[14px] w-[100%] mt-2'>
                    {" "}
                    ESX will play a critical role in the market development,
                    advocacy, policy, and institutional reform, in cooperation
                    and consultation with relevant stakeholders to develop the
                    Ethiopian capital markets, with the aim to:
                  </p>
                  <div className='w-[100%] relative flex justify-between  text-[15px] font-sans font-light mt-2 px-8 leading-6 text-gray'>
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
                    <p className='pl-2 py-1 text-[16px] font-light'>
                      Build investor confidence
                    </p>
                  </div>
                  <div className='w-[100%] relative flex justify-between  text-[15px] font-sans font-light mt-2 px-8 leading-6 text-gray'>
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
                    <p className='pl-2 py-1 text-[16px] font-light'>
                      Attract new issuers and investors to the market in
                      particular SMEs with high growth potential
                    </p>
                  </div>{" "}
                  <div className='w-[100%] relative flex justify-between  text-[15px] font-sans font-light mt-2 px-8 leading-6 text-gray'>
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
                    <p className='pl-2 py-1 text-[16px] font-light'>
                      Diversify its product and service offerings and maintain
                      new product innovation and development
                    </p>
                  </div>{" "}
                  <div className='w-[100%] relative flex justify-between  text-[15px] font-sans font-light mt-2 px-8 leading-6 text-gray'>
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
                    <p className='pl-2 py-1 text-[16px] font-light'>
                      Diversify its product and service offerings and maintain
                      new product innovation and development
                    </p>
                  </div>
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
            <Card width='w-[100%] my-0 h-[100%] pb-5'>
              <div className=' flex py-5 mx-4 md:mx-10  p-2'>
                <div className='w-[100%] flex  flex-col h-[100%]   mt-0 pt-0'>
                  <div className='flex flex-col justify-between h-[100%] '>
                    <div>
                      <span className='text-[12px] font-semibold text-primary-blue'>
                        Secondary Function
                      </span>
                      <p className='text-[14px] w-[100%] mt-2'>
                        {" "}
                        ESX will also contribute to positioning Ethiopia as a
                        key regional financial center and destination to doing
                        business, by
                      </p>
                      <div className='w-[100%] relative flex justify-between  text-[15px] font-sans font-light mt-2 px-8 leading-6 text-gray'>
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
                        <p className='pl-2 py-1 text-[16px] font-light'>
                          Studying, advocating, and implementing strategies and
                          recommendations that are aimed at attracting
                          investments into ESX across the region
                        </p>
                      </div>
                      <div className='w-[100%] relative flex justify-between  text-[15px] font-sans font-light mt-2 px-8 leading-6 text-gray'>
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
                        <p className='pl-2 py-1 text-[16px] font-light'>
                          Pursuing partnerships and collaboration with regional
                          and global industry players
                        </p>
                      </div>
                    </div>
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
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
