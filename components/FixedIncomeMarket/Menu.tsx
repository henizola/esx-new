import React from "react";
import Card from "../../components/Card/Card";

const Menu = ({ items, step, setStep, title, returnHome, children }: any) => {
  return (
    <div className="flex w-full  px-28 py-7 border-2 border-red-500 ">
      <Card width=" mr-5 flex flex-col text-left  py-10 px-5">
        <h6 className="ml-2 mb-4">
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
            className={`text-left font-light border-b border-black py-7 mx-11`}
            style={{
              borderBottom: "0.7px solid black",
              fontSize: step === index ? "16px" : "14px",
              fontWeight: step === index ? "400" : "300",
            }}
            onClick={() => {
              console.log("selected index", index);
              setStep(index);
            }}
          >
            {item}
          </button>
        ))}
      </Card>
      <div className="max-w-[900px]">{children}</div>
    </div>
  );
};

export default Menu;
