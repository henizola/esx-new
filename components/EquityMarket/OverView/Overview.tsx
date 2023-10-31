"use client";
import { BackButton } from "@/components/Button/BackButton";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import bannerImage from "/public/images/about-banner.png";
interface ListingRulesProps {
  setStep: (value: number) => void;
  step: number;
}

const Overview: React.FC<ListingRulesProps> = ({ setStep, step }) => {
  const items = [
    "Why List ?",
    "Market Segment",
    "Listing Rules, Requirements, Benefits ",
    "Listing FAQs",
  ];
  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner
        backgroundImage={bannerImage}
        title='Listing on ESX'
        background='bg-light-blue'
      />
      <div className='grid sm:grid-cols-9 gap-8 lg:px-28 py-7'>
        <Card width='col-span-2 hidden lg:flex flex-col text-left  py-[20px] px-[20px] h-fit  h-fit'>
          <h6 className='ml-2 mb-4 text-lg  -600'>
            <BackButton setStep={setStep} link='/equity-market'>
              Equity Market
            </BackButton>{" "}
            {"> Listing"}
          </h6>
          {items.map((item, index) => (
            <button
              key={index}
              className={`  text-left  ml-5 
 my-2 font-light border-b border-black `}
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
          {/* <button
            className={`  text-left  ml-5 
 my-2 font-light border-b border-black `}
            style={{
              borderBottom: "0.7px solid black",
              fontSize: "14px",
              fontWeight: "300",
            }}
          >
            Listing Companies
          </button>
          <button
            className={`  text-left  ml-5 
 my-2 font-light border-b border-black `}
            style={{
              borderBottom: "0.7px solid black",
              fontSize: "14px",
              fontWeight: "300",
            }}
          >
            Notice to Issuers
          </button>
          <button
            className={`  text-left  ml-5 
 my-2 font-light border-b border-black `}
            style={{
              borderBottom: "0.7px solid black",
              fontSize: "14px",
              fontWeight: "300",
            }}
          >
            Other Products
          </button> */}
        </Card>
        <div className='col-span-7 space-y-8  w-[100vw] lg:w-[auto]'>
          <div className='grid sm:grid-cols-5 gap-5'>
            <Card width='col-span-5 flex flex-col pb-3'>
              <h1 className='text-black text-[24px] p-8 pt-5 pb-0 lg:text-header font-[500]'>
                <span className=' border-b-[3px] border-light-golden'>
                  {" "}
                  Why list ?
                </span>
              </h1>

              {/* <Image
                src={"/images/behnam.png"}
                height={500}
                width={400}
                alt=''
                className='col-span-1 lg:hidden block w-[100%] h-[200px] object-cover'
              /> */}
              <div className='flex w-full'>
                <div className='py-[20px]  pt-[5px] px-[20px] w-[100%] space-y-[30px]'>
                  <main className=' px-5 pt-0'>
                    <p className='text-black mt-[13px] text-paragraphSmall font-light   '>
                      As an issuer, listing on ESX provides you with access to a
                      large pool of long-term capital that is critical to
                      finance your growth ambitions.
                    </p>
                    <p className='text-black mt-[15px] text-paragraphSmall font-light   '>
                      Listing provides access to a new source of finance that
                      compliments your other sources of capital, such as bank
                      lending, as it requires no guarantees or collateral to
                      raise capital from the public, as issuing share securities
                      bears no interest payment.
                    </p>
                    <p className='text-black mt-[15px] text-paragraphSmall font-light  '>
                      Indeed, listing is more than just raising capital - it is
                      a strategic decision that boosts the company’s national
                      and global profile, improves the company’s overall
                      governance, and its standing as a sustainable business
                      enterprise.
                    </p>
                  </main>
                </div>
              </div>
            </Card>
          </div>
          <Card width='lg:w-[100%] flex flex-col '>
            <h1 className='text-subHeader w-fit  font-[400] pt-0 mt-10 mx-10 mb-0'>
              Listing on ESX may take the following two main forms
            </h1>
            <main className='pt-4 lg:pt-[15px] pb-[10px] flex flex-col gap-[10px] px-10'>
              <h1 className='text-black text-paragraphBig mb-[10px] font-normal   '>
                Initial Public Offering (IPO)
              </h1>
              <p className=' text-paragraphSmall font-light    leading-snug '>
                ○ An IPO is the process through which a private company offers
                its shares of ownership to the public for the first time.
              </p>
              <p className=' text-paragraphSmall font-light    leading-snug '>
                ○ It is essentially the transition of a company from private to
                public ownership.
              </p>
              <p className=' text-paragraphSmall font-light    leading-snug '>
                ○ May take the form of offer for sale or offer for subscription
              </p>
              <hr className=' mt-[20px]  border border-0.5 border-gray/30' />
            </main>
            <main className='pt-4 lg:pt-[15px] pb-10 flex flex-col gap-[10px] px-10'>
              <h1 className='text-black text-paragraphBig mb-[10px] font-normal   '>
                Listing by Introduction (Direct Listing)
              </h1>
              <p className=' text-paragraphSmall font-light    leading-snug '>
                ○ Is the most streamlined avenue to list on the ESX, giving
                existing public share companies with shares in circulation an
                opportunity to introduce their securities to ESX’s efficient and
                reliable secondary market infrastructures.
              </p>
              <p className=' text-paragraphSmall font-light    leading-snug '>
                ○ This method of listing is followed when a company does not
                intend to raise capital/issue additional shares up on listing
                and rather aims to provide liquidity for investors in the
                secondary market.
              </p>
            </main>
          </Card>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default Overview;
