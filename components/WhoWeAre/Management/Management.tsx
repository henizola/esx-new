"use client";
import Image from "next/image";
import React from "react";
import member1 from "/public/images/management1.png";
import member2 from "/public/images/management2.png";
import member3 from "/public/images/management3.png";
import management from "/public/images/Management.png";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";

interface ManagementProps {
  setStep: (value: number) => void;
  step: number;
}

const Management: React.FC<ManagementProps> = ({ setStep, step }) => {
  const items = [
    "Welcome Message",
    "Overview",
    "Vision & Mission",
    "Organizational Structure",
    "Board of Directors",
    "Management",
    // "ESX Reports",
    // "Careers",
    // "Tender",
  ];

  return (
    <div className='flex flex-col w-full'>
      <Banner
        backgroundImage={management}
        title='Management'
        description='“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci '
      />
      <div className='flex w-full  px-4 lg:px-28 py-7'>
        <Card width='w-[25%] hidden lg:flex mr-5  flex-col text-left  py-10 px-5'>
          <h6 className='ml-7 mb-4'>About Us</h6>
          {items.map((item, index) => (
            <button
              key={index}
              className={`text-left ml-8 my-2 font-light  `}
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
        <div className='grid grid-cols-1  gap-3 w-[100%]'>
          <Card width='w-[100%] my-0 h-[100%] pb-5'>
            <div className=' flex py-5 mx-5 md:mx-10  p-2'>
              <div className='w-[100%] flex  flex-col  mt-0 pt-0'>
                <h1 className='text-[28px] md:text-[40px]'>Management</h1>
                <p className='text-[14px] md:text-[16px]  w-[100%] mt-2'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt
                </p>
              </div>
            </div>
          </Card>
          <div className='w-[100%] grid   gap-4  grid-cols-1 md:grid-cols-3 h-[100%]  pt-4'>
            <Card width='w-[100%] my-0 h-[fit-content] pb-5 '>
              <div className=' flex flex-col h-[fit-content] px-0  '>
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={member1.src}
                    alt='manager'
                    className='w-[100%] h-[200px] lg:h-[60%] object-cover'
                  />
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Lorem ipsum dolor
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Board of director
                  </h1>
                  <p className='text-[14px] lg:text-[16px]  p-5 pt-2'>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euisLorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy ni
                  </p>
                </div>
              </div>
            </Card>
            <Card width='w-[100%] my-0 h-[fit-content] pb-5 '>
              <div className=' flex flex-col h-[fit-content] px-0  '>
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={member2.src}
                    alt='manager'
                    className='w-[100%] h-[200px] lg:h-[60%] object-cover'
                  />
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Lorem ipsum dolor
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Board of director
                  </h1>
                  <p className='text-[14px] lg:text-[16px]  p-5 pt-2'>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euisLorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy ni
                  </p>
                </div>
              </div>
            </Card>
            <Card width='w-[100%] my-0 h-[fit-content] pb-5 '>
              <div className=' flex flex-col h-[fit-content] px-0  '>
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={member3.src}
                    alt='manager'
                    className='w-[100%] h-[200px] lg:h-[60%] object-cover'
                  />
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Lorem ipsum dolor
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Board of director
                  </h1>
                  <p className='text-[14px] lg:text-[16px]  p-5 pt-2'>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euisLorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy ni
                  </p>
                </div>
              </div>
            </Card>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
