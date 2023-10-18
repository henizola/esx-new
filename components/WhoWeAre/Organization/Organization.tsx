"use client";
import Image from "next/image";
import React from "react";
import member1 from "/public/images/member1.png";
import member2 from "/public/images/member8.png";
import member3 from "/public/images/member9.png";
import member4 from "/public/images/member6.png";
import member5 from "/public/images/member7.png";
import member6 from "/public/images/member12.png";
import member7 from "/public/images/member11.png";
import organization from "/public/images/organization-banner.png";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";

interface OrganizationProps {
  setStep: (value: number) => void;
  step: number;
}

const Organization: React.FC<OrganizationProps> = ({ setStep, step }) => {
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
        backgroundImage={organization}
        title='Organizational structure'
        description='The Ethiopian Securities Exchange is organized as a share company in accordance with the Commercial Code of Ethiopia (2021).'
      />
      <div className='flex w-full px-4 lg:px-28 py-7'>
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
        <div className='grid grid-cols-1 mt-0 gap-3 w-[100%]'>
          <Card width='w-[100%] my-0 h-[100%] pb-5'>
            <div className=' flex py-5 mx-10  p-2'>
              <div className='w-[100%] flex  flex-col  mt-0 pt-0'>
                <p className='text-[14px] md:text-[19px] w-[100%] mt-2'>
                  ESX impliments a corporate organization and a governance
                  framework following international best practices.
                </p>
                <div className='w-[100%] relative flex justify-between  text-[15px]   font-light mt-2 mx-2 md:px-8 leading-6 text-gray'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[60px] absolute -left-5 top-2 h-[20px]'
                  >
                    <circle cx='12' cy='12' r='5' fill='currentColor' />
                  </svg>

                  <p className='pl-2 py-1 text-[14px] md:text-[16px] font-light'>
                    Having dedicated market committees for both equity and fixed
                    income markets that deal with the regulatory and delegated
                    enforcement functions of ESX.
                  </p>
                </div>{" "}
                <div className='w-[100%] relative flex justify-between  text-[15px]   font-light mt-2 mx-2 md:px-8 leading-6 text-gray'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[60px] absolute -left-5 top-2 h-[20px]'
                  >
                    <circle cx='12' cy='12' r='5' fill='currentColor' />
                  </svg>

                  <p className='pl-2 py-1 text-[14px] md:text-[16px] font-light'>
                    Separates ‘ringfences’ operation and governance of the
                    market from shareholders interest on the exchange.
                  </p>
                </div>{" "}
                <div className='w-[100%] relative flex justify-between  text-[15px]   font-light mt-2 mx-2 md:px-8 leading-6 text-gray'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[60px] absolute -left-5 top-2 h-[20px]'
                  >
                    <circle cx='12' cy='12' r='5' fill='currentColor' />
                  </svg>

                  <p className='pl-2 py-1 text-[14px] md:text-[16px] font-light'>
                    Building an efficient management and human resource strategy
                    that caters for the development stages of the exchange.
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <Card width='w-[100%] my-0 h-[100%] pb-5'>
            <div className=' flex flex-col py-5 md:mx-10 h-[100%]   p-2'>
              <div className='w-[100%] grid px-0 md:px-[20px] lg:px-[100px]  gap-4 grid-cols-2  md:grid-cols-3 h-[100%]   mt-0 pt-0'>
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={member1.src}
                    alt='manager'
                    className='w-[100%] h-[80%] object-cover'
                  />
                  <h1 className='text-[16px] font-normal py-1'>
                    Lorem ipsum dolor
                  </h1>
                  <h1 className='text-[14px] text-gray font-normal'>
                    Meet the team
                  </h1>
                </div>
                <div>
                  {" "}
                  <Image
                    height={200}
                    width={200}
                    src={member2.src}
                    alt='manager'
                    className='w-[100%] h-[80%] object-cover'
                  />
                  <h1 className='text-[16px] font-normal py-1'>
                    Lorem ipsum dolor
                  </h1>
                  <h1 className='text-[14px] text-gray font-normal'>
                    Meet the team
                  </h1>
                </div>
                <div>
                  {" "}
                  <Image
                    height={200}
                    width={200}
                    src={member3.src}
                    alt='manager'
                    className='w-[100%] h-[80%] object-cover'
                  />
                  <h1 className='text-[16px] font-normal py-1'>
                    Lorem ipsum dolor
                  </h1>
                  <h1 className='text-[14px] text-gray font-normal'>
                    Meet the team
                  </h1>
                </div>
              </div>
              <div className='w-[100%]  grid px-0 mt-10 lg:px-[100px]  gap-x-8 gap-y-5  grid-cols-2 md:grid-cols-4 h-[100%]  pt-2'>
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={member4.src}
                    alt='manager'
                    className='w-[100%] h-[80%] object-cover'
                  />
                  <h1 className='text-[12px] font-normal py-1'>
                    Lorem ipsum dolor
                  </h1>
                  <h1 className='text-[10px] text-gray font-normal'>
                    Meet the team
                  </h1>
                </div>
                <div>
                  {" "}
                  <Image
                    height={200}
                    width={200}
                    src={member5.src}
                    alt='manager'
                    className='w-[100%] h-[80%] object-cover'
                  />
                  <h1 className='text-[12px] font-normal py-1'>
                    Lorem ipsum dolor
                  </h1>
                  <h1 className='text-[10px] text-gray font-normal'>
                    Meet the team
                  </h1>
                </div>
                <div>
                  {" "}
                  <Image
                    height={200}
                    width={200}
                    src={member6.src}
                    alt='manager'
                    className='w-[100%] h-[80%] object-cover'
                  />
                  <h1 className='text-[12px] font-normal py-1'>
                    Lorem ipsum dolor
                  </h1>
                  <h1 className='text-[10px] text-gray font-normal'>
                    Meet the team
                  </h1>
                </div>
                <div>
                  {" "}
                  <Image
                    height={200}
                    width={200}
                    src={member7.src}
                    alt='manager'
                    className='w-[100%] h-[80%] object-cover'
                  />
                  <h1 className='text-[12px] font-normal py-1'>
                    Lorem ipsum dolor
                  </h1>
                  <h1 className='text-[10px] text-gray font-normal'>
                    Meet the team
                  </h1>
                </div>
              </div>
            </div>
          </Card>
          <Card width='w-[100%] my-0 h-[100%] pb-5'>
            <div className=' flex flex-col py-5 lg:mx-10 h-[100%]   p-2'>
              <div className='w-[100%]  grid  lg:px-[100px]  gap-x-12  grid-cols-2  md:grid-cols-4 h-[100%]   mt-0 pt-2'>
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={member4.src}
                    alt='manager'
                    className='w-[100%] h-[80%] object-cover'
                  />
                  <h1 className='text-[12px] font-normal py-1'>
                    Lorem ipsum dolor
                  </h1>
                  <h1 className='text-[10px] text-gray font-normal'>
                    Meet the team
                  </h1>
                </div>
                <div>
                  {" "}
                  <Image
                    height={200}
                    width={200}
                    src={member5.src}
                    alt='manager'
                    className='w-[100%] h-[80%] object-cover'
                  />
                  <h1 className='text-[12px] font-normal py-1'>
                    Lorem ipsum dolor
                  </h1>
                  <h1 className='text-[10px] text-gray font-normal'>
                    Meet the team
                  </h1>
                </div>
                <div>
                  {" "}
                  <Image
                    height={200}
                    width={200}
                    src={member6.src}
                    alt='manager'
                    className='w-[100%] h-[80%] object-cover'
                  />
                  <h1 className='text-[12px] font-normal py-1'>
                    Lorem ipsum dolor
                  </h1>
                  <h1 className='text-[10px] text-gray font-normal'>
                    Meet the team
                  </h1>
                </div>
                <div>
                  {" "}
                  <Image
                    height={200}
                    width={200}
                    src={member7.src}
                    alt='manager'
                    className='w-[100%] h-[80%] object-cover'
                  />
                  <h1 className='text-[12px] font-normal py-1'>
                    Lorem ipsum dolor
                  </h1>
                  <h1 className='text-[10px] text-gray font-normal'>
                    Meet the team
                  </h1>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Organization;
