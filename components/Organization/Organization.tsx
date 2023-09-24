"use client";
import Image from "next/image";
import React from "react";
import member1 from "../../public/images/member1.png";
import member2 from "../../public/images/member8.png";
import member3 from "../../public/images/member9.png";
import member4 from "../../public/images/member6.png";
import member5 from "../../public/images/member7.png";
import member6 from "../../public/images/member12.png";
import member7 from "../../public/images/member11.png";
import organization from "../../public/images/organization-banner.png";
import Banner from "../Banner/banner";
import Card from "../Card/Card";

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
    "ESX Reports",
    "Careers",
    "Tender",
  ];

  return (
    <div className='flex flex-col w-full'>
      <Banner
        backgroundImage={organization}
        title='Organizational structure'
        description='The Ethiopian Securities Exchange is organized as a share company in accordance with the Commercial Code of Ethiopia (2021).'
      />
      <div className='flex w-full  px-28 py-7'>
        <Card width='w-[30%] mr-5 flex flex-col text-left  py-10 px-5'>
          <h6 className='ml-2 mb-4'>About Us</h6>{" "}
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
        <div className='grid grid-cols-1 mt-0 gap-3 w-[100%]'>
          <Card width='w-[100%] my-0 h-[100%] pb-5'>
            <div className=' flex py-5 mx-10  p-2'>
              <div className='w-[100%] flex  flex-col  mt-0 pt-0'>
                <span className='text-[12px] font-semibold text-primary-blue'>
                  Market Development
                </span>
                <h1 className='text-[40px]'>Meat the team</h1>
                <p className='text-[19px]  w-[100%] mt-2'>
                  ESX impliments a corporate organization and a governance
                  framework following international best practices.
                </p>
                <div className='w-[100%] relative flex justify-between  text-[15px] font-sans font-light mt-2 px-8 leading-6 text-gray'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[60px] absolute -left-5 top-2 h-[20px]   '
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <p className='pl-2 py-1 text-[16px] font-light'>
                    Having a Board of directors, where at least 1/3 will be
                    independent, including representatives from the financial
                    and capital market ecosystem, issuers, investors etc.
                  </p>
                </div>
                <div className='w-[100%] relative flex justify-between  text-[15px] font-sans font-light mt-2 px-8 leading-6 text-gray'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[60px] absolute -left-5 top-2 h-[20px]   '
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <p className='pl-2 py-1 text-[16px] font-light'>
                    Having dedicated market committees for both equity and fixed
                    income markets that deal with the regulatory and delegated
                    enforcement functions of ESX.
                  </p>
                </div>{" "}
                <div className='w-[100%] relative flex justify-between  text-[15px] font-sans font-light mt-2 px-8 leading-6 text-gray'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[60px] absolute -left-5 top-2 h-[20px]   '
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <p className='pl-2 py-1 text-[16px] font-light'>
                    Separates ‘ringfences’ operation and governance of the
                    market from shareholders interest on the exchange.
                  </p>
                </div>{" "}
                <div className='w-[100%] relative flex justify-between  text-[15px] font-sans font-light mt-2 px-8 leading-6 text-gray'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[60px] absolute -left-5 top-2 h-[20px]   '
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <p className='pl-2 py-1 text-[16px] font-light'>
                    Building an efficient management and human resource strategy
                    that caters for the development stages of the exchange.
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <Card width='w-[100%] my-0 h-[100%] pb-5'>
            <div className=' flex flex-col py-5 mx-10 h-[100%]   p-2'>
              <div className='w-[100%] grid px-[100px]  gap-4  grid-cols-3 h-[100%]   mt-0 pt-0'>
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
              <div className='w-[100%]  grid px-[100px]  gap-4  grid-cols-4 h-[100%]   mt-10 pt-0'>
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={member4.src}
                    alt='manager'
                    className='w-[100%] h-[80%] object-cover'
                  />
                  <h1 className='text-[14px] font-normal py-1'>
                    Lorem ipsum dolor
                  </h1>
                  <h1 className='text-[12px] text-gray font-normal'>
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
                  <h1 className='text-[14px] font-normal py-1'>
                    Lorem ipsum dolor
                  </h1>
                  <h1 className='text-[12px] text-gray font-normal'>
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
                  <h1 className='text-[14px] font-normal py-1'>
                    Lorem ipsum dolor
                  </h1>
                  <h1 className='text-[12px] text-gray font-normal'>
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
                  <h1 className='text-[14px] font-normal py-1'>
                    Lorem ipsum dolor
                  </h1>
                  <h1 className='text-[12px] text-gray font-normal'>
                    Meet the team
                  </h1>
                </div>
              </div>
            </div>
          </Card>
          <Card width='w-[100%] my-0 h-[100%] pb-5'>
            <div className=' flex flex-col py-5 mx-10 h-[100%]   p-2'>
              <div className='w-[100%]  grid px-[100px]  gap-x-12  grid-cols-4 h-[100%]   mt-0 pt-2'>
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

      <Card width='w-[100%] mr-0 flex flex-col text-left p-4 py-14 '>
        <div className=''>
          <h1 className='text-primary-blue text-[24px] font-bold w-[100%] text-center'>
            Contact the team
          </h1>
          <p className=' text-primary-black text-[16px] font-normal py-3 w-[100%] text-center'>
            Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
            consectetuer adipiscing
          </p>
          <div className='flex justify-center items-center '>
            <button className=' rounded-lg text-white text-[16px] font-semibold w-fit justify-center align-middle text-center bg-primary-blue p-2 my-4 px-8'>
              Contact
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Organization;
