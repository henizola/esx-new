"useClient";
import Card from "@/components/Card/Card";
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
    <div className=' w-full h-[100%] flex-col '>
      {/* <div className='w-[100%] flex flex-col  mt-0 pt-0 bg-white py-9'> */}
      <div className='   bg-white w-[100%] px-10 pt-5'>
        <h1 className='text-black mt-0 text-[20px] md:text-header ml-0 font-[500] border-b-[3px] border-light-golden w-fit '>
          Trading rules{" "}
        </h1>
      </div>

      <Card width='w-[100%] px-10 flex flex-col  py-5 '>
        <main className='pb-5'>
          <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
            <span>1. </span>

            <span className='ml-2'>
              Unless otherwise stipulated at the time of a transaction, all
              shares securities dealt in by a Trading Member shall be deemed to
              be fully paid and funded.
            </span>
          </p>
          <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
            <span> 2.</span>

            <span className='ml-2'>
              All transactions entered into by Trading Members shall be for net
              prices as between the buyer and seller.
            </span>
          </p>
          <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
            <span>3.</span>

            <span className='ml-2'>
              The Exchange shall not recognize in its dealings any parties other
              than its own Trading Members and every interaction therefore,
              whether for the Trading Member or on behalf of a client, must be
              according to the Rules, regulations and usages of The Exchange.
            </span>
          </p>
          <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
            <span> 4.</span>

            <span className='ml-2'>
              The Exchange shall determine the mode of trading, platforms and
              systems from time to time. No Trading Member shall put through a
              transaction on The Exchange other than the form prescribed by The
              Exchange.
            </span>
          </p>
          <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
            <span> 5.</span>

            <span className='ml-2'>
              The Exchange shall from time to time specify various trading
              parameters and attributes relating to the Trading System,
              including but not limited to the following:
            </span>
          </p>
          <p className='text-black text-paragraphSmall font-light ml-10  mt-4 flex'>
            <span> i.</span>

            <span className='ml-2'>
              Lot Sizes: The size of a lot shall be one share; and
            </span>
          </p>
          <p className='text-black text-paragraphSmall font-light ml-10  mt-4 flex'>
            <span> ii.</span>

            <span className='ml-2'>
              Display of Quotes and Orders: ESX shall display as publicly
              available such details of Orders in tradable securities submitted
              to the trading system in a format it shall determine from time to
              time.
            </span>
          </p>
        </main>
      </Card>
      {/* <div>
          {lists.map((item, index) => {
            return (
              <div
                key={index}
                className='w-[100%] relative flex items-center text-[16px]   font-normal text-black mt-2 px-5 leading-6 gap-2'
              >
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className=' h-[20px]   '
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <p
                  key={index}
                  className=' py-4 text-[16px] border-b border-gray'
                >
                  {item}
                </p>
              </div>
            );
          })}
        </div>
        <div className='border-b border-gray mx-4'>
          {sublists.map((subitem, index) => {
            return (
              <div
                key={index}
                className='relative flex items-center text-[16px]       mt-2 pl-[180px] pr-16 leading-6 gap-2 font-normal'
              >
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <p key={index} className=' py-2 text-[16px]'>
                  {subitem}
                </p>
              </div>
            );
          })}
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default TradingRules;
