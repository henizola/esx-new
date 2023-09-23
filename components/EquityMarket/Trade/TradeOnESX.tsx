import React, { ReactNode } from "react";
import Card from "@/components/Card/Card";
import Banner from "@/components/Banner/banner";
import image from "/public/images/who-we-are.png";
import whoweare from "/public/images/who-we-are-circle.png";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { GoldBanner } from "@/components/Banner/GoldBanner";
import LinkButton from "@/components/Button/LinkButton";

interface WhoWeAreProps {
  setStep: (value: number) => void;
  step: number;
}


const TradeOnESX: React.FC<WhoWeAreProps> = ({ setStep, step }) => {
  const items = [
"Trade on ESX",
"Members Directory",
"Direct Market Access",
"Listed Lecurities",
"Market Data",
"Indices",
"Market Announcements",
"Fees & Taxation",
"Tendor",
  ];

  return (
    <div className="flex flex-col w-full">
      <Banner
        backgroundImage={image}
        title="Invest on ESX"
        description="ESX Equities Market is the division of ESX that allows issuers of equity securities to raise long-term capital."
      />
      <div className="flex w-full  px-28 py-7">
        <Card width="w-[30%] mr-5 flex flex-col text-left  py-10 px-5">
          <h6 className="ml-2 mb-4">{"Equity Market > Trade"}</h6>{" "}
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
        <div className="grid grid-cols-1 gap-3 w-[100%]">
          <Card width="flex flex-col ">
            <div className="grid sm:grid-cols-2 h-fit">
              <div className="py-[20px] px-[20px] col-span-1 flex flex-col gap-4 order-1">
                <h1 className="text-primary-blue text-[14px] ">Trade on ESX</h1>
                <h1 className="text-black text-3xl ">Why Invest</h1>
                <p className="  font-sans font-normal mt-2 pt-0 leading-6 text-gray">
                  A benefit to investing and trading on ESX is price
                  transparency. As prices are publicly available, investors are
                  able to make informed decisions based on real-time market data
                </p>
                <p className="  font-sans font-normal mt-2 pt-0 leading-6 text-gray">
                  The regulatory oversight of ESX maintains market integrity.
                  This ensures that participants are adhering to trading
                  practices.
                </p>
                <p className="  font-sans font-normal mt-2 pt-0 leading-6 text-gray">
                  The ESX trading platform will be linked with a fully
                  electronic central securities depository (CSD) to ensure
                  efficient post-trade clearing and settlement processes from
                  the launch of the exchange.
                </p>
                <LinkButton href="#">View More</LinkButton>
              </div>
              <div className="col-span-1 h-full order-2">
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
          <Card width="py-[20px] px-[20px] my-3 p-4 space-y-4">
            <h1 className="text-[24px] font-sans font-normal pt-0">
              Central Securities Depository (CSD)
            </h1>

            <p className="  text-[15px] font-sans font-normal pt-0 leading-6 text-gray">
              The Central Securities Depoistory acts as the central place where
              securities traded on ESX are deposited in an electronic registrar.
              The CSD provides a safe custody for securities, provides
              securities identification number to investors and catters to the
              clearing and settlment of transactions.
            </p>

            <LinkButton href="#">View More</LinkButton>
          </Card>
        </div>
      </div>

     
    </div>
  );
};

export default TradeOnESX;
