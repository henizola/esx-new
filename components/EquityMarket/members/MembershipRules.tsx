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
import LinkButton from "@/components/Button/LinkButton";
import { BackButton } from "@/components/Button/BackButton";
interface MembershipRulesProps {
  setStep: (value: number) => void;
  step: number;
}

const MembershipRules: React.FC<MembershipRulesProps> = ({ setStep, step }) => {
  const items = [
    "How to Become a Member",
    "Membership Rules",
    "List of Members",
  ];
  const evidence = [
    "Rules of membership and conditions for approval and demission of members",
    "The rights and liability of its members, investors, and u ers of their services",
    "Standards of behavior of members",
    "Disciplinary actions against members",
    "Duels for settlement Of disputes",
    "Duels for settlement of disputes",
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
        <BackButton setStep={setStep} link="/equity-market">
              Equity Market
            </BackButton>{" "} {"> Members"}
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
          <div className="grid gap-5">
            <Card width="flex flex-col ">
              <h1 className="py-[18px] px-[20px]  bg-primary-blue text-white text-[32px] font-normal font-['Open Sans']">
                Membership Rules
              </h1>

              <main className="py-[20px] px-[20px] space-y-4">
                <h1 className="text-black text-[28px] font-normal font-['Open Sans']">
                  Members shall also comply with The Exchange’s membership rules
                  that set out
                </h1>
                <div className="flex flex-col divide divide-y divide-gray/40">
                  {evidence.map((text) => (
                    <p
                      key={text}
                      className="text-zinc-500 text-base not-italic font-normal leading-[normal] py-4 flex items-center gap-1"
                    >
                      <div className="w-3 h-3 aspect-square rounded-full bg-gray "/> <span>{text}</span>
                    </p>
                  ))}
                </div>

                <div className="bg-zinc-100  max-w-[580px] mx-auto text-gray flex flex-col items-center py-4">
                  <p className="text-justify text-zinc-500 text-[15px] font-normal font-['Open Sans'] leading-snug mb-[18px]" >
                    For details of ESX membership rules, please refer to
                    following documents
                  </p>
                  <Link
                    href="#"
                    className="px-[18px] pt-[2px] pb-[3px] bg-primary-blue rounded-md text-center text-white text-base font-semibold font-['Open Sans']"
                  >
                    ESX Membership Rules
                  </Link>
                </div>
              </main>
            </Card>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            <Card width="py-[20px] px-[20px] flex flex-col">
              <h1 className="text-black text-2xl font-normal font-['Open Sans']">
                Access to the trading platform
              </h1>
              <p className="text-justify text-zinc-500 text-[15px] font-normal font-['Open Sans'] leading-snug mt-[8px]">
                Members can access ESX’s Automated Trading System by connecting
                directly or through third party back office and trading
                platforms.
              </p>
              <LinkButton href="" className="mt-auto" >View More</LinkButton>
            </Card>
            <Card width="py-[20px] px-[20px] flex flex-col">
              <h1 className="text-black text-2xl font-normal font-['Open Sans']">
                Direct Market Access (DMA)
              </h1>
              <p className="text-justify text-zinc-500 text-[15px] font-normal font-['Open Sans'] leading-snug mt-[8px]">
                ESX members can offer direct market access (DMA) to their
                clinets, which allows clients to enter buy and sell side
                instructions via the members third party trading platform.
              </p>
              <LinkButton href="" className="mt-[17px]" >View More</LinkButton>
            </Card>
          </div>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default MembershipRules;
