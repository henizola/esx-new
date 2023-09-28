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
interface MemberListProps {
  setStep: (value: number) => void;
  step: number;
}

const MemberList: React.FC<MemberListProps> = ({ setStep, step }) => {
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
        title="List of members"
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
          <div className="grid gap-8">
            <Card width="flex flex-col bg-white/0  shadow-[0px] ">
              <h1 className="py-[22px] px-[20px]  bg-primary-blue text-white text-[32px] font-normal font-['Open Sans']">
                List of Members
              </h1>

              <main className="pt-[30px]  space-y-4 ">
               

                <div className="grid grid-cols-4 gap-4">
                  <img
                    alt=""
                    className="aspect-square w-[230px] h-[230px] object-cover "
                    src="/images/Premium Vector _ Hand people care logo vector 1.png"
                  />
                  <Card width="px-[20px] py-[16px] pb-[14px] col-span-3 flex flex-col gap-4  shadow-[0px]">
                    <h1 className="text-black text-[32px] font-normal font-['Open Sans']">Lorem ipsum</h1>
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-2">
                        <span className="text-black text-sm font-normal font-['Open Sans'] leading-snug">
                          Email :
                        </span>
                        <span className="text-zinc-500 text-sm font-light font-['Open Sans'] leading-snug">
                          theemail.gmail.com
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-black text-sm font-normal font-['Open Sans'] leading-snug">
                          Website :
                        </span>
                        <span className="text-zinc-500 text-sm font-light font-['Open Sans'] leading-snug">
                          www.gmail.com
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-black text-sm font-normal font-['Open Sans'] leading-snug">
                          Tel :
                        </span>
                        <span className="text-zinc-500 text-sm font-light font-['Open Sans'] leading-snug">
                          0987654321
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-black text-sm font-normal font-['Open Sans'] leading-snug">
                          Service :
                        </span>
                        <span className="text-zinc-500 text-sm font-light font-['Open Sans'] leading-snug">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-black text-sm font-normal font-['Open Sans'] leading-snug">
                          Active Since :
                        </span>
                        <span className="text-zinc-500 text-sm font-light font-['Open Sans'] leading-snug">
                          1990
                        </span>
                      </div>

                     
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <img
                    alt=""
                    className="aspect-square w-[230px] h-[230px] object-cover "
                    src="/images/Accounting and Finance Business Branding Complete Guide (1) 1.png"
                  />
                  <Card width="px-[20px] py-[16px] pb-[14px] col-span-3 flex flex-col gap-4 shadow-[0px]">
                    <h1 className="text-black text-[32px] font-normal font-['Open Sans']">Lorem ipsum</h1>
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-2">
                        <span className="text-black text-sm font-normal font-['Open Sans'] leading-snug">
                          Email :
                        </span>
                        <span className="text-zinc-500 text-sm font-light font-['Open Sans'] leading-snug">
                          theemail.gmail.com
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-black text-sm font-normal font-['Open Sans'] leading-snug">
                          Website :
                        </span>
                        <span className="text-zinc-500 text-sm font-light font-['Open Sans'] leading-snug">
                          www.gmail.com
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-black text-sm font-normal font-['Open Sans'] leading-snug">
                          Tel :
                        </span>
                        <span className="text-zinc-500 text-sm font-light font-['Open Sans'] leading-snug">
                          0987654321
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-black text-sm font-normal font-['Open Sans'] leading-snug">
                          Service :
                        </span>
                        <span className="text-zinc-500 text-sm font-light font-['Open Sans'] leading-snug">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-black text-sm font-normal font-['Open Sans'] leading-snug">
                          Active Since :
                        </span>
                        <span className="text-zinc-500 text-sm font-light font-['Open Sans'] leading-snug">
                          1990
                        </span>
                      </div>

                     
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <img
                    alt=""
                    className="aspect-square w-[230px] h-[230px] object-cover "
                    src="/images/Recruiting 1.png"
                  />
                  <Card width="px-[20px] py-[16px] pb-[14px] col-span-3 flex flex-col gap-4 shadow-[0px]">
                    <h1 className="text-black text-[32px] font-normal font-['Open Sans']">Lorem ipsum</h1>
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-2">
                        <span className="text-black text-sm font-normal font-['Open Sans'] leading-snug">
                          Email :
                        </span>
                        <span className="text-zinc-500 text-sm font-light font-['Open Sans'] leading-snug">
                          theemail.gmail.com
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-black text-sm font-normal font-['Open Sans'] leading-snug">
                          Website :
                        </span>
                        <span className="text-zinc-500 text-sm font-light font-['Open Sans'] leading-snug">
                          www.gmail.com
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-black text-sm font-normal font-['Open Sans'] leading-snug">
                          Tel :
                        </span>
                        <span className="text-zinc-500 text-sm font-light font-['Open Sans'] leading-snug">
                          0987654321
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-black text-sm font-normal font-['Open Sans'] leading-snug">
                          Service :
                        </span>
                        <span className="text-zinc-500 text-sm font-light font-['Open Sans'] leading-snug">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-black text-sm font-normal font-['Open Sans'] leading-snug">
                          Active Since :
                        </span>
                        <span className="text-zinc-500 text-sm font-light font-['Open Sans'] leading-snug">
                          1990
                        </span>
                      </div>

                     
                    </div>
                  </Card>
                </div>

               
              </main>
            </Card>
          </div>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default MemberList;
