"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import manager from "/public/images/manager.png";
import sliderbannerImage from "/public/images/slider-background.png";
import bannerImage from "/public/images/Addis-Ababa-Ethiopia-1.png";
import Banner from "../Banner/banner";
import Card from "../Card/Card";

interface EventProps {
  setStep: (value: number) => void;
  step: number;
}

const Event: React.FC<EventProps> = ({ setStep, step }) => {
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
        title='Event'
        description='“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse'
      />
      <div className='grid sm:grid-cols-7 gap-8 px-28 py-7'>
        <Card width='col-span-2  flex flex-col text-left  py-[20px] px-[20px]'>
          <h6 className='ml-2 mb-4 text-lg text-gray-600'>
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
        <div className='col-span-5 space-y-8'>
          <div className='col-span-3 flex flex-col gap-8'>
            <Card width='w-[100%] flex gap-10 flex-col grid grid-cols-5  pt-[50px] pb-[35px] pl-[20px] pr-[40px] items-end'>
              <div className='col-span-3 h-fit'>
                <h1 className=" text-black text-3xl font-normal font-['Open Sans']">
                  Lorem Ipsum
                </h1>
                <main className='flex flex-col '>
                  <p className="text-zinc-500 text-base font-normal font-['Open Sans'] leading-snug mt-[15px]">
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euisLorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                    veniam, quis nostrud exerci tation ullamcorper suscipit
                    lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
                    vel eum iriure dolor
                  </p>
                  <Link
                    href='#'
                    className="flex text-justify text-black text-base font-semibold font-['Open Sans'] mt-[20px]"
                  >
                    View more
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-4 h-4 mt-1.5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M8.25 4.5l7.5 7.5-7.5 7.5'
                      />
                    </svg>
                  </Link>
                </main>
              </div>
              <div className='col-span-2 self-end order-2'>
                <Image
                  src={
                    "/images/Mistakes That Keep You From Getting Ahead 1.png"
                  }
                  height={100}
                  width={400}
                  alt=''
                  className='w-full  aspect-square object-cover rounded-full'
                />
              </div>
            </Card>

            <div className='flex gap-5'>
              <Card width='w-[60%] flex  flex-col   p-[20px] pl-[20px] pr-[40] '>
                <h1 className=" text-black text-2xl font-normal font-['Open Sans'] lowercase">
                  Lorem Ipsum
                </h1>
                <main className='flex flex-col mt-[6px] '>
                  <p className="text-justify text-zinc-500 text-[15px] font-normal font-['Open Sans'] leading-snug">
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy
                  </p>
                  <Link
                    href='#'
                    className="flex text-justify text-black text-base font-semibold font-['Open Sans'] mt-[29px]"
                  >
                    View more
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-4 h-4 mt-1.5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M8.25 4.5l7.5 7.5-7.5 7.5'
                      />
                    </svg>
                  </Link>
                </main>
              </Card>
              <Card width='w-[40%] flex  flex-col   pt-[120px] pb-[47px] px-[20px]  '>
                <main className='flex flex-col  '>
                  <h1 className=" text-black text-xl font-normal font-['Open Sans']">
                    Lorem Ipsum
                  </h1>
                  <p className="text-zinc-500 text-sm font-normal font-['Open Sans'] leading-snug">
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy
                  </p>
                </main>
                <hr className=' my-[40px] border border-gray/30' />
                <main className='flex flex-col  '>
                  <h1 className=" text-black text-xl font-normal font-['Open Sans']">
                    Lorem Ipsum
                  </h1>
                  <p className="text-zinc-500 text-sm font-normal font-['Open Sans'] leading-snug">
                    Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
                  </p>
                </main>
              </Card>
            </div>
            <Card width='w-[100%] flex gap-10 flex-col grid grid-cols-5  pt-[50px] pb-[35px] pl-[20px] pr-[40px] items-end'>
              <div className='col-span-3 h-fit'>
                <h1 className=" text-black text-3xl font-normal font-['Open Sans']">
                  Lorem Ipsum
                </h1>
                <main className='flex flex-col '>
                  <p className="text-zinc-500 text-base font-normal font-['Open Sans'] leading-snug mt-[15px]">
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euisLorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                    veniam, quis nostrud exerci tation ullamcorper suscipit
                    lobortis nisl ut aliquip ex ea commodo consequat. Duis autem
                    vel eum iriure dolor
                  </p>
                  <Link
                    href='#'
                    className="flex text-justify text-black text-base font-semibold font-['Open Sans'] mt-[20px]"
                  >
                    View more
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-4 h-4 mt-1.5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M8.25 4.5l7.5 7.5-7.5 7.5'
                      />
                    </svg>
                  </Link>
                </main>
              </div>
              <div className='col-span-2 self-end order-2'>
                <Image
                  src={
                    "/images/Career Advancement Myths_ 10  Mistakes That Keep You From Getting 1.png"
                  }
                  height={100}
                  width={400}
                  alt=''
                  className='w-full  aspect-square object-cover rounded-full'
                />
              </div>
            </Card>

            <div className='w-[900px] pb-[32px] relative'>
              <h1 className="left-0 top-0 absolute text-black text-3xl font-normal font-['Open Sans']">
                UPCOMING Events
              </h1>
            </div>
            <div className='grid grid-cols-2 w-full gap-[32px] '>
              <Card width=' flex  flex-col  pt-[43px] pb-[37px] pl-[43px] pr-[41px] '>
                <main className='flex flex-col  '>
                  <p className="text-justify text-zinc-500 text-xl font-['Open Sans'] leading-snug">
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy Lorem
                    ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy
                  </p>

                  <h1 className=" text-black text-xl font-normal font-['Open Sans'] mt-[25px]">
                    08 Sept 2023
                  </h1>
                  <hr className=' mt-[24px] border border-gray/30 ' />
                  <Link
                    href='#'
                    className="text-center text-black text-xl font-semibold font-['Open Sans'] mt-[20px]"
                  >
                    View more
                  </Link>
                </main>
              </Card>
              <Card width=' flex  flex-col   pt-[43px] pb-[37px] pl-[43px] pr-[41px] '>
                <main className='flex flex-col  '>
                  <p className="text-justify text-zinc-500 text-xl font-['Open Sans'] leading-snug">
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy Lorem
                    ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy
                  </p>

                  <h1 className=" text-black text-xl font-normal font-['Open Sans'] mt-[25px]">
                    08 Sept 2023
                  </h1>
                  <hr className=' mt-[24px] border border-gray/30 ' />
                  <Link
                    href='#'
                    className="text-center text-black text-xl font-semibold font-['Open Sans'] mt-[20px]"
                  >
                    View more
                  </Link>
                </main>
              </Card>
              <Card width=' flex  flex-col  pt-[43px] pb-[37px] pl-[43px] pr-[41px] '>
                <main className='flex flex-col  '>
                  <p className="text-justify text-zinc-500 text-xl font-['Open Sans'] leading-snug">
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy Lorem
                    ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy
                  </p>

                  <h1 className=" text-black text-xl font-normal font-['Open Sans'] mt-[25px]">
                    08 Sept 2023
                  </h1>
                  <hr className=' mt-[24px] border border-gray/30 ' />
                  <Link
                    href='#'
                    className="text-center text-black text-xl font-semibold font-['Open Sans'] mt-[20px]"
                  >
                    View more
                  </Link>
                </main>
              </Card>
              <Card width=' flex  flex-col   pt-[43px] pb-[37px] pl-[43px] pr-[41px] '>
                <main className='flex flex-col  '>
                  <p className="text-justify text-zinc-500 text-xl font-['Open Sans'] leading-snug">
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy Lorem
                    ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy
                  </p>

                  <h1 className=" text-black text-xl font-normal font-['Open Sans'] mt-[25px]">
                    08 Sept 2023
                  </h1>
                  <hr className=' mt-[24px] border border-gray/30 ' />
                  <Link
                    href='#'
                    className="text-center text-black text-xl font-semibold font-['Open Sans'] mt-[20px]"
                  >
                    View more
                  </Link>
                </main>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white py-[68px]'>
        <div className='max-w-[980px] mx-auto w-full flex flex-col items-center'>
          <h3 className="text-center text-black text-2xl font-bold font-['Open Sans']">
            Contact the team
          </h3>
          <p className="text-center text-black text-base font-normal mb-5 mt-[6px] font-['Open Sans']">
            Get in touch with our dedicated team today! Whether you have
            questions, feedback, or collaboration ideas, we're here to assist
            you. Contact us now for a prompt response.
          </p>
          <button className="text-center w-fit rounded-md bg-primary-blue px-5 p-1 text-white text-base font-semibold font-['Open Sans']">
            Contact us
          </button>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default Event;
