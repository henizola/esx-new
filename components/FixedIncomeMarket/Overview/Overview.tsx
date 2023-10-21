"use client";
import Card from "../../Card/Card";

const Overview = () => {
  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <div className='flex w-full  '>
        <div className='flex flex-col w-full gap-5'>
          <Card width='w-[100%]  flex flex-col'>
            {/* <Image
              height={200}
              width={200}
              src={overview.src}
              alt='overview'
              className='w-full object-cover h-[30%]'
            /> */}
            <div className='w-[38%] h-[100%]'></div>
            <div className=' flex  flex-col py-10 px-10'>
              {/* <p className='text-[12px] text-[#001F59]   font-semibold '>
                Overview{" "}
              </p> */}
              <h1 className='text-subHeader   font-normal pb-1'>
                Fixed income market{" "}
              </h1>

              <p className='text-[16px] mt-2  font-light mt-0 pt-0 leading-6  pb-0'>
                The ESX Fixed Income Market is a market where participants buy
                and sell debt securities, either directly from the issuer
                through the primary market, or afterwards through the secondary
                market following the initial debt security issuance. Investors
                who purchase fixed income securities receive a return in the
                form of fixed periodic payments and the return of principal at
                maturity.
              </p>

              <p className='text-[16px] mt-5   font-light pt-0 leading-6  pb-0'>
                The ESX Fixed Income market will facilitate the listing,
                quoting, and trading of debt instruments with the aim to
                increase efficiency, transparency, and liquidity of the
                Ethiopian debt capital markets.
              </p>
              {/* <Link
                href='#'
                className='flex text-[16px] font-semibold mt-5 pb-16'
              >
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
              </Link> */}
            </div>
          </Card>
          <Card width='w-[100%] px-10 py-7 pb-10'>
            <div className='flex '>
              <div className='w-[100%] flex  flex-col  mt-0 pt-0'>
                <h1 className='text-subHeader   font-normal pb-1'>
                  The ESX Fixed Income Market:
                </h1>

                {/* <p className='w-[100%]  text-[16px]   font-light mt-2 pt-0 leading-6 '>
                  The ESX Fixed Income market will facilitate the listing,
                  quoting, and trading of debt instruments with the aim to
                  increase efficiency, transparency, and liquidity of the
                  Ethiopian debt capital markets.
                </p> */}
                {/* <Link href='#' className='flex text-[16px] font-semibold mt-5'>
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
                </Link> */}
                <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                  <span>○ </span>

                  <span className='ml-2'>
                    Provides an efficient platform for retail and institutional
                    investors to access tradable debt instruments to actively
                    manage investments over different economic cycles.
                  </span>
                </p>
                <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                  <span>○ </span>

                  <span className='ml-2'>
                    Improves the availability of long-term capital and provides
                    a substitute for bank loans for companies, possibly helping
                    lower their cost of capital.{" "}
                  </span>
                </p>
                <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                  <span>○ </span>

                  <span className='ml-2'>
                    A way for companies to access short-term finance to fund
                    working capital needs through money market commercial paper
                    instruments that can be quoted and traded on the secondary
                    market in a relatively short period of time.{" "}
                  </span>
                </p>
                <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
                  <span>○ </span>

                  <span className='ml-2'>
                    Provides a well tested avenue for the public sector to
                    finance long-term infrastructure investments using local
                    currency debt financing.{" "}
                  </span>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Overview;
