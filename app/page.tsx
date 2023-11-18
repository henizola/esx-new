"use client";

import Card from "@/components/Card/Card";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import StockPriceAutoScroller from "@/components/priceScroller/priceSlider";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import home1 from "../public/images/home1.png";
import home2 from "../public/images/home2.png";
import home3 from "../public/images/course6.jpeg";
import news1 from "../public/images/news1.jpeg";
import news2 from "../public/images/news2.png";
import news3 from "../public/images/course6.jpeg";

import Footer from "@/components/Header/Footer";
import { useNumber } from "@/context/nav.context";
import HomeMobileFooter from "@/components/Header/HomeMobileFooter";
export default function Home() {
  const { setNumber } = useNumber();

  const router = useRouter();
  return (
    <main className='flex absolute top-0 flex-col items-center p-0'>
      <HomeSlider />

      <div className='bg-primary-blue -mt-2 w-[100vw]'>
        <StockPriceAutoScroller />
      </div>

      <div className='flex w-full relative lg:px-28 py-7'>
        <div
          className='lg:w-[100%]  w-[100vw]'
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className=' flex flex-col lg:flex-row lg:py-10  mx-0 '>
            <div
              style={{
                margin: "0 auto",

                paddingBottom: "30px",
              }}
              className='lg:w-[100%] flex lg:pl-[20vw] px-[10px] lg:pr-[20vw] flex-col  lg:px-10  '
            >
              <h1 className='text-[20px] lg:text-[40px] ml-[50%] translate-x-[-50%] border-primary-golden  w-fit border-b-[3px]'>
                Our Mission
              </h1>

              <p
                style={{ lineHeight: "25px" }}
                className='text-black lg:text-paragraphSmall text-center font-light mt-5   '
              >
                To provide a modern, reliable, transparent, and efficient
                environment for securities trading in Ethiopia, through
                adaptation of modern exchange business operations, skill,
                technology, and trust. Contribute to the economic development of
                Ethiopia by promoting savings and the efficient aggregation of
                capital for long term investment. Building a sustainable
                institution that is dynamic and fitting to both Ethiopian and
                regional issuers and investors.
              </p>
            </div>
          </div>
          {/* </Card> */}
          <div className='mt-5 flex flex-col gap-4 lg:flex-row relative'>
            <div
              style={{ left: "-7rem" }}
              className='absolute h-[60%] w-[100vw] -z-10 bottom-[60px] bg-primary-blue'
            ></div>
            <Card width='lg:w-[33.3%] flex gap-0 flex-col shadow-[0] '>
              <div className='p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold ' />
              <main className='  flex flex-col h-full'>
                <Image
                  height={200}
                  width={200}
                  src={home3.src}
                  alt='manager'
                  className='w-[100%] object-cover h-[250px]'
                />
                <div className='p-6'>
                  <h1 className='text-black  text-[20px] lg:text-2xl mt-[5px] font-normal    flex items-center gap-5 '>
                    <span>List on ESX</span>
                  </h1>
                  <p className='text-black text-paragraphSmall mb-4 font-light mt-[15px]   '>
                    ESX provides a modern and regulated platform for companies
                    to raise long term finance by issuing equity and debt
                    instruments
                  </p>
                  <button
                    onClick={() => router.push("/equity-market/listing/#")}
                    className='text-paragraphSmall font-normal text-primary-blue w-fit px-10 py-2 h-fit border  mt-1 border-primary-blue background-transparent'
                  >
                    Learn More
                  </button>
                </div>
              </main>
            </Card>
            <Card width='lg:w-[33.3%] flex gap-0 flex-col shadow-[0] '>
              <div className='p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold ' />
              <main className='  flex flex-col h-full'>
                <Image
                  height={200}
                  width={200}
                  src={home2.src}
                  alt='manager'
                  className='w-[100%] object-cover h-[250px]'
                />
                <div className='p-6'>
                  <h1 className='text-black  text-[20px] lg:text-2xl mt-[5px] font-normal    flex items-center gap-5 '>
                    <span>Invest on ESX</span>
                  </h1>
                  <p className='text-black text-paragraphSmall mb-4 font-light mt-[15px]   '>
                    As a modern and fully electronic marketplace, ESX creates an
                    environment whereby Ethiopians across the country, Ethiopian
                    Diaspora as well as foreign investors, can easily invest in
                    listed equity and debt instruments
                  </p>
                  <button
                    onClick={() => router.push("/equity-market/trade#")}
                    className='text-paragraphSmall font-normal text-primary-blue w-fit px-10 py-2 h-fit border  mt-1 border-primary-blue background-transparent'
                  >
                    Learn More
                  </button>
                </div>
              </main>
            </Card>
            <Card width='lg:w-[33.3%] flex gap-0 flex-col shadow-[0] '>
              <div className='p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold ' />
              <main className='  flex flex-col h-full'>
                <Image
                  height={200}
                  width={200}
                  src={home1.src}
                  alt='manager'
                  className='w-[100%] object-cover h-[250px]'
                />
                <div className='p-6'>
                  <h1 className='text-black  text-[20px] lg:text-2xl mt-[5px] font-normal    flex items-center gap-5 '>
                    <span>Become a trading member</span>
                  </h1>
                  <p className='text-black text-paragraphSmall mb-4 font-light mt-[15px]   '>
                    ESX provides various types of membership opportunities for
                    capital market service providers
                  </p>
                  <button
                    onClick={() => {
                      router.push("/members#");
                      setNumber(1);
                    }}
                    className='text-paragraphSmall font-normal text-primary-blue w-fit px-10 py-2 h-fit border  mt-1 border-primary-blue background-transparent'
                  >
                    Learn More
                  </button>
                </div>
              </main>
            </Card>{" "}
          </div>
          <div></div>

          <div className=' w-[100%] flex flex-col lg:flex-row mt-10'>
            <Card width='lg:w-[60%] my-0 mr-[2%] h-[100%] pb-5'>
              <div className=' flex py-0 px-0 h-[100%]'>
                <div className='w-[100%] flex  flex-col h-[100%]   mt-0 pt-0'>
                  <div className='flex flex-col justify-between h-[100%] '>
                    <div>
                      <Image
                        height={200}
                        width={200}
                        src={news1.src}
                        alt='manager'
                        className='w-[100%] object-cover h-[40vh]'
                      />
                      {/* <p className=' mb-2 text-[12px] font-semibold text-primary-blue'>
                        ESX Held Capital Raise Roadshow in Addis Ababa – May 16,
                        2023
                      </p> */}
                      <p className=' my-0 px-5 pt-5 text-[12px] font-semibold text-primary-blue'>
                        ESX Held Capital Raise Roadshow in Addis Ababa – May 16,
                        2023
                      </p>
                      <h1 className='text-subHeader font-light p-5 pt-0'>
                        Ethiopia Begins Fundraising for First-Ever Securities
                        Exchange
                        <hr className='w-[65%] border-primary-golden border-[1px]' />
                      </h1>
                      <p className='text-paragraphSmall   font-light  w-[100%] p-4 pt-0'>
                        Ethiopia began selling shares to raise funds required to
                        set up its first-ever securities exchange as Prime
                        Minister
                      </p>
                      {/* <p className='text-paragraphSmall   font-light  w-[100%] p-4 pt-0'>
                        The sale, which kicked off in the capital, Addis Ababa,
                        on Tuesday aims to mobilize 75% of the required funding,
                        said Michael Habte, a project manager for the planned
                        Ethiopia Securities Exchange, or ESX. The remaining 25%
                        of the shares will be held by Ethiopian Investment
                        Holdings, the nation’s sovereign wealth fund.
                      </p> */}
                    </div>

                    <Link
                      href='/news-and-media'
                      className='flex text-[14px] lg:text-[16px] p-4 pt-0 '
                    >
                      Read more{" "}
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
            <div className='grid grid-rows-1 h-fit  gap-3 mt-5 lg:mt-0 pl-2 lg:pl-0 lg:w-[40%]'>
              <Card width=' my-0 mr-[2%] h-fit pb-0'>
                <div className='flex'>
                  <Image
                    height={200}
                    width={200}
                    src={news3.src}
                    alt='manager'
                    className='w-auto max-w-[40%] object-cover lg:h-[20vh]'
                  />
                  <div className='flex flex-col'>
                    <p className=' my-0 px-3 pt-3 text-[12px] font-light text-primary-blue'>
                      4-8th Sep 2023
                    </p>
                    <h1 className='text-paragraphSmall font-light p-3 pb-0'>
                      ESX Successfully Completed Its 2nd Roadshow And
                      Market-Sounding Activities In Nairobi
                      <hr className='w-[80%] border-primary-golden border-[1px]' />
                    </h1>
                    <Link
                      href='/news-and-media#2ndroadshow'
                      target='_blank'
                      className='flex text-[14px] lg:text-[16px] p-4 pt-5 '
                    >
                      Read more{" "}
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
              </Card>{" "}
              <Card width=' my-0 mr-[2%] h-fit pb-0'>
                <div className='flex'>
                  <Image
                    height={200}
                    width={200}
                    src={news2.src}
                    alt='manager'
                    className='w-auto max-w-[40%] object-cover lg:h-[20vh]'
                  />
                  <div className='flex flex-col'>
                    <p className=' my-0 px-3 pt-3 text-[12px] font-light text-primary-blue'>
                      September 28, 2023
                    </p>
                    <h1 className='text-paragraphSmall font-light p-3 pb-0'>
                      ESX held its 3rd capital raise investor roadshow in London
                      - AfSIC
                      <hr className='w-[80%] border-primary-golden border-[1px]' />
                    </h1>
                    <Link
                      href='/news-and-media#3rdCapital'
                      target='_blank'
                      className='flex text-[14px] lg:text-[16px] p-4 pt-5 '
                    >
                      Read more{" "}
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
              </Card>{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <HomeMobileFooter />
    </main>
  );
}
