import React from "react";
import Card from "../../components/Card/Card";
import Banner from "../Banner/banner";
import sliderbannerImage from "../../public/images/slider-background.png";

const Menu = ({ items, step, setStep, title, returnHome, children }: any) => {
  console.log("title", title, step);
  return (
    <>
      <div className='flex w-full  px-28 py-7 justify-center gap-5 '>
        <div className='flex w-full gap-5'>
          <Card width='min-w-[300px] max-w-[300px] flex-1  flex flex-col text-left  pt-10 pb-5 px-5'>
            <h6 className=' mb-3 text-[16px] opacity-60 text-[#001F59]'>
              <span
                className='hover:cursor-pointer hover:scale-125'
                onClick={returnHome}
              >
                Fixed income market{" "}
              </span>
              <span className='font-semibold'>
                {" > "}
                {title}
              </span>
            </h6>
            <div className='flex flex-col gap-0'>
              {items.map((item: any, index: number) => (
                <button
                  key={index}
                  className={`text-left font-light border-b text-[#001F59] border-black py-2 ml-11`}
                  style={{
                    borderBottom: "0.7px solid black",
                    fontSize: step === index ? "16px" : "14px",
                    fontWeight: step === index ? "400" : "300",
                  }}
                  onClick={() => {
                    setStep(index);
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </Card>
          <div className='flex flex-col flex-grow min-h-full '>{children}</div>
        </div>
      </div>
      {title === "Trading" && step === 0 && (
        <div className='w-full flex items-center'>
          <Banner
            backgroundImage={sliderbannerImage}
            title='Trading'
            description='“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse'
            contentCenter={true}
          />
        </div>
      )}
    </>
  );
};

export default Menu;
