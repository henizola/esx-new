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
        <Card width='hidden w-[25%] mr-5 lg:flex flex-col text-left  py-10 pt-5 px-5 h-fit'>
          <h6 className='ml-2 mb-4'>
            <BackButton setStep={setStep} link='/equity-market'>
              Equity Market
            </BackButton>{" "}
            {"> Invest"}
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
            <div className='flex px-10 py-10 pb-16'>
              <div className='   '>
                {/* <h1 className='text-primary-blue  text-xs font-semibold   '>
                  Trade on ESX
                </h1> */}
                <h1 className='text-black text-[20px] md:text-header  '>
                  <span className=' border-b-[3px] border-light-golden'>
                    Why Invest?
                  </span>
                </h1>
                <div className='space-y-[10px] mt-[15px]'>
                  <p className='text-paragraphSmall relative lg:font-light  pl-0 pt-5  leading-snug '>
                    {/* <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-[60px] absolute -left-5 top-5 h-[20px]'
                    >
                      <circle cx='12' cy='12' r='5' fill='currentColor' />
                    </svg>{" "} */}
                    Whether you are an individual or institution (corporates,
                    funds etc.) investment is one of the critical factors to
                    secure and grow the value of your assets in the medium and
                    long term.
                  </p>
                  <p className='text-paragraphSmall relative lg:font-light  pl-0  pt-5  leading-snug '>
                    {/* <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-[60px] absolute -left-5 top-5 h-[20px]'
                    >
                      <circle cx='12' cy='12' r='5' fill='currentColor' />
                    </svg>{" "} */}
                    As savings held in cash will tend to lose value in the long
                    run, investing can help to protect the value of your assets.
                  </p>
                  <p className='text-paragraphSmall relative lg:font-light  pl-0  pt-5  leading-snug '>
                    {/* <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-[60px] absolute -left-5 top-5 h-[20px]'
                    >
                      <circle cx='12' cy='12' r='5' fill='currentColor' />
                    </svg>{" "} */}
                    Investing is also an effective way to have your cash work
                    for you and gradually build wealth. Investment provides
                    individuals and corporations the opportunity to contribute,
                    share risks and rewards from the growth of the investment
                    without the need to be involved in the day-to-day management
                    and operation of the business.
                  </p>
                  <p className='text-paragraphSmall relative lg:font-light  pl-0  pt-5  leading-snug '>
                    {/* <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-[60px] absolute -left-5 top-5 h-[20px]'
                    >
                      <circle cx='12' cy='12' r='5' fill='currentColor' />
                    </svg>{" "} */}
                    Investment is also a key tool to diversify your portfolios
                    as it allows you to invest in various asset classes
                    according to your preferred risk tolerance. Investment
                    encourages you to save and provides you with the opportunity
                    to get higher returns on your savings. Investing in listed
                    companies will also allow you to own various public assets
                    that have national socio-economic significance.
                  </p>
                  <p className='text-paragraphSmall relative lg:font-light  pl-0  pt-5  leading-snug '>
                    {/* <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-[60px] absolute -left-5 top-5 h-[20px]'
                    >
                      <circle cx='12' cy='12' r='5' fill='currentColor' />
                    </svg>{" "} */}
                    A key benefit to investing on ESX is transparency. As
                    information on securities and prices are publicly available,
                    investors can make informed decisions based on appropriate
                    disclosures and real-time market data. The regulatory
                    oversight of ESX maintains market integrity. This ensures
                    that participants are adhering to trading practices. The ESX
                    trading platform will be linked to a fully electronic
                    central securities depository (CSD) to ensure efficient
                    post-trade clearing and settlement processes from the launch
                    of the exchange.
                  </p>
                </div>
              </div>
            </div>
          </Card>
          <Card width='flex flex-col mt-5'>
            <div className='flex px-10 py-10 pb-16'>
              <div className='   '>
                {/* <h1 className='text-primary-blue  text-xs font-semibold   '>
                  Trade on ESX
                </h1> */}
                <h1 className='text-black text-[20px] md:text-subHeader  '>
                  <span>
                    Opportunities and Risks of Investing in Equity Market
                  </span>
                </h1>
                <p className='text-paragraphSmall relative lg:font-light  pl-0  pt-5  leading-snug '>
                  Investing in listed shares, also known as investing in the
                  ‘stock market’, offers a range of potential benefits. Here are
                  some of the key benefits of investing in listed shares:
                </p>
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
                    Potential for Capital Appreciation: Over the long term,
                    stocks have historically provided the potential for
                    significant capital appreciation. This means your initial
                    investment can grow in value, potentially outpacing
                    inflation.
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
                    Dividend Income: Many listed companies pay dividends to
                    their shareholders. These dividends can provide a steady
                    stream of income, making stocks attractive to income-seeking
                    investors.
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
                    Portfolio Diversification: Investing in a variety of stocks
                    allows you to diversify your portfolio. Diversification can
                    help spread risk, as different stocks may react differently
                    to economic and market conditions.
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
                    Liquidity: Listed shares are generally highly liquid,
                    meaning you can easily buy and sell them on ESX compared to
                    other private companies. This liquidity allows you to
                    convert your investments into cash relatively quickly.
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
                    Ownership in Established Companies including Large Public
                    Enterprises: When you invest in listed shares, you become a
                    partial owner of the company. This can give you a sense of
                    ownership and participation in well-established businesses.
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
                    Transparency and Information: Publicly traded companies are
                    required to provide regular financial reports and
                    disclosures to the public. This transparency gives investors
                    access to detailed information about a company&apos;s
                    operations and financial health.
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
                    Regulation and Investor Protection: ESX markets are
                    regulated to protect investors and ensure fair trading
                    practices. These regulations provide a level of security for
                    investors.
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
                    Investment Choice: The ESX offers a wide range of investment
                    choices. You can invest in individual stocks,
                    exchange-traded funds (ETFs), or mutual funds, each with its
                    own risk-return profile.
                  </p>
                </div>

                <p className='text-paragraphSmall relative lg:font-light  pl-0  pt-5  leading-snug '>
                  It&apos;s important to note that while there are several
                  benefits to investing in listed shares, there are also risks
                  involved. Stock prices can be highly volatile, and there are
                  no guarantees of returns. The value of investments can go up
                  and down, and as an investor, you may potentially lose money.{" "}
                </p>
                <p className='text-paragraphSmall relative lg:font-light  pl-0  pt-5  leading-snug '>
                  Therefore, it&apos;s essential to consult professional
                  advisors, conduct thorough research, have a well-defined
                  investment strategy, and consider your risk tolerance before
                  investing. Diversifying your investments across different
                  asset classes can also help manage risk.
                </p>
              </div>
            </div>
          </Card>
          <Card width='flex flex-col mt-5'>
            <div className='flex px-10 py-4 pb-16'>
              <div className='   '>
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

                <p className='text-paragraphSmall relative lg:font-light  pl-7  pt-5  leading-snug '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[60px] absolute -left-5 top-5 h-[20px]'
                  >
                    <circle cx='12' cy='12' r='5' fill='currentColor' />
                  </svg>{" "}
                  Investors can choose and appoint a licensed member/broker from
                  members directory of ESX website
                </p>
                <p className='text-paragraphSmall relative lg:font-light  pl-7  pt-5  leading-snug '>
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
                <p className='text-paragraphSmall relative lg:font-light  pl-7  pt-5  leading-snug '>
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
                <p className='text-paragraphSmall relative lg:font-light  pl-7  pt-5  leading-snug '>
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
                  the licensed member of ESX.
                </p>
                <p className='text-paragraphSmall relative lg:font-light  pl-7  pt-5  leading-snug '>
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
                <p className='text-paragraphSmall relative lg:font-light  pl-7  pt-5  leading-snug '>
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
                  exchange.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      {/* <TradeOnESXSlider /> */}
    </div>
  );
};

export default TradeOnESX;
