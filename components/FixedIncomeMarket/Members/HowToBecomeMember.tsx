import React, { useState } from "react";
type Step = "Step 1" | "Step 2" | "Step 3" | "Step 4";

function HowToBecomeMember() {
  const [selectedStep, setSelectedStep] = useState<Step>("Step 1");
  const lists: any = ["Step 1", "Step 2", "Step 3", "Step 4"];
  const lists2 = [
    "Proof of payment of the applicable fees prescribed by The Exchange",
    "A copy of the certificate of commercial registration and/or investment permit issued by the relevant government body",
    "Applicable incorporation documents",
    "List of individuals and entities with significant influence in the applicant business organization",
    "Board resolution approving the decision to obtain a Trading License",
    "Corporate profile of the applicant, including the composition of its Board of Directors and other proposed Registered Individuals",
    "A Business Plan which shall contain amongst others, the Business Strategy and Objectives of the applicant stating the long term objectives of the business organization and services to be rendered",
    "Organogram of the applicant clearly delineating the reporting lines",
    "Confirmation that Senior Executive Officers have the requisite qualifications and details of the proposed Registered Individuals who meet the fit and proper criteria for their role or function as specified by the ESX as may be in effect at the time of filing the application",
    "Attestation on the ethics and conduct of the applicant or its investors, Directors or Officers",
    "Audited Financial Statements as applicable",
    "Address of the applicant’s registered office and proposed Head Office (if different from its registered office) and any other office the applicant intends to operate from",
    "Attestation of willingness and capacity on the part of the Trading Member to comply with the provisions of the Proclamation, ECMA’s Directives, The Exchange’s Rules and Regulations, and other applicable regulations",
  ];
  return (
    <div>
      <div className='bg-white'>
        <div className='bg-[#00205B] w-full h-full'>
          <h1 className='text-[32px] px-5 py-5  text-left text-white  w-[100%] bg-primary-blue   font-normal '>
            How to become a member{" "}
          </h1>
        </div>
        <p className='py-10 pl-5 pr-40 text-[16px]   font-light'>
          Only capital market service providers, registered in Ethiopia by the
          Ethiopian Capital Market Authority are eligible to become a trading
          member of the exchange.
        </p>
        <div className='flex pl-5 pb-7 w-full'>
          {lists.map((item: Step, index: number) => {
            return (
              <div
                className='flex flex-col py-5 w-full hover:cursor-pointer'
                onClick={() => setSelectedStep(item)}
                key={index}
              >
                <p
                  key={index}
                  className={`font-normal text-[20px]   text-[#001F59] ${
                    item === selectedStep && "font-semibold"
                  }`}
                >
                  {item}
                </p>
                <div
                  className={` w-[150px] h-1 ${
                    item === selectedStep ? "bg-[#A8965B] h-2 " : "bg-[#CFCFCF]"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
        <h1 className='font-normal text-[32px]   px-5'>
          How to Become a Member
        </h1>
        <div className='w-[100%] relative flex items-center text-[15px]   font-light mt-2 px-5 leading-6 gap-2'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='h-[20px]'
            >
              <path
                fillRule='evenodd'
                d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <p className='py-4 text-[16px]'>
            An application for a membership license shall be made in such a
            manner as prescribed by the exchange membership rules.
          </p>
        </div>
      </div>

      <div className='bg-white mt-5'>
        <h1 className='font-normal text-[32px]   ml-5 mr-20 pt-8 pb-8 border-b'>
          The applicant shall provide the following in evidence:{" "}
        </h1>
        <div className='pl-5 pr-20'>
          {lists2.map((item2, index) => {
            return (
              <p
                key={index}
                className={` py-5 text-[14px]   text-[#707377] ${
                  lists2.length - 1 !== index && "border-b border-black "
                }`}
              >
                {item2}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HowToBecomeMember;
