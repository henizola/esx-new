import React  from "react";
import Card from "@/components/Card/Card";
import Banner from "@/components/Banner/banner";
import image from "/public/images/who-we-are.png";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/20/solid";





interface MembersDirectoryProps {
  setStep: (value: number) => void;
  step: number;
}

const MembersDirectory: React.FC<MembersDirectoryProps> = ({
  setStep,
  step,
}) => {
  const items = ["Trade on ESX", "Members Directory"];
  const spanItems = [
    "Direct Market Access",
    "Listed Lecurities",
    "Market Data",
    "Indices",
    "Market Announcements",
    "Fees & Taxation",
    "Tendor",
  ];
  const members = [
    "Securities Broker",
    "Securities Dealer",
    "Securities Broker Dealer",
    "Securities Broker (Investment Bank)",
    "Any other category as may be specified by The Exchange from time to time",
  ];

  return (
    <div className="flex flex-col w-full">
      <Banner
        backgroundImage={image}
        title="Members"
        description="“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse"
      />
      <div className="flex w-full  px-28 py-7">
        <Card width="w-[30%] mr-5 flex flex-col text-left  py-10 px-5">
        <h6 className="ml-2 mb-4"><Link href={"/equity-market"}>Equity Market</Link> {"> Trade"}</h6>{" "}
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
          {spanItems.map((item, index) => (
            <button
              key={index}
              className={`  text-left ml-10 my-2 font-light border-b border-black `}
              style={{
                borderBottom: "0.7px solid black",
                fontSize: "14px",
                fontWeight: "300",
              }}
            >
              {item}
            </button>
          ))}
        </Card>
        <div className="grid grid-cols-1 gap-3 w-[100%]">
          <Card width="flex flex-col ">
            <div className="pt-[32px] pb-[36px] px-[20px] col-span-1 flex flex-col gap-4 order-1">
              <h1 className="text-black text-3xl ">Members</h1>
              <p className="text-black text-base font-normal font-['Open Sans'] leading-snug mt-2 ">
                ESX provides the following categories of membership license.
              </p>
              <hr className="  border border-0.5 border-primary-golden" />

              <div className="">
                {members.map((member, i) => (
                  <div className="flex justify-between border-b border-primary-golden/40 items-center py-[30px]" key={i}>
                    <p className="text-zinc-500 text-base font-normal font-['Open Sans'] leading-snug">
                      {member}
                    </p>
                    <ChevronRightIcon
                    
                    className={`w-10 h-10 p-2 rounded-full hover:bg-white/80 `}
                  />
                  </div>
                ))}
              </div>
                  {/* <ExpandableCard
                    key={i}
                    className="bg-transparent py-2 rounded-none  "
                    question={member}
                  >
                    typically 6-9 months - however this depends on the company’s
                    IPO readiness (prepared financial statements, company
                    documents etc.).
                  </ExpandableCard> */}

              {/* <LinkButton href="#">View More</LinkButton> */}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MembersDirectory;
