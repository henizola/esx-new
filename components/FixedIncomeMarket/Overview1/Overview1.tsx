"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import bannerImage from "../../../public/images/about-banner.png";
import overview from "../../../public/images/overview.png";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
interface Overview1Props {
  setStep: (value: number) => void;
  step: number;
}

const Overview1: React.FC<Overview1Props> = ({ setStep, step }) => {
  const items = [
    "Overview",
    "Instruments",
    "Listing and Admission to Trading",
    "Trading",
    "Members",
    "Trading and Operations",
    "Regulatory Framework",
  ];

  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner
        backgroundImage={bannerImage}
        title='Fixed income market'
        // description='“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse'
      />
      <div className='flex w-full  px-28 py-7'>
        <Card width='w-[30%] mr-5 flex flex-col text-left  py-10 px-5'>
          <h6 className='ml-2 mb-4 text-[#001F59] opacity-60'>
            Fixed income market
          </h6>
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
        <div className='flex flex-col w-[70%]  gap-5'>
          <Card width='w-[100%]  flex flex-row h-[380px]'>
            <div className='w-[38%] h-[100%]'>
              <Image
                height={200}
                width={200}
                src={overview.src}
                alt='overview'
                className='w-full object-cover h-[100%] '
              />
            </div>
            <div className='w-[62%] flex  flex-col py-7 px-5'>
              <p className='text-[12px] font-sans font-normal pb-6'>
                Overview{" "}
              </p>
              <h1 className='text-[30px] font-sans font-light pb-6'>
                Fixed income market{" "}
              </h1>

              <p className='text-[16px] font-sans font-[400] mt-2 pt-0 leading-6 text-[#707377] pb-14'>
                The ESX Fixed Income Market is a market where participants buy
                and sell debt securities, either directly from the issuer
                through the primary market, or afterwards through the secondary
                market following the initial debt security issuance.
              </p>
              <Link
                href='#'
                className='flex text-[16px] font-semibold mt-5 pb-16'
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
          </Card>
          <Card width='w-[100%] px-6 py-7'>
            <div className='flex '>
              <div className='w-[100%] flex  flex-col  mt-0 pt-0'>
                <h1 className='text-[20px] font-sans font-normal mt-0 pt-0'>
                  The following instruments are listed and traded in ESX’s Fixed
                  Income Market.{" "}
                </h1>

                <p className='w-[100%]  text-[16px] font-sans font-normal mt-2 pt-0 leading-6 text-[#7F7F7F]'>
                  The ESX Fixed Income market will facilitate the listing,
                  quoting, and trading of debt instruments with the aim to
                  increase efficiency, transparency, and liquidity of the
                  Ethiopian debt capital markets.
                </p>
                <Link href='#' className='flex text-[16px] font-semibold mt-5'>
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
  );
};

export default Overview1;
