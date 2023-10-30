"use client";
import Image from "next/image";
import React from "react";
import member1 from "/public/images/Helaway Tadesse.jpg";
import member2 from "/public/images/Zemedenh Nigatu.jpg";
import member3 from "/public/images/Dr-Eleni Gabremadhin.jpeg";
import member4 from "/public/images/Fekadu Petros.jpeg";
import member5 from "/public/images/Hinjat Shamil.jpeg";
import member6 from "/public/images/Dr. Tewodros Makonnen.jpg";
import member7 from "/public/images/Yasmin Wohabrebbi.jpg";
import organization from "/public/images/organization-banner.png";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";

interface BoardMembersProps {
  setStep: (value: number) => void;
  step: number;
}

const BoardMembers: React.FC<BoardMembersProps> = ({ setStep, step }) => {
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
        title='About Us'
        background='bg-light-blue'
      />
      <div className='flex w-full px-4 lg:px-28 py-7'>
        <Card width='w-[25%] hidden lg:flex mr-5 h-fit   flex-col text-left  py-10 px-5'>
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
        <div className='grid grid-cols-1  gap-3 w-[100%] '>
          <Card width='w-[100%] my-0 h-[100%] pb-5'>
            <div className=' flex py-5 mx-5 md:mx-10  p-2'>
              <div className='w-[100%] flex  flex-col  mt-0 pt-0'>
                <h1 className='text-[28px] md:text-header font-[400] border-b-[3px] border-light-golden w-fit'>
                  Board of directors
                </h1>
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
            <div className='w-[100%] my-0 group bg-transparent group perspective h-[300px]  cursor-pointer'>
              <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-[300px] duration-1000'>
                <div className='absolute backface-hidden  w-full h-full'>
                  <Image
                    height={200}
                    width={200}
                    src={member1.src}
                    alt='manager'
                    className='w-[100%]  lg:h-[100%] object-cover'
                  />
                </div>
                <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-white overflow-hidden'>
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Helaway Tadesse
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Chairman
                  </h1>
                  <p className='text-[14px] lg:text-[16px]  p-5 pt-2'>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euisLorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy ni
                  </p>
                </div>
              </div>
            </div>
            <div className='w-[100%] my-0 group bg-transparent group perspective h-[300px]  cursor-pointer'>
              <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-[300px] duration-1000'>
                <div className='absolute backface-hidden  w-full h-[300px]'>
                  <Image
                    height={200}
                    width={200}
                    src={member2.src}
                    alt='manager'
                    className='w-[100%]  lg:h-[100%] object-cover'
                  />
                </div>
                <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-white overflow-hidden'>
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Zemedenh Nigatu
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Member
                  </h1>
                  <p className='text-[14px] lg:text-[16px]  p-5 pt-2'>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euisLorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy ni
                  </p>
                </div>
              </div>
            </div>
            <div className='w-[100%] my-0 group bg-transparent group perspective h-[300px]  cursor-pointer'>
              <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-[300px] duration-1000'>
                <div className='absolute backface-hidden  w-full h-[300px]'>
                  <Image
                    height={200}
                    width={200}
                    src={member3.src}
                    alt='manager'
                    className='w-[100%]  lg:h-[100%] object-cover'
                  />
                </div>
                <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-white overflow-hidden'>
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Dr. Eleni Gabremadhin
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Member
                  </h1>
                  <p className='text-[14px] lg:text-[16px]  p-5 pt-2'>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euisLorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy ni
                  </p>
                </div>
              </div>
            </div>

            <div className='w-[100%] my-0 group bg-transparent group perspective  h-[300px]  cursor-pointer'>
              <div className='relative preserve-3d group-hover:my-rotate-y-180  w-full h-[300px] duration-1000'>
                <div className='absolute backface-hidden  w-full h-full'>
                  <Image
                    height={200}
                    width={200}
                    src={member7.src}
                    alt='manager'
                    className='w-[100%]  lg:h-[100%] object-cover'
                  />
                </div>
                <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-white overflow-hidden'>
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Yasmin Wohabrebbi
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Member
                  </h1>
                  <p className='text-[14px] lg:text-[16px]  p-5 pt-2'>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euisLorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy ni
                  </p>
                </div>
              </div>
            </div>
            <div className='w-[100%] my-0 group bg-transparent group perspective   h-[300px]  cursor-pointer'>
              <div className='relative preserve-3d group-hover:my-rotate-y-180  w-full h-[300px] duration-1000'>
                <div className='absolute backface-hidden   w-full h-[300px]'>
                  <Image
                    height={200}
                    width={200}
                    src={member4.src}
                    alt='manager'
                    className='w-[100%]  lg:h-[100%] object-cover'
                  />
                </div>
                <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-white overflow-hidden'>
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Fekadu Petros Member
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Member
                  </h1>
                  <p className='text-[14px] lg:text-[16px]  p-5 pt-2'>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euisLorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy ni
                  </p>
                </div>
              </div>
            </div>
            <div className='w-[100%] my-0 group bg-transparent group perspective h-[300px]  cursor-pointer'>
              <div className='relative preserve-3d group-hover:my-rotate-y-180  w-full h-[300px] duration-1000'>
                <div className='absolute backface-hidden  w-full h-full'>
                  <Image
                    height={200}
                    width={200}
                    src={member5.src}
                    alt='manager'
                    className='w-[100%]  lg:h-[100%] object-cover'
                  />
                </div>
                <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-white overflow-hidden'>
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Hinjat Shamil
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Member
                  </h1>
                  <p className='text-[14px] lg:text-[16px]  p-5 pt-2'>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euisLorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy ni
                  </p>
                </div>
              </div>
            </div>
            <div className='w-[100%] my-0 group bg-transparent group perspective h-[300px]  cursor-pointer'>
              <div className='relative preserve-3d group-hover:my-rotate-y-180  w-full h-[300px] duration-1000'>
                <div className='absolute backface-hidden  w-full h-full'>
                  <Image
                    height={200}
                    width={200}
                    src={member6.src}
                    alt='manager'
                    className='w-[100%]  lg:h-[100%] object-cover'
                  />
                </div>
                <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-white overflow-hidden'>
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Dr. Tewodros Makonnen
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Member
                  </h1>
                  <p className='text-[14px] lg:text-[16px]  p-5 pt-2'>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euisLorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy ni
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardMembers;
