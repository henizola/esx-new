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
      <div className="flex w-full  px-28 py-7">
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
        <div className="grid grid-cols-1 gap-3 w-[100%]">
          <Card width="flex flex-col ">
            <div className="grid sm:grid-cols-2 h-fit">
              <div className="py-[20px] px-[20px] col-span-1 space-y-4 order-2">
                <h1 className="text-primary-blue text-[14px] ">Overview</h1>
                <h1 className="text-black text-[19px] ">
                  ESX’s Equity Market Provides:
                </h1>
                <div className="flex  gap-2">
                  <ChevronRightIcon className="w-6 h-6 " />

                  <p className="text-black text-base flex-1 ">
                    Serves as a platform for large and mature issuers that are
                    capable of meeting ESX’s listing requirements
                  </p>
                </div>
                <div className="flex flex-col gap-2 px-12">
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
                <div className="flex  gap-2">
                  <ChevronRightIcon className="w-6 h-6 " />

                  <p className="text-black text-base flex-1 ">
                    Promotes market transparency, integrity, efficiency, and
                    reliability of the market with the aim to protect and
                    enhance confidence by local and international investors on
                    the Ethiopian capital markets.
                  </p>
                </div>
                <div className="flex  gap-2">
                  <ChevronRightIcon className="w-6 h-6 " />
                  <p className="text-black text-base flex-1 ">
                    Enhances the overall liquidity of the equities market.
                  </p>
                </div>
                <div className="flex  gap-2">
                  <ChevronRightIcon className="w-6 h-6 " />

                  <p className="text-black text-base flex-1 ">
                    Regulates and enforces actions on trading members.
                  </p>
                </div>
                <Link href="#" className="flex text-[16px] mt-5">
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
              <div className="col-span-1 h-full order-1">
                <Image
                  src={"/images/career-1.png"}
                  height={100}
                  width={400}
                  alt=""
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>
          </Card>
          <Card width="py-[20px] px-[20px] my-3 p-4">
            <h1 className="text-[24px] font-sans font-normal mt-0 pt-0">
              ESX’s Equity Market Provides:
            </h1>

            <p className="  text-[15px] font-sans font-normal mt-2 pt-0 leading-6 text-gray">
              ESX Equities Market is the division of ESX that allows issuers of
              equity securities to raise long-term capital.
            </p>
            <Link href="#" className="flex text-[16px] mt-5">
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

      <GoldBanner
        backgroundUrl={'/images/Career-Banner.png'}
        heading={
          "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer"
        }
        buttonText={"Learn More"}
        link={"fghgfhfgh"}
      />
    </div>
  );
};

export default EquityMarketOverview;





