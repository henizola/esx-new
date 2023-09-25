import React from "react";
import Image from "next/image";
import overview from "../../../public/images/overview.png";
import Card from "../../Card/Card";

function CorporateBonds() {
  const lists = [
    "A corporate bond is a fixed income security issued by a company in order to raise capital.",
    "Similar to most loans, corporate bonds are interest-bearing long-term securities (> 1 year) issued at fixed or variable interest rates. Unlike bank loans however, companies are not required to pledge collateral when issuing a corporate bond.",
    "A corporate bond is generally backed by the ability of the issuing company to repay, which depends on its prospects for future revenues and profitability.",
    "The ESX repo platform acts as a matchmaker by bringing buyers and sellers of funds in the repo market together efficiently in an organized manner.",
  ];

  return (
    <div>
      <Card width="w-[100%] h-full flex flex-row">
        <div className="w-[38%] min-h-full">
          <Image
            height={200}
            width={200}
            src={overview.src}
            alt="overview"
            className="w-full object-cover h-full"
          />
        </div>
        <div className="w-[62%] flex px-5 pt-10  flex-col">
          <h1 className="text-[40px] font-sans font-light mt-0 pt-0 border-b border-black">
            Corporate Bonds{" "}
          </h1>

          <div className="pl-7 ">
            {lists.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`py-5 font-normal text-[14px] font-sans ${
                    lists.length - 1 !== index && "border-b border-black"
                  }`}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CorporateBonds;
