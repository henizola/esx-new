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

const BecomeAMember: React.FC<ListingRulesProps> = ({ setStep, step }) => {
  const items = [
    "Overview",
    "How to Become a Member",
    "Membership Rules",
    // "List of Members",
  ];
  const evidence = [
    "Proof of payment of the applicable fees prescribed by ESX",
    "	A copy of the certificate of commercial registration and/or investment permit issued by the relevant government body",
    " 	Applicable incorporation documents",
    "	List of individuals and entities with significant influence in the applicant business organization;",
    "Board resolution approving the decision to obtain a Trading License",
    " 	Corporate profile of the applicant, including the composition of its Board of Directors and other proposed Registered Individuals",
    "A Business Plan which shall contain amongst others, the Business Strategy and Objectives of the applicant stating the long term objectives of the business organization and services to be rendered",
    " Organogram of the applicant clearly delineating the reporting lines",
    `	Confirmation that Senior Executive Officers have the requisite qualifications and details of the proposed Registered Individuals who meet the fit and proper criteria for their role or function as specified by the ESX as may be in effect at the time of filing the application; 
    `,
    `Attestation on the ethics and conduct of the applicant or its investors, Directors or Officers:
    `,
    "Audited Financial Statements  as applicable",
    `
    	Address of the applicant’s registered office and proposed Head Office (if different from its registered office) and any other office the applicant intends to operate from
    `,
    `	Attestation of willingness and capacity on the part of the Trading Member to comply with the provisions of the Proclamation, ECMA’s Directives, ESX’s Rules and Regulations, and other applicable regulations.
    `,
  ];
  const [selectedIndex, setStelectedIndex] = useState(0);
  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner backgroundImage={bannerImage} title=' Members' />

      <div className='grid sm:grid-cols-9 gap-8 lg:px-28 py-7'>
        <Card width='col-span-2 hidden  lg:flex flex-col text-left  py-[20px] px-[20px] h-fit '>
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
            <Card width='col-span-5 flex flex-col '>
              <h1 className='py-[18px] mx-10  text-[20px] pb-0 lg:text-header font-[500]  border-b-[3px] border-light-golden w-fit '>
                How to become a member
              </h1>

              <main className='pt-[20px] lg:pt-[44px] lg:pb-[45px]  px-10 '>
                <p className='text-black text-paragraphSmall font-light    mb-5 lg:mb-[40px] '>
                  Only capital market service providers, registered in Ethiopia
                  by the ECMA are eligible to become a trading member of the
                  exchange.
                </p>
                <div className='grid lg:grid-cols-4 gap-4 mb-[30px]'>
                  <div
                    className='flex flex-col gap-2 cursor-pointer'
                    onClick={() => setStelectedIndex(0)}
                  >
                    <h2 className='text-xl font-semibold    text-primary-blue'>
                      Step 1
                    </h2>

                    <div
                      className={` ${
                        selectedIndex === 0
                          ? " w-full py-1 bg-primary-golden"
                          : "w-full py-0.5 bg-gray/40"
                      }`}
                    ></div>

                    {selectedIndex === 0 && (
                      <p className='text-black text-base font-light   lg:hidden  flex-1 '>
                        An application for a membership license shall be made in
                        such a manner as prescribed by the exchange membership
                        rules.
                      </p>
                    )}
                  </div>

                  <div
                    className='flex flex-col gap-2 cursor-pointer'
                    onClick={() => setStelectedIndex(1)}
                  >
                    <h2 className='text-xl font-semibold    text-primary-blue'>
                      Step 2
                    </h2>
                    <div
                      className={` ${
                        selectedIndex === 1
                          ? " w-full py-1 bg-primary-golden"
                          : "w-full py-0.5 bg-gray/40"
                      }`}
                    ></div>
                    {selectedIndex === 1 && (
                      <p className='text-black text-base font-light  lg:hidden    flex-1 '>
                        Where an applicant has met the requirements for the
                        grant of a Trading License, ESX will grant an
                        Approval-In-Principle (AIP) to the applicant
                      </p>
                    )}
                  </div>
                  <div
                    className='flex flex-col gap-2 cursor-pointer'
                    onClick={() => setStelectedIndex(2)}
                  >
                    <h2 className='text-xl font-semibold    text-primary-blue'>
                      Step 3
                    </h2>
                    <div
                      className={` ${
                        selectedIndex === 2
                          ? " w-full py-1 bg-primary-golden"
                          : "w-full py-0.5 bg-gray/40"
                      }`}
                    ></div>
                    {selectedIndex === 2 && (
                      <p className='text-black text-base font-light  lg:hidden   flex-1 '>
                        An AIP shall be converted to a full Trading License only
                        when ESX has conducted a Certification Inspection and
                        the firm proves that it has met all the requirements for
                        the commencement of operations.
                      </p>
                    )}
                  </div>
                  <div
                    className='flex flex-col gap-2 cursor-pointer'
                    onClick={() => setStelectedIndex(3)}
                  >
                    <h2 className='text-xl font-semibold    text-primary-blue'>
                      Step 4
                    </h2>
                    <div
                      className={` ${
                        selectedIndex === 3
                          ? " w-full py-1 bg-primary-golden"
                          : "w-full py-0.5 bg-gray/40"
                      }`}
                    ></div>
                    {selectedIndex === 3 && (
                      <p className='text-black text-base lg:hidden font-light    flex-1 '>
                        Upon fulfilling the requirements for commencement of
                        operations as a Trading Member, a Trading License shall
                        be granted.
                      </p>
                    )}
                  </div>
                </div>
                {/* <h1 className='hidden lg:block text-black text-[32px] font-normal    mb-[20px]'>
                  How to Become a Member
                </h1> */}
                <div className='hidden lg:flex  gap-[11px]'>
                  {/* <ChevronRightIcon className='w-6 h-6 ' /> */}

                  {selectedIndex === 0 && (
                    <p className='text-black text-base font-light     flex-1 '>
                      An application for a membership license shall be made in
                      such a manner as prescribed by the exchange membership
                      rules.
                    </p>
                  )}
                  {selectedIndex === 1 && (
                    <p className='text-black text-base font-light      flex-1 '>
                      Where an applicant has met the requirements for the grant
                      of a Trading License, ESX will grant an
                      Approval-In-Principle (AIP) to the applicant
                    </p>
                  )}
                  {selectedIndex === 2 && (
                    <p className='text-black text-base font-light     flex-1 '>
                      An AIP shall be converted to a full Trading License only
                      when ESX has conducted a Certification Inspection and the
                      firm proves that it has met all the requirements for the
                      commencement of operations.
                    </p>
                  )}
                  {selectedIndex === 3 && (
                    <p className='text-black text-base font-light    flex-1 '>
                      Upon fulfilling the requirements for commencement of
                      operations as a Trading Member, a Trading License shall be
                      granted.
                    </p>
                  )}
                </div>
              </main>
            </Card>
            <Card width='py-10 px-10 space-y-4 col-span-5 flex flex-col'>
              <h1 className='text-black text-[20px] lg:text-subHeader font-normal   '>
                The applicant shall provide the following in evidence:
              </h1>
              <hr className='  border-b-1 border-gray/90' />
              <div className='flex flex-col '>
                {evidence.map((text, index) => (
                  <p
                    key={text}
                    className={`text-[14px] lg:text-paragraphSmall ${
                      evidence.length === index + 1
                        ? ""
                        : "border-b border-gray/40"
                    } font-light    leading-snug pt-2 lg:pt-[20px] pb-[15px]`}
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
