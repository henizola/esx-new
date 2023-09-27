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
import CustomMarketSlider from "@/components/Slider/MarketSlider";

interface WhoWeAreProps {
  setStep: (value: number) => void;
  step: number;
}

const TradeOnESX: React.FC<WhoWeAreProps> = ({ setStep, step }) => {
  const items = ["Trade on ESX", "Members Directory"];
  const spanItems = [
    "Direct Market Access",
    "Listed Lecurities",
    "Market Data",
    "Indices",
    "Market Announcements",
    "Fees & Taxation",
    "Tendor",
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
    <div className="flex flex-col w-full">
      <Banner
        backgroundImage={image}
        title="Invest on ESX"
        description="ESX Equities Market is the division of ESX that allows issuers of equity securities to raise long-term capital."
      />
      <div className="flex w-full  px-28 py-7">
        <Card width="w-[30%] mr-5 flex flex-col text-left  py-10 px-5">
          <h6 className="ml-2 mb-4"><BackButton setStep={setStep} link="/equity-market">
              Equity Market
            </BackButton>{" "} {"> Trade"}</h6>{" "}
          {items.map((item, index) => (
            <button
              key={index}
              className={`  text-left ml-10 my-2 font-light border-b border-black `}
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
          {spanItems.map((item, index) => (
            <button
              key={index}
              className={`  text-left ml-10 my-2 font-light border-b border-black `}
              style={{
                borderBottom: "0.7px solid black",
                fontSize: "14px",
                fontWeight: "300",
              }}
            >
              {item}
            </button>
          ))}
        </Card>
        <div className="grid grid-cols-1 gap-5 w-[100%]">
          <Card width="flex flex-col ">
            <div className="flex ">
              <div className="pt-[30px] pb-[20px]  px-[20px] w-[60%]  ">
                <h1 className="text-primary-blue  text-xs font-semibold font-['Open Sans']">
                  Trade on ESX
                </h1>
                <h1 className="text-black text-[30px]  ">
                  Why invest?
                </h1>
                <div className="space-y-[10px] mt-[15px]">
                  <p className="text-zinc-500 text-base font-normal font-['Open Sans'] leading-snug ">
                    A benefit to investing and trading on ESX is price
                    transparency. As prices are publicly available, investors
                    are able to make informed decisions based on real-time
                    market data
                  </p>
                  <p className="text-zinc-500 text-base font-normal font-['Open Sans'] leading-snug ">
                    The regulatory oversight of ESX maintains market integrity.
                    This ensures that participants are adhering to trading
                    practices.
                  </p>
                  <p className="text-zinc-500 text-base font-normal font-['Open Sans'] leading-snug ">
                    The ESX trading platform will be linked with a fully
                    electronic central securities depository (CSD) to ensure
                    efficient post-trade clearing and settlement processes from
                    the launch of the exchange.
                  </p>
                </div>

                <Link href="#" className="flex text-black text-xl font-semibold font-['Open Sans'] mt-[57px] mb-[9px]">
                  View more{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 mt-1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
              </div>
              <Image
                src={"/images/Career Advancement Myths_ 10  Mistakes That Keep You From Getting Ahead 1.png"}
                height={100}
                width={400}
                alt=""
                className="w-[40%]  aspect-square object-cover"
              />
            </div>
          </Card>
          
          <Card width="pt-[30px] pb-[34px] px-[24px]  p-4 space-y-5">
            <h1 className="text-black text-xl font-normal font-['Open Sans'] leading-relaxed">
              Central Securities Depository (CSD)
            </h1>

            <p className="text-zinc-500 text-base font-normal font-['Open Sans'] leading-tight">
              The Central Securities Depoistory acts as the central place where
              securities traded on ESX are deposited in an electronic registrar.
              The CSD provides a safe custody for securities, provides
              securities identification number to investors and catters to the
              clearing and settlment of transactions.
            </p>

          </Card>
        </div>
      </div>
      {/* <CustomMarketSlider slides={slides} /> */}

    </div>
  );
};

export default TradeOnESX;
