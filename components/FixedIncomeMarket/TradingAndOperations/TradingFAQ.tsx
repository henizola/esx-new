import React from "react";
import Accordion from "@/components/Accordion/Accordion";
import Card from "@/components/Card/Card";

function TradingFAQ() {
  return (
    <Card width='w-[100%]'>
      <div className='flex mx-5'>
        <div className='w-[100%] flex flex-col border-b border-gray mb-8'>
          <h1 className='text-[32px]   font-normal border-b pt-8 pb-6 mb-7'>
            Frequently asked questions{" "}
          </h1>
          <div className='bg-[#F0F0F0] w-full max-w-full pb-5'>
            <Accordion
              title={"What are the benefits of trading in fixed income ?"}
            >
              {" "}
              <p className='text-[16px]   font-normal text-[#707377] pt-5 pb-3 px-5 bg-[#F0F0F0]'>
                Some of the benefits of investing include income earned through
                dividends, protection of saving from the effects of inflation,
                capital gains, and diversification.
              </p>
            </Accordion>
          </div>
          <div className='pb-7 text-[#707377] text-[16px] border-b border-[#A8965B]'>
            <Accordion title={"How do I start trading ?"}></Accordion>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default TradingFAQ;
