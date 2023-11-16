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
  const items = [
    "Trading Market Structure",
    "Trading Rules",
    // "Trading FAQ"
  ];

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
              in line with its trading rules.
            </p>
            <h1 className='text-black mt-5 text-[20px] md:text-header ml-0 font-[500] border-b-[3px] border-light-golden w-fit  '>
              Trading System
            </h1>
            {/* <hr className=' border border-primary-golden opacity-70 mt-[12px]' /> */}
            <main className=' space-y-[15px] pt-[30px]'>
              <p className=' text-black text-[14px] md:text-paragraphSmall font-light   '>
                All trading activity on ESX listed securities occurs via ESX’s
                Automated Trading System (ATS). ESX adopts a hybrid market that
                provides both a central limit order book as well as platforms
                for bilateral and multilateral negotiated trading in the form of
                Requests for Quotes (RFQs). ESX’s central limit order book
                allows trading members and their clients to enter buy and sell
                orders anonymously where customer trades are executed using
                ESXs’ modern trading engine based on a transparent price-time
                priority mechanism of trade matching.
              </p>
              {/* <p className=' text-black text-[14px] md:text-paragraphSmall font-light   '>
                ESX adopts a hybrid market that provides both a central limit
                order book as well as platforms for bilateral and multilateral
                negotiated trading in the form of Requests for Quotes (RFQs).
                ESX’s central limit order book allows trading members and their
                clients to enter buy and sell orders anonymously where customer
                trades are executed using ESXs’ modern trading engine based on a
                transparent price-time priority mechanism of trade matching.
              </p> */}
              <p className=' text-black text-[14px] md:text-paragraphSmall font-light   '>
                The ATS seamlessly integrates with the CSD that ensures
                efficient clearing and settlement.
              </p>
            </main>
          </Card>
          <Card width='w-[100%]  flex  flex-col pt-5 pb-[30px] px-10 shadow-[0]'>
            <h1 className='text-black mt-2 text-[20px] md:text-header ml-0 font-[500] border-b-[3px] border-light-golden w-fit  '>
              Trading Operations
            </h1>
            {/* <hr className=' border border-primary-golden opacity-70 mt-[12px]' /> */}
            <main className=' space-y-[15px] pt-[30px]'>
              <p className='text-black text-paragraphSmall flex font-light   '>
                <span>○</span>
                <span className='ml-2 text-justify'>
                  <strong>Market Opening:</strong> Trading on ESX begins with an
                  opening auction. During this phase, buy and sell orders are
                  matched, and the opening price for each security is
                  determined.
                </span>{" "}
              </p>
              <p className='text-black text-paragraphSmall flex font-light   '>
                <span>○</span>
                <span className='ml-2 text-justify'>
                  <strong> Order Placement: </strong> Investors place buy and
                  sell orders with their brokerage firms or directly via direct
                  market access facilities. Among others, orders can be market
                  orders (executed at the prevailing market price) or limit
                  orders (executed only at a specified price or better).
                </span>{" "}
              </p>
              <p className='text-black text-paragraphSmall flex font-light   '>
                <span>○</span>
                <span className='ml-2 text-justify'>
                  <strong>Order Matching:</strong> ESX uses electronic trading
                  systems to match buy and sell orders. Orders are executed
                  based on a price-time priority, meaning the first order at a
                  specific price gets priority.
                </span>{" "}
              </p>
              <p className='text-black text-paragraphSmall flex font-light   '>
                <span>○</span>
                <span className='ml-2 text-justify'>
                  <strong>Continuous Trading: </strong>Once the market opens,
                  continuous trading takes place, with buy and sell orders
                  executed throughout the trading day. Prices fluctuate based on
                  supply and demand.
                </span>{" "}
              </p>
              <p className='text-black text-paragraphSmall flex font-light   '>
                <span>○</span>
                <span className='ml-2 text-justify'>
                  <strong> Market Surveillance:</strong> ESX utilizes various
                  surveillance mechanisms to monitor trading activity and detect
                  unusual or suspicious behavior. This helps maintain market
                  integrity and prevent market manipulation.
                </span>{" "}
              </p>
              <p className='text-black text-paragraphSmall flex font-light   '>
                <span>○</span>
                <span className='ml-2 text-justify'>
                  <strong>Trading Halts:</strong> Trading may be halted under
                  certain conditions, such as extreme volatility, technical
                  issues, or significant news events. Halts are designed to
                  maintain order and stability in the market
                </span>{" "}
              </p>
              <p className='text-black text-paragraphSmall flex font-light   '>
                <span>○</span>
                <span className='ml-2 text-justify'>
                  <strong> Clearing and Settlement: </strong>After trades are
                  executed, the Central Securities Depository, ensures that
                  trades are settled by transferring securities and funds
                  between buyers and sellers.
                </span>{" "}
              </p>
              <p className='text-black text-paragraphSmall flex font-light  '>
                <span>○</span>
                <span className='ml-2 text-justify  mb-2'>
                  <strong>Post-Trade Reporting: </strong>The exchange reports
                  executed trades and trade data to participants and the public.
                  This data includes the trade price, volume, and other relevant
                  details.
                </span>{" "}
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
                  {/* <span>○ </span> */}

                  <span className='ml-0 text-justify'>
                    The ESX shall open for trading on all business days in
                    Ethiopia. Trading shall be conducted at specified times as
                    may be determined by the ESX. ESX may extend, advance, or
                    reduce trading hours by notifying Trading Members as may be
                    necessary. Unless otherwise specified by the Board of
                    Directors of the ESX, the exchange shall be open for trading
                    from 9:00 to 3:30 EAT, as follows:
                  </span>
                </p>

                {/* <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                  <span>○ </span>

                  <span className='ml-2 text-justify'>
                    Trading shall be conducted at specified times as may be
                    determined by the ESX.
                  </span>
                </p> */}

                {/* <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                  <span>○ </span>

                  <span className='ml-2 text-justify'>
                    ESX may extend, advance or reduce trading hours by notifying
                    Trading Members as may be necessary.{" "}
                  </span>
                </p> */}

                {/* <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                  <span>○ </span>

                  <span className='ml-2 text-justify'>
                    Unless otherwise specified by the Board of Directors of the
                    ESX, the exchange shall be open for trading from 9:00 to
                    3:00 EAT, as follows{" "}
                  </span>
                </p> */}

                {/* <LinkButton className='mt-auto' href='#'>
                  View More
                </LinkButton> */}
                <table className='min-w-full bg-white mt-5'>
                  <thead>
                    <tr className='bg-gray-100'>
                      <th className='border text-left px-8 py-4'>Session</th>
                      <th className='border text-left px-8 py-4'>Time</th>
                      {/* <th className='border text-left px-8 py-4'>
                        Market Segments
                      </th> */}
                      {/* <th className='border text-left px-8 py-4'>Order Type</th> */}
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
                      {/* <td className='border text-left px-8 py-4'>
                        Main and GM
                      </td> */}
                      {/* <td className='border text-left px-8 py-4'></td> */}
                      <td className='border text-left px-8 py-4'>+/-10%</td>
                    </tr>
                    <tr>
                      <td className='border text-left px-8 py-4'>Continuous</td>
                      <td className='border text-left px-8 py-4'>
                        9:30 AM - 3:30 PM
                      </td>
                      {/* <td className='border text-left px-8 py-4'>
                        Main and GM
                      </td>
                      <td className='border text-left px-8 py-4'></td> */}
                      <td className='border text-left px-8 py-4'>+/-10%</td>
                    </tr>
                    <tr>
                      <td className='border text-left px-8 py-4'>Pre-close</td>
                      <td className='border text-left px-8 py-4'>
                        9:30 AM - 3:30 PM
                      </td>
                      {/* <td className='border text-left px-8 py-4'>
                        Main and GM
                      </td>
                      <td className='border text-left px-8 py-4'></td> */}
                      <td className='border text-left px-8 py-4'>+/-10%</td>
                    </tr>
                    <tr>
                      <td className='border text-left px-8 py-4'>Close</td>
                      <td className='border text-left px-8 py-4'>3:30 PM</td>
                      {/* <td className='border text-left px-8 py-4'></td>
                      <td className='border text-left px-8 py-4'></td>
                      <td className='border text-left px-8 py-4'></td> */}
                    </tr>
                  </tbody>
                </table>

                <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                  {/* <span>○ </span> */}

                  <span className='ml-0 text-justify'>
                    In extraordinary circumstances, at the sole discretion of
                    ESX, the exchange may authorize an extension of the trading
                    hours past 3:30 PM on a particular trading day. The Exchange
                    will provide public notice of any extension of the trading
                    day as promptly as practicable.
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

            <Card width='w-[100%] flex gap-4 flex-col pb-3 shadow-[0]'>
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
                      <td className='border text-left px-8 py-4'>
                        7 Jan, Sunday
                      </td>
                      <td className='border text-left px-8 py-4'>
                        Ethiopian Christmas/Gena
                      </td>
                    </tr>
                    <tr>
                      <td className='border text-left px-8 py-4'>
                        20 Jan, Saturday,
                      </td>
                      <td className='border text-left px-8 py-4'>
                        Epiphany/Timket
                      </td>
                    </tr>
                    <tr>
                      <td className='border text-left px-8 py-4'>
                        2 Mar, Saturday
                      </td>
                      <td className='border text-left px-8 py-4'>
                        Adwa Victory Day
                      </td>
                    </tr>
                    <tr>
                      <td className='border text-left px-8 py-4'>
                        10 April, Wednesday
                      </td>
                      <td className='border text-left px-8 py-4'>
                        Eid al-Fitr
                      </td>
                    </tr>
                    <tr>
                      <td className='border text-left px-8 py-4'>
                        1 May, Wednesday
                      </td>
                      <td className='border text-left px-8 py-4'>
                        International Labor Day
                      </td>
                    </tr>
                    <tr>
                      <td className='border text-left px-8 py-4'>
                        3 May Friday
                      </td>
                      <td className='border text-left px-8 py-4'>
                        Good Friday
                      </td>
                    </tr>
                    <tr>
                      <td className='border text-left px-8 py-4'>
                        5 May, Friday
                      </td>
                      <td className='border text-left px-8 py-4'>
                        Ethiopian Easter/Fasika
                      </td>
                    </tr>
                    <tr>
                      <td className='border text-left px-8 py-4'></td>
                      <td className='border text-left px-8 py-4'>
                        Patriot’s Day
                      </td>
                    </tr>
                    <tr>
                      <td className='border text-left px-8 py-4'>
                        28 May, Tuesday
                      </td>
                      <td className='border text-left px-8 py-4'>
                        Derg Downfall Day
                      </td>
                    </tr>
                    <tr>
                      <td className='border text-left px-8 py-4'>
                        17 Jun, Monday
                      </td>
                      <td className='border text-left px-8 py-4'>
                        Eid al-Adha
                      </td>
                    </tr>
                    <tr>
                      <td className='border text-left px-8 py-4'>
                        11 Sept, Wednesday
                      </td>
                      <td className='border text-left px-8 py-4'>
                        Ethiopian New Year
                      </td>
                    </tr>
                    <tr>
                      <td className='border text-left px-8 py-4'>
                        16 Sept, Monday
                      </td>
                      <td className='border text-left px-8 py-4'>
                        The Prophet&apos;s Birthday
                      </td>
                    </tr>
                    <tr>
                      <td className='border text-left px-8 py-4'>
                        27 Sept, Sunday
                      </td>
                      <td className='border text-left px-8 py-4'>Meskel</td>
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
