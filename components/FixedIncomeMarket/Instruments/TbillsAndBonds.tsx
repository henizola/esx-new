import React from "react";
import Card from "../../Card/Card";
import Image from "next/image";
import tbills from "../../../public/images/tbills.png";
import Link from "next/link";

function TbillsAndBonds() {
  const tbils = [
    "T-Bills are auctioned biweekly with a minimum investment amount of ETB 5,000 and are issued in four different maturities of 28-days, 91-days, 182-days and 364-days with fixed rates of interest.",
    "T-Bills are sold at a discount from the face value of the bill at the date of issue, meaning the purchase price is less than the face value of the security on the purchase date. When the T-Bill matures, the investor receives the face value of the T-Bill.",
    "The interest received by the investor is reflected in the difference between the discount sale price on the purchase date and the face value received at maturity.",
    "Treasury Bonds are safe, long-term debt securities issued by the Ethiopian government to investors with a maturity period of more than one year.",
  ];
  return (
    <div className="w-full bg-white">
      <div className="bg-[#00205B] w-full h-full">
        <h1 className="text-[24px] px-10 py-5  text-left text-white  w-[100%] bg-primary-blue font-sans font-normal ">
          T-bills and bonds
        </h1>
      </div>
      <div className="flex w-full">
        <div className="flex flex-col  w-[56%] justify-between px-5 pb-5">
          <div className="bg-white py-10  ">
            {tbils.map((tbil, index) => {
              return (
                <div
                  key={index}
                  className=" py-10 p font-normal font-sans border-b border-black"
                >
                  {tbil}
                </div>
              );
            })}
          </div>
          <Link href="#" className="flex text-[16px] font-semibold mt-5 pb-5">
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
        <div className="w-1/2 h-[100%]">
          <Image
            height={200}
            width={200}
            src={tbills.src}
            alt="tbills"
            className="w-full object-cover h-[100%] "
          />
        </div>
      </div>
    </div>
  );
}

export default TbillsAndBonds;
