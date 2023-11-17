"use client";
import Card from "@/components/Card/Card";

const FixedIncomeListingRules = () => {
  return (
    <Card width='w-[100%] py-5 pb-10 px-10'>
      <div className='flex'>
        <div className='w-[100%] '>
          <div className='w-[100%] flex  flex-col'>
            {/* <p className='text-[12px]   font-normal mt-0 pb-6'>
              Listing and Admission to Trading{" "}
            </p> */}
            <h1 className='text-header border-b-[3px] border-light-golden w-fit text-left  mt-0 pt-0 pb-0'>
              Fixed Income Listing Rules
            </h1>
            <p className='w-[90%]  text-[16px]   font-light mt-2 pt-5 leading-6   '>
              As a market organizer, ESX puts in place appropriate governance
              framework including a rulebook specific to the fixed income
              products listed and traded on the exchange to ensure credibility
              in the market. Listing rules are in place to assure the existence
              of an orderly market for raising capital in the primary market and
              to protect investors.
            </p>
            <p className='w-[90%]  text-[16px]   font-light mt-2 pt-2 leading-6   '>
              General Principles of the Listing rules in the Fixed Income market
              include:
            </p>
            <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
              <span>○ </span>

              <span className='ml-2'>
                Accurate, full, equal, and timely public disclosure of
                information is made to all holders of securities and the general
                public regarding the activities of an Issuer.
              </span>
            </p>
            <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
              <span>○ </span>

              <span className='ml-2'>
                To ensure that all parties involved in the dissemination of
                information into the marketplace, whether directly to holders of
                securities or to the public, observe the highest standards of
                care in doing so.
              </span>
            </p>
            <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
              <span>○ </span>

              <span className='ml-2'>
                To ensure that all holders of the same class of securities of an
                Issuer are accorded fair and equal treatment in respect of their
                securities.
              </span>
            </p>
            <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
              <span>○ </span>

              <span className='ml-2'>
                The listing requirements, and in particular the continuing
                obligations, promote investor confidence in standards of
                disclosure and corporate governance in the conduct of Issuers
                affairs and in the market as a whole.
              </span>
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

export default FixedIncomeListingRules;
