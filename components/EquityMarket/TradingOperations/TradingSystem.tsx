"use client";
import { BackButton } from "@/components/Button/BackButton";
import LinkButton from "@/components/Button/LinkButton";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import bannerImage from "/public/images/about-banner.png";
interface TradingSystemProps {
  setStep: (value: number) => void;
  step: number;
}

const TradingSystem: React.FC<TradingSystemProps> = ({ setStep, step }) => {
  const items = ["Trading Market Structure", "Trading Rules", "Trading FAQ"];

  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner backgroundImage={bannerImage} title='Trading & Operations' />
      <div className='grid sm:grid-cols-9 gap-8 lg:px-28 py-7'>
        <Card width='col-span-2  hidden lg:flex flex-col text-left  py-[20px] px-[20px]  shadow-[0] h-fit '>
          <h6 className='ml-2 mb-4'>
            <BackButton setStep={setStep} link='/equity-market'>
              Equity Market
            </BackButton>{" "}
            {"> Trading & Operations"}
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
              onClick={() => {
                setStep(index);
              }}
            >
              {item}
            </button>
          ))}
        </Card>
        <div className='col-span-7 space-y-5 w-[100vw] lg:w-[auto] h-[auto]'>
          <Card width='w-[100%]  flex  flex-col pt-5 pb-[30px] px-10 shadow-[0]'>
            <p className=' text-black pt-4 text-[14px] md:text-paragraphSmall font-light   '>
              Trading on the ESX shall be only on approved securities on ESX’s
              trading platform unless the Exchange grants an express exemption
              inline with its trading rules.
            </p>
            <h1 className='text-black mt-5 text-[20px] md:text-header ml-0 font-[500] border-b-[3px] border-light-golden w-fit  '>
              Trading System
            </h1>
            {/* <hr className=' border border-primary-golden opacity-70 mt-[12px]' /> */}
            <main className=' space-y-[15px] pt-[30px]'>
              <p className=' text-black text-[14px] md:text-paragraphSmall font-light   '>
                All trading activity on ESX listed securities (as well as ESX’s
                unlisted securities market) occurs via ESX’s proprietary
                Automated Trading System (ATS).
              </p>
              <p className=' text-black text-[14px] md:text-paragraphSmall font-light   '>
                ESX adopts a hybrid market that provides both a central limit
                order book as well as platforms for bilateral and multilateral
                negotiated trading in the form of Requests for Quotes (RFQs).
                ESX’s central limit order book allows trading members and their
                clients to enter buy and sell orders anonymously where customer
                trades are executed using ESXs’ modern trading engine based on a
                transparent price-time priority mechanism of trade matching.
              </p>
              <p className=' text-black text-[14px] md:text-paragraphSmall font-light   '>
                The ATS seamlessly integrates with the CSD that ensures
                efficient clearing and settlement.
              </p>
            </main>
          </Card>
          <div className='grid sm:grid-cols-1 gap-5'>
            <Card width='w-[100%] flex gap-4 flex-col shadow-[0] '>
              <div className='p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]' />
              <main className=' pt-2 pb-7 px-10 flex flex-col h-full'>
                <h1 className='text-black mt-0 text-[20px] md:text-header ml-0 font-[500] border-b-[3px] border-light-golden w-fit  '>
                  <span>Trading Calendar</span>
                  {/* <ChevronRightIcon className='w-8 h-8 mt-1 text-primary-golden' /> */}
                </h1>

                <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                  <span>○ </span>

                  <span className='ml-2'>
                    The ESX shall open for trading on all business days in
                    Ethiopia.
                  </span>
                </p>

                <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                  <span>○ </span>

                  <span className='ml-2'>
                    Trading shall be conducted at specified times as may be
                    determined by the ESX.
                  </span>
                </p>

                <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                  <span>○ </span>

                  <span className='ml-2'>
                    ESX may extend, advance or reduce trading hours by notifying
                    Trading Members as may be necessary.{" "}
                  </span>
                </p>

                <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                  <span>○ </span>

                  <span className='ml-2'>
                    Unless otherwise specified by the Board of Directors of the
                    ESX, the exchange shall be open for trading from 9:00 to
                    3:00 EAT, as follows{" "}
                  </span>
                </p>

                {/* <LinkButton className='mt-auto' href='#'>
                  View More
                </LinkButton> */}
                <table className='min-w-full bg-white mt-5'>
                  <thead>
                    <tr className='bg-gray-100'>
                      <th className='border text-left px-8 py-4'>Session</th>
                      <th className='border text-left px-8 py-4'>Time</th>
                      <th className='border text-left px-8 py-4'>
                        Market Segments
                      </th>
                      <th className='border text-left px-8 py-4'>Order Type</th>
                      <th className='border text-left px-8 py-4'>
                        Price Limit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border text-left px-8 py-4'>Pre-open</td>
                      <td className='border text-left px-8 py-4'>
                        9:00 - 9:30 AM
                      </td>
                      <td className='border text-left px-8 py-4'>
                        Main and GM
                      </td>
                      <td className='border text-left px-8 py-4'></td>
                      <td className='border text-left px-8 py-4'>+/-10%</td>
                    </tr>
                    <tr>
                      <td className='border text-left px-8 py-4'>Continuous</td>
                      <td className='border text-left px-8 py-4'>
                        9:00 AM - 9:30 PM
                      </td>
                      <td className='border text-left px-8 py-4'>
                        Main and GM
                      </td>
                      <td className='border text-left px-8 py-4'></td>
                      <td className='border text-left px-8 py-4'>+/-10%</td>
                    </tr>
                    <tr>
                      <td className='border text-left px-8 py-4'>Pre-close</td>
                      <td className='border text-left px-8 py-4'>
                        9:00 AM - 9:30 AM
                      </td>
                      <td className='border text-left px-8 py-4'>
                        Main and GM
                      </td>
                      <td className='border text-left px-8 py-4'></td>
                      <td className='border text-left px-8 py-4'>+/-10%</td>
                    </tr>
                    <tr>
                      <td className='border text-left px-8 py-4'>Close</td>
                      <td className='border text-left px-8 py-4'>3:30 PM</td>
                      <td className='border text-left px-8 py-4'></td>
                      <td className='border text-left px-8 py-4'></td>
                      <td className='border text-left px-8 py-4'></td>
                    </tr>
                  </tbody>
                </table>

                <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                  <span>○ </span>

                  <span className='ml-2'>
                    In extraordinary circumstances, at the sole discretion of
                    ESX, the exchange may authorize an extension of the trading
                    hours past …3:30 PM on a particular trading day.
                  </span>
                </p>

                <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                  <span>○ </span>

                  <span className='ml-2'>
                    The Exchange will provide public notice of any extension of
                    the trading day as promptly as practicable.
                  </span>
                </p>
              </main>
            </Card>
            {/* <Card width='w-[100%] flex gap-3 mt-[10px] flex-col bg-white/0 '>
              <div>
                <div className='pt-[15px] pb-[13px] px-[20px] grid grid-cols-5 bg-primary-blue text-white'>
                  <span className='text-white text-base font-semibold    '>
                    Session
                  </span>
                  <span className='text-white text-base font-semibold    '>
                    Time
                  </span>
                  <span className='text-white text-base font-semibold    '>
                    Market Segments
                  </span>
                  <span className='text-white text-base font-semibold    '>
                    Order Type
                  </span>
                  <span className='text-white text-base font-semibold    '>
                    Price Limit
                  </span>
                </div>
                <div className='p-1 bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]' />
              </div>
              <div className='pt-[10px] pb-[8px]  my-1 px-[20px] grid sm:grid-cols-5 bg-white text-black'>
                <span className='text-black text-[14px] md:text-base font-normal    '>
                  Pre-open
                </span>
                <span className='text-black text-[14px] md:text-base font-normal    '>
                  9:00 - 9:30 AM
                </span>
                <span className='text-black text-[14px] md:text-base font-normal    '>
                  Main and GM
                </span>
                <span className='text-black text-[14px] md:text-base font-normal    '></span>

                <span className='text-black text-[14px] md:text-base font-normal    '>
                  +/-10%
                </span>
              </div>
              <div className='pt-[10px] pb-[8px] px-[20px] grid sm:grid-cols-3 bg-white text-black'>
                <span className='text-black text-[14px] md:text-base font-normal    '>
                  CSD fee
                </span>
              </div>
              <div className='pt-[10px] pb-[8px] px-[20px] grid sm:grid-cols-3 bg-white text-black'>
                <span className='text-black text-[14px] md:text-base font-normal    '>
                  CMA fee
                </span>
              </div>
              <div className='pt-[10px] pb-[8px] px-[20px] grid sm:grid-cols-3 bg-white text-black'>
                <span className='text-black text-[14px] md:text-base font-normal    '>
                  Member commission
                </span>
              </div>
              <div className='pt-[10px] pb-[8px] px-[20px] grid sm:grid-cols-3 bg-white text-black'>
                <span className='text-black text-[14px] md:text-base font-normal    '>
                  Compensation fund
                </span>
              </div>
              <div className='pt-[10px] pb-[8px] px-[20px] grid sm:grid-cols-3 bg-white text-black'>
                <span className='text-black text-[14px] md:text-base font-normal    '>
                  Taxes
                </span>
              </div>
            </Card> */}

            <Card width='w-[100%] flex gap-4 flex-col  shadow-[0]'>
              <div className='p-0.5  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]' />
              <main className=' pt-2 pb-7 px-10 flex flex-col h-full'>
                <h1 className='text-black text-[20px] md:text-subHeader font-normal    flex items-end gap-5 '>
                  <div>Public Holidays / Closing Days (2023 -2024)</div>
                  {/* <ChevronRightIcon className='w-8 h-8 mt-1 text-primary-golden' /> */}
                </h1>
                <table className='min-w-full bg-white mt-5'>
                  <thead>
                    <tr className='bg-gray-100'>
                      <th className='border text-left px-8 py-4 w-[30%]'>
                        Date
                      </th>
                      <th className='border text-left px-8 py-4'>Holiday</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border text-left px-8 py-4'></td>
                      <td className='border text-left px-8 py-4'></td>
                    </tr>
                    <tr>
                      <td className='border text-left px-8 py-4'></td>
                      <td className='border text-left px-8 py-4'></td>
                    </tr>{" "}
                    <tr>
                      <td className='border text-left px-8 py-4'></td>
                      <td className='border text-left px-8 py-4'></td>
                    </tr>
                  </tbody>
                </table>
                {/* <LinkButton className='mt-[30px]' href='#'>
                  View More
                </LinkButton> */}
              </main>
            </Card>
          </div>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default TradingSystem;
