import Image from "next/image";
import React from "react";
import Card from "../../components/Card/Card";
import footerImage from "../../public/images/footer1.png";
import sliderbannerImage from "../../public/images/slider-background.png";
import Banner from "../Banner/banner";

type Props = {
  items: any;
  step: number;
  setStep: any;
  title: string;
  returnHome: any;
  children: React.JSX.Element | null;
};

const Menu = ({ items, step, setStep, title, returnHome, children }: Props) => {
  const hasChildren = React.Children.toArray(children).some((child) => {
    // Filter out null, undefined, and empty string children
    return (
      React.isValidElement(child) ||
      (typeof child === "string" && child.trim() !== "")
    );
  });

  return (
    <>
      <div className='flex w-full  px-28 py-7 justify-center gap-5 '>
        <div className='grid sm:grid-cols-9 gap-8  '>
          <Card width='col-span-2 hidden lg:flex flex-col text-left  py-[20px] px-[20px]'>
            <h6 className='ml-2 mb-4 text-lg  -600'>
              <span
                className='hover:cursor-pointer hover:scale-125'
                onClick={returnHome}
              >
                Fixed income market{" "}
              </span>
              {(title === "Instruments" ||
                title === "Listing and Admission to Trading" ||
                title === "Listing" ||
                title === "Members" ||
                title === "Trading and Operations" ||
                title === "Trading") && (
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
                    if (
                      item?.disabled ||
                      ["Regulatory Framework"].includes(item)
                    )
                      return;
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
      {title === "Trading" && step === 0 && (
        <div className='w-full flex items-center'>
          <Banner
            backgroundImage={sliderbannerImage}
            title='Trading'
            description='“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse'
          />
        </div>
      )}
      {title === "Overview" && (
        <div className=' relative w-full h-auto  '>
          <div className='absolute w-full h-full inset-0 bg-[#A8965BD9] opacity-80 flex  items-center justify-center'>
            <div className=' flex justify-between  '>
              <h1 className='bg-transparent font-normal text-[30px] text-white w-[60%]'>
                Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                consectetuer{" "}
              </h1>
              <button className='bg-white text-[20px] py-3 px-6 font-medium  leading-6 rounded-[42px] h-min text-[#A8965B]'>
                Learn More
              </button>
            </div>
          </div>
          <Image
            src={footerImage.src}
            width={10000}
            height={100000}
            alt='footer'
          />
        </div>
      )}
    </>
  );
};

export default Menu;
