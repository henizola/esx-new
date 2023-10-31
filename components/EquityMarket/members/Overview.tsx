"use client";
import { BackButton } from "@/components/Button/BackButton";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import bannerImage from "/public/images/about-banner.png";
interface ListingRulesProps {
  setStep: (value: number) => void;
  step: number;
}

const Overview: React.FC<ListingRulesProps> = ({ setStep, step }) => {
  const items = [
    "Overview",
    "How to Become a Member",
    "Membership Rules",
    "Members Directory",
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
  const [selectedIndex, setStelectedIndex] = useState(0);
  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner backgroundImage={bannerImage} title='Members' />

      <div className='grid sm:grid-cols-9 gap-8 lg:px-28 py-7'>
        <Card width='col-span-2 hidden  lg:flex flex-col text-left  py-[20px] px-[20px] h-fit  h-fit'>
          <h6 className='ml-2 mb-4'>
            <BackButton setStep={setStep} link='/equity-market'>
              Equity Market
            </BackButton>{" "}
            {"> Members"}
          </h6>
          {items.map((item, index) => (
            <button
              key={index}
              className={`  text-left ml-5 my-2 font-light border-b border-black `}
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
        <div className='col-span-7 space-y-8 w-[100vw] lg:w-[auto]'>
          <div className='grid sm:grid-cols-5 gap-8'>
            <Card width='col-span-5 flex flex-col '>
              <h1 className='py-10 px-10 pb-5    text-[20px] lg:text-paragraphBig    '>
                ESX provides the following categories of membership license.
              </h1>

              <main className='pt-[20px] lg:pt-[4px] lg:pb-5  px-10 '>
                <p className='text-black text-paragraphSmall font-light    mb-5 lg:mb-[40px] '>
                  i. Securities Broker;2
                </p>
                <p className='text-black text-paragraphSmall font-light    mb-5 lg:mb-[40px] '>
                  ii. Securities Dealer;
                </p>
                <p className='text-black text-paragraphSmall font-light    mb-5 lg:mb-[40px] '>
                  iii. Securities Broker Dealer;
                </p>
                <p className='text-black text-paragraphSmall font-light    mb-5 lg:mb-[40px] '>
                  iii. Securities Broker Dealer;
                </p>
                <p className='text-black text-paragraphSmall font-light    mb-5 lg:mb-[40px] '>
                  iv. Securities Broker (Investment Bank); and/or
                </p>
                <p className='text-black text-paragraphSmall font-light    mb-5 lg:mb-[40px] '>
                  v. Any other category as may be specified by ESX from time to
                  time.
                </p>
              </main>
            </Card>
          </div>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default Overview;
