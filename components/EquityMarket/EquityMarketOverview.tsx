import React from "react";
import Card from "@/components/Card/Card";
import Banner from "@/components/Banner/banner";
import image from "/public/images/who-we-are.png";
import whoweare from "/public/images/who-we-are-circle.png";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { GoldBanner } from "../Banner/GoldBanner";

interface WhoWeAreProps {
  setStep: (value: number) => void;
  step: number;
}
const EquityMarketOverview: React.FC<WhoWeAreProps> = ({ setStep, step }) => {
  const items = ["Overview"];

  return (
    <div className="flex flex-col w-full">
      <Banner
        backgroundImage={image}
        title="Equity market"
        description="ESX Equities Market is the division of ESX that allows issuers of equity securities to raise long-term capital."
      />
      <div className="flex w-full  px-28 py-[30px]">
        <Card width="w-[30%] mr-5 flex flex-col text-left  py-10 px-5">
          <h6 className="ml-2 mb-4">Equity Market</h6>{" "}
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
          <Link
            href={"/equity-market/listing"}
            className={`  text-left ml-10 my-2 font-light border-b border-black `}
            style={{
              borderBottom: "0.7px solid black",
              fontSize: step === 1 ? "16px" : "14px",
              fontWeight: step === 1 ? "400" : "300",
            }}
            // onClick={() => setStep(1)}
          >
            Listing
          </Link>
          <Link
            href={"/equity-market/trade"}
            className={`  text-left ml-10 my-2 font-light border-b border-black `}
            style={{
              borderBottom: "0.7px solid black",
              fontSize: step === 2 ? "16px" : "14px",
              fontWeight: step === 2 ? "400" : "300",
            }}
            // onClick={() => setStep(2)}
          >
            Trade
          </Link>
          <Link
            href={"/equity-market/members"}
            className={`  text-left ml-10 my-2 font-light border-b border-black `}
            style={{
              borderBottom: "0.7px solid black",
              fontSize: step === 2 ? "16px" : "14px",
              fontWeight: step === 2 ? "400" : "300",
            }}
            // onClick={() => setStep(2)}
          >
            Members
          </Link>
          <Link
            href={"/equity-market/trading-operations"}
            className={`  text-left ml-10 my-2 font-light border-b border-black `}
            style={{
              borderBottom: "0.7px solid black",
              fontSize: step === 2 ? "16px" : "14px",
              fontWeight: step === 2 ? "400" : "300",
            }}
            // onClick={() => setStep(2)}
          >
            Trading & Operations
          </Link>
          <Link
            href={"/equity-market/regulatory-framework"}
            className={`  text-left ml-10 my-2 font-light border-b border-black `}
            style={{
              borderBottom: "0.7px solid black",
              fontSize: step === 2 ? "16px" : "14px",
              fontWeight: step === 2 ? "400" : "300",
            }}
            // onClick={() => setStep(2)}
          >
            Regulatory Framework
          </Link>
        </Card>
        <div className="flex flex-col justify-between gap-[18px] h-full w-[100%]">
          <Card width="flex flex-col ">
            <div className="flex ">
              <Image
                src={"/images/austin-distel-EMPZ7yRZoGw-unsplash 1.png"}
                height={100}
                width={400}
                alt=""
                className="w-[40%]  aspect-square object-cover"
              />
              <div className="pt-[30px] pb-[20px]  px-[20px] w-[60%]  ">
                <h1 className="text-primary-blue text-[12px] mb-[14px] ">
                  Overview
                </h1>
                <h1 className="text-black text-[30px]  mb-[20px]">
                  ESX’s Equity Market Provides:
                </h1>
                <div className="flex  gap-[10px] mb-[20px]">
                  <ChevronRightIcon className="w-6 h-6 " />

                  <p className="text-black text-base flex-1 ">
                    A central listing and trading venue for issuance and trading
                    of various equity instruments that are approved and
                    registered by the Ethiopian Capital Market Authority
                    <div className="flex flex-col gap-[10px] px-6 pt-5">
                      <p className="text-gray text-base ">
                        Shares and other forms of equity instruments
                      </p>
                      <p className="text-gray text-base ">
                        Real estate investment funds (REIFs) / ‘REITS’
                      </p>
                      <p className="text-gray text-base ">
                        Exchange traded funds (ETFs)
                      </p>
                    </div>
                  </p>
                </div>

                <div className="flex  gap-[10px] mb-[20px]">
                  <ChevronRightIcon className="w-6 h-6 " />

                  <p className="text-black text-base flex-1 ">
                    Promotes market transparency, integrity, efficiency, and
                    reliability of the market with the aim to protect and
                    enhance confidence by local and international investors on
                    the Ethiopian capital markets.
                  </p>
                </div>
                <div className="flex  gap-[10px] mb-[20px]">
                  <ChevronRightIcon className="w-6 h-6 " />
                  <p className="text-black text-base flex-1 ">
                    Enhances the overall liquidity of the equities market.
                  </p>
                </div>
                <div className="flex  gap-[10px] mb-[20px]">
                  <ChevronRightIcon className="w-6 h-6 " />

                  <p className="text-black text-base flex-1 ">
                    Regulates and enforces actions on trading members.
                  </p>
                </div>
                <Link href="#" className="flex text-[16px] mt-[15px]">
                  View more{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 mt-1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </Card>

          <Card width="pt-[30px] pb-[20px] px-[23px]  p-4">
            <h1 className="text-[20px] font-sans font-normal  pt-0">
              ESX’s Equity Market Provides:
            </h1>

            <p className=" text-zinc-500 text-base mt-[20px] mb-[30px]  font-normal font-['Open Sans'] leading-tight">
              ESX Equities Market is the division of ESX that allows issuers of
              equity securities to raise long-term capital.
            </p>
            <Link href="#" className="flex text-[16px] font-semibold ">
              View more{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mt-1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </Card>
        </div>
      </div>

      <div className="relative h-[200px]">
        <img
          src={"/images/Authors 1.png"}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 bg-primary-golden/80 w-full h-full  flex items-center justify-center ">
          <div className="w-full px-[130px] flex justify-between">
            <h1 className="text-white text-3xl font-normal font-['Open Sans'] max-w-[760px] leading-10">
              Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
              consectetuer
            </h1>
            <Link
              className="px-[29px] pt-[11px] pb-[13px] min-w-[104px] h-fit rounded-full bg-white text-center text-primary-golden text-xl font-medium font-['Roboto']"
              href={"#"}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquityMarketOverview;
