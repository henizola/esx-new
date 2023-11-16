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
    "Listing Forms",
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
                      finance your growth ambitions. Listing provides access to
                      a new source of finance that compliments your other
                      sources of capital, such as bank lending, as it requires
                      no guarantees or collateral to raise capital from the
                      public, as issuing share securities bears no interest
                      payment.
                    </p>
                    <p className='text-black mt-[15px] text-paragraphSmall font-light   '>
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
          <Card width='lg:w-[100%] flex flex-col py-6'>
            <h1 className='text-subHeader w-fit  font-[400] pt-0 mt-0 mx-10 mb-0'>
              {/* Listing on ESX may take the following two main forms */}
              Access to Capital
            </h1>
            <main className='pt-4 lg:pt-[5px] pb-[10px] flex flex-col gap-[10px] px-10'>
              {/* <h1 className='text-black text-paragraphBig mb-[10px] font-normal   '>
                Initial Public Offering (IPO)
              </h1> */}
              <p className=' text-paragraphSmall font-light    leading-snug '>
                {/* ○ An IPO is the process through which a private company offers
                its shares of ownership to the public for the first time. */}
                Listing is a primary avenue for a company seeking to raise
                equity capital to expand the enterprise without the need to
                incur into debt. Once listed a company can issue significantly
                more equity stake in its enterprise to raise additional working
                or growth capital through secondary public offerings. Listing
                provides a significantly broader shareholder base than it would
                be otherwise. Listing provides a market-based and objective
                valuation of your business enterprise.
              </p>

              {/* <p className=' text-paragraphSmall font-light    leading-snug '>
                ○ It is essentially the transition of a company from private to
                public ownership.
              </p>
              <p className=' text-paragraphSmall font-light    leading-snug '>
                ○ May take the form of offer for sale or offer for subscription
              </p> */}
              {/* <hr className=' mt-[20px]  border border-0.5 border-gray/30' /> */}
            </main>
            <h1 className='text-subHeader w-fit  font-[400] pt-4 mt-0 mx-10 mb-0'>
              Enhanced Corporate Governance
            </h1>
            <main className='pt-4 lg:pt-[5px] pb-[10px] flex flex-col gap-[10px] px-10'>
              <p className=' text-paragraphSmall font-light    leading-snug '>
                Listing enhances the corporate governance of enterprises.
                Continuous financial disclosure requirements enhance the
                transparency and public trust of disclosures.
              </p>
            </main>
            <h1 className='text-subHeader w-fit  font-[400] pt-4 mt-0 mx-10 mb-0'>
              Enhanced Visibility and Credibility
            </h1>
            <main className='pt-4 lg:pt-[5px] pb-[10px] flex flex-col gap-[10px] px-10'>
              <p className=' text-paragraphSmall font-light    leading-snug '>
                A listed company is highly regarded by the public and its peers
                for its credibility and excellence with a high level of global
                recognition. Listed companies are often covered by global media
                networks and data broadcasting and analysis tools. This enhances
                the strength of the credibility of the company with partners,
                customers, and employees.
              </p>
              <p className=' text-paragraphSmall font-light    leading-snug '>
                Increase your brand value by ringing the ESX opening bell at the
                ESX Marketplace, ESX website and communication by members of the
                exchange via various channels.
              </p>
              <p className=' text-paragraphSmall font-light    leading-snug '>
                Listing increases the credibility of a business enterprise
                against potential partners and creditors which enables the
                enterprise to acquire investment and loans at preferable terms
                than otherwise. Listing also increases the marketability of
                products and services offered by the enterprise.
              </p>
            </main>
            <h1 className='text-subHeader w-fit  font-[400] pt-4 mt-0 mx-10 mb-0'>
              Boost Employee Performance
            </h1>
            <main className='pt-4 lg:pt-[5px] pb-[10px] flex flex-col gap-[10px] px-10'>
              <p className=' text-paragraphSmall font-light    leading-snug '>
                Listing provides avenues for companies to provide Stock Option
                Schemes that can be provided to employees, thereby promoting
                higher performance, and helping attract and retain talented
                employees. Various senior executives of a company can be paid
                through a mix of salary and share options.
              </p>
            </main>
            <h1 className='text-subHeader w-fit  font-[400] pt-4 mt-0 mx-10 mb-0'>
              Liquidity
            </h1>
            <main className='pt-4 lg:pt-[5px] pb-[10px] flex flex-col gap-[10px] px-10'>
              <p className=' text-paragraphSmall font-light    leading-snug '>
                Listing transforms liquidity, guaranteeing shareholders the
                opportunity to realize the value of their investments.
                Securities that are offered to the public can be transferred in
                an efficient and transparent manner with market prices
                determined according to supply and demand. Investors (e.g.,
                shareholders) are therefore provided with the opportunity to
                increase or decrease their investment in a company (or other
                forms of equity investment) at any time sharing risks as well as
                benefiting from any increase in the organizational value.
              </p>
              <p className=' text-paragraphSmall font-light    leading-snug '>
                Liquidity is also guaranteed by the fact that listed securities
                can be used as collateral to borrow funds from various, or
                directly exchanges with other securities or forms of property.
              </p>
            </main>

            <h1 className='text-subHeader w-fit  font-[400] pt-4 mt-0 mx-10 mb-0'>
              Continuity and Sustainability
            </h1>
            <main className='pt-4 lg:pt-[5px] pb-[10px] flex flex-col gap-[10px] px-10'>
              <p className=' text-paragraphSmall font-light    leading-snug '>
                Going public supports private companies and family-owned
                enterprises to become sustainable. Listing brings about full or
                partial decoupling of ownership and management, installs good
                corporate governance and financial responsibility in the
                enterprise, and allows successors to benefit from the dividends
                of a business enterprise that outlives their founders. Listing
                institutionalizes the structure of a business enterprise in the
                shortest possible time without the founding shareholder or
                family members losing sight of the operation of the company.
              </p>
            </main>
            <h1 className='text-subHeader w-fit  font-[400] pt-4 mt-0 mx-10 mb-0'>
              Exist Strategy
            </h1>
            <main className='pt-4 lg:pt-[5px] pb-[10px] flex flex-col gap-[10px] px-10'>
              <p className=' text-paragraphSmall font-light    leading-snug '>
                Listing provides a strategic avenue for owners, especially
                institutional investors, an exit strategy to sell the whole or
                part of the company. Listing makes it easier to sell publicly
                traded stocks at their true value than private holdings.
              </p>
            </main>
            {/* <main className='pt-4 lg:pt-[15px] pb-10 flex flex-col gap-[10px] px-10'>
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
            </main> */}
          </Card>

          <Card width='lg:w-[100%] flex flex-col py-6'>
            <h1 className='text-subHeader w-fit  font-[400] pt-0 mt-0 mx-10 mb-0'>
              ESX’s adoptive market structure offers issuers:
            </h1>
            <main className='pt-4 lg:pt-[5px] pb-[10px] flex flex-col gap-[10px] px-10'>
              <h1 className='text-black text-paragraphBig mb-[10px] font-normal   '>
                Flexibility
              </h1>
              <p className=' text-paragraphSmall font-light    leading-snug '>
                ○ As an issuer, you can maintain control of your company by
                offering as little as 15% or more of its shares when you list.
              </p>
              <p className=' text-paragraphSmall font-light    leading-snug '>
                ○ Based on the advice of your financial advisor and in
                compliance with ECMA rules and procedures, you may approach the
                primary market via book building process, which helps you to
                determine the market value of your shares, or fixed price.
              </p>
              <p className=' text-paragraphSmall font-light    leading-snug '>
                ○ You may sell, both, some of your share ownership in the
                company while at the same time issuing new shares to
                shareholders.
              </p>
            </main>
            <main className='pt-4 lg:pt-[15px] pb-[10px] flex flex-col gap-[10px] px-10'>
              <h1 className='text-black text-paragraphBig mb-[10px] font-normal   '>
                Broad Investor Access
              </h1>
              <p className=' text-paragraphSmall font-light    leading-snug '>
                ○ As a modern and fully electronic marketplace, ESX creates an
                environment whereby Ethiopians across the country, Ethiopian
                Diaspora as well as foreign investors, can easily invest.
              </p>
              <p className=' text-paragraphSmall font-light    leading-snug '>
                ○ Listed companies will participate in investor engagement
                workshops organized by ESX alongside leading local and
                international investors and other players.
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
