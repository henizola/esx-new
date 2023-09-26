"useClient";
import React from "react";

function TradingRules() {
  const lists = [
    "Unless otherwise stipulated at the time of a transaction, all shares securities dealt in by a Trading Member shall be deemed to be fully paid and funded",
    "All transactions entered into by Trading Members shall be for net prices as between the buyer and seller",
    "The Exchange shall not recognize in its dealings any parties other than its own Trading Members and every interaction therefore, whether for the Trading Member or on behalf of a client, must be according to the Rules, regulations and usages of The Exchange",
    "The Exchange shall determine the mode of trading, platforms and systems from time to time. No Trading Member shall put through a transaction on The Exchange other than the form prescribed by The Exchange",
    "The Exchange shall from time to time specify various trading parameters and attributes relating to the Trading System, including but not limited to the following",
  ];
  const sublists = [
    "Lot Sizes: The size of a lot shall be one share",
    "Display of Quotes and Orders: ESX shall display as publicly available such details of Orders in tradable securities submitted to the trading system in a format it shall determine from time to time",
  ];
  return (
    <div className=" w-full h-[100%] flex ">
      <div className="w-[100%] flex flex-col  mt-0 pt-0 bg-white py-9">
        <div className="bg-[#00205B] w-full h-full">
          <h1 className="text-[24px] px-10 py-5  text-left text-white  w-[100%] bg-primary-blue font-sans font-normal ">
            Trading rules{" "}
          </h1>
        </div>
        <div>
          {lists.map((item, index) => {
            return (
              <div className="w-[100%] relative flex items-center text-[15px] font-sans font-light text-black mt-2 px-5 leading-6 gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className=" h-[20px]   "
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p
                  key={index}
                  className=" py-4 text-[16px] border-b border-gray"
                >
                  {item}
                </p>
              </div>
            );
          })}
        </div>
        <div className="border-b border-gray mx-4">
          {sublists.map((subitem, index) => {
            return (
              <div className="relative flex items-center text-[15px] font-sans font-light text-gray mt-2 pl-[180px] pr-16 leading-6 gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p key={index} className=" py-2 text-[16px]">
                  {subitem}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TradingRules;
