"use client";

import Card from "@/components/Card/Card";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import MarketSummary from "@/components/MarkerSummary/MarketSummary";
import StockPriceAutoScroller from "@/components/priceScroller/priceSlider";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import chart from "../public/images/chart.png";
import down from "../public/images/down.svg";
import home from "../public/images/home-banner.png";
import up from "../public/images/up.svg";
import { useRouter } from "next/navigation";
import phoneImage from "../public/images/overview.png";

import youtube from "../public/images/youtube.png";
export default function Home() {
  const items = [
    { name: "About Us", link: "/about-us" },
    { name: "Equity Market", link: "/equity-market" },
    { name: "Fixed Income Market", link: "/fixed-income-market" },
    {
      name: "Alternative and Growth Market",
      link: "/alternative-and-growth-market",
    },
    { name: "News and Media Center", link: "/news-and-media" },
    { name: "ESX Academy", link: "/esx-academy" },
  ];

  const router = useRouter();
  return (
    <main className='flex  flex-col items-center p-0'>
      <HomeSlider />

      <div className='bg-primary-blue -mt-2 w-[100vw]'>
        <StockPriceAutoScroller />
      </div>
      {/* <MarketSummary /> */}

      <div className='flex w-full relative lg:px-28 py-7'>
        <Card width=' w-[23%] mr-5 sticky h-fit hidden lg:flex flex-col text-left  py-10 px-5'>
          <h6 className='ml-2 mb-4'>ESX</h6>{" "}
          {items.map((item, index) => (
            <button
              key={index}
              className={`  text-left ml-5 my-2 font-light border-b border-black `}
              style={{
                borderBottom: "0.7px solid black",
              }}
              onClick={() => router.push(item.link)}
            >
              {item.name}
            </button>
          ))}
        </Card>
        <div
          className='lg:w-[70%]  w-[100vw]'
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className='flex flex-col lg:flex-row gap-3 w-[100%]'>
            <Card width='lg:w-[67%] mr-[0%] pb-10 h-[100%]'>
              <div className='flex p-0 mx-0'>
                <div className='w-[100%] flex   flex-col  mt-0 pt-0'>
                  <h1 className='text-[24px] px-10 py-5  text-left text-white  w-[100%] bg-primary-blue   font-normal '>
                    Market summary
                  </h1>

                  <Image
                    height={200}
                    width={200}
                    src={chart.src}
                    alt='manager'
                    className='w-[95%] ml-[5%] object-cover'
                  />
                </div>
              </div>
            </Card>
            <Card width=' lg:w-[40%] pb-10 h-[100%]'>
              <div className='flex p-0 mx-0'>
                <div className='w-[100%] flex   flex-col  mt-0 pt-0'>
                  <h1 className='text-[24px] px-10 py-5  text-left text-white  w-[100%] bg-primary-blue   font-normal '>
                    Other markets
                  </h1>
                  <div className='p-8 '>
                    {[1, 2, 3, 4, 5].map(() => (
                      <>
                        <div className='text-[14px] text-center  flex flex-row justify-between w-[92%] text-black pl-0 relative'>
                          <h1 className='text-[13px]  py-4  text-left text-[#1F263E]'>
                            Lorem ipsum{" "}
                          </h1>{" "}
                          <div className='w-[70px] flex flex-row text-[13px]  py-4   text-[#1F263E]'>
                            {Math.random().toFixed(2)}{" "}
                            {Math.random() * 107 - 5 > 60 ? (
                              <Image
                                height={0}
                                width={0}
                                src={up.src}
                                alt='manager'
                                className='w-5 h-5 -right-8 absolute '
                              />
                            ) : (
                              <Image
                                height={0}
                                width={0}
                                src={down.src}
                                alt='manager'
                                className='w-5 h-5 -right-8 absolute '
                              />
                            )}
                            <div
                              className={`text-[14px] ${
                                Math.random() * 107 - 5 > 60
                                  ? "text-[#A8965B]"
                                  : "text-[red]"
                              } pl-4 relative w-fit`}
                            >
                              {" "}
                              {(Math.random() * 10 - 5).toFixed(0)} %
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <Card width='w-[100%] my-6 mb-0  h-[100%] '>
            <div className=' flex flex-col lg:flex-row p-0  mx-0 '>
              <div className='lg:hidden  w-[100%] '>
                <Image
                  height={200}
                  width={200}
                  src={home.src}
                  alt='manager'
                  className='w-[100%] h-[200px] object-cover'
                />
              </div>
              <div className='lg:w-[60%] flex  flex-col  p-5  lg:px-10 pr-0 '>
                <span className='text-[12px] font-semibold text-primary-blue'>
                  Trade on ESX
                </span>
                <h1 className='text-[20px] lg:text-[40px] mt-3'>Why invest?</h1>
                <hr className='mr-10 border-[#A8965B]' />
                <p className='text-[14px] lg:text-[16px]     font-light mt-5 pr-16  w-[100%] '>
                  A benefit to investing and trading on ESX is price
                  transparency. As prices are publicly available, investors are
                  able to make informed decisions based on real-time market data
                </p>
                <p className='text-[14px] lg:text-[16px]     font-light mt-4 pr-16  w-[100%] '>
                  The regulatory oversight of ESX maintains market integrity.
                  This ensures that participants are adhering to trading
                  practices.
                </p>
                <p className='text-[14px] lg:text-[16px]    font-light mt-4 pr-16  w-[100%] '>
                  The ESX trading platform will be linked with a fully
                  electronic central securities depository (CSD) to ensure
                  efficient post-trade clearing and settlement processes from
                  the launch of the exchange.
                </p>

                <Link
                  href='#'
                  className='flex text-[14px] lg:text-[16px] mt-5 px-0 '
                >
                  View more{" "}
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
              </div>
              <div className='hidden lg:block w-[40%] '>
                <Image
                  height={200}
                  width={200}
                  src={home.src}
                  alt='manager'
                  className='w-[100%] h-[100%] object-cover'
                />
              </div>
            </div>
          </Card>
          <div className='mt-5 flex flex-col lg:flex-row'>
            <Card width='lg:w-[50%] flex gap-4 flex-col shadow-[0] '>
              <div className='p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]' />
              <main className='pb-[20px] px-[20px] flex flex-col h-full'>
                <span className='text-[12px] font-semibold text-primary-blue'>
                  Listing and Admission to Trading
                </span>
                <h1 className='text-black  text-[20px] lg:text-2xl mt-[5px] font-normal    flex items-center gap-5 '>
                  <span>ESX Listing Rules</span>
                  <ChevronRightIcon className='w-8 h-8 mt-1 text-primary-golden' />
                </h1>
                <p className='text-black text-sm font-light mt-[15px]   '>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut
                </p>

                <Link className='mt-2 lg:mt-auto' href='#'>
                  View More
                </Link>
              </main>
            </Card>
            <Card width='lg:w-[50%] mt-5 lg:mt-0 lg:ml-5 flex gap-4 flex-col shadow-[0] '>
              <div className='p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]' />
              <main className='pb-[20px] px-[20px] flex flex-col h-full'>
                <span className='text-[12px] font-semibold text-primary-blue'>
                  Members
                </span>
                <h1 className='text-black text-[20px] lg:text-2xl mt-[5px] font-normal    flex items-center gap-5 '>
                  <span>ESX Membership Rules</span>
                  <ChevronRightIcon className='w-8 h-8 mt-1 text-primary-golden' />
                </h1>
                <p className='text-black text-sm font-light mt-[15px]   '>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt ut
                </p>

                <Link className='mt-2 lg:mt-auto' href='#'>
                  View More
                </Link>
              </main>
            </Card>
          </div>
          <Card width='flex flex-col  w-full h-full mt-5'>
            <div className='bg-[#00205B] w-full h-full'>
              <h1 className='text-[18px] lg:text-[32px] px-5 py-5  text-left text-white  w-[100%] bg-primary-blue   font-normal '>
                Capital market regulatory environment
              </h1>
            </div>
            <div className='flex h-full flex-col lg:flex-row '>
              <div className=' lg:hidden  '>
                <Image
                  height={200}
                  width={200}
                  src={phoneImage.src}
                  alt='tbills'
                  className='w-[100%] mr-[0%] h-[200px] object-cover '
                />
              </div>
              <div className='lg:w-[60%] min-h-full '>
                <p className='px-5 lg:px-8 py-5 lg:mt-10 text-[14px] lg:text-[16px] lg:p-0'>
                  ESX is licensed by the Ethiopian Capital Market Authority
                  (“ECMA” or “the Authority”) as a securities exchange in line
                  with Article 30 and 31 of the Capital Market Proclamation
                  No.1248/2021 (“the Proclamation”).
                </p>
                <p className='px-5 lg:px-8 lg:mt-5 text-[14px] lg:text-[16px] p-0'>
                  ECMA is the apex regulator of the capital markets in Ethiopia
                </p>
                <p className='px-5 lg:px-8 mt-5 text-[14px] lg:text-[14px] lg:text-[16px] p-0'>
                  ECMA is responsible for setting the legal framework and
                  regulating entities interested in participating ESX
                </p>
                <Link
                  href='#'
                  className='flex px-5 lg:px-8 mt-5 lg:mt-10 lg:mb-10 mb-5  
                text-[14px] lg:text-[16px] p-0'
                >
                  View more{" "}
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
              </div>
              <div className='w-[40%] hidden lg:block min-h-full '>
                <Image
                  height={200}
                  width={200}
                  src={phoneImage.src}
                  alt='tbills'
                  className='w-[100%] mr-[0%] h-[100%] object-fill '
                />
              </div>
            </div>
          </Card>
          <div className='mt-5 w-[100%] flex flex-col lg:flex-row'>
            <Card width='lg:w-[58%] my-0 mr-[2%] h-[100%] pb-5'>
              <div className=' flex py-5 mx-5 lg:mx-10 h-[100%]   lg:p-2'>
                <div className='w-[100%] flex  flex-col h-[100%]   mt-0 pt-0'>
                  <div className='flex flex-col justify-between h-[100%] '>
                    <div>
                      <span className='text-[12px] font-semibold text-primary-blue'>
                        Press Releases
                      </span>
                      <p className='text-[14px] lg:text-[16px] w-[100%] mt-2'>
                        Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                        amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euisLorem ipsum dolor sit amet, consectetuer
                        adipiscing elit,
                      </p>
                    </div>
                    <h1 className='font-semibold text-[16px] lg:text-[20px] my-5 mb-0'>
                      Read More
                    </h1>

                    <Image
                      height={200}
                      width={200}
                      src={youtube.src}
                      alt='tbills'
                      className='w-[100%] mr-[0%] h-[177px] my-5 object-fill '
                    />
                    <Link
                      href='#'
                      className='flex text-[14px] lg:text-[16px] mt-5 px-0 '
                    >
                      View more{" "}
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
                  </div>
                </div>
              </div>
            </Card>{" "}
            <Card width='lg:w-[40%] mt-5 lg:mt-0 flex flex-col '>
              <h1 className='py-[20px] text-[20px] lg:text-[24px]  px-[20px]   bg-primary-blue text-white text-xl not-italic font-normal leading-[normal]'>
                For More Information
              </h1>
              <main className='pt-5 lg:pt-[52px] lg:pb-[10px] px-5 lg:px-[20px] flex flex-col gap-[10px]'>
                <h1 className='text-black text-[20px] mb-[0px] font-normal   '>
                  ESX Insights
                </h1>
                <p className='     text-sm font-normal    leading-snug ml-[0px]'>
                  Read Our Latest Thinking
                </p>
                <Link
                  href='#'
                  className='flex px-0 my-0 mt-2 lg:mt-5 
                text-[14px] lg:text-[16px] '
                >
                  View more{" "}
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
                <hr className='mt-[5px] lg:mt-[10px]  border border-0.5 border-gray/30' />
              </main>
              <main className='pt-[5px] lg:pt-[22px] pb-5 lg:pb-[50px] px-[20px]  flex flex-col gap-[10px]'>
                <h1 className='text-black text-[20px] mb-[5px] font-normal   '>
                  Facts and Figures
                </h1>
                <p className='     text-sm font-normal    leading-snug ml-[0px]'>
                  ESX and its subsidiaries recorded $21.9 billion in US revenues
                  in the fiscal year ended June 1,2023
                </p>
                <Link
                  href='#'
                  className='flex text-[14px] lg:text-[16px] mt-2 lg:mt-5 px-0 '
                >
                  View more{" "}
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
          </div>
          <Card width='w-[100%] my-5 my-0 py-5 lg:py-10  h-[fit-content] mb-[140px]'>
            <div className='w-[100%] flex p-0  mx-0 '>
              <div className='flex  flex-col  p-5 px-4 md:px-10 pt-0 pr-0 relative'>
                <h1 className='text-[30px] lg:text-[40px] w-[100%] '>
                  Join us
                </h1>
                <hr className='mr-10 lg:mr-0 lg:w-[60%] ' />
                <p className='text-[16px] font-light mt-4 pr-16  w-[100%] '>
                  Are you Interested in working at ESX? Please click here to see
                  what jobs are currently available.
                </p>
                <div className='absolute grid grid-cols-3 py-10 w-[90%] left-[5%] lg:left-[10%] -bottom-[150px] lg:-bottom-[160px] bg-primary-blue'>
                  <div className='border-right flex flex-col border-r border-white text-center'>
                    <h1 className='text-white font-semibold text-[24px] lg:text-[40px]'>
                      150 +
                    </h1>
                    <h1 className='text-white font-normal text-[12px]'>
                      Employees
                    </h1>
                  </div>
                  <div className='border-right flex flex-col border-r border-white text-center'>
                    <h1 className='text-white font-semibold text-[24px] lg:text-[40px]'>
                      20 +
                    </h1>
                    <h1 className='text-white font-normal text-[12px]'>
                      Offices
                    </h1>
                  </div>{" "}
                  <div className='flex flex-col border-r text-center'>
                    <h1 className='text-white font-semibold text-[24px] lg:text-[40px]'>
                      50 +
                    </h1>
                    <h1 className='text-white font-normal text-[12px]'>
                      Clients <br className='flex lg:hidden' /> represented
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
