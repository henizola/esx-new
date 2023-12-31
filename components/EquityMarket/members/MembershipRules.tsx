"use client";
import { BackButton } from "@/components/Button/BackButton";
import Link from "next/link";
import React from "react";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import bannerImage from "/public/images/about-banner.png";
interface MembershipRulesProps {
  setStep: (value: number) => void;
  step: number;
}

const MembershipRules: React.FC<MembershipRulesProps> = ({ setStep, step }) => {
  const items = [
    "Overview",
    "How to Become a Member",
    "Membership Rules",
    // "Members Directory ",
  ];
  const evidence = [
    "Rules of membership and conditions for approval and admission of members",
    "The rights and liability of its members, investors, and users of their services",
    "Standards of behavior of members",
    "Disciplinary actions against members ",
    "Rules for settlement of disputes",
    "Payment of fees and commissions",
  ];

  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner
        backgroundImage={bannerImage}
        title='Members'
        description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quas adipisci aliquid exercitationem dignissimos tempore similique sapiente, aliquam nisi repellendus.'
      />

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
        <div className='col-span-7 space-y-8 w-[100vw] lg:w-[100%]'>
          <div className='grid gap-5'>
            <Card width='flex flex-col '>
              <h1 className='py-[18px]   text-[20px] lg:text-header pb-0 font-[500]  mx-10 border-b-[3px] border-light-golden w-fit'>
                Membership Rules
              </h1>

              <main className='pt-[20px] pb-[0px] px-0 space-y-4'>
                <h1 className='text-black text-[16px] lg:text-paragraphBig font-normal   px-10'>
                  ESX licensed members shall comply with the provision of the
                  Capital Market Proclamation, relevant directives issued by the
                  ECMA, and other applicable rules and regulations.
                </h1>
                <p className=' text-[14px] lg:text-paragraphSmall lg:font-light leading-[normal] py-2 lg:py-0 flex items-center gap-1'>
                  <span className='pl-10'>
                    Members shall also comply with ESX’s membership rules that
                    set out:
                  </span>
                </p>

                <div className='flex flex-col divide divide-y divide-gray/40 px-10'>
                  {evidence.map((text) => (
                    <p
                      key={text}
                      className=' text-[14px] lg:text-paragraphSmall not-italic lg:font-light leading-[normal] py-2 lg:py-4 flex items-center gap-1'
                    >
                      <div className='w-2 lg:w-2 h-2 lg:h-2 aspect-square rounded-full bg-gray ' />{" "}
                      <span className='pl-3'>{text}</span>
                    </p>
                  ))}
                </div>

                <div className='bg-zinc-100  max-w-[580px] mx-auto   flex flex-col items-center py-4'>
                  <p className='px-4 lg:p-0 text-center      text-[15px] font-normal    leading-snug mb-[18px]'>
                    For details of ESX membership rules, please refer to
                    following documents
                  </p>
                  <Link
                    href='#'
                    className='px-[18px] pt-[2px] pb-[3px] bg-primary-blue rounded-md text-center text-white text-base font-semibold   '
                  >
                    ESX Membership Rules
                  </Link>
                </div>
              </main>
            </Card>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <Card width='py-7 px-10 flex flex-col'>
              <h1 className='text-black text-xl lg:text-paragraphBig font-normal   '>
                Access to the trading platform
              </h1>
              <p className='text-justify  text-[14px] lg:text-paragraphSmall font-light   mt-[8px]'>
                Members can access ESX’s Automated Trading System by connecting
                directly or through third party back office and trading
                platforms.
              </p>
              {/* <LinkButton href='' className='pt-[20px] lg:pt-0 lg:mt-auto'>
                View More
              </LinkButton> */}
            </Card>
            <Card width='py-7 px-10 flex flex-col'>
              <h1 className='text-black text-xl lg:text-paragraphBig font-normal   '>
                Direct Market Access (DMA)
              </h1>
              <p className='text-justify  text-[14px] lg:text-paragraphSmall font-light     mt-[8px]'>
                ESX members can offer direct market access (DMA) to their
                clients, which allows clients to enter buy and sell side
                instructions via the members third party trading platform.
              </p>
              {/* <LinkButton href='' className='pt-[20px] lg:pt-0 lg:mt-auto'>
                View More
              </LinkButton> */}
            </Card>
          </div>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default MembershipRules;
