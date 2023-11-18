"use client";
import Card from "@/components/Card/Card";

const FixedIncomeListingProcess = () => {
  return (
    <Card width='w-[100%] py-5 pb-10 px-10'>
      <div className='flex'>
        <div className='w-[100%] '>
          <div className='w-[100%] flex  flex-col'>
            {/* <p className='text-[12px]   font-normal mt-0 pb-6'>
              Listing and Admission to Trading{" "}
            </p> */}
            <h1 className='text-header border-b-[3px] border-light-golden w-fit text-left  mt-0 pt-0 pb-0'>
              Fixed Income Listing Process
            </h1>
            <p className='w-[90%]  text-[16px]   font-light mt-2 pt-5 leading-6   '>
              ESX facilitates a listing environment ensuring proper and timely
              processing of applications to facilitate efficient listing of
              fixed income securities onto the exchange. This will ensure that
              adequate disclosure of full and material facts in listings related
              applications is in compliance with the Proclamation, Directives of
              the ECMA and other relevant laws and statutory requirements.
            </p>
            <p className='w-[90%]  text-[16px]   font-light mt-2 pt-2 leading-6   '>
              Applications for fixed income securities listings include:
            </p>
            <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
              <span>○ </span>

              <span className='ml-2'>
                Listing of Securities issued by the Government of Ethiopia
              </span>
            </p>
            <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
              <span>○ </span>

              <span className='ml-2'>
                Listing of Corporate and Supranational fixed income securities.
              </span>
            </p>
            <p className='text-black text-paragraphSmall font-light  mt-4 flex'>
              <span>○ </span>

              <span className='ml-2'>
                Any other methods that may be approved by the ESX from time to
                time.
              </span>
            </p>
            <p className='w-[90%]  text-[16px]   font-light mt-2 pt-2 leading-6   '>
              Listing of corporate debt securities on the ESX will occur in a
              standardized series of steps and covers the following main steps.
            </p>
            <div className='pl-2 pt-0'>
              <p className='mt-5 text-black text-paragraphSmall font-light flex  '>
                <span>1)</span>
                <span className='ml-2 tex-justify'>
                  {" "}
                  Eligibility Requirements: Issuers interested in listing bonds
                  on the ESX need to meet eligibility criteria set by the
                  exchange. These criteria may include financial health,
                  corporate governance standards, and compliance with relevant
                  regulations.
                </span>
              </p>
              <p className='mt-5 text-black text-paragraphSmall font-light flex  '>
                <span>2)</span>
                <span className='ml-2 tex-justify'>
                  {" "}
                  Engage Advisors: Issuers will engage financial and legal
                  advisors to assist in the listing process. These advisors can
                  help ensure compliance with listing requirements, guide
                  through documentation, and provide necessary expertise.
                </span>
              </p>
              <p className='mt-5 text-black text-paragraphSmall font-light flex  '>
                <span>3)</span>
                <span className='ml-2 tex-justify'>
                  {" "}
                  Discussion with ESX fixed income listing department: issuers
                  will notify ESX to discuss the planned issuance and create
                  alignment on the listing procedures.
                </span>
              </p>
              <p className='mt-5 text-black text-paragraphSmall font-light flex  '>
                <span>4)</span>
                <span className='ml-2 tex-justify'>
                  {" "}
                  Submission of application for ECMA: in line with applicable
                  directives of ECMA issuance of corporate debt securities that
                  are subject to registration by ECMA has to be registered
                  before an application for listing is made to ESX.
                </span>
              </p>
              <p className='mt-5 text-black text-paragraphSmall font-light flex  '>
                <span>5)</span>
                <span className='ml-2 tex-justify'>
                  {" "}
                  Submission of Application: The issuer submits a formal
                  application for the listing of corporate debt instruments to
                  ESX Fixed Income Listing Department of. The application
                  includes all required documents, such as the prospectus,
                  offering circular, and relevant legal and financial
                  disclosures.
                </span>
              </p>
              <p className='mt-5 text-black text-paragraphSmall font-light flex  '>
                <span>6)</span>
                <span className='ml-2 tex-justify'>
                  {" "}
                  Due Diligence: ESX conducts due diligence on the issuer&apos;s
                  financial standing, legal structure, and the terms of the bond
                  issuance. This is essential for transparency and investor
                  protection.
                </span>
              </p>
              <p className='mt-5 text-black text-paragraphSmall font-light flex  '>
                <span>7)</span>
                <span className='ml-2 tex-justify'>
                  {" "}
                  Approval: If the review is successful, the application goes
                  before the Fixed Income Market Committee of ESX for approval.
                  The committee assesses whether the issuer and the bond
                  issuance meet the exchange&apos;s listing standards.
                </span>
              </p>
              <p className='mt-5 text-black text-paragraphSmall font-light flex  '>
                <span>8)</span>
                <span className='ml-2 tex-justify'>
                  {" "}
                  Public Announcement: Upon approval, the ESX makes a public
                  announcement regarding the listing. This announcement includes
                  details about the security, such as the terms, maturity, and
                  interest rates.
                </span>
              </p>
              <p className='mt-5 text-black text-paragraphSmall font-light flex  '>
                <span>9)</span>
                <span className='ml-2 tex-justify'>
                  {" "}
                  Listing and Trading: After the public announcement, the
                  securities are officially listed on ESX, and trading can
                  commence. Investors can buy and sell these securities through
                  the exchange.
                </span>
              </p>
              <p className='mt-5 text-black text-paragraphSmall font-light flex  '>
                <span>10)</span>
                <span className='ml-2 tex-justify'>
                  {" "}
                  Ongoing Reporting and Compliance: Issuers are required to
                  adhere to ongoing reporting and compliance requirements set by
                  relevant ECMA directives and ESX listing rules. This includes
                  providing regular financial disclosures, notices of material
                  events, and other relevant information.
                </span>
              </p>
            </div>
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

export default FixedIncomeListingProcess;
