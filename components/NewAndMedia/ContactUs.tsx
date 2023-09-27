"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import manager from "/public/images/manager.png";
import sliderbannerImage from "/public/images/slider-background.png";
import bannerImage from "/public/images/about-banner.png";
import Banner from "../Banner/banner";
import Card from "../Card/Card";

interface ContactUsProps {
  setStep: (value: number) => void;
  step: number;
}

const ContactUs: React.FC<ContactUsProps> = ({ setStep, step }) => {
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
        title="Contact Us"
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
              <Card width=" flex flex-col gap-[37px] pt-[30px] pb-[45px] pr-[46px] pl-[43px]    ">
                <h1 className=" text-black text-[40px] font-normal font-['Open Sans']">Enquiry Form
                </h1>
                <div className="grid grid-cols-3 gap-[22px]">
                  <input placeholder="Title" type="text" className="py-[14px] px-5 bg-zinc-300 text-black text-base font-light font-['Open Sans']" />
                  <input placeholder="First Name" type="text" className="py-[14px] px-5 bg-zinc-300 text-black text-base font-light font-['Open Sans']" />
                  <input placeholder="Last Name" type="text" className="py-[14px] px-5 bg-zinc-300 text-black text-base font-light font-['Open Sans']" />
                </div>
                <div className="grid grid-cols-1 gap-[22px]">
                  <input placeholder="Email Address" type="email" className="py-[14px] px-5 bg-zinc-300 text-black text-base font-light font-['Open Sans']" />
                </div>
                <div className="grid grid-cols-2 gap-[22px]">
                  <input placeholder="Company" type="text" className="py-[14px] px-5 bg-zinc-300 text-black text-base font-light font-['Open Sans']" />
                  <input placeholder="Investor Type" type="text" className="py-[14px] px-5 bg-zinc-300 text-black text-base font-light font-['Open Sans']" />
                </div>
                 <div className="grid grid-cols-3 gap-[22px]">
                  <input placeholder="Work Phone" type="tel" className="py-[14px] px-5 bg-zinc-300 text-black text-base font-light font-['Open Sans']" />
                  <input placeholder="home Phone" type="tel" className="py-[14px] px-5 bg-zinc-300 text-black text-base font-light font-['Open Sans']" />
                  <input placeholder="Fax number" type="text" className="py-[14px] px-5 bg-zinc-300 text-black text-base font-light font-['Open Sans']" />
                </div>
                <div className="grid grid-cols-1 gap-[22px]">
                  <input placeholder="type of enquiry" type="email" className="py-[14px] px-5 bg-zinc-300 text-black text-base font-light font-['Open Sans']" />
                </div>
                <div className="grid grid-cols-1 gap-[22px]">
                  <textarea placeholder="type of enquiry" rows={6} className="py-[14px] px-5 bg-zinc-300 text-black text-base font-light font-['Open Sans']" />
                </div>
                <button className="w-full max-w-[255px] py-[15px] self-center bg-primary-blue text-center text-white text-xl font-bold font-['Open Sans']">
                  SUBMIT
                </button>
              </Card>
              
            </div>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default ContactUs;

