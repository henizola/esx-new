"use client";
import Card from "../../Card/Card";

const CommercialPapers = () => {
  const papers = [
    `  Commercial papers (CPs) are short-term debt obligations issued
    by large corporations with a maturity period of less than 270
    days.`,
    `CPs are usually sold to investors at a discount to face value
and primarily issued by corporates to fund working capital or
finance short term assets. Investors receive the face value of
the CP instrument at maturity.`,
    ` Corporates can efficiently issue which can then be quoted and
    traded on the secondary market by market participants on the
    ESX platform.`,
  ];
  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <div className='flex w-full '>
        <div className='flex flex-col w-full'>
          <Card width='w-[100%] h-full flex flex-row  py-5 '>
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
              <h1 className='text-header border-b-[3px] border-light-golden w-fit text-left   mt-0 pb-1 '>
                Commercial Papers
              </h1>

              <div className='pb-5'>
                {papers.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`py-5 font-light text-paragraphSmall  ${
                        papers.length - 1 !== index &&
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

export default CommercialPapers;
