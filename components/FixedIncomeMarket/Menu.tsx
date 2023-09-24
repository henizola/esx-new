import React from "react";
import Card from "../../components/Card/Card";

const Menu = ({ items, step, setStep, title, returnHome, children }: any) => {
  return (
    <div className="flex w-full  px-28 py-7 justify-center gap-5 ">
      <Card width="w-[30%]  flex flex-col text-left  py-10 px-5">
        <h6 className=" mb-4">
          <span
            className="hover:cursor-pointer hover:scale-125"
            onClick={returnHome}
          >
            Fixed income market{" "}
          </span>
          <span className="font-semibold">
            {" > "}
            {title}
          </span>
        </h6>

        {items.map((item: any, index: number) => (
          <button
            key={index}
            className={`text-left font-light border-b border-black py-5 mx-11`}
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
      </Card>
      <div className="min-w-[70%] max-w-[70%] h-full ">{children}</div>
    </div>
  );
};

export default Menu;
