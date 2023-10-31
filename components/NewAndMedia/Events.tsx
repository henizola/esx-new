"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Banner from "../Banner/banner";
import Card from "../Card/Card";
import bannerImage from "/public/images/Addis-Ababa-Ethiopia-1.png";

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
      <div className='grid sm:grid-cols-9 gap-8 lg:px-28 py-7'>
        <Card width='col-span-2 hidden lg:flex flex-col text-left  py-[20px] px-[20px] h-fit '>
          <h6 className='ml-2 mb-4 text-lg  -600'>{"News and Media Center"}</h6>
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
          <div className='col-span-3 flex flex-col gap-8'>
            <Card width='w-[100%] flex gap-10 flex-col grid grid-cols-5 pt-[0] md:pt-[50px] pb-0 md:pb-[35px] md:pl-10 md:pr-[40px] items-end'>
              <div className='col-span-full md:col-span-3 h-fit'>
                <Image
                  src={
                    "/images/Mistakes That Keep You From Getting Ahead 1.png"
                  }
                  height={100}
                  width={400}
                  alt=''
                  className='w-full md:hidden h-[200px] object-top aspect-square object-cover '
                />
                <h1 className=' text-black text-xl md:text-3xl font-normal mt-4 md:mt-0 px-4 md:px-0   '>
                  Lorem Ipsum
                </h1>
                <main className='flex flex-col '>
                  <p className='     px-4 md:px-0 text-[14px] md:text-base font-normal    leading-snug mt-[15px]'>
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
                    className='flex px-4 md:px-0 text-justify text-black text-base font-semibold    mt-[20px]'
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
                  className='w-full hidden md:block aspect-square object-cover rounded-full'
                />
              </div>
            </Card>

            <div className='flex flex-col lg:flex-row gap-5'>
              <Card width='lg:w-[60%] flex  flex-col   p-[20px] pl-[20px] pr-[40] '>
                <h1 className=' text-black text-2xl font-normal    lowercase'>
                  Lorem Ipsum
                </h1>
                <main className='flex flex-col mt-[6px] '>
                  <p className='text-justify      text-[15px] font-normal    leading-snug'>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy
                  </p>
                  <Link
                    href='#'
                    className='flex text-justify text-black text-base font-semibold    mt-3 md:mt-[29px]'
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
              <Card width='lg:w-[40%] flex  flex-col  pt-[30px] lg:pt-5 pb-[47px] px-[20px]  '>
                <main className='flex flex-col  '>
                  <h1 className=' text-black text-xl font-normal   '>
                    Lorem Ipsum
                  </h1>
                  <p className='     text-sm font-normal    leading-snug'>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy
                  </p>
                </main>
                <hr className='my-4 md:my-[40px] border border-gray/30' />
                <main className='flex flex-col  '>
                  <h1 className=' text-black text-xl font-normal   '>
                    Lorem Ipsum
                  </h1>
                  <p className='     text-sm font-normal    leading-snug'>
                    Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
                  </p>
                </main>
              </Card>
            </div>

            <Card width='w-[100%] flex gap-10 flex-col grid grid-cols-5 pt-[0] md:pt-[50px] pb-0 md:pb-[35px] md:pl-[20px] md:pr-[40px] items-end'>
              <div className='col-span-full md:col-span-3 h-fit'>
                <Image
                  src={
                    "/images/Career Advancement Myths_ 10  Mistakes That Keep You From Getting 1.png"
                  }
                  height={100}
                  width={400}
                  alt=''
                  className='w-full md:hidden h-[200px] object-top aspect-square object-cover '
                />
                <h1 className=' text-black text-xl md:text-3xl font-normal mt-4 md:mt-0 px-10 md:px-0   '>
                  Lorem Ipsum
                </h1>
                <main className='flex flex-col '>
                  <p className='     px-4 md:px-0 text-[14px] md:text-base font-normal    leading-snug mt-[15px]'>
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
                    className='flex px-4 md:px-0 text-justify text-black text-base font-semibold    mt-[20px]'
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
                  className='w-full hidden md:block aspect-square object-cover rounded-full'
                />
              </div>
            </Card>

            <div className='w-[900px] pb-[32px] relative'>
              <h1 className='left-4 lg:left-0 top-0 absolute text-black text-3xl font-normal   '>
                UPCOMING EVENTS
              </h1>
            </div>
            <div className='grid md:grid-cols-2 w-full gap-[32px] '>
              <Card width=' flex  flex-col pt-5 md:pt-[43px] pb-5 md:pb-[37px] px-5 md:pl-[43px] md:pr-[41px] '>
                <main className='flex flex-col  '>
                  <p className='text-justify  text-[14px] md:text-paragraphSmall'>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy Lorem
                    ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy
                  </p>

                  <h1 className=' text-black text-[14px] md:text-paragraphSmall font-normal    mt-[25px]'>
                    08 Sept 2023
                  </h1>
                  <hr className='mt-[16px] md:mt-[24px] border border-gray/30 ' />
                  <Link
                    href='#'
                    className='text-center text-black  md:text-paragraphSmall font-semibold    mt-[20px]'
                  >
                    View more
                  </Link>
                </main>
              </Card>
              <Card width=' flex  flex-col pt-5 md:pt-[43px] pb-5 md:pb-[37px] px-5 md:pl-[43px] md:pr-[41px] '>
                <main className='flex flex-col  '>
                  <p className='text-justify  text-[14px] md:text-paragraphSmall'>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy Lorem
                    ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy
                  </p>

                  <h1 className=' text-black text-[14px] md:text-paragraphSmall font-normal    mt-[25px]'>
                    08 Sept 2023
                  </h1>
                  <hr className='mt-[16px] md:mt-[24px] border border-gray/30 ' />
                  <Link
                    href='#'
                    className='text-center text-black  md:text-paragraphSmall font-semibold    mt-[20px]'
                  >
                    View more
                  </Link>
                </main>
              </Card>
              <Card width=' flex  flex-col pt-5 md:pt-[43px] pb-5 md:pb-[37px] px-5 md:pl-[43px] md:pr-[41px] '>
                <main className='flex flex-col  '>
                  <p className='text-justify  text-[14px] md:text-paragraphSmall'>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy Lorem
                    ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy
                  </p>

                  <h1 className=' text-black text-[14px] md:text-paragraphSmall font-normal    mt-[25px]'>
                    08 Sept 2023
                  </h1>
                  <hr className='mt-[16px] md:mt-[24px] border border-gray/30 ' />
                  <Link
                    href='#'
                    className='text-center text-black  md:text-paragraphSmall font-semibold    mt-[20px]'
                  >
                    View more
                  </Link>
                </main>
              </Card>
              <Card width=' flex  flex-col pt-5 md:pt-[43px] pb-5 md:pb-[37px] px-5 md:pl-[43px] md:pr-[41px] '>
                <main className='flex flex-col  '>
                  <p className='text-justify  text-[14px] md:text-paragraphSmall'>
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy Lorem
                    ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy
                  </p>

                  <h1 className=' text-black text-[14px] md:text-paragraphSmall font-normal    mt-[25px]'>
                    08 Sept 2023
                  </h1>
                  <hr className='mt-[16px] md:mt-[24px] border border-gray/30 ' />
                  <Link
                    href='#'
                    className='text-center text-black  md:text-paragraphSmall font-semibold    mt-[20px]'
                  >
                    View more
                  </Link>
                </main>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='bg-white py-[68px]'>
        <div className='max-w-[980px] mx-auto w-full flex flex-col items-center'>
          <h3 className="text-center text-black text-2xl font-[500]   ">
            Contact the team
          </h3>
          <p className="text-center text-black text-base font-normal mb-5 mt-[6px]   ">
            Get in touch with our dedicated team today! Whether you have
            questions, feedback, or collaboration ideas, were here to assist
            you. Contact us now for a prompt response.
          </p>
          <button className="text-center w-fit rounded-md bg-primary-blue px-5 p-1 text-white text-base font-semibold   ">
            Contact us
          </button>
        </div>
      </div> */}
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default Event;
