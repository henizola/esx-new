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
    // "Members Directory",
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
            {/* <BackButton setStep={setStep} link='/equity-market'>
              Equity Market
            </BackButton>{" "} */}
            {" Members"}
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
            <Card width='col-span-5 flex flex-col px-10 py-6'>
              <h1 className='text-header border-b-[3px] border-light-golden w-fit text-left pb-1'>
                Fixed income market{" "}
              </h1>

              <main className='pt-[20px] lg:pt-0 lg:pb-5  px-0 '>
                <p className=' text-[16px] text-justify  font-light mt-2 pt-5 leading-6   '>
                  Trading members play a crucial role in the functioning of the
                  exchange. Members are registered capital market service
                  providers and their appointed representatives who are
                  authorized to buy and sell securities on behalf of themselves
                  or their clients within the exchange. Members play a vital
                  role in maintaining the integrity and efficiency of the
                  market. They provide essential services that facilitate the
                  trading of securities, contribute to market liquidity, and
                  ensure that the market operates in compliance with regulatory
                  standards.
                </p>
                <p className=' text-[16px] text-justify  font-light mt-2 pt-5 leading-6   '>
                  Some of the key roles and responsibilities of trading members
                  include:
                </p>
                <div>
                  <p className='text-black text-paragraphSmall font-light  mt-4 flex text-justify'>
                    <span>○ </span>
                    <span className='ml-2'>
                      <strong> Order Execution:</strong> Trading members execute
                      orders from investors, whether retail or institutional.
                      They enter buy and sell orders to facilitate transactions
                      in the market. They play a pivotal role in ensuring that
                      trades are executed efficiently and at fair prices.
                    </span>
                  </p>
                  <p className='text-black text-paragraphSmall font-light  mt-4 flex text-justify'>
                    <span>○ </span>
                    <span className='ml-2'>
                      <strong> Providing Access:</strong> Trading members
                      provide access to ESX’s trading platform for their
                      clients, enabling them to directly trade in the market
                      (direct market access – DMA). They offer trading platforms
                      and infrastructure to facilitate market watch and trading.
                    </span>
                  </p>
                  <p className='text-black text-paragraphSmall font-light  mt-4 flex text-justify'>
                    <span>○ </span>
                    <span className='ml-2'>
                      <strong> Market Making:</strong> Trading members, known as
                      market makers, facilitate liquidity in the market by
                      continuously quoting bid and ask prices for specific
                      securities. They help ensure that there are buyers and
                      sellers for a particular security, making it easier for
                      investors to trade.
                    </span>
                  </p>
                  <p className='text-black text-paragraphSmall font-light  mt-4 flex text-justify'>
                    <span>○ </span>
                    <span className='ml-2'>
                      <strong> Client Services:</strong> Trading members offer
                      various services to their clients, such as research,
                      investment advice, and portfolio management. These
                      services are critical to the functioning of the Ethiopian
                      capital market as investors rely on the ability of
                      professional service providers to analyze macroeconomic,
                      industry and firm level information, and compare the risks
                      and rewards of their investment.
                    </span>
                  </p>
                  <p className='text-black text-paragraphSmall font-light  mt-4 flex text-justify'>
                    <span>○ </span>
                    <span className='ml-2'>
                      <strong> Compliance:</strong> Trading members must adhere
                      to the rules and regulations set by ECMA and ESX. They are
                      responsible for ensuring that their trading activities
                      comply with all legal and regulatory requirements (such as
                      KYC and AML).
                    </span>
                  </p>
                  <p className='text-black text-paragraphSmall font-light  mt-4 flex text-justify'>
                    <span>○ </span>
                    <span className='ml-2'>
                      <strong> Risk Management:</strong> Trading members are
                      responsible for managing the risk associated with their
                      trading activities. This includes monitoring positions,
                      setting risk limits, and taking appropriate actions to
                      mitigate potential losses.
                    </span>
                  </p>
                  <p className='text-black text-paragraphSmall font-light  mt-4 flex text-justify'>
                    <span>○ </span>
                    <span className='ml-2'>
                      <strong> Settlement:</strong> Trading members are
                      responsible for ensuring the settlement of trades. They
                      need to ensure that securities and funds are exchanged
                      promptly and accurately to complete the transaction.
                    </span>
                  </p>
                  <p className='text-black text-paragraphSmall font-light  mt-4 flex text-justify'>
                    <span>○ </span>
                    <span className='ml-2'>
                      <strong> Reporting:</strong> Trading members are required
                      to maintain records of their transactions and provide
                      regular reports to clients, the exchange, and regulatory
                      authorities as necessary.
                    </span>
                  </p>
                  <p className='text-black text-paragraphSmall font-light  mt-4 flex text-justify'>
                    <span>○ </span>
                    <span className='ml-2'>
                      <strong> Surveillance:</strong> Trading members may assist
                      in market surveillance efforts to identify and report any
                      unusual or suspicious trading activities to ESX and ECMA.
                    </span>
                  </p>
                </div>
              </main>
            </Card>
            <Card width='col-span-5 flex flex-col pb-5 '>
              <h1 className='py-10 px-10  pb-0   text-[20px] lg:text-paragraphBig    '>
                ESX provides the following categories of membership license.
              </h1>

              <main className='pt-[20px] lg:pt-[0px] lg:pb-5  px-10 '>
                <p className='text-black text-paragraphSmall font-light  mt-4 flex text-justify'>
                  <span>○ </span>
                  <span className='ml-2'>Securities Broker</span>
                </p>
                <p className='text-black text-paragraphSmall font-light  mt-4 flex text-justify'>
                  <span>○ </span>
                  <span className='ml-2'>Securities Dealer</span>
                </p>
                <p className='text-black text-paragraphSmall font-light  mt-4 flex text-justify'>
                  <span>○ </span>
                  <span className='ml-2'> Securities Broker Dealer</span>
                </p>
                <p className='text-black text-paragraphSmall font-light  mt-4 flex text-justify'>
                  <span>○ </span>
                  <span className='ml-2'>
                    Securities Broker (Investment Bank); and/or
                  </span>
                </p>
                <p className='text-black text-paragraphSmall font-light  mt-4 flex text-justify'>
                  <span>○ </span>
                  <span className='ml-2'>
                    {" "}
                    Any other category as may be specified by ESX from time to
                    time.
                  </span>
                </p>
                <p className=' text-[16px] text-justify  font-light mt-0 pt-5 leading-6   '>
                  A trading member shall be appropriately licensed by the ECMA
                  to enable its functions in any of the categories listed above
                  and shall operate within the parameters and restrictions
                  provided by ESX and such licensing or registration directives
                  or requirements of the ECMA.
                </p>
                <p className=' text-[16px] text-justify  font-light mt-0 pt-5 leading-6   '>
                  A trading member shall meet the minimum operating requirements
                  and standards as prescribed by ESX from time to time on the
                  following : personnel, organizational structure, governance,
                  technology, infrastructure, policies, and processes; and
                  competitiveness.
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
