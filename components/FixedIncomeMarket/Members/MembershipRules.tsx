import Card from "@/components/Card/Card";
import Link from "next/link";
import React from "react";

function MembershipRules() {
  const lists = [
    "● Rules of membership and conditions for approval and admission of members",
    "● The rights and liability of its members, investors, and users of their services",
    "● Standards of behavior of members",
    "● Disciplinary actions against members",
    "● Dules for settlement of disputes",
    "● Dules for settlement of disputes",
  ];
  return (
    <div>
      <div className='bg-white'>
        <div className='bg-[#00205B] w-full h-full'>
          <h1 className='text-[32px] px-5 py-5  text-left text-white  w-[100%] bg-primary-blue   font-light '>
            Membership rules{" "}
          </h1>
        </div>
        <h1 className='font-normal text-[28px]   p-6'>
          Members shall also comply with The Exchange’s membership rules that
          set out{" "}
        </h1>
        <div className='flex flex-col gap-5 px-5'>
          {lists.map((item, index) => {
            return (
              <p
                key={index}
                className={` pb-[15px] text-[16px]   text-[#707377] ${
                  lists.length - 1 !== index && "border-b border-black "
                }`}
              >
                {item}
              </p>
            );
          })}
        </div>
        <Card width='w-[100%] mr-0 flex flex-col text-left py-10 '>
          <div className='bg-[#F0F0F0] w-[70%] mx-auto'>
            <div className='mx-12 my-[28px]'>
              <p className=' text-[#707377] text-[16px] font-normal   italic w-[100%] text-center'>
                For details of ESX membership rules, please refer to following
                documents
              </p>
              <div className='flex justify-center items-center '>
                <button className=' rounded-lg text-white text-[16px] font-semibold w-fit justify-center align-middle text-center bg-primary-blue p-2 my-4 px-8'>
                  ESX Membership Rules
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className='grid grid-cols-2 gap-5 mt-5 '>
        <Card width='w-[100%] mt-0 py-5 px-5 flex  flex-col  flex-grow justify-between '>
          <div>
            <h2 className='text-[19px] font-normal'>
              Access to the trading platform{" "}
            </h2>
            <p className='text-[16px ] font-light my-2 mt-4 text-[#707377]'>
              Members can access ESX’s Automated Trading System by connecting
              directly or through third party backoffice and trading platforms.
            </p>
          </div>
          <Link href='#' className='flex text-[16px] mt-5 px-0 '>
            View more{" "}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-4 h-4 mt-1.5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.25 4.5l7.5 7.5-7.5 7.5'
              />
            </svg>
          </Link>
        </Card>
        <Card width='w-[100%] mt-0 py-5 px-5 flex  flex-col h-[fit-content] '>
          <h2 className='text-[19px] font-normal'>
            Direct Market Access (DMA){" "}
          </h2>
          <p className='text-[16px ] font-light my-2 mt-4 text-[#707377]'>
            ESX members can offer direct market access (DMA) to their clinets,
            which allows clients to enter buy and sell side instructions via the
            members third party trading platform.
          </p>
          <Link href='#' className='flex text-[16px] mt-5 px-0 '>
            View more{" "}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-4 h-4 mt-1.5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.25 4.5l7.5 7.5-7.5 7.5'
              />
            </svg>
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default MembershipRules;
