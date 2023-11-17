import React from "react";
import Image from "next/image";
import tradingoverview from "@/public/images/trading-overview.jpeg";

function TradingOverview() {
  return (
    <div className='w-full flex h-full flex-col'>
      <div className='bg-white flex flex-grow items-center h-full w-full'>
        <div className=' px-5 py-0 pb-5 lg:px-10 lg:py-7 h-full'>
          <div className='w-[100%] flex flex-col  justify-between'>
            <div className='ml-0'>
              {/* <p className='text-[12px]   font-normal text-[#001F59]'>
                Overview
              </p> */}
              <h1 className='text-header border-b-[3px] border-light-golden w-fit text-left pt-0 pb-0 mb-5'>
                Overview
              </h1>
              <p className='w-[100%]  text-[16px]   font-light leading-6    '>
                Fixed income trading on the secondary market generally takes
                place on a wholesale basis between large institutions acting as
                dealers in the market. The secondary market operated by ESX
                provides liquidity to the fixed income instruments issued on the
                primary market and a place where a variety of investors, retail
                and institutional, local, and foreign buy and sell the various
                debt instruments available to trade on the exchange.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradingOverview;
