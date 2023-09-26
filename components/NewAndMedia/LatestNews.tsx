"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import manager from "/public/images/manager.png";
import sliderbannerImage from "/public/images/slider-background.png";
import bannerImage from "/public/images/about-banner.png";
import Banner from "../Banner/banner";
import Card from "../Card/Card";

interface LatestNewsProps {
  setStep: (value: number) => void;
  step: number;
}

const LatestNews: React.FC<LatestNewsProps> = ({ setStep, step }) => {
  const items = [
"Latest News",
"Events",
"Press Releases",
"Gallery",
"Downloads",
"Contact I-Js",
  ];


  return (
    <div className="flex flex-col w-full p-0 m-0">
      <Banner
        backgroundImage={bannerImage}
        title="Latest News"
        description="“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse"
      />
      <div className="grid sm:grid-cols-7 gap-8 px-28 py-7">
        <Card width="col-span-2  flex flex-col text-left  py-[20px] px-[20px]">
          <h6 className="ml-2 mb-4 text-lg text-gray-600">
            {"News and Media Center"}
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
        <div className="col-span-3 flex flex-col gap-8">
              <Card width=" grid grid-flex  ">
                <div>
                <h1 className="py-[20px] px-[20px]  text-3xl ">
                  Listing Rules and Requirements
                </h1>
                <main className="py-[20px] px-[20px] space-y-6">
                  <h1 className="text-black text-[19px] not-italic font-normal leading-[normal]">
                    How to become a listed company
                  </h1>
                  <p className="text-gray text-base not-italic font-normal leading-[normal]">
                    To be listed on the ESX equity market, issuers will be
                    required to comply with pre-set listing rules and be subject
                    to continuous obligations.
                  </p>
                  <Link href="#" className="flex text-[16px] mt-5">
                    View more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 mt-1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>
                </main>
                </div>
              </Card>
              <Card width=" ">
                <h1 className="py-[20px] px-[20px]  bg-primary-blue text-white text-sm not-italic font-semibold leading-[normal]">
                  Listing Rules and Requirements
                </h1>
                <main className="py-[20px] px-[20px] space-y-6">
                  <h1 className="text-black text-[19px] not-italic font-normal leading-[normal]">
                    ESX Main Market Segment
                  </h1>
                  <p className="text-gray text-base not-italic font-normal leading-[normal]">
                    An Issuer seeking to list its equity shares on ESX Main
                    Market Segment shall have;
                  </p>
                  <Link href="#" className="flex text-[16px] mt-5">
                    View more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 mt-1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>
                </main>
              </Card>
              <Card width=" ">
                <h1 className="py-[20px] px-[20px]  bg-primary-blue text-white text-sm not-italic font-semibold leading-[normal]">
                  Listing Rules and Requirements
                </h1>
                <main className="py-[20px] px-[20px] space-y-6">
                  <h1 className="text-black text-[19px] not-italic font-normal leading-[normal]">
                    ESX Enterprise Growth Market
                  </h1>
                  <p className="text-gray text-base not-italic font-normal leading-[normal]">
                    An Issuer seeking to list its equity shares on ESX Main
                    Market Segment shall have;
                  </p>
                  <Link href="#" className="flex text-[16px] mt-5">
                    View more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 mt-1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>
                </main>
              </Card>
            </div>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default LatestNews;

