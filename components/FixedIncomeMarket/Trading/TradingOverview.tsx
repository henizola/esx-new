import React from "react";
import Image from "next/image";
import tradingoverview from "@/public/images/trading-overview.jpeg";

function TradingOverview() {
  return (
    <div className='w-full flex h-full flex-col'>
      <div className='bg-white flex flex-grow items-center h-full w-full'>
        <div className='w-[55%] px-5 py-7 h-full'>
          <div className='w-[100%] flex flex-col justify-between'>
            <div>
              <p className='text-[12px]   font-normal text-[#001F59]'>
                Overview
              </p>
              <h1 className='text-[30px]   font-normal  pt-5 pb-4'>Trading </h1>
              <p className='w-[90%]  text-[16px]   font-normal leading-6 text-[#707377] '>
                Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                commodo consequat. Duis autem vel eum iriure dolor in hendrerit
                in vulputate velit esse molestie conse
              </p>
            </div>
          </div>
        </div>
        <div className=' ml-[3%] h-full w-[45%]'>
          {" "}
          <Image
            height={300}
            width={200}
            src={tradingoverview}
            alt='manager'
            className='w-[100%] h-[100%] border object-cover'
          />
        </div>
      </div>
    </div>
  );
}

export default TradingOverview;
