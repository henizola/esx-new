import Card from "@/components/Card/Card";
import Link from "next/link";
import React from "react";

function MembershipRules() {
  const evidence = [
    "Rules of membership and conditions for approval and admission of members",
    "The rights and liability of its members, investors, and users of their services",
    "	Standards of behavior of members",
    "	Disciplinary actions against members ",
    "	Rules for settlement of disputes",
    "	Payment of fees and commissions",
  ];
  return (
    <div>
      <div className='grid gap-5'>
        <Card width='flex flex-col '>
          <h1 className='py-[18px]   bg-primary-blue text-white text-[20px] lg:text-subHeader font-normal  px-10 '>
            Membership Rules
          </h1>

          <main className=' pb-[30px] px-[20px] pt-10 space-y-4'>
            <h1 className='text-black text-[16px] lg:text-paragraphBig font-normal   px-10'>
              ESX licensed members shall comply with the provision of the
              Capital Market Proclamation, relevant directives issued by the
              ECMA, and other applicable rules and regulations.
            </h1>
            <div className='flex flex-col divide divide-y divide-gray/40 px-10'>
              {evidence.map((text) => (
                <p
                  key={text}
                  className=' text-[14px] lg:text-paragraphSmall not-italic lg:font-light leading-[normal] py-2 lg:py-4 flex items-center gap-1'
                >
                  <div className='w-2 lg:w-2 h-2 lg:h-2 aspect-square rounded-full bg-gray ' />{" "}
                  <span className='pl-3'>{text}</span>
                </p>
              ))}
            </div>

            <div className='bg-zinc-100  max-w-[580px] mx-auto   flex flex-col items-center py-4'>
              <p className='px-4 lg:p-0 text-center      text-[15px] font-normal    leading-snug mb-[18px]'>
                For details of ESX membership rules, please refer to following
                documents
              </p>
              <Link
                href='#'
                className='px-[18px] pt-[2px] pb-[3px] bg-primary-blue rounded-md text-center text-white text-base font-semibold   '
              >
                ESX Membership Rules
              </Link>
            </div>
          </main>
        </Card>
      </div>
      <div className='grid sm:grid-cols-2 gap-5 mt-5'>
        <Card width='py-7 px-10 flex flex-col'>
          <h1 className='text-black text-xl lg:text-paragraphBig font-normal   '>
            Access to the trading platform
          </h1>
          <p className='text-justify  text-[14px] lg:text-paragraphSmall font-light   mt-[8px]'>
            Members can access ESX’s Automated Trading System by connecting
            directly or through third party back office and trading platforms.
          </p>
          {/* <LinkButton href='' className='pt-[20px] lg:pt-0 lg:mt-auto'>
                View More
              </LinkButton> */}
        </Card>
        <Card width='py-7 px-10 flex flex-col'>
          <h1 className='text-black text-xl lg:text-paragraphBig font-normal   '>
            Direct Market Access (DMA)
          </h1>
          <p className='text-justify  text-[14px] lg:text-paragraphSmall font-light     mt-[8px]'>
            ESX members can offer direct market access (DMA) to their clients,
            which allows clients to enter buy and sell side instructions via the
            members third party trading platform.
          </p>
          {/* <LinkButton href='' className='pt-[20px] lg:pt-0 lg:mt-auto'>
                View More
              </LinkButton> */}
        </Card>
      </div>
    </div>
  );
}

export default MembershipRules;
