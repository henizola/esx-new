"use client";
import { BackButton } from "@/components/Button/BackButton";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import bannerImage from "/public/images/about-banner.png";
interface ListingFormsProps {
  setStep: (value: number) => void;
  step: number;
}

const ListingForms: React.FC<ListingFormsProps> = ({ setStep, step }) => {
  const items = [
    "Why List ?",
    "Market Segment",
    "Listing Rules, Requirements, Benefits ",
    "Listing Forms",
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
                Listing forms
              </span>
            </h1>

            <p className=' text-black text-paragraphSmall font-normal   mt-5    mb-[15px]'>
              Listing on ESX may take the following main forms:
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

            <div className='pl-0'>
              <p className='text-black text-subHeader font-light   '>
                Initial Public Offering (IPO)
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 '>
                An IPO is the process through which a private company offers its
                shares of ownership to the public for the first time with the
                objective of raising capital and creating liquidity for
                investors. During an IPO process it is essential that the
                company transition from private to public ownership. May take
                the form of offer for sale or offer for subscription.
              </p>
            </div>

            <p className=' text-black text-paragraphSmall font-normal       my-[15px]'>
              Typical steps involved in an IPO include:
            </p>

            <div className='pl-5'>
              <p className='text-black text-paragraphSmall font-normal flex  '>
                <span>1.</span>
                <span className='ml-2'>Preparation:</span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-2 flex-col'>
                <p className='ml-2 mt-5'>
                  Hire Professionals: The company assembles a team of
                  professionals, including investment bankers, lawyers, and
                  auditors, to guide them through the IPO process.
                </p>
                <p className='ml-2 mt-5'>
                  Financial Due Diligence: The company&apos;s financials are
                  thoroughly reviewed and audited to ensure accuracy and
                  compliance with financial reporting standards.
                </p>
                <p className='ml-2 mt-5'>
                  Regulatory Compliance: The company must comply with regulatory
                  requirements set out under the Capital Market Proclamation
                  Directives issued by ECMA.
                </p>
              </p>

              <p className='text-black text-paragraphSmall font-normal flex mt-5 '>
                <span>2.</span>
                <span className='ml-2'>Discussion with ESX:</span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-2 flex-col'>
                <p className='ml-2 mt-5'>
                  Once the company decides to list on ESX, it shall have a
                  preliminary conversation with the ESX listing team to discuss
                  requirements, timelines, and next steps.
                </p>
              </p>

              <p className='text-black text-paragraphSmall font-normal flex mt-5 '>
                <span>3.</span>
                <span className='ml-2'>Application with ECMA:</span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-2 flex-col'>
                <p className='ml-2 mt-5'>
                  The company prepares and files a prospectus for review and
                  approval by ECMA.
                </p>
              </p>

              <p className='text-black text-paragraphSmall font-normal flex mt-5 '>
                <span>4.</span>
                <span className='ml-2'> Roadshow:</span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-2 flex-col'>
                <p className='ml-2 mt-5'>
                  The company conducts a roadshow to market itself to potential
                  investors. Company executives and underwriters meet with
                  institutional investors to generate interest in the IPO.
                </p>
              </p>
              <p className='text-black text-paragraphSmall font-normal flex mt-5 '>
                <span>5.</span>
                <span className='ml-2'> Pricing:</span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-2 flex-col'>
                <p className='ml-2 mt-5'>
                  Based on feedback from the roadshow, the company, with the
                  help of underwriters, determines the IPO price and the number
                  of shares to be issued. This is a critical step as it directly
                  affects the capital raised.
                </p>
              </p>
              <p className='text-black text-paragraphSmall font-normal flex mt-5 '>
                <span>6.</span>
                <span className='ml-2'> Clearance by ECMA:</span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-2 flex-col'>
                <p className='ml-2 mt-5'>
                  Once ECMA is satisfied with the registration statement, it
                  will register the securities, making the offer effective.
                </p>
              </p>
              <p className='text-black text-paragraphSmall font-normal flex mt-5 '>
                <span>7.</span>
                <span className='ml-2'> Listing approval by ESX:</span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-2 flex-col'>
                <p className='ml-2 mt-5'>
                  After completion of all relevant documents, a formal
                  application for listing shall be made by the listed company,
                  after which approval for listing shall be given.
                </p>
              </p>
              <p className='text-black text-paragraphSmall font-normal flex mt-5 '>
                <span>8.</span>
                <span className='ml-2'> IPO Date:</span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-2 flex-col'>
                <p className='ml-2 mt-5'>
                  On the scheduled IPO date, the company&apos;s shares start
                  trading on the ESX, and they become available for purchase by
                  the public.
                </p>
              </p>
              <p className='text-black text-paragraphSmall font-normal flex mt-5 '>
                <span>9.</span>
                <span className='ml-2'>
                  {" "}
                  Post-IPO Reporting and Compliance:
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-2 flex-col'>
                <p className='ml-2 mt-5'>
                  The company must continue to meet ongoing reporting and
                  compliance requirements, including regular financial reporting
                  and disclosures.
                </p>
                <p className='ml-2 mt-5'>
                  It&apos;s important to note that the IPO process can vary in
                  complexity and duration, depending on the specific
                  circumstances of the company.
                </p>
              </p>
            </div>

            {/* <p className=' text-black text-paragraphSmall font-normal       my-[15px]'>
              An Issuer seeking to list its equity shares on
              <strong> ESX Growth Market </strong>
              Segment shall have;
            </p> */}

            {/* <div className='pl-5'>
              <p className='text-black text-paragraphSmall font-light flex  '>
                <span>1.</span>
                <span className='ml-2'>
                  An operating track record of at least two (2) years. Where the
                  Issuer does not have two (2) years’ operating track record, it
                  shall provide evidence of a core investor/technical partner
                  who has at least two (2) years’ operating track record with
                  substantial equity and involvement in management of the
                  Issuer.
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>2.</span>

                <span className='ml-2'>
                  Total market capitalization of at least ETB 50,000,000 million
                  (fifty million) post listing.
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                <span>3.</span>

                <span className='ml-2'>
                  The financial statements shall be prepared in accordance with
                  International Financial Reporting Standards (IFRS) or
                  applicable accounting standards in Ethiopia and shall be
                  compliant with other applicable Directives of the ECMA.
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
            </div> */}

            <div className='pl-0 pt-10'>
              <p className='text-black text-subHeader font-light   '>
                Listing by Introduction (Direct Listing)
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-4 '>
                For companies that do not aim to raise new capital but would
                like to create liquidity for their investors, listing by
                introduction is the most streamlined avenue. Listening by
                introduction gives existing public share companies with shares
                in circulation an opportunity to introduce their securities to
                ESX’s efficient and reliable secondary market infrastructures.
                Here&apos;s an overview of the process:
              </p>
            </div>

            <div className='pl-5 pt-7'>
              <p className='text-black text-paragraphSmall font-normal flex  '>
                <span>1.</span>
                <span className='ml-2'>Preparation:</span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-2 flex-col'>
                <p className='ml-2 mt-5'>
                  Hiring Advisors: The company typically hires legal and
                  financial advisors to guide them through the process. These
                  advisors help ensure compliance with regulatory requirements
                  and market rules.
                </p>
                <p className='ml-2 mt-5'>
                  Financial Disclosures: The company prepares financial
                  statements and disclosures that are compliant with ECMA’s and
                  ESX’s requirements.
                </p>
                <p className='ml-2 mt-5'>
                  Compliance with Exchange Rules: The company must meet ESX
                  listing requirements, which include minimum capitalization,
                  public float, and financial performance standards.
                </p>
              </p>

              <p className='text-black text-paragraphSmall font-normal flex mt-5 '>
                <span>2.</span>
                <span className='ml-2'>Discussion with ESX:</span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-2 flex-col'>
                <p className='ml-2 mt-5'>
                  The company and its advisors discuss the requirements,
                  process, and next steps for listing with ESX listing
                  department.
                </p>
              </p>

              <p className='text-black text-paragraphSmall font-normal flex mt-5 '>
                <span>3.</span>
                <span className='ml-2'>ECMA Registration::</span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-2 flex-col'>
                <p className='ml-2 mt-5'>
                  The company prepares and files registration documents for
                  review and approval by ECMA.
                </p>
              </p>

              <p className='text-black text-paragraphSmall font-normal flex mt-5 '>
                <span>4.</span>
                <span className='ml-2'> Listing approval by ESX :</span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-2 flex-col'>
                <p className='ml-2 mt-5'>
                  After completion of all relevant documents, a formal
                  application for listing shall be made by the listed company,
                  after which approval for listing shall be given.
                </p>
              </p>
              <p className='text-black text-paragraphSmall font-normal flex mt-5 '>
                <span>5.</span>
                <span className='ml-2'> Listing and trading:</span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-2 flex-col'>
                <p className='ml-2 mt-5'>
                  On the scheduled listing date, the company&apos;s existing
                  shares become available for trading on the stock exchange.
                </p>
              </p>
              <p className='text-black text-paragraphSmall font-normal flex mt-5 '>
                <span>6.</span>
                <span className='ml-2'> Price Determination:</span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-2 flex-col'>
                <p className='ml-2 mt-5'>
                  Unlike a traditional IPO, where the price is determined
                  through a book building process, in a direct listing, the
                  initial stock price is not set by underwriters or the company.
                  Instead, it is determined by market forces through an opening
                  auction on the first day of trading.
                </p>
              </p>
              <p className='text-black text-paragraphSmall font-normal flex mt-5 '>
                <span>7.</span>
                <span className='ml-2'>
                  Post-Listing Reporting and Compliance:
                </span>
              </p>
              <p className='text-black text-paragraphSmall font-light  mt-2 flex-col'>
                <p className='ml-2 mt-5'>
                  After the direct listing, the company must meet ongoing
                  reporting and compliance requirements, including regular
                  financial reporting, disclosures, and adherence to other ESX
                  rules.
                </p>
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

export default ListingForms;

interface ExpandableCardProps {
  question: string;
  className?: string;
  children: string | ReactNode;
}

function ExpandableCard({
  question,
  children,
  className,
}: ExpandableCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen((prev) => !prev)}
      className={` ${
        open ? "bg-gray/10 " : " lg:pb-[0px] "
      }  lg:px-[20px] lg:pt-[12px]  flex flex-col gap-4 transition-all  border-b border-gray   ${className}`}
    >
      <div className='rounded flex justify-between items-center'>
        <h1 className='text-black text-[14px] lg:text-paragraphSmall not-italic font-normal leading-[normal] '>
          {question}
        </h1>
        <ChevronDownIcon
          className={`w-10 h-10 p-2 rounded-full hover:bg-white/80 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      {open && <span className='pb-[52px]'>{children}</span>}
    </div>
  );
}
