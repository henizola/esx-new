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
            {"Equity Market > Members"}
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
            <Card width="flex flex-col bg-black/0 shadow-0 ">
              <h1 className="py-[20px] px-[20px]  bg-primary-blue text-white text-2xl not-italic font-normal leading-[normal]">
                List of Members
              </h1>

              <main className="pt-[20px]  space-y-4 ">
                <div className="grid grid-cols-4 gap-4">
                  <img
                    alt=""
                    className="aspect-square h-full"
                    src="/images/Accounting and Finance Business Branding Complete Guide (1) 1.png"
                  />
                  <Card width="p-[20px] col-span-3 flex flex-col gap-4">
                    <h1 className="text-black text-2xl not-italic font-normal leading-[normal]">
                      lorem Ipsum
                    </h1>
                    <div className="flex flex-col">
                      <p className="flex gap-2">
                        <span className="font-bold text-black">Email :</span>
                        <span className="text-gray">
                          TheEmail.gmail.com
                        </span>
                      </p>
                      <p className="flex gap-2">
                        <span className="font-bold text-black">Website :</span>
                        <span className="text-gray">
                          www.gmail.com
                        </span>
                      </p>
                      <p className="flex gap-2">
                        <span className="font-bold text-black">Tel :</span>
                        <span className=" text-gray">0987654321</span>
                      </p>
                      <p className="flex gap-2">
                        <span className="font-bold text-black">Service :</span>
                        <span className=" text-gray">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </span>
                      </p>
                      <p className="flex gap-2">
                        <span className="font-bold text-black">
                          Active Since :
                        </span>
                        <span className=" text-gray">1990</span>
                      </p>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <img
                    alt=""
                    className="aspect-square h-full"
                    src="/images/Premium Vector _ Hand people care logo vector 1.png"
                  />
                  <Card width="p-[20px] col-span-3 flex flex-col gap-4">
                    <h1 className="text-black text-2xl not-italic font-normal leading-[normal]">
                      lorem Ipsum
                    </h1>
                    <div className="flex flex-col">
                      <p className="flex gap-2">
                        <span className="font-bold text-black">Email :</span>
                        <span className="text-gray">
                          TheEmail.gmail.com
                        </span>
                      </p>
                      <p className="flex gap-2">
                        <span className="font-bold text-black">Website :</span>
                        <span className="text-gray">
                          www.gmail.com
                        </span>
                      </p>
                      <p className="flex gap-2">
                        <span className="font-bold text-black">Tel :</span>
                        <span className=" text-gray">0987654321</span>
                      </p>
                      <p className="flex gap-2">
                        <span className="font-bold text-black">Service :</span>
                        <span className=" text-gray">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </span>
                      </p>
                      <p className="flex gap-2">
                        <span className="font-bold text-black">
                          Active Since :
                        </span>
                        <span className=" text-gray">1990</span>
                      </p>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <img
                    alt=""
                    className="aspect-square h-full"
                    src="/images/Recruiting 1.png"
                  />
                  <Card width="p-[20px] col-span-3 flex flex-col gap-4">
                    <h1 className="text-black text-2xl not-italic font-normal leading-[normal]">
                      lorem Ipsum
                    </h1>
                    <div className="flex flex-col">
                      <p className="flex gap-2">
                        <span className="font-bold text-black">Email :</span>
                        <span className="text-gray">
                          TheEmail.gmail.com
                        </span>
                      </p>
                      <p className="flex gap-2">
                        <span className="font-bold text-black">Website :</span>
                        <span className="text-gray">
                          www.gmail.com
                        </span>
                      </p>
                      <p className="flex gap-2">
                        <span className="font-bold text-black">Tel :</span>
                        <span className=" text-gray">0987654321</span>
                      </p>
                      <p className="flex gap-2">
                        <span className="font-bold text-black">Service :</span>
                        <span className=" text-gray">
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </span>
                      </p>
                      <p className="flex gap-2">
                        <span className="font-bold text-black">
                          Active Since :
                        </span>
                        <span className=" text-gray">1990</span>
                      </p>
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
