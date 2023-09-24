"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import overview from "../../../public/images/overview.png";
import Card from "../../Card/Card";

interface RepurchaseAgreementProps {
  setStep: (value: number) => void;
  step: number;
}

const RepurchaseAgreement = () => {
  const lists = [
    "Repo’s are commonly used by banks and dealers in government securities who sell government securities to a lender and agree to repurchase them at an agreed price later to meet short-term liquidity needs. ",
    "The government security pledged by the borrower in a repo trade serves like collateral thereby reducing counterparty credit risk significantly and enhancing market liquidity.",
    "The ESX repo platform acts as a matchmaker by bringing buyers and sellers of funds in the repo market together efficiently in an organized manner.",
  ];
  return (
    <div className="flex flex-col w-full p-0 m-0">
      <div className="flex w-full ">
        <div className="flex flex-col w-full">
          <Card width="w-[100%] h-full flex flex-row">
            <div className="w-[38%] h-[100%]">
              <Image
                height={200}
                width={200}
                src={overview.src}
                alt="overview"
                className="w-full object-cover h-[100%]"
              />
            </div>
            <div className="w-[62%] flex px-5 pt-10  flex-col">
              <h1 className="text-[40px] font-sans font-light mt-0 pt-0  border-b border-black">
                Corporate Bonds{" "}
              </h1>

              <div className="pl-7">
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
          <Card width="w-[100%] my-3 p-4">
            <div className="flex py-5 mx-10">
              <div className="w-[100%] flex  flex-col  mt-0 pt-0">
                <h1 className="text-[24px] font-sans font-normal mt-0 pt-0">
                  Commercial Papers{" "}
                </h1>
                <p className="w-[100%]  text-[15px] font-sans font-normal mt-2 pt-0 leading-6 text-gray">
                  Commercial papers (CPs) are short-term debt obligations issued
                  by large corporations with a maturity period of less than 270
                  days.
                </p>
                <p className="w-[100%]  text-[15px] font-sans font-normal mt-2 pt-0 leading-6 text-gray">
                  CPs are usually sold to investors at a discount to face value
                  and primarily issued by corporates to fund working capital or
                  finance short term assets. Investors receive the face value of
                  the CP instrument at maturity.
                </p>
                <p className="w-[100%]  text-[15px] font-sans font-normal mt-2 pt-0 leading-6 text-gray">
                  Corporates can efficiently issue which can then be quoted and
                  traded on the secondary market by market participants on the
                  ESX platform.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RepurchaseAgreement;
