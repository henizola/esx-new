import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Card from "../../components/Card/Card";
import footerImage from "../../public/images/footer1.png";
import sliderbannerImage from "../../public/images/slider-background.png";
import Banner from "../Banner/banner";
import { useNumber } from "@/context/nav.context";

type Props = {
  items: any;
  step: number;
  setStep: any;
  title: string;
  returnHome: any;
  children: React.JSX.Element | null;
};

const Menu = ({ items, step, setStep, title, returnHome, children }: Props) => {
  const router = useRouter();
  const { setNumber } = useNumber();
  console.log("hrnok", title);
  return (
    <>
      <div className='flex w-full  lg:px-28 py-7 justify-center gap-5 '>
        <div className='grid sm:grid-cols-9 gap-8  '>
          <Card width='col-span-2 hidden lg:flex flex-col text-left  py-[20px] px-[20px] h-fit '>
            <h6 className='ml-2 mb-4 text-lg  -600'>
              <span
                className='hover:cursor-pointer hover:scale-125'
                onClick={() => {
                  router.push("/fixed-income-market");
                  setNumber(0);
                }}
              >
                Fixed income market{" "}
              </span>
              {(title === "Instruments" ||
                title === "Raise Capital" ||
                title === "Listing" ||
                title === "Members" ||
                title === "Trading and Operations" ||
                title === "Trading" ||
                title === "Regulatory Framework") && (
                <span className='font-semibold'>
                  {" > "}
                  {title}
                </span>
              )}
            </h6>
            <div className='flex flex-col gap-1'>
              {items.map((item: any, index: number) => (
                <button
                  key={index}
                  className={`text-left font-light border-b border-black py-2 ml-5`}
                  style={{
                    borderBottom: "0.7px solid black",
                    fontSize: step === index ? "16px" : "14px",
                    fontWeight: step === index ? "400" : "300",
                  }}
                  onClick={() => {
                    if (item.href) return router.push(item.href);
                    else setStep(index);
                  }}
                >
                  {item.name || item}
                </button>
              ))}
            </div>
          </Card>
          <div className='col-span-7 space-y-5  w-[100vw] lg:w-[auto]'>
            {children}
          </div>
        </div>
      </div>
      {/* {title === "Trading" && step === 0 && (
        <div className='w-full flex items-center'>
          <Banner
            backgroundImage={sliderbannerImage}
            title='Trading'
            description='“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse'
          />
        </div>
      )}
      {title === "Overview" && (
        <div className=' relative w-full mt:0 h-auto  '>
          <div className='absolute w-full h-full  inset-0 pt-0 bg-[#a8965ba3] flex  items-center justify-center'>
            <div className=' flex flex-col lg:flex-row justify-between px-20 '>
              <h1 className='bg-transparent font-normal text-[12px] lg:text-paragraphSmall text-white ml-10 lg:w-[60%]'>
                The fixed income market is essential for the government and
                companies to raise capital, and it provides investors with
                opportunities to generate income and manage risk within their
                investment portfolios. It plays a crucial role in the broader
                financial system and is closely interconnected with other
                financial markets.
              </h1>
              <button className='bg-white text-[20px] mt-5 lg:mt-3 py-3 px-6 font-medium  leading-6 rounded-[42px] w-[250px] ml-12 lg:h-min text-[#A8965B]'>
                Learn More
              </button>
            </div>
          </div>
          <Image
            src={footerImage.src}
            width={10000}
            height={100000}
            alt='footer'
            className='border h-[200px] object-cover'
          />
        </div>
      )} */}
    </>
  );
};

export default Menu;
