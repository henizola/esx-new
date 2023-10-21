import React, { ReactNode } from "react";
import Card from "@/components/Card/Card";
import Banner from "@/components/Banner/banner";
import image from "/public/images/who-we-are.png";
import whoweare from "/public/images/who-we-are-circle.png";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { GoldBanner } from "@/components/Banner/GoldBanner";
import LinkButton from "@/components/Button/LinkButton";
import { BackButton } from "@/components/Button/BackButton";
import CustomSlider from "@/components/Slider/Slider";
import sliderbannerImage from "/public/images/slider-background.png";
import TradeOnESXSlider from "@/components/Slider/TradeOnESXSlider";

interface WhoWeAreProps {
  setStep: (value: number) => void;
  step: number;
}

const TradeOnESX: React.FC<WhoWeAreProps> = ({ setStep, step }) => {
  const items = [
    "Invest on ESX",
    // "Members Directory"
  ];
  const spanItems = [
    "Direct Market Access",
    // "Listed Lecurities",
    // "Market Data",
    // "Indices",
    // "Market Announcements",
    // "Fees & Taxation",
    // "Tendor",
  ];

  const slides = [
    {
      image: sliderbannerImage.src,
      alt: "Image 1",
      title: "Wellcome to ESX",
      description:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis ",
    },
    {
      image: sliderbannerImage.src,
      alt: "Image 2",
      title: "Wellcome to ESX",
      description:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis ",
    },
    {
      image: sliderbannerImage.src,
      alt: "Image 2",
      title: "Wellcome to ESX",
      description:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis ",
    },
    {
      image: sliderbannerImage.src,
      alt: "Image 2",
      title: "Wellcome to ESX",
      description:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis ",
    },
    {
      image: sliderbannerImage.src,
      alt: "Image 2",
      title: "Wellcome to ESX",
      description:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis ",
    },
  ];

  return (
    <div className='flex flex-col w-full'>
      <Banner
        backgroundImage={image}
        title='Invest on ESX'
        description='ESX Equities Market is the division of ESX that allows issuers of equity securities to raise long-term capital.'
      />
      <div className='flex w-full  lg:px-28 py-7'>
        <Card width='hidden w-[25%] mr-5 lg:flex flex-col text-left  py-10 pt-5 px-5'>
          <h6 className='ml-2 mb-4'>
            <BackButton setStep={setStep} link='/equity-market'>
              Equity Market
            </BackButton>{" "}
            {"> Trade"}
          </h6>{" "}
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
          {/* {spanItems.map((item, index) => (
            <button
              key={index}
              className={`  text-left ml-5 my-2 font-light border-b border-black `}
              style={{
                borderBottom: "0.7px solid black",
                fontSize: "14px",
                fontWeight: "300",
              }}
            >
              {item}
            </button>
          ))} */}
        </Card>
        <div className='grid grid-cols-1 gap-5 w-[100%]'>
          <Card width='flex flex-col '>
            <Image
              src={
                "/images/Career Advancement Myths_ 10  Mistakes That Keep You From Getting Ahead 1.png"
              }
              height={100}
              width={400}
              alt=''
              className='w-[100%] h-[200px] md:hidden aspect-square object-cover'
            />
            <div className='flex px-10 py-10 pb-16'>
              <div className='   '>
                {/* <h1 className='text-primary-blue  text-xs font-semibold   '>
                  Trade on ESX
                </h1> */}
                <h1 className='text-black text-[20px] md:text-header  '>
                  <span className=' border-b-[3px] border-light-golden'>
                    {" "}
                    W
                  </span>
                  hy Trade?
                </h1>
                <div className='space-y-[10px] mt-[15px]'>
                  <p className='text-paragraphSmall relative lg:font-light  pl-7 pt-5  leading-snug '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-[60px] absolute -left-5 top-5 h-[20px]'
                    >
                      <circle cx='12' cy='12' r='5' fill='currentColor' />
                    </svg>{" "}
                    ESX allows investors to diversify their portfolios as they
                    are able to invest in various asset classes according to
                    their preferred risk tolerance
                  </p>
                  <p className='text-paragraphSmall relative lg:font-light  pl-7 pt-5  leading-snug '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-[60px] absolute -left-5 top-5 h-[20px]'
                    >
                      <circle cx='12' cy='12' r='5' fill='currentColor' />
                    </svg>{" "}
                    A benefit to investing and trading on ESX is price
                    transparency. As prices are publicly available, investors
                    are able to make informed decisions based on real-time
                    market data.
                  </p>
                  <p className='text-paragraphSmall relative lg:font-light  pl-7 pt-5  leading-snug '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-[60px] absolute -left-5 top-5 h-[20px]'
                    >
                      <circle cx='12' cy='12' r='5' fill='currentColor' />
                    </svg>{" "}
                    The regulatory oversight of ESX maintains market integrity.
                    This ensures that participants are adhering to trading
                    practices.
                  </p>
                  <p className='text-paragraphSmall relative lg:font-light  pl-7 pt-5  leading-snug '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-[60px] absolute -left-5 top-5 h-[20px]'
                    >
                      <circle cx='12' cy='12' r='5' fill='currentColor' />
                    </svg>{" "}
                    The ESX trading platform will be linked to a fully
                    electronic central securities depository (CSD) to ensure
                    efficient post-trade clearing and settlement processes from
                    the launch of the exchange.
                  </p>
                  <p className='text-paragraphSmall relative lg:font-light  pl-7 pt-5  leading-snug '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-[60px] absolute -left-5 top-5 h-[20px]'
                    >
                      <circle cx='12' cy='12' r='5' fill='currentColor' />
                    </svg>{" "}
                    The ESX trading platform will be linked with a fully
                    electronic central securities depository (CSD) to ensure
                    efficient post-trade clearing and settlement processes from
                    the launch of the exchange.
                  </p>
                </div>
                <h1 className='text-black text-l lg:text-subHeader font-normal mt-7   leading-relaxed'>
                  Central Securities Depository (CSD)
                </h1>

                <p className='text-paragraphSmall lg:font-light   pt-5 leading-snug '>
                  The Central Securities Depository acts as the central place
                  where securities traded on ESX are deposited in an electronic
                  registrar. The CSD provides safe custody for securities,
                  assigns a unique securities identification number to
                  investors, and allows efficient clearing and settlement of
                  securities transactions.
                </p>

                <h1 className='text-black text-l lg:text-subHeader font-normal mt-7   leading-relaxed'>
                  How do investors access the market ?
                </h1>

                <p className='text-paragraphSmall lg:font-light   pt-5 leading-snug '>
                  ESX is a fully electronic and intermediated market. To access
                  the markets investors should have a CSD account and select a
                  licensed member of the exchange/brokerage firm (ESX Trading
                  Member) to transact on the platform.
                </p>

                <p className='text-paragraphSmall relative lg:font-light  pl-7 pt-5  leading-snug '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[60px] absolute -left-5 top-5 h-[20px]'
                  >
                    <circle cx='12' cy='12' r='5' fill='currentColor' />
                  </svg>{" "}
                  Investors can choose and appoint a licensed member/broker from
                  members directory of ESX websites
                </p>
                <p className='text-paragraphSmall relative lg:font-light  pl-7 pt-5  leading-snug '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[60px] absolute -left-5 top-5 h-[20px]'
                  >
                    <circle cx='12' cy='12' r='5' fill='currentColor' />
                  </svg>{" "}
                  The licensed member will support the investor in acquiring the
                  relevant CSD account number.
                </p>
                <p className='text-paragraphSmall relative lg:font-light  pl-7 pt-5  leading-snug '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[60px] absolute -left-5 top-5 h-[20px]'
                  >
                    <circle cx='12' cy='12' r='5' fill='currentColor' />
                  </svg>{" "}
                  Investors will be required by the licensed member to provide
                  relevant KYC information and forms.
                </p>
                <p className='text-paragraphSmall relative lg:font-light  pl-7 pt-5  leading-snug '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[60px] absolute -left-5 top-5 h-[20px]'
                  >
                    <circle cx='12' cy='12' r='5' fill='currentColor' />
                  </svg>{" "}
                  After adding necessary funds to its investor account, in line
                  with guidance provided by the member, the investor can start
                  trading by placing orders to buy or sell securities through
                  the licensed member of ESX.{" "}
                </p>
                <p className='text-paragraphSmall relative lg:font-light  pl-7 pt-5  leading-snug '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[60px] absolute -left-5 top-5 h-[20px]'
                  >
                    <circle cx='12' cy='12' r='5' fill='currentColor' />
                  </svg>{" "}
                  An investor can monitor market prices through information
                  platforms provided by the exchange on its website, mobile
                  application, trading tools, and other information gateways
                  provided to the member.
                </p>
                <p className='text-paragraphSmall relative lg:font-light  pl-7 pt-5  leading-snug '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[60px] absolute -left-5 top-5 h-[20px]'
                  >
                    <circle cx='12' cy='12' r='5' fill='currentColor' />
                  </svg>{" "}
                  Investors may be able to have an intermediated direct market
                  access through the licensed member’s website and mobile
                  application, in line with the rules and procedures of the
                  exchange.{" "}
                </p>

                {/* <Link
                  href='#'
                  className='flex text-black text-l lg:text-xl font-semibold    mt-[20px] lg:mt-[57px] mb-[9px]'
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
                </Link> */}
              </div>
              {/* <Image
                src={
                  "/images/Career Advancement Myths_ 10  Mistakes That Keep You From Getting Ahead 1.png"
                }
                height={100}
                width={400}
                alt=''
                className='w-[40%] hidden lg:block  aspect-square object-cover'
              /> */}
            </div>
          </Card>
        </div>
      </div>
      <TradeOnESXSlider />
    </div>
  );
};

export default TradeOnESX;
