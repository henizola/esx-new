"use client";
import React from "react";
import Card from "@/components/Card/Card";
import whoweare from "../../../public/images/who-we-are-circle.png";
import Image from "next/image";

const BondIpo = () => {
  return (
    <Card width='w-[100%] py-5 pb-10 px-10'>
      <div className='flex'>
        <div className='w-[100%] '>
          <div className='w-[100%] flex  flex-col'>
            {/* <p className='text-[12px]   font-normal mt-0 pb-6'>
              Listing and Admission to Trading{" "}
            </p> */}
            <h1 className='text-header border-b-[3px] border-light-golden w-fit text-left  mt-0 pt-0 pb-0'>
              Bond IPO / Debt Public Issue
            </h1>
            <p className='w-[90%]  text-[16px]   font-light mt-2 pt-5 leading-6   '>
              Initial Public Offering (&quot;IPO&quot;) Bonds is the process by
              which governments, government agencies, or corporations issue
              bonds to the general public to raise capital for their operations.
              The benefits of this process include lower Minimum required
              investment, higher return potential, and greater price
              transparency.
            </p>
          </div>
        </div>
        {/* <div className='w-[38%] ml-[3%] flex items-center'>
          {" "}
          <Image
            height={300}
            width={200}
            src={whoweare.src}
            alt='manager'
            className='w-[100%] border object-cover rounded-full  border-'
          />
        </div> */}
      </div>
    </Card>
  );
};

export default BondIpo;
