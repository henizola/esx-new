"use client";
import React from "react";
import Card from "@/components/Card/Card";
import whoweare from "../../../public/images/who-we-are-circle.png";
import Image from "next/image";

const Overview = () => {
  return (
    <Card width='w-[100%] py-5 pb-10 px-10'>
      <div className='flex'>
        <div className='w-[100%] '>
          <div className='w-[100%] flex  flex-col'>
            {/* <p className='text-[12px]   font-normal mt-0 pb-6'>
              Listing and Admission to Trading{" "}
            </p> */}
            <h1 className='text-header border-b-[3px] border-light-golden w-fit text-left  mt-0 pt-0 pb-0'>
              Overview
            </h1>
            <p className='w-[90%]  text-[16px]   font-light mt-2 pt-5 leading-6   '>
              Raising debt capital on the ESX allows both the public sector and
              corporations access to a wider pool of investors to raise capital
              efficiently in a regulated market. Debt capital markets provide
              governments with a sustainable means to finance budgetary needs as
              well as invest in productivity boosting long term infrastructure
              projects that tend to benefit the general population in the long
              run through the issuance of government bonds.
            </p>
            <p className='w-[90%]  text-[16px]   font-light mt-2 pt-5 leading-6   '>
              Corporations issue bonds to the public in the fixed income market
              to raise capital for their operations and long-term capital
              expenditures as an alternative to issuing equity and without
              having to pledge collateral. Effective debt markets are especially
              useful for companies when high-cost, large-scale projects that are
              traditionally long term - and usually out of scope for bank loans
              - need financing. Additionally, the presence of an organized fixed
              income market adds another funding option for firms in addition to
              listing equity shares and can help improve their capital structure
              through an optimal mix of debt and equity to minimize the cost of
              capital while enhancing shareholder value.
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

export default Overview;
