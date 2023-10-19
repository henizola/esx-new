"use client";
import Link from "next/link";
import React from "react";
import Banner from "../../Banner/banner";
import { BackButton } from "../../Button/BackButton";
import Card from "../../Card/Card";
import bannerImage from "/public/images/about-banner.png";
interface ListingRulesProps {
  setStep: (value: number) => void;
  step: number;
}

const ListingRules: React.FC<ListingRulesProps> = ({ setStep, step }) => {
  const items = ["Overview", "Market Segment", "Listing Rules", "Listing FAQs"];

  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner
        backgroundImage={bannerImage}
        title='Listing Rules'
        description='As an issuer listing on ESX provides you Wlth access to large pool of long-term capital that IS critical to finance your growth ambitions'
      />
      <div className='grid sm:grid-cols-9 gap-8 lg:px-28 py-7'>
        <Card width='col-span-2 hidden lg:flex flex-col text-left  py-[20px] px-[20px]'>
          <h6 className='ml-2 mb-4 text-lg text-gray-600'>
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
        <div className='col-span-7 space-y-5  w-[100vw] lg:w-[auto]'>
          <Card width='w-[100%]  flex  flex-col  py-[40px] px-[40px]'>
            <h1 className='text-black text-[24px] lg:text-header font-normal'>
              <span className=' border-b-[3px] border-light-golden'>Li</span>
              sting rules
            </h1>

            <p className=' text-black text-paragraphSmall font-light     mt-[20px]  mb-[15px]'>
              Listing provides access to a new source of finance that
              compliments your other sources of capital, such as bank lending,
              as it requires no guarantees or collateral to raise capital from
              the public, issuing share securities bears no interest payment.
            </p>
            <p className='text-black text-paragraphSmall font-light  '>
              Indeed, listing is more than just raising capital - it is a
              strategic decision that boosts the company’s national and global
              profile, improves the company’s overall governance, and standing
              as a sustainable business enterprise.
            </p>
          </Card>
          <div className='w-full  flex-col lg:flex-row flex gap-5'>
            <div className='w-[100%]  lg:w-[100%] flex flex-col gap-5'>
              <Card width=''>
                <h1 className='pt-[21px] pb-[10px] px-[20px]  bg-primary-blue text-white  text-paragraphBig  not-italic font-semibold leading-[normal]'>
                  Listing Rules and Requirements
                </h1>
                <main className='py-[20px] px-[20px] '>
                  <h1 className='text-black text-[19px] not-italic font-normal leading-[normal]'>
                    How to become a listed company
                  </h1>
                  <p className='text-zinc-500 text-base font-light    mt-[15px] mb-[20]'>
                    To be listed on the ESX equity market, issuers will be
                    required to comply with pre-set listing rules and be subject
                    to continuous obligations.
                  </p>
                </main>
              </Card>
              <Card width=' '>
                <h1 className='pt-[21px] pb-[10px] px-[20px]  bg-primary-blue text-white  text-paragraphBig  not-italic font-semibold leading-[normal]'>
                  Listing Rules and Requirements
                </h1>
                <main className='py-[20px] px-[20px] '>
                  <h1 className='text-black text-[19px] not-italic font-normal leading-[normal]'>
                    ESX Main Market Segment
                  </h1>
                  <p className='text-zinc-500 text-base font-light    mt-[15px] mb-[20]'>
                    An Issuer seeking to list its equity shares on ESX Main
                    Market Segment shall have;
                  </p>
                </main>
              </Card>
              <Card width=' '>
                <h1 className='pt-[21px] pb-[10px] px-[20px]  bg-primary-blue text-white text-paragraphBig  not-italic font-semibold '>
                  Listing Rules and Requirements
                </h1>
                <main className='py-[20px] px-[20px] space-y-6'>
                  <h1 className='text-black text-[19px] not-italic font-normal leading-[normal]'>
                    ESX Enterprise Growth Market
                  </h1>
                  <p className='text-zinc-500 text-base font-light    mt-[15px] mb-[20]'>
                    An Issuer seeking to list its equity shares on ESX Main
                    Market Segment shall have;
                  </p>
                </main>
              </Card>
            </div>
          </div>
          <div className='flex flex-col'>
            <Card width=' w'>
              <div className='h-[5px]  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]' />
              <main className='py-[20px] px-[30px] flex flex-col gap-[10px]'>
                <p className='text-justify text-zinc-500 text-base font-normal    leading-snug'>
                  For details of ESX listing rules, please refer to following
                  documents
                </p>

                <Link
                  href='#'
                  className='px-[15px] mr-[80px] py-1 ml-auto text-white bg-primary-blue rounded-md text-base not-italic font-normal '
                >
                  ESX listing rules
                </Link>
              </main>
            </Card>
          </div>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default ListingRules;
