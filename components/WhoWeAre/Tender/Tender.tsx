"use client";
import React from "react";

import Image from "next/image";
import reportsBanner from "/public/images/Management.png";
import backgroundImage from "/public/images/Career-Banner.png";
import careear from "/public/images/career-1.png";
import icon1 from "/public/images/icon1.png";
import icon2 from "/public/images/icon2.png";
import icon3 from "/public/images/icon3.png";
import icon4 from "/public/images/icon4.png";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import Testimonials from "../../Testimonials/Testimonials";
import Accordion from "../../Accordion/Accordion";
import Link from "next/link";
import Pagination from "../../Paginnation/Pagination";

interface TendersProps {
  setStep: (value: number) => void;
  step: number;
}

const Tenders: React.FC<TendersProps> = ({ setStep, step }) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: "cover",
    height: "60vh",
    width: "100vw",
  };

  const items = [
    "Welcome Message",
    "Overview",
    "Vision & Mission",
    "Organizational Structure",
    "Board of Directors",
    "Management",
    // "ESX Reports",
    "Careers",
    // "Tender",
  ];

  return (
    <div className='flex flex-col w-full'>
      <Banner
        backgroundImage={reportsBanner}
        title='Tenders'
        background='bg-light-blue'
      />
      <div className='flex w-full px-4 lg:px-28 py-7'>
        <Card width='w-[25%] hidden lg:flex mr-5 h-fit   flex-col text-left  py-10 px-5'>
          <h6 className='ml-7 mb-4'>About Us</h6>
          {items.map((item, index) => (
            <button
              key={index}
              className={`text-left ml-8 my-2 font-light  `}
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
          <Card width='w-[100%] my-0 py-5  h-[fit-content] '>
            <div className='w-[100%] flex p-0  mx-0 '>
              <div className='flex  flex-col px-10  pt-0 pr-0'>
                <p className='text-[12px] md:text-[16px] font-light mt-4 pr-16  w-[100%] '>
                  ESX is committed to fostering an inclusive, innovative, and
                  collaborative work environment. Join us in shaping the
                  nation&apos;s capital markets landscape by exploring a variety
                  of exciting career pathways with us.
                </p>
              </div>
            </div>
          </Card>
          <Card width='w-[100%] my-0 py-5  h-[fit-content] '>
            <div className='w-[100%] flex p-0  mx-0 '>
              <div className='flex  flex-col px-10  pt-0 pr-0'>
                <h1 className='text-[30px] md:text-[40px] w-[100%] '>
                  Tendors
                </h1>

                <p className='text-[12px] md:text-[16px] font-light mt-4 pr-16  w-[100%] '>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                  erat volutpat. Ut wisi enim ad
                </p>
              </div>
            </div>
          </Card>

          <div className='grid  md:grid-cols-2 gap-5 mt-3 '>
            <Card width='w-[100%] mt-0 py-5 px-5 flex  flex-col h-[fit-content] '>
              <h1 className='text-[12px] font-semibold '>Tenders </h1>
              <h2 className='text-paragraphSmall font-normal'>
                Lorem ipsum dolor sit amet, consecLorem ipsum
              </h2>
              <p className='text-[16px ] font-light my-2 mt-4   '>
                Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                ipsum{" "}
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
            </Card>
            <Card width='w-[100%] mt-0 py-5 px-5 flex  flex-col h-[fit-content] '>
              <h1 className='text-[12px] font-semibold '>Tenders </h1>
              <h2 className='text-paragraphSmall font-normal'>
                Lorem ipsum dolor sit amet, consecLorem ipsum
              </h2>
              <p className='text-[16px ] font-light my-2 mt-4   '>
                Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                ipsum{" "}
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
            </Card>
            <Card width='w-[100%] mt-0 py-5 px-5 flex  flex-col h-[fit-content] '>
              <h1 className='text-[12px] font-semibold '>Tenders </h1>
              <h2 className='text-paragraphSmall font-normal'>
                Lorem ipsum dolor sit amet, consecLorem ipsum
              </h2>
              <p className='text-[16px ] font-light my-2 mt-4   '>
                Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                ipsum{" "}
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
            </Card>
            <Card width='w-[100%] mt-0 py-5 px-5 flex  flex-col h-[fit-content] '>
              <h1 className='text-[12px] font-semibold '>Tenders </h1>
              <h2 className='text-paragraphSmall font-normal'>
                Lorem ipsum dolor sit amet, consecLorem ipsum
              </h2>
              <p className='text-[16px ] font-light my-2 mt-4   '>
                Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                ipsum{" "}
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
            </Card>
            <Pagination></Pagination>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row lg:mt-20 mb-[100px]'>
        <div className='lg:w-[50%] h-[300px] p-5 md:p-10 md:pt-16 mt-[50px] bg-primary-golden'>
          <h1 className=' text-center lg:text-right text-[40px] text-white'>
            Tenders
          </h1>
          <p className='text-center lg:text-right text-[16px] font-light text-white'>
            Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum
            dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
            wisi enim ad{" "}
          </p>
        </div>
        <div className='lg:w-[50%]  p-10 h-[400px] flex flex-col bg-primary-blue'>
          <h1 className='text-center lg:text-left text-[40px] text-white'>
            Sign Up
          </h1>

          <input
            className='ml-[50%]  -translate-x-[50%] lg:translate-x-0 lg:ml-0 text border min-w-[300px] lg:w-[460px] border-round-md border-white rounded-md p-3 bg-primary-blue mt-5'
            placeholder='Name'
          />
          <input
            className='ml-[50%]  -translate-x-[50%] lg:translate-x-0 lg:ml-0 text border  min-w-[300px] lg:w-[460px] border-round-md border-white rounded-md p-3 bg-primary-blue mt-5'
            placeholder='Name'
          />
          <input
            className='ml-[50%]  -translate-x-[50%] lg:translate-x-0 lg:ml-0 text border  min-w-[300px] lg:w-[460px] border-round-md border-white rounded-md p-3 bg-primary-blue mt-5'
            placeholder='Name'
          />
          <span className='text-center lg:text-right lg:w-[460px] mt-6 cursor-pointer  min-w-[300px] text-[16px] font-light text-white'>
            Subscribe
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tenders;
