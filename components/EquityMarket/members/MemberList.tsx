"use client";
import { BackButton } from "@/components/Button/BackButton";
import React from "react";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import bannerImage from "/public/images/about-banner.png";
interface MemberListProps {
  setStep: (value: number) => void;
  step: number;
}

const MemberList: React.FC<MemberListProps> = ({ setStep, step }) => {
  const items = [
    "Overview",
    "How to Become a Member",
    "Membership Rules",
    "Members Directory",
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
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner
        backgroundImage={bannerImage}
        title='List of members'
        description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quas adipisci aliquid exercitationem dignissimos tempore similique sapiente, aliquam nisi repellendus.'
      />

      <div className='grid sm:grid-cols-9 gap-8 lg:px-28 py-7'>
        <Card width='col-span-2 hidden  lg:flex flex-col text-left  py-[20px] px-[20px]'>
          <h6 className='ml-2 mb-4'>
            <BackButton setStep={setStep} link='/equity-market'>
              Equity Market
            </BackButton>{" "}
            {"> Members"}
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
          <div className='grid gap-8'>
            <Card width='flex flex-col bg-white/0  shadow-[0px] '>
              <h1 className='py-[18px] px-10  bg-primary-blue  text-white text-[20px] lg:text-subHeader font-normal   '>
                List of Members
              </h1>
              <main className='pt-[30px]  space-y-4 '>
                <div className='grid lg:grid-cols-4 gap-2'>
                  <img
                    alt=''
                    className='aspect-square hidden lg:block lg:w-[230px] w-[100%] h-[230px] object-cover '
                    src='/images/Premium Vector _ Hand people care logo vector 1.png'
                  />
                  <Card width='px-[20px] py-[16px] pb-[14px] col-span-3 flex flex-col gap-4  shadow-[0px]'>
                    <div className='flex'>
                      <img
                        alt=''
                        className='aspect-square lg:hidden w-[30%] h-[auto] object-cover '
                        src='/images/Premium Vector _ Hand people care logo vector 1.png'
                      />
                      <h1 className='text-black text-[20px] lg:text-subHeader mt-14 lg:mt-0 font-normal   '>
                        Lorem ipsum
                      </h1>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div className='flex gap-2'>
                        <span className='text-black text-sm font-normal    leading-snug'>
                          Email :
                        </span>
                        <span className='     text-sm font-light    leading-snug'>
                          theemail.gmail.com
                        </span>
                      </div>
                      <div className='flex gap-2'>
                        <span className='text-black text-sm font-normal    leading-snug'>
                          Website :
                        </span>
                        <span className='     text-sm font-light    leading-snug'>
                          www.gmail.com
                        </span>
                      </div>
                      <div className='flex gap-2'>
                        <span className='text-black text-sm font-normal    leading-snug'>
                          Tel :
                        </span>
                        <span className='     text-sm font-light    leading-snug'>
                          0987654321
                        </span>
                      </div>
                      <div className='flex gap-2'>
                        <span className='text-black text-sm font-normal    leading-snug'>
                          Service :
                        </span>
                        <span className='     text-sm font-light    leading-snug'>
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </span>
                      </div>
                      <div className='flex gap-2'>
                        <span className='text-black text-sm font-normal    leading-snug'>
                          Active Since :
                        </span>
                        <span className='     text-sm font-light    leading-snug'>
                          1990
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className='grid lg:grid-cols-4 gap-2'>
                  <img
                    alt=''
                    className='aspect-square hidden lg:block lg:w-[230px] w-[100%] h-[230px] object-cover '
                    src='/images/Premium Vector _ Hand people care logo vector 1.png'
                  />
                  <Card width='px-[20px] py-[16px] pb-[14px] col-span-3 flex flex-col gap-4  shadow-[0px]'>
                    <div className='flex'>
                      <img
                        alt=''
                        className='aspect-square lg:hidden w-[30%] h-[auto] object-cover '
                        src='/images/Winston Salem Corporate Headshots & Personal Branding Photographer 1.png'
                      />
                      <h1 className='text-black text-[20px] lg:text-subHeader mt-14 lg:mt-0 font-normal   '>
                        Lorem ipsum
                      </h1>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div className='flex gap-2'>
                        <span className='text-black text-sm font-normal    leading-snug'>
                          Email :
                        </span>
                        <span className='     text-sm font-light    leading-snug'>
                          theemail.gmail.com
                        </span>
                      </div>
                      <div className='flex gap-2'>
                        <span className='text-black text-sm font-normal    leading-snug'>
                          Website :
                        </span>
                        <span className='     text-sm font-light    leading-snug'>
                          www.gmail.com
                        </span>
                      </div>
                      <div className='flex gap-2'>
                        <span className='text-black text-sm font-normal    leading-snug'>
                          Tel :
                        </span>
                        <span className='     text-sm font-light    leading-snug'>
                          0987654321
                        </span>
                      </div>
                      <div className='flex gap-2'>
                        <span className='text-black text-sm font-normal    leading-snug'>
                          Service :
                        </span>
                        <span className='     text-sm font-light    leading-snug'>
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </span>
                      </div>
                      <div className='flex gap-2'>
                        <span className='text-black text-sm font-normal    leading-snug'>
                          Active Since :
                        </span>
                        <span className='     text-sm font-light    leading-snug'>
                          1990
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
                <div className='grid lg:grid-cols-4 gap-2'>
                  <img
                    alt=''
                    className='aspect-square hidden lg:block lg:w-[230px] w-[100%] h-[230px] object-cover '
                    src='/images/Premium Vector _ Hand people care logo vector 1.png'
                  />
                  <Card width='px-[20px] py-[16px] pb-[14px] col-span-3 flex flex-col gap-4  shadow-[0px]'>
                    <div className='flex'>
                      <img
                        alt=''
                        className='aspect-square lg:hidden w-[30%] h-[auto] object-cover '
                        src='/images/Accounting and Finance Business Branding Complete Guide (1) 1.png'
                      />
                      <h1 className='text-black text-[20px] lg:text-[32px] mt-14 lg:mt-0 font-normal   '>
                        Lorem ipsum
                      </h1>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div className='flex gap-2'>
                        <span className='text-black text-sm font-normal    leading-snug'>
                          Email :
                        </span>
                        <span className='     text-sm font-light    leading-snug'>
                          theemail.gmail.com
                        </span>
                      </div>
                      <div className='flex gap-2'>
                        <span className='text-black text-sm font-normal    leading-snug'>
                          Website :
                        </span>
                        <span className='     text-sm font-light    leading-snug'>
                          www.gmail.com
                        </span>
                      </div>
                      <div className='flex gap-2'>
                        <span className='text-black text-sm font-normal    leading-snug'>
                          Tel :
                        </span>
                        <span className='     text-sm font-light    leading-snug'>
                          0987654321
                        </span>
                      </div>
                      <div className='flex gap-2'>
                        <span className='text-black text-sm font-normal    leading-snug'>
                          Service :
                        </span>
                        <span className='     text-sm font-light    leading-snug'>
                          Lorem ipsum dolor sit amet consectetur adipisicing.
                        </span>
                      </div>
                      <div className='flex gap-2'>
                        <span className='text-black text-sm font-normal    leading-snug'>
                          Active Since :
                        </span>
                        <span className='     text-sm font-light    leading-snug'>
                          1990
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>{" "}
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
