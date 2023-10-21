import Card from "../../Card/Card";

function CorporateBonds() {
  const lists = [
    `A corporate bond is a fixed income security issued by a company in order to raise capital. `,
    `Corporate bonds provide companies an alternative and more efficient source of long-term capital relative to traditional bank loans, providing a sustainable avenue to fund capital expenditure needs. `,
    `Similar to most loans, corporate bonds are interest-bearing long-term securities (> 1 year) issued at fixed or variable interest rates. Unlike bank loans however, companies are not required to pledge collateral when issuing a corporate bond.`,
    `A corporate bond is generally backed by the ability of the issuing company to repay, which depends on its prospects for future revenues and profitability.`,
    `Investors in corporate bonds receive periodic interest payments throughout the life of the bond and then receive the face value of the bond at the date of maturity.`,
  ];

  return (
    <div>
      <Card width='flex flex-col  w-full h-full'>
        <div className='flex h-full pb-5'>
          <div className='min-h-full bg-white pt-5 px-10 flex flex-col justify-between  '>
            <div>
              <p className={` py-5 text-paragraphSmall   font-light `}>
                Corporate bonds provide companies an alternative and more
                efficient source of long-term capital relative to traditional
                bank loans, providing a sustainable avenue to fund capital
                expenditure needs.
              </p>
            </div>
          </div>
        </div>
      </Card>
      <Card width='w-[100%] h-full flex flex-row px-3 mt-5'>
        {/* <div className='w-[38%] min-h-full'>
          <Image
            height={200}
            width={200}
            src={overview.src}
            alt='overview'
            className='w-full object-cover h-full'
          />
        </div> */}
        <div className='w-[100%] flex  pt-5  flex-col'>
          <h1 className='text-subHeader  mx-7 font-normal mt-0 pt-0 border-b border-[#A8965B]'>
            Corporate Bonds{" "}
          </h1>

          <div className='px-7 pb-5'>
            {lists.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`py-5 font-normal text-[14px]   ${
                    lists.length - 1 !== index && "border-b border-[#A8965B]"
                  }`}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CorporateBonds;
