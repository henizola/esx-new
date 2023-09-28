import React from "react";

function ListingRules() {
  const lists = [
    "The existence of an orderly market for raising of capital in the primary market, an efficient mechanism for the trading of securities in the secondary market, and to protect investors",
    "That securities will be listed on the Official List only if The Exchange is satisfied that it is appropriate for those securities to be listed",
    "That accurate, full, equal, and timely public disclosure of information is made to all holders of securities and the general public regarding the activities of an Issuer",
    "That holders of relevant securities are given full information and are afforded adequate opportunity to consider in advance and vote upon any of the following",
    "To ensure that all parties involved in the dissemination of information into the marketplace, whether directly to holders of securities or to the public, observe the highest standards of care in doing so",
    "To ensure that all holders of the same class of securities of an Issuer are accorded fair and equal treatment in respect of their securities",
    "The Listing Requirements, and in particular the Continuing Obligations, promote investor confidence in standards of disclosure and corporate governance in the conduct of Issuers affairs and in the market as a whole",
    "That the business of The Exchange is carried on with due regard to the public interest",
  ];
  const sublists = [
    "Whether you are a startup entrepreneur or ",
    "other matters affecting an Issuer’s constitution or the rights of holders of securities",
  ];
  return (
    <div className=' w-full h-[100%] flex '>
      <div className='w-[100%] flex flex-col  mt-0 pt-0 bg-white py-9'>
        <div className='bg-[#00205B] w-full h-full'>
          <h1 className='text-[24px] px-10 py-5  text-left text-white  w-[100%] bg-primary-blue font-sans font-normal '>
            Listing Rules{" "}
          </h1>
        </div>
        {lists.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex items-center w-[100%] relative text-[15px] font-sans font-light mt-2 px-5 leading-6 gap-2`}
            >
              <div
                className={` h-full flex  ${
                  index === 3 ? " items-start pt-6  " : "items-center"
                }`}
              >
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
              <div className='flex flex-col border-b border-gray'>
                <p className=' py-4 text-[16px] '>{item}</p>
                {index === 3 && (
                  <div className='mx-4'>
                    {sublists.map((subitem, index) => {
                      return (
                        <div
                          key={index}
                          className='relative flex items-center text-[15px] font-sans font-light text-[#707377] mt-2 pl-[180px] pr-16 leading-6 gap-2'
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
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListingRules;
