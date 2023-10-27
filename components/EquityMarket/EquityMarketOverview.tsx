import Banner from "@/components/Banner/banner";
import Card from "@/components/Card/Card";
import Link from "next/link";
import React from "react";
import image from "/public/images/who-we-are.png";

interface WhoWeAreProps {
  setStep: (value: number) => void;
  step: number;
}
const EquityMarketOverview: React.FC<WhoWeAreProps> = ({ setStep, step }) => {
  const items = ["Overview"];

  return (
    <div className='flex flex-col w-full'>
      <Banner
        backgroundImage={image}
        title='Equity market'
        description='ESX Equities Market is the division of ESX that allows issuers of equity securities to raise long-term capital.'
      />
      <div className='flex w-full px-0 lg:px-28 pt-4 lg:py-[30px]'>
        <Card width='hidden lg:flex w-[25%] mr-5 flex flex-col text-left  py-[20px] px-5'>
          <h6 className='ml-2 mb-4'>Equity Market</h6>{" "}
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
          <Link
            href={"/equity-market/listing"}
            className={`  text-left  ml-5 
 my-2 font-light border-b border-black `}
            style={{
              borderBottom: "0.7px solid black",
              fontSize: step === 1 ? "16px" : "14px",
              fontWeight: step === 1 ? "400" : "300",
            }}
            // onClick={() => setStep(1)}
          >
            Listing
          </Link>
          <Link
            href={"/equity-market/trade"}
            className={`  text-left  ml-5 
 my-2 font-light border-b border-black `}
            style={{
              borderBottom: "0.7px solid black",
              fontSize: step === 2 ? "16px" : "14px",
              fontWeight: step === 2 ? "400" : "300",
            }}
            // onClick={() => setStep(2)}
          >
            Trade
          </Link>
          <Link
            href={"/equity-market/members"}
            className={`  text-left  ml-5 
 my-2 font-light border-b border-black `}
            style={{
              borderBottom: "0.7px solid black",
              fontSize: step === 2 ? "16px" : "14px",
              fontWeight: step === 2 ? "400" : "300",
            }}
            // onClick={() => setStep(2)}
          >
            Members
          </Link>
          <Link
            href={"/equity-market/trading-operations"}
            className={`  text-left  ml-5 
 my-2 font-light border-b border-black `}
            style={{
              borderBottom: "0.7px solid black",
              fontSize: step === 2 ? "16px" : "14px",
              fontWeight: step === 2 ? "400" : "300",
            }}
            // onClick={() => setStep(2)}
          >
            Trading & Operations
          </Link>
          {/* <Link
            href={"/equity-market/regulatory-framework"}
            className={`  text-left  ml-5 
 my-2 font-light border-b border-black `}
            style={{
              borderBottom: "0.7px solid black",
              fontSize: step === 2 ? "16px" : "14px",
              fontWeight: step === 2 ? "400" : "300",
            }}
            // onClick={() => setStep(2)}
          >
            Regulatory Framework
          </Link> */}
        </Card>
        <div className='flex flex-col justify-between gap-[18px] h-full w-[100%]'>
          <Card width='flex flex-col '>
            <div className='flex flex-col lg:flex-row px-5'>
              {/* <Image
                src={"/images/austin-distel-EMPZ7yRZoGw-unsplash 1.png"}
                height={100}
                width={400}
                alt=''
                className='w-[100%] lg:w-[40%] h-[30vh] lg:h-auto  aspect-square object-cover'
              /> */}
              <div className='pt-[30px] pb-[20px]  px-[20px]   '>
                {/* <h1 className='text-primary-blue text-[12px] mb-[14px] '>
                  Overview
                </h1> */}
                <p className=' text-base my-[10px]   font-light    leading-tight'>
                  ESX Equities Market is the division of ESX that allows issuers
                  of equity securities to raise long-term capital.
                </p>
                <h1 className='text-black  text-[20px] lg:text-paragraphSMmall font-light  mb-[20px]'>
                  ESX’s Equity Market Provides:
                </h1>

                <div className='flex relative pl-7 gap-[10px] mb-[20px]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[60px] absolute -left-5 top-1 h-[20px]'
                  >
                    <circle cx='12' cy='12' r='5' fill='currentColor' />
                  </svg>

                  <p className='text-paragraphSMmall font-light text-black text-base flex-1 '>
                    A central listing and trading venue for issuance and trading
                    of various equity instruments that are approved and
                    registered by the Ethiopian Capital Market Authority
                    <div className='flex flex-col gap-[10px] px-6 pt-5'>
                      <p className=' text-base '>
                        ○ Shares and other forms of equity instruments
                      </p>
                      <p className=' text-base '>
                        ○ Real Estate Investment Funds (REIFs) / ‘REITS’
                      </p>
                      <p className=' text-base '>
                        ○ Exchange Traded Funds (ETFs)
                      </p>
                    </div>
                  </p>
                </div>

                <div className='flex relative pl-7 gap-[10px] mb-[20px]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[60px] absolute -left-5 top-1 h-[20px]'
                  >
                    <circle cx='12' cy='12' r='5' fill='currentColor' />
                  </svg>

                  <p className='text-black font-light text-base flex-1 '>
                    Increased market transparency, integrity, efficiency, and
                    reliability of the market with the aim to protect and
                    enhance confidence by local and international investors on
                    the Ethiopian capital markets.
                  </p>
                </div>
                <div className='flex relative  pl-7 gap-[10px] mb-[20px]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[60px] absolute -left-5 top-1 h-[20px]'
                  >
                    <circle cx='12' cy='12' r='5' fill='currentColor' />
                  </svg>
                  <p className='text-black font-light text-base flex-1 '>
                    Enhances the overall liquidity of the equities market.
                  </p>
                </div>
                <div className='flex relative  pl-7 gap-[10px] mb-[20px]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[60px] absolute -left-5 top-1 h-[20px]'
                  >
                    <circle cx='12' cy='12' r='5' fill='currentColor' />
                  </svg>

                  <p className='text-black font-light text-base flex-1 '>
                    Regulates and enforces actions on trading members.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className='relative h-[200px]'>
        <img
          src={"/images/Authors 1.png"}
          alt=''
          className='w-full h-full object-cover'
        />
        <div className='absolute top-0 left-0 bg-primary-golden/80 w-full h-full  flex items-center justify-center '>
          <div className='w-full px-4 lg:px-[130px] flex flex-col lg:flex-row justify-between'>
            <h1 className='text-center lg:text-left text-white lg:text-3xl font-normal    max-w-[760px] lg:leading-10 mb-5 lg:mb-0'>
              Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
              consectetuer
            </h1>
            <Link
              className='px-[29px] pt-[11px] pb-[13px] min-w-[104px] h-fit rounded-full bg-white text-center text-primary-golden text-xl font-medium   '
              href={"#"}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquityMarketOverview;
