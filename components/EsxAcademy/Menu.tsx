import React from "react";
import Card from "../../components/Card/Card";
import Banner from "../Banner/banner";
import sliderbannerImage from "../../public/images/slider-background.png";

const Menu = ({ items, step, setStep, title, returnHome, children }: any) => {
  console.log("title", title, step);
  return (
    <>
      <div className="flex w-full  px-28 py-7 justify-center gap-5 ">
        <div className="flex w-full gap-5">
          <Card width="min-w-[300px] max-w-[300px] flex-1  flex flex-col text-left  pt-10 pb-5 px-5">
            <h6 className=" mb-4">
              <span
                className="hover:cursor-pointer hover:scale-125"
                onClick={returnHome}
              >
                Esx Academy{" "}
              </span>
              <span className="font-semibold">
                {" > "}
                {title}
              </span>
            </h6>
            <div className="flex flex-col gap-5">
              {items.map((item: any, index: number) => (
                <button
                  key={index}
                  className={`text-left font-light border-b border-black py-2 ml-11`}
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
          <div className="flex flex-col flex-grow min-h-full h-auto  ">
            {children}
          </div>
        </div>
      </div>
      {title === "Overview" && step === 0 && (
        <div className="w-full flex items-center">
          <Card width="w-[100%] mr-0 flex flex-col text-left p-4 py-14 ">
            <div>
              <h1 className="text-primary-blue text-[24px] font-bold w-[100%] text-center">
                Contact the team
              </h1>
              <p className=" text-primary-black text-[16px] font-normal py-3 w-[100%] text-center">
                Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                consectetuer adipiscing
              </p>
              <div className="flex justify-center items-center ">
                <button className=" rounded-lg text-white text-[16px] font-semibold w-fit justify-center align-middle text-center bg-primary-blue p-2 my-4 px-8">
                  Contact
                </button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default Menu;
