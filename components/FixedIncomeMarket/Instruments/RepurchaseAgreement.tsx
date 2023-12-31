"use client";
import Card from "../../Card/Card";

const RepurchaseAgreement = () => {
  const lists = [
    "A repurchase agreement (repo) is a secured short-term form of borrowing (usually 1-7 day term) that involves selling a security with an agreement to repurchase it at a higher price later in the interbank market.",
    "Repo’s are commonly used by banks and dealers in government securities who sell government securities to a lender and agree to repurchase them at an agreed price later to meet short-term liquidity needs.",
    "The government security pledged by the borrower in a repo trade serves like collateral thereby reducing counterparty credit risk significantly and enhancing market liquidity.",
    "The ESX repo platform acts as a matchmaker by bringing buyers and sellers of funds in the repo market together efficiently in an organized manner.",
  ];

  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <div className='flex w-full '>
        <div className='flex flex-col w-full'>
          <Card width='w-[100%] h-full flex flex-row pt-5 mt-0'>
            {/* <div className='w-[38%] h-[100%]'>
              <Image
                height={200}
                width={200}
                src={overview.src}
                alt='overview'
                className='w-full object-cover h-[100%]'
              />
            </div> */}
            <div className='w-[100%] flex px-10 pt-0  flex-col'>
              <h1 className='text-header border-b-[3px] border-light-golden w-fit text-left  mt-0 pb-1 '>
                REPURCHASE AGREEMENTS / REPOS
              </h1>

              <div className='pb-5'>
                {lists.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`py-5 font-light text-paragraphSmall  ${
                        lists.length - 1 !== index &&
                        "border-b border-[#A8965B]"
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
      </div>
    </div>
  );
};

export default RepurchaseAgreement;
