"use client";
import Image from "next/image";
import React from "react";
import Banner from "../Banner/banner";
import Card from "../Card/Card";
import bannerImage from "/public/images/about-banner.png";

interface LatestNewsProps {
  setStep: (value: number) => void;
  step: number;
}

const LatestNews: React.FC<LatestNewsProps> = ({ setStep, step }) => {
  const items = [
    "Latest News",
    "Events",
    "Press Releases",
    "Gallery",
    "Downloads",
  ];

  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner
        backgroundImage={bannerImage}
        title='News and Media Center'
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
            <Card width=' flex flex-col   py-4 px-4 lg:py-10 lg:px-10  '>
              <div className='flex gap-[42px]  flex-row'>
                <div className='lg:w-[40%] '>
                  <Image
                    src={"/images/news1.jpeg"}
                    height={500}
                    width={400}
                    alt=''
                    className='h-[200px] bg-black lg:h-auto object-cover'
                  />
                </div>
                <div className='lg:w-[60%] '>
                  <main className=' '>
                    <h1 className=' text-black text-[20px] lg:text-header border-b-[3px] border-light-golden w-fit text-left mb-5  capitalize lg:leading-[50px] '>
                      Ethiopia Begins Fundraising for First-Ever Securities
                      Exchange
                    </h1>
                    <h1 className='text-black text-[12px] lg:text-paragraphBig not-italic font-normal leading-[normal] mt-2 lg:mt-0'>
                      ESX Held Capital Raise Roadshow in Addis Ababa
                    </h1>
                    <h1 className='text-justify text-black text-xs font-normal    mt-2 lg:mt-[4px]'>
                      May 16, 2023
                    </h1>
                  </main>
                </div>
              </div>
              <p className=' text-[14px] lg:text-base text-justify font-light    mt-3 lg:mt-5'>
                Ethiopia began selling shares to raise funds required to set up
                its first-ever securities exchange as Prime Minister Abiy Ahmed
                pushes to modernize eastern Africa’s largest economy.
              </p>
              <p className=' text-[14px] lg:text-base text-justify font-light    mt-3 lg:mt-5'>
                The sale, which kicked off in the capital, Addis Ababa, on
                Tuesday aims to mobilize 75% of the required funding, said
                Michael Habte, a project manager for the planned Ethiopia
                Securities Exchange, or ESX. The remaining 25% of the shares
                will be held by Ethiopian Investment Holdings, the nation’s
                sovereign wealth fund.
              </p>
              <p className=' text-[14px] lg:text-base text-justify font-light    mt-3 lg:mt-5'>
                The authorities want the bourse to be fully operational by 2024,
                and at least five state-owned enterprises to be listed soon
                after. The ESX stake is on offer to local and foreign investors,
                according to Michael who didn’t say how much money is being
                raised. The government expects local banks and insurance
                companies to invest.
              </p>
              <p className=' text-[14px] lg:text-base text-justify font-light    mt-3 lg:mt-5'>
                Introducing a securities exchange is in line with Abiy’s plan to
                boost Ethiopia’s financial sector to rival African peers
                including South Africa, Nigeria, Kenya and Morocco. The Horn of
                Africa nation’s economy was one of the world’s fastest growing
                before it was disrupted by a civil war and the coronavirus
                pandemic.
              </p>
              <span id='2ndroadshow'></span>
            </Card>

            <Card width=' flex flex-col   py-4 px-4 lg:py-10 lg:px-10  '>
              <div className='flex gap-[42px]  flex-row'>
                <div className='lg:w-[40%] '>
                  <Image
                    src={"/images/course6.jpeg"}
                    height={500}
                    width={400}
                    alt=''
                    className='h-[200px] bg-black lg:h-[100%] w-[100%] object-cover'
                  />
                </div>
                <div className='lg:w-[60%] '>
                  <main className=' '>
                    <h1 className=' text-black text-[20px] lg:text-header border-b-[3px] border-light-golden w-fit text-left mb-5  capitalize lg:leading-[50px] '>
                      ESX successfully completed its 2nd roadshow and
                      market-sounding activities in Nairobi
                    </h1>
                    {/* <h1 className='text-black text-[12px] lg:text-paragraphBig not-italic font-normal leading-[normal] mt-2 lg:mt-0'>
                      ESX Held Capital Raise Roadshow in Addis Ababa
                    </h1> */}
                    <h1 className='text-justify text-black text-xs font-normal    mt-2 lg:mt-[4px]'>
                      4-8th Sep 2023
                    </h1>
                  </main>
                </div>
              </div>
              <p className=' text-[14px] lg:text-base text-justify font-light    mt-3 lg:mt-5'>
                held several bilateral meetings with key capital market players
              </p>
              <p className=' text-[14px] lg:text-base text-justify font-light    mt-3 lg:mt-5'>
                participated in deal room sessions alongside Africa Climate
                Week- held a successful market-sounding session alongside ECMA.
              </p>
              <span id='3rdCapital'></span>
            </Card>
            <Card width=' flex flex-col   py-4 px-4 lg:py-10 lg:px-10  '>
              <div className='flex gap-[42px]  flex-row'>
                <div className='lg:w-[40%] '>
                  <Image
                    src={"/images/news2.png"}
                    height={500}
                    width={400}
                    alt=''
                    className='h-[200px] bg-black lg:h-[100%] object-cover'
                  />
                </div>
                <div className='lg:w-[60%] '>
                  <main className=' '>
                    <h1 className=' text-black text-[20px] lg:text-header border-b-[3px] border-light-golden w-fit text-left mb-5  capitalize lg:leading-[50px] '>
                      ESX held its 3rd capital raise investor roadshow in London
                      - AfSIC
                    </h1>
                    {/* <h1 className='text-black text-[12px] lg:text-paragraphBig not-italic font-normal leading-[normal] mt-2 lg:mt-0'>
                      ESX Held Capital Raise Roadshow in Addis Ababa
                    </h1> */}
                    <h1 className='text-justify text-black text-xs font-normal    mt-2 lg:mt-[4px]'>
                      September 28, 2023
                    </h1>
                  </main>
                </div>
              </div>
              <p className=' text-[14px] lg:text-base text-justify font-light    mt-3 lg:mt-5'>
                LONDON, United Kingdom, 28 September 2022, /African Media
                Agency/- FSD Ethiopia is coordinating a delegation from Ethiopia
                to attend AFSIC 2023 and will be sponsoring the Ethiopian
                Investment Summit scheduled for Monday, 9th October 2023. FSD
                Ethiopia is a development agency that aims to support the
                development of accessible, inclusive, and sustainable financial
                markets for economic growth with a vision to contribute to a
                thriving financial system that delivers real value to the
                broader economy and to the people of Ethiopia.{" "}
              </p>
              <p className=' text-[14px] lg:text-base text-justify font-light    mt-3 lg:mt-5'>
                The Ethiopian delegation includes the key financial sector
                actors, including the Ministry of Finance, Ethiopian Capital
                Market Authority, Ethiopian Investment Holdings, Ethiopian
                Securities Exchange, and Ethiopian Investment Commission– a
                truly comprehensive grouping and an exciting agenda item to look
                forward to.{" "}
              </p>

              <p className=' text-[14px] lg:text-base text-justify font-light    mt-3 lg:mt-5'>
                The Ethiopian summit is organized under the theme “Ethiopia –
                The New Frontier Market, Opening Doors and Creating
                Opportunities”. The summit aims to provide a comprehensive
                overview of Ethiopia’s emerging opportunities and highlight
                Ethiopia’s recent economic reforms, favorable investment
                climate, and growing investment opportunities. The high-level
                officials in the panel will discuss significant developments
                strengthening Ethiopia’s financial architecture. The event will
                feature a road show to raise capital for the recently
                established Ethiopian Securities Exchange (ESX). ESX will
                highlight opportunities for forming strategic partnerships with
                financial actors in Africa and beyond. Ethiopia investment
                holding aims to attract investors and inform global finance
                practitioners of Ethiopia’s capital market and opportunities.
              </p>

              <p className=' text-[14px] lg:text-base text-justify font-light    mt-3 lg:mt-5'>
                The Ministry of Finance will promote its far-reaching reforms to
                mobilize resources for sustainable and inclusive development,
                key to Ethiopia’s Homegrown Economic Reform agenda. Ethiopian
                Investment Commission will exhibit the various investment
                opportunities and a favorable business environment within the
                country, accomplished through a comprehensive and strategic
                approach that highlights the unique advantages of investing in
                Ethiopia.
              </p>
            </Card>
          </div>
        </div>
      </div>
      {/* <div className='bg-white py-5 lg:py-[68px]'>
        <p className='max-w-[980px] mx-auto w-full lg:h-16 text-center text-black text-[14px] px-[20px] lg:text-base font-normal    leading-snug'>
          Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
          consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum
          dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat{" "}
        </p>
      </div> */}
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default LatestNews;
