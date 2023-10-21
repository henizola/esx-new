"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import manager from "/public/images/manager.png";
import sliderbannerImage from "/public/images/slider-background.png";
import bannerImage from "/public/images/Project-Procedure-2.png";
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
    "Contact Us",
  ];

  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner
        backgroundImage={bannerImage}
        title='Contact Us'
        description='“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse'
      />
      <div className='grid sm:grid-cols-7 gap-8 lg:px-28 py-7'>
        <Card width='col-span-2 hidden lg:flex flex-col text-left  py-[20px] px-[20px]'>
          <h6 className='ml-2 mb-4 text-lg  -600'>{"News and Media Center"}</h6>
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
        <div className='col-span-5 space-y-8 w-[100vw] lg:w-[100%]'>
          <div className='col-span-3 flex flex-col gap-8'>
            <Card width=' flex flex-col gap-[37px] pt-[30px] pb-[45px] pr-[46px] pl-[43px]    '>
              <h1 className=' text-black text-[40px] font-normal   '>
                Enquiry Form
              </h1>
              <div className='grid grid-cols-1  md:grid-cols-3 gap-[22px]'>
                <input
                  placeholder='Title'
                  type='text'
                  className='py-[14px] px-5 bg-zinc-300 text-black text-base font-light   '
                />
                <input
                  placeholder='First Name'
                  type='text'
                  className='py-[14px] px-5 bg-zinc-300 text-black text-base font-light   '
                />
                <input
                  placeholder='Last Name'
                  type='text'
                  className='py-[14px] px-5 bg-zinc-300 text-black text-base font-light   '
                />
              </div>
              <div className='grid grid-cols-1 gap-[22px]'>
                <input
                  placeholder='Email Address'
                  type='email'
                  className='py-[14px] px-5 bg-zinc-300 text-black text-base font-light   '
                />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-[22px]'>
                <input
                  placeholder='Company'
                  type='text'
                  className='py-[14px] px-5 bg-zinc-300 text-black text-base font-light   '
                />
                <input
                  placeholder='Investor Type'
                  type='text'
                  className='py-[14px] px-5 bg-zinc-300 text-black text-base font-light   '
                />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-[22px]'>
                <input
                  placeholder='Work Phone'
                  type='tel'
                  className='py-[14px] px-5 bg-zinc-300 text-black text-base font-light   '
                />
                <input
                  placeholder='home Phone'
                  type='tel'
                  className='py-[14px] px-5 bg-zinc-300 text-black text-base font-light   '
                />
                <input
                  placeholder='Fax number'
                  type='text'
                  className='py-[14px] px-5 bg-zinc-300 text-black text-base font-light   '
                />
              </div>
              <div className='grid grid-cols-1 gap-[22px]'>
                <input
                  placeholder='type of enquiry'
                  type='email'
                  className='py-[14px] px-5 bg-zinc-300 text-black text-base font-light   '
                />
              </div>
              <div className='grid grid-cols-1 gap-[22px]'>
                <textarea
                  placeholder='type of enquiry'
                  rows={6}
                  className='py-[14px] px-5 bg-zinc-300 text-black text-base font-light   '
                />
              </div>
              <button className='w-full max-w-[255px] py-[15px] self-center bg-primary-blue text-center text-white text-xl font-bold   '>
                SUBMIT
              </button>
            </Card>

            <div className='pr-[46px] pl-[43px]'>
              <h2 className=' text-black text-[24px] md:text-[40px] font-normal   '>
                Physical Address
              </h2>
              <hr className=' mt-[18px] mb-[13px] border border-gray/30 ' />
              <div className=' text-black text-base font-light   '>
                ESX
                <br />
                Bole
                <br />
                Flamingo
                <br />
                Addis Ababa
                <br />
                2196
              </div>
            </div>
            <div className='pr-[46px] pl-[43px]'>
              <h2 className=' text-black text-[24px] md:text-[40px] font-normal   '>
                GPS Coordinates
              </h2>
              <hr className=' mt-[18px] mb-[13px] border border-gray/30 ' />
              <div className=' text-black text-base font-light   '>
                Latitude: -26.1018
                <br />
                Longitude: 28.05671
              </div>
            </div>
            <div className='pr-[46px] pl-[43px]'>
              <h2 className=' text-black text-[24px] md:text-[40px] font-normal   '>
                Postal Address
              </h2>
              <hr className=' mt-[18px] mb-[13px] border border-gray/30 ' />
              <div className=' text-black text-base font-light   '>
                Private Bag <br /> X991174Sandton, 2196
              </div>
            </div>
            <div className='pr-[46px] pl-[43px]'>
              <h2 className=' text-black text-[24px] md:text-[40px] font-normal   '>
                Contact Information
              </h2>
              <hr className=' mt-[18px] mb-[13px] border border-gray/30 ' />
              {/* <div className=" text-black text-base font-light   ">Private Bag X991174Sandton, 2196</div> */}
              <div className=''>
                <span className='text-black text-base font-light   '>
                  Tel:{" "}
                </span>
                <span className='underline'>
                  +251 11 520 7000
                  <br />
                </span>
                <span className='text-black text-base font-light   '>
                  Email:{" "}
                </span>
                <span className='underline'>info@esx.com</span>
              </div>
            </div>
            <div className='pr-[46px] pl-[43px]'>
              <h2 className=' text-black text-[24px] md:text-[40px] font-normal   '>
                Media Enquiry
              </h2>
              <hr className=' mt-[18px] mb-[13px] border border-gray/30 ' />
              {/* <div className=" text-black text-base font-light   ">Private Bag X991174Sandton, 2196</div> */}
              <div className=''>
                <span className='text-black text-base font-normal   '>
                  Addis Ababa, Ethiopia
                  <br />
                </span>
                <span className='text-black text-base font-light   '>
                  Head: Bole
                  <br />
                  Email:{" "}
                </span>
                <span className='text-black text-base font-light    underline'>
                  info@esx.com
                  <br />
                </span>
                <span className='text-black text-base font-light   '>
                  Contact: +251 11 520 7495
                  <br />
                  Mobile: +251 11 261 7411
                  <br />
                  <br />
                </span>
                <span className='text-black text-base font-normal   '>
                  2RCP+RR2,Addis Ababa
                  <br />
                </span>
                <span className='text-black text-base font-light   '>
                  Communication Specialist
                  <br />
                  Tel: 011 520 7331
                  <br />
                  Mobile: 011 261 7405
                  <br />
                  Email:{" "}
                </span>
                <span className='text-black text-base font-light    underline'>
                  contact@esx.com
                  <br />
                </span>
                <span className='text-black text-base font-light   '>
                  <br />
                </span>
                <span className='text-black text-base font-normal   '>
                  ESX general enquiries:
                  <br />
                </span>
                <span className='text-black text-base font-light   '>
                  Email:{" "}
                </span>
                <span className='text-black text-base font-light    underline'>
                  inquiries@esx.com
                  <br />
                </span>
                <span className='text-black text-base font-light   '>
                  Tel: 011 520 7000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white py-5 px-5 md:py-[68px]'>
        <p className='max-w-[980px] mx-auto w-full md:h-16 text-center text-black text-base font-normal    leading-snug'>
          Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
          consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum
          dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat{" "}
        </p>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default ContactUs;
