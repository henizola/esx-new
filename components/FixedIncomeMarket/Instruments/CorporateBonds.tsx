import React from "react";
import Image from "next/image";
import overview from "../../../public/images/overview.png";

function CorporateBonds() {
  const lists = [
    "A corporate bond is a fixed income security issued by a company in order to raise capital.",
    "Similar to most loans, corporate bonds are interest-bearing long-term securities (> 1 year) issued at fixed or variable interest rates. Unlike bank loans however, companies are not required to pledge collateral when issuing a corporate bond.",
    "A corporate bond is generally backed by the ability of the issuing company to repay, which depends on its prospects for future revenues and profitability.",
    "The ESX repo platform acts as a matchmaker by bringing buyers and sellers of funds in the repo market together efficiently in an organized manner.",
  ];

  return (
    <div>
      <h1 className="font-normal text-[30px]">CorporateBonds</h1>
      <div className="flex w-full">
        <div className="w-[38%] h-[100%]">
          <Image
            height={200}
            width={200}
            src={overview.src}
            alt="tbills"
            className="w-full object-cover h-[100%]"
          />
        </div>

        <div className="bg-white py-10 px-5 w-1/2">
          {lists.map((item, index) => {
            return (
              <div
                key={index}
                className=" py-5 p font-normal font-sans border-b border-black"
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CorporateBonds;
