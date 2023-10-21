import Card from "../../Card/Card";

function TbillsAndBonds() {
  const tbils = [
    "Treasury Bills (T-Bills) are safe, short-term debt securities issued by the Ethiopian government (Ministry of Finance)  to investors with a maturity period of one year or less.",
    `The National Bank of Ethiopia acts as an agent for the Ministry of Finance and issues T-bills through a market based auction process in the primary market.`,
    `T-Bills are auctioned biweekly with a minimum investment amount of ETB 5,000 and are issued in four different maturities of 28-days, 91-days, 182-days and 364-days with fixed rates of interest.`,
    `T-Bills are sold at a discount from the face value of the bill at the date of issue, meaning the purchase price is less than the face value of the security on the purchase date. When the T-Bill matures, the investor receives the face value of the T-Bill.`,
    `The interest received by the investor is reflected in the difference between the discount sale price on the purchase date and the face value received at maturity.  `,
    `Treasury Bonds are safe, long-term debt securities issued by the Ethiopian government to investors with a maturity period of more than one year.`,
    `Treasury Bonds enable the Ethiopian government to raise capital to fund long-term infrastructure investments and finance fiscal deficits using local currency debt.`,
    `Investors in Treasury Bonds receive fixed periodic interest payments throughout the life of the bond and then receive the face value of the bond at the date of maturity. `,
    `Investors can buy and sell listed government securities in the secondary market prior to maturity through the ESX trading platform.`,
    `Interest earned from investing in government securities is tax-exempt in Ethiopia.`,
  ];
  return (
    <div>
      <Card width='flex flex-col  w-full h-full'>
        <div className='flex h-full pb-5'>
          <div className='min-h-full bg-white pt-5 px-10 flex flex-col justify-between  '>
            <div>
              <p className={` py-5 text-paragraphSmall   font-light `}>
                Treasury Bills (T-Bills) are safe, short-term debt securities
                issued by the Ethiopian government (Ministry of Finance) to
                investors with a maturity period of one year or less. The
                National Bank of Ethiopia acts as an agent for the Ministry of
                Finance and issues T-bills through a market based auction
                process in the primary market.
              </p>
            </div>
          </div>
        </div>
      </Card>
      <Card width='flex flex-col  w-full h-full mt-5'>
        <div className='bg-[#00205B] w-full h-full'>
          <h1 className='text-subHeader px-10 py-5  text-left text-white  w-[100%] bg-primary-blue   font-normal '>
            Treasury Bills and Bonds
          </h1>
        </div>
        <div className='flex h-full pb-5'>
          <div className='min-h-full bg-white pt-5 px-10 flex flex-col justify-between  '>
            <div>
              {tbils.map((tbil, index) => {
                return (
                  <p
                    key={index}
                    className={` py-5 text-paragraphSmall   font-light ${
                      tbils.length - 1 !== index && "border-b border-black "
                    }`}
                  >
                    {tbil}
                  </p>
                );
              })}
            </div>
          </div>
          {/* <div className='min-w-[38%] min-h-full '>
          <Image
            height={200}
            width={200}
            src={tbills.src}
            alt='tbills'
            className='w-[100%] h-[100%] object-fill '
          />
        </div> */}
        </div>
      </Card>
    </div>
  );
}

export default TbillsAndBonds;
