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
        description='As an issuer listing on ESX provides you Wlth access to large pool of long-term capital that IS critical to finance your growth ambitions'
      />
      <div className='grid sm:grid-cols-9 gap-8 lg:px-28 py-7'>
        <Card width='col-span-2 hidden lg:flex flex-col text-left  py-[20px] px-[20px] h-fit '>
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
        <div className='col-span-7 space-y-5  w-[100vw] lg:w-[auto]'>
          <Card width='w-[100%]  flex  flex-col  py-[40px] pt-5 px-[40px]'>
            <h1 className='text-black text-[24px] lg:text-header font-normal'>
              <span className=' border-b-[3px] border-light-golden'>
                How to become a listed company
              </span>
            </h1>

            <p className=' text-black text-paragraphSmall font-normal   mt-5    mb-[15px]'>
              To be listed on the ESX equity market, issuers will be required to
              comply with pre-set listing rules and be subject to continuous
              obligations that include the following:
            </p>

            {/* <p className=' text-black text-paragraphSmall font-light     mt-[20px]  mb-[15px]'>
              Listing provides access to a new source of finance that
              compliments your other sources of capital, such as bank lending,
              as it requires no guarantees or collateral to raise capital from
              the public, issuing share securities bears no interest payment.
            </p>
            <p className='text-black text-paragraphSmall font-light  mt-4 '>
              Indeed, listing is more than just raising capital - it is a
              strategic decision that boosts the company’s national and global
              profile, improves the company’s overall governance, and standing
              as a sustainable business enterprise.
            </p> */}

            <div className='pl-5'>
              <p className='text-black text-paragraphSmall font-light   '>
                ○ Be a share company with securities registered by the ECMA
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 '>
                ○ The issuer&apos;s minimum capital;{" "}
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 '>
                ○ Minimum number of years in operation;
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 '>
                ○ Proven profitability over identified number of years of
                operation;
              </p>

              <p className='text-black text-paragraphSmall font-light  mt-4 '>
                ○ The minimum size of capital the issuer must issue/float to the
                public on the first day of listing;{" "}
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 '>
                ○ The minimum number of shareholders.{" "}
              </p>
            </div>

            <p className=' text-black text-paragraphSmall font-normal       my-[15px]'>
              An Issuer seeking to list its equity shares on the{" "}
              <strong>ESX Main Market Segment</strong> shall have;
            </p>

            <div className='pl-5'>
              <p className='text-black text-paragraphSmall font-light flex  '>
                <span>1.</span>
                <span className='ml-2'>
                  An operating track record of at least three (3) years. Where
                  the Issuer does not have three (3) years’ operating track
                  record the Issuer shall provide evidence of a core
                  investor/technical partner who has at least three (3) years’
                  operating track record with substantial equity and involvement
                  in management of the Issuer.
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>2.</span>

                <span className='ml-2'>
                  Total market capitalization of at least ETB 500,000,000
                  million (five hundred million) upon listing.
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>3.</span>

                <span className='ml-2'>
                  Declared profits after tax attributable to shareholders at
                  least once in the last three (3) financial years immediately
                  preceding the date of application.
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>4.</span>

                <span className='ml-2'>
                  The financial statements shall be prepared in accordance with
                  International Financial Reporting Standards (IFRS) or
                  applicable accounting standards in Ethiopia and shall be
                  compliant with the applicable Directives of the ECMA.
                </span>
              </p>

              <p className='text-black text-paragraphSmall font-light  mt-4 flex '>
                <span>5.</span>

                <span className='ml-2'>
                  An Issuer shall have a minimum of fifteen percent (15%) of the
                  total number of shares for which listing is sought in the
                  hands of a minimum number of three hundred (300) public
                  security holders.
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex '>
                <span>6.</span>

                <span className='ml-2'>
                  An Issuer shall submit all the applicable documents as
                  prescribed by The Exchange from time to time.
                </span>
              </p>
            </div>

            <p className=' text-black text-paragraphSmall font-normal       my-[15px]'>
              An Issuer seeking to list its equity shares on{" "}
              <strong>ESX Growth Market </strong>
              Segment shall have;
            </p>

            <div className='pl-5'>
              <p className='text-black text-paragraphSmall font-light flex  '>
                <span>1.</span>
                <span className='ml-2'>
                  An operating track record of at least two (2) years. Where the
                  Issuer does not have three (2) years’ operating track record
                  the Issuer shall provide evidence of a core investor/technical
                  partner who has at least three (2) years’ operating track
                  record with substantial equity and involvement in management
                  of the Issuer.
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>2.</span>

                <span className='ml-2'>
                  Total market capitalization of at least ETB 100,000,000
                  million (one hundred million) Birr upon listing.
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>3.</span>

                <span className='ml-2'>
                  The financial statements shall be prepared in accordance with
                  International Financial Reporting Standards (IFRS) or
                  applicable accounting standards in Ethiopia and shall be
                  compliant with the applicable Directives of the ECMA.
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>4.</span>

                <span className='ml-2'>
                  An Issuer shall have a minimum of fifteen percent (10%) of the
                  total number of shares for which listing is sought in the
                  hands of a minimum number of three hundred (50) public
                  security holders.
                </span>
              </p>

              <p className='text-black text-paragraphSmall font-light  mt-4 flex '>
                <span>5.</span>

                <span className='ml-2'>
                  An Issuer shall submit all the applicable documents as
                  prescribed by The Exchange from time to time.
                </span>
              </p>
            </div>
          </Card>
          {/* <div className='w-full  flex-col lg:flex-row flex gap-5'>
            <div className='w-[100%]  lg:w-[100%] flex flex-col gap-5'>
              <Card width=''>
                <h1 className='pt-[21px] pb-[10px] px-[20px]  bg-primary-blue text-white  text-paragraphBig  not-italic font-semibold leading-[normal]'>
                  Listing Rules and Requirements
                </h1>
                <main className='py-[20px] px-[20px] '>
                  <h1 className='text-black text-paragraphSmall not-italic font-normal leading-[normal]'>
                    How to become a listed company
                  </h1>
                  <p className='     text-base font-light    mt-[15px] mb-[20]'>
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
                  <h1 className='text-black text-paragraphSmall not-italic font-normal leading-[normal]'>
                    ESX Main Market Segment
                  </h1>
                  <p className='     text-base font-light    mt-[15px] mb-[20]'>
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
                  <h1 className='text-black text-paragraphSmall not-italic font-normal leading-[normal]'>
                    ESX Enterprise Growth Market
                  </h1>
                  <p className='     text-base font-light    mt-[15px] mb-[20]'>
                    An Issuer seeking to list its equity shares on ESX Main
                    Market Segment shall have;
                  </p>
                </main>
              </Card>
            </div>
          </div> */}
          <div className='flex flex-col'>
            <Card width=' w'>
              <div className='h-[5px]  bg-primary-golden text-white text-sm not-italic font-semibold leading-[normal]' />
              <main className='pt-5 px-[30px] flex flex-row gap-[10px]'>
                <p className='text-justify      text-base font-normal    leading-snug'>
                  For details of ESX listing rules, please refer to following
                  documents
                </p>

                <Link
                  href='#'
                  className='px-[15px] mr-[80px] py-1 ml-auto text-white bg-primary-blue rounded-md text-base not-italic font-normal '
                >
                  ESX Listing Rules
                </Link>
              </main>
              <main className='py-5 px-[30px] flex flex-row gap-[10px]'>
                <p className='text-justify      text-base font-normal    leading-snug'>
                  Are you considering going public and listing on ESX? Contact
                  our listing department
                </p>
                <p className='text-justify      text-base font-normal    leading-snug'>
                  contactus@esxproject.com
                </p>

                {/* <Link
                  href='#'
                  className='px-[15px] mr-[80px] py-1 ml-auto text-white bg-primary-blue rounded-md text-base not-italic font-normal '
                >
                  ESX Listing Rules
                </Link> */}
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
