import React from "react";
import Accordion from "@/components/Accordion/Accordion";
import Card from "@/components/Card/Card";

function TradingFAQ() {
  return (
    <Card width="w-[100%] p-4 ">
      <div className="flex py-10 mx-10">
        <div className="w-[100%] flex  flex-col  mt-6 pt-0">
          <h1 className="text-[30px] font-sans font-normal border-b pb-3">
            Frequently asked questions{" "}
          </h1>
          <div className="bg-[#F0F0F0] mt-7 w-full max-w-full">
            <Accordion
              title={"What are the benefits of trading in fixed income ?"}
              children={
                <p className="text-[16px] font-sans font-normal pt-5 pb-3 px-5 bg-[#F0F0F0]">
                  Some of the benefits of investing include income earned
                  through dividends, protection of saving from the effects of
                  inflation, capital gains, and diversification.
                </p>
              }
            ></Accordion>
          </div>
          <Accordion title={"How do I start trading ?"}></Accordion>
        </div>
      </div>
    </Card>
  );
}

export default TradingFAQ;
