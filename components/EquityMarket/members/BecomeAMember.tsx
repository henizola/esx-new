"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import manager from "/public/images/manager.png";
import sliderbannerImage from "/public/images/slider-background.png";
import bannerImage from "/public/images/about-banner.png";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import CustomSlider from "../../Slider/Slider";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
interface ListingRulesProps {
  setStep: (value: number) => void;
  step: number;
}

const BecomeAMember: React.FC<ListingRulesProps> = ({ setStep, step }) => {
  const items = [
    "How to Become a Member",
    "Membership Rules",
    "List of Members",
  ];
  const evidence = [
    "Proof of payment of the applicable fees prescribed by The Exchange",
    "A copy of the certificate of commercial registration and/or investment permit issued by the relevant government body",
    "Applicable incorporation documents",
    "List of individuals and entities with significant influence in the applicant business organization",
    "Board resolution approving the decision to obtain a Trading License",
    "Corporate profile of the applicant, including the composition of its Board of Directors and other proposed Registered Individuals",
    "A Business Plan which shall contain amongst others, the Business Strategy and Objectives of the applicant stating the Long term objectives of the business organization and services te be rendered",
    "Organography of the applicant clearly delineating the reporting lines",
    `Confirmation that Senior Executive Officers have the requisite qualifications and details of the proposed
    Registered Individuals who meet the fit and proper criteria for their role or function as specified by the ESR
    as may be in effect at the time of filing the application`,
    `Attestation on the ethics and conduct of the applicant or its investors, Directors or Officers`,
    "Audited Financial Statements as applicable",
    `Address of the applicant's registered office and proposed Head Office (if different frorn its registered office)
    and any other office the applicant intends to operate from`,
    `Attestation Of willingness and capacity on the part Of the Trading Member to comply with the provisions of
    the Proclamation, ECMA's Directives. The Exchanges Rules and Regulations and other appl.cable
    regulations`,
  ];

  return (
    <div className="flex flex-col w-full p-0 m-0">
      <Banner
        backgroundImage={bannerImage}
        title="How to become a member"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quas adipisci aliquid exercitationem dignissimos tempore similique sapiente, aliquam nisi repellendus."
      />
      
      <div className="grid sm:grid-cols-7 gap-8 px-28 py-7">
        <Card width="col-span-2  flex flex-col text-left  py-[20px] px-[20px]">
          <h6 className="ml-2 mb-4 text-lg text-gray-600">
            <Link href={"/equity-market"}>Equity Market</Link> {"> Members"}
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
        <div className="col-span-5 space-y-8">
          <div className="grid sm:grid-cols-5 gap-8">
            <Card width="col-span-5 flex flex-col ">
              <h1 className="py-[18px] px-[20px]  bg-primary-blue  text-white text-[32px] font-normal font-['Open Sans']">
                How to become a member
              </h1>

              <main className="pt-[44px] pb-[45px]  px-[20px] ">
                <p className="text-black text-base font-light font-['Open Sans'] mb-[40px] ">
                  Only capital market service providers, registered in Ethiopia
                  by the Ethiopian Capital Market Authority are eligible to
                  become a trading member of the exchange.
                </p>
                <div className="grid sm:grid-cols-4 gap-4 mb-[30px]">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold font-['Open Sans'] text-primary-blue">
                      Step 1
                    </h2>
                    <div className="w-full py-1 bg-primary-golden"></div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold font-['Open Sans'] text-primary-blue">
                      Step 2
                    </h2>
                    <div className="w-full py-0.5 bg-gray/40"></div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold font-['Open Sans'] text-primary-blue">
                      Step 3
                    </h2>
                    <div className="w-full py-0.5 bg-gray/40"></div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold font-['Open Sans'] text-primary-blue">
                      Step 4
                    </h2>
                    <div className="w-full py-0.5 bg-gray/40"></div>
                  </div>
                </div>
                <h1 className="text-black text-[32px] font-normal font-['Open Sans'] mb-[20px]">
                  How to Become a Member
                </h1>
                <div className="flex  gap-[11px]">
                  <ChevronRightIcon className="w-6 h-6 " />

                  <p className="text-black text-base font-normal font-['Open Sans'] flex-1 ">
                    An application for a membership license shall be made in
                    such a manner as prescribed by the exchange membership
                    rules.
                  </p>
                </div>
              </main>
            </Card>
            <Card width="py-[20px] px-[20px] space-y-4 col-span-5 flex flex-col">
              <h1 className="text-black text-[32px] font-normal font-['Open Sans']">
                The applicant shall provide the following in evidence:
              </h1>
              <hr className="  border border-gray/90" />
              <div className="flex flex-col ">
                {evidence.map((text) => (
                  <p
                    key={text}
                    className="text-zinc-500 text-base border-b border-gray/40 font-normal font-['Open Sans'] leading-snug pt-[20px] pb-[15px]"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default BecomeAMember;
