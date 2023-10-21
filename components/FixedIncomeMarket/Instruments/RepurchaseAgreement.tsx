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
    <div className='flex flex-col w-full p-0 m-0'>
      <div className='flex w-full '>
        <div className='flex flex-col w-full'>
          <Card width='flex flex-col  w-full h-full'>
            <div className='flex h-full pb-5'>
              <div className='min-h-full bg-white pt-5 px-10 flex flex-col justify-between  '>
                <div>
                  <p className={` py-5 text-paragraphSmall   font-light `}>
                    A repurchase agreement (repo) is a secured short-term form
                    of borrowing (usually 1-7 day term) that involves selling a
                    security with an agreement to repurchase it at a higher
                    price later in the interbank market.
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <Card width='w-[100%] h-full flex flex-row mt-5'>
            {/* <div className='w-[38%] h-[100%]'>
              <Image
                height={200}
                width={200}
                src={overview.src}
                alt='overview'
                className='w-full object-cover h-[100%]'
              />
            </div> */}
            <div className='w-[100%] flex px-10 pt-5  flex-col'>
              <h1 className='text-subHeader    mt-0 pb-1  border-b border-[#A8965B]'>
                Corporate Bonds{" "}
              </h1>

              <div className='pb-5'>
                {lists.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`py-5 font-light text-paragraphSmall  ${
                        lists.length - 1 !== index &&
                        "border-b border-[#A8965B]"
                      }`}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
          <Card width='w-[100%] py-7 px-6 mt-5'>
            <div className='flex'>
              <div className='w-[100%] flex  flex-col  mt-0 pt-0'>
                <h1 className='text-subHeader    mt-0 pb-1  border-b border-[#A8965B]'>
                  Commercial Papers{" "}
                </h1>
                <p className='w-[100%]  text-paragraphSmall   font-light mt-5 pt-0 leading-6 '>
                  Commercial papers (CPs) are short-term debt obligations issued
                  by large corporations with a maturity period of less than 270
                  days.
                </p>
                <p className='w-[100%]  text-paragraphSmall   font-light mt-5 pt-0 leading-6 '>
                  CPs are usually sold to investors at a discount to face value
                  and primarily issued by corporates to fund working capital or
                  finance short term assets. Investors receive the face value of
                  the CP instrument at maturity.
                </p>
                <p className='w-[100%]  text-paragraphSmall   font-light mt-5 pt-0 leading-6 '>
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
