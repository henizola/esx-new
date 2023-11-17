function TradingMechanism() {
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
                Trading Mechanism
              </h1>
              <p className='w-[100%]  text-[16px]   font-light leading-6    '>
                The market participant’s behavior in the fixed income market is
                quite different from the equities market, where there are
                significantly fewer trades concluded, but with significantly
                higher volumes transacted per trade. As a result, ESX has put in
                place a market model that is fitting to the behavior of the
                fixed income and money markets. ESX plans to organize these
                markets via Request for Quote (RFQ) and trade reporting models
                that are well suited to this market.
              </p>
              <p className='w-[100%]  text-[16px] mt-5  font-light leading-6    '>
                For the functioning of this secondary market, RFQ as well as
                binding orders can be submitted on the ESX trading platform. RFQ
                requests can be initiated anonymously or with full transparency
                and a trade can be finalized directly in the system or
                bilaterally between the counterparties and then reported to the
                exchange. ESX’s unsecured and secured (Repo) money market is
                similarly conducted on a negotiable basis and can be supported
                by the same functionality deployed for the long-term fixed
                income markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradingMechanism;
