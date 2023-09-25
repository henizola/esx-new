import Card from "@/components/Card/Card";
import Link from "next/link";
import React from "react";

function TradingMarketStructure() {
  return (
    <div>
      <Card width="w-[100%] p-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-[32px] font-normal border-b border-black py-4">
            Trading System{" "}
          </h1>
          <p className="font-[16px]">
            All trading activity on ESX listed securities, (as well as its
            unlisted securities market) occurs via ESX’s property Automated
            Trading System.
          </p>
          <p className="font-[16px]">
            ESX adopts a hybrid market that provides both a central order book
            as well as platforms for bilateral and multilateral negotiated trade
            in the form of RFQs (request for Qiuote). ESX’s central order book
            allows trading members and their clients to enter buy and sell
            orders anonymously where trades are matched using ESX’ modern
            trading engine based on price time priority.
          </p>
          <p className="font-[16px]">
            The ATS seamlessly integrates with the Central Securities Depository
            that ensures efficent clearning and settlment.
          </p>
        </div>
      </Card>
      <div className="grid grid-cols-2 gap-5 mt-5 ">
        <Card width="w-[100%] mt-0 py-5 px-5 flex  flex-col h-[fit-content] border-t-4 border-[#A8965B]">
          <div className="flex items-center">
            <h2 className="text-[19px] font-normal pr-7">Trading calendar</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mt-1.5 text-[#A8965B]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <p className="text-[16px ] font-light my-2 mt-4 text-[#707377]">
            The Exchange shall open for trading on all business days in
            Ethiopia.
          </p>
          <p className="text-[16px ] font-light mb-4 text-[#707377]">
            Trading shall be conducted at specified times as may be determined
            by The Exchange.
          </p>
          <Link href="#" className="flex text-[16px] mt-5 px-0 ">
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
        <Card width="w-[100%] mt-0 py-5 px-5 flex  flex-col h-[fit-content] border-t-4 border-[#A8965B]">
          <div className="flex pr-24">
            <h2 className="text-[19px] font-normal pr-7">
              Public Holidays / Closign Days (2023 -2024){" "}
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-1.5 text-[#A8965B]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <p className="text-[16px ] font-light my-2 mt-4 text-[#707377]">
            Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum
            dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut
          </p>
          <Link href="#" className="flex text-[16px] mt-5 px-0 ">
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
  );
}

export default TradingMarketStructure;
