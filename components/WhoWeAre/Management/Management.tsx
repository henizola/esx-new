"use client";
import Image from "next/image";
import React from "react";
import placeholder from "/public/images/Portrait_Placeholder.png";
import member2 from "/public/images/management2.png";
import member3 from "/public/images/management3.png";
import management from "/public/images/Management.png";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";

interface ManagementProps {
  setStep: (value: number) => void;
  step: number;
}

const Management: React.FC<ManagementProps> = ({ setStep, step }) => {
  const items = [
    "Welcome Message",
    "Overview",
    "Vision & Mission",
    "Organizational Structure",
    "Board of Directors",
    "Management",
    // "ESX Reports",
    // "Careers",
    // "Tender",
  ];

  return (
    <div className='flex flex-col w-full'>
      <Banner
        backgroundImage={management}
        title='About Us'
        description='“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci '
      />
      <div className='flex w-full  px-4 lg:px-28 py-7'>
        <Card width='w-[25%] hidden lg:flex mr-5 h-fit   flex-col text-left  py-10 px-5'>
          <h6 className='ml-7 mb-4'>About Us</h6>
          {items.map((item, index) => (
            <button
              key={index}
              className={`text-left ml-8 my-2 font-light  `}
              style={{
                borderBottom: "0.7px solid black",
                fontSize: step === index ? "16px" : "14px",
                fontWeight: step === index ? "400" : "300",
              }}
              onClick={() => setStep(index)}
            >
              {item}
            </button>
          ))}
        </Card>
        <div className='grid grid-cols-1  gap-3 w-[100%]'>
          <Card width='w-[100%] my-0 h-[100%] pb-5'>
            <div className=' flex py-5 mx-5 md:mx-10  p-2'>
              <div className='w-[100%] flex  flex-col  mt-0 pt-0'>
                <h1 className='text-[28px] md:text-header font-[500] border-b-[3px] border-light-golden w-fit'>
                  Management
                </h1>
                {/* <p className='text-[14px] md:text-[16px]  w-[100%] mt-2'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt
                </p> */}
              </div>
            </div>
          </Card>
          <div className='w-[100%] grid   gap-4  grid-cols-1 md:grid-cols-3 h-[100%]  pt-4'>
            <Card width='w-[100%] my-0 h-[fit-content] pb-5 '>
              <div className=' flex flex-col h-[fit-content] px-0  '>
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={placeholder.src}
                    alt='manager'
                    className='w-[100%] h-[200px] lg:h-[60%] object-cover'
                  />
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Tilahun Esmael Kassahun (Ph.D)
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Chief Executive Officer
                  </h1>
                  <div>
                    <p className='text-[14px] max-h-[30vh] lg:text-paragraphSmall text-justify font-light p-5 pt-2  overflow-scroll'>
                      Mr. Tilahun was appointed Chief Executive Officer of the
                      Ethiopian Securities Exchange by the Board of Directors in
                      October 2023. Prior to his appointment Tilahun served as a
                      Senior Project manager for the ESX Project since May 2022,
                      where he was responsible for designing the exchange model,
                      developing its business plan, raising investment capital,
                      and building the policies, rules, and institutional
                      infrastructure of the exchange. Tilahun has several years
                      of experience working in various legal, economic policy
                      and private sector development environments. Before
                      joining the ESX, he served as a private sector specialist
                      and managed multi sectoral projects at the IFC/World Bank
                      Group for more than 6 years. Tilahun earned an LLM in
                      Business Law from Addis Ababa University School of Law, an
                      LLM in International Economic Law and Policy from the
                      University of Barcelona and Ph.D. in International Law and
                      Economics from the University of Bocconi - Milan.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            <Card width='w-[100%] my-0 h-[fit-content] pb-5 '>
              <div className=' flex flex-col h-[fit-content] px-0  '>
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={placeholder.src}
                    alt='manager'
                    className='w-[100%] h-[200px] lg:h-[60%] object-cover'
                  />
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Michael Habte
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Chief Operating Officer
                  </h1>
                  <div>
                    <p className='text-[14px] max-h-[30vh] lg:text-paragraphSmall text-justify font-light p-5 pt-2  overflow-scroll'>
                      Mr. Michael was appointed Chief Operations Officer of the
                      Ethiopian Securities Exchange in October 2023. Prior to
                      his appointment, he served as a Project Manager in the ESX
                      Project Office from May 2022 through October 2023. In this
                      role, he helped co-lead a project team tasked with
                      designing, establishing, and launching the ESX. Mike was
                      extensively involved in designing the exchange model,
                      developing its business plan, raising investment capital,
                      and building the policies, rules, and institutional
                      infrastructure of the exchange. He has over 15 years of
                      financial industry experience performing macroeconomic
                      research, commodity market analysis, and advanced data
                      analytics. Michael possesses in-depth industry and
                      financial market expertise based on professional
                      experience at global financial sector firms including
                      BBVA, Citigroup, Moody’s Analytics, and Bloomberg. Michael
                      holds a Master’s in Economics from John Hopkins
                      University.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            <Card width='w-[100%] my-0 h-[fit-content] pb-5 '>
              <div className=' flex flex-col h-[fit-content] px-0  '>
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={placeholder.src}
                    alt='manager'
                    className='w-[100%] h-[200px] lg:h-[60%] object-cover'
                  />
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Yodit Kassa
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Chief Market Development and Communications Officer
                  </h1>
                  <div>
                    <p className='text-[14px] max-h-[30vh] lg:text-paragraphSmall text-justify font-light p-5 pt-2  overflow-scroll'>
                      Ms. Yodit is currently the Chief Market Development and
                      Communications Officer of the Ethiopian Securities
                      Exchange. She is responsible for deepening and expanding
                      the product offering, public awareness/ sensitization
                      (Market Development) and capacity building for the public
                      and the investors by working together with the necessary
                      regulators and players for the ESX. Yodit has over 8 years
                      of experience in market development and capacity building
                      work from Association of Chartered Certified Accountants
                      (ACCA), where she worked as Country Manager. Yodit has
                      earned her Master of Sciences in Accounting and Finance
                      from Addis Ababa University.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            <Card width='w-[100%] my-0 h-[fit-content] pb-5 '>
              <div className=' flex flex-col h-[fit-content] px-0  '>
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={placeholder.src}
                    alt='manager'
                    className='w-[100%] h-[200px] lg:h-[60%] object-cover'
                  />
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Nigussie Seid
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Chief Technology Officer
                  </h1>
                  <div>
                    <p className='text-[14px] max-h-[30vh] lg:text-paragraphSmall text-justify font-light p-5 pt-2  overflow-scroll'>
                      Mr. Nigussie is currently the Chief Technology Officer of
                      the Ethiopian Securities Exchange. He is responsible for
                      the assessment, preparation, acquisition, deployment and
                      testing of the exchange trading and other technologies.
                      Nigussie has over 14 years of experience in the field.
                      Prior to taking the position at ESX, Nigussie served as
                      project manager for the development and deployment of the
                      electronic single window (eSW) project office, served as
                      senior technology advisor for various projects within
                      IFC/WBG and lead developer for major projects implemented
                      by UNCTAD in Kazakhstan, Georgia, and Moldova. Nigussie
                      has earned a Master of Science in Engineering in computer
                      science from Addis Ababa University.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            <Card width='w-[100%] my-0 h-[fit-content] pb-5 '>
              <div className=' flex flex-col h-[fit-content] px-0  '>
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={placeholder.src}
                    alt='manager'
                    className='w-[100%] h-[200px] lg:h-[60%] object-cover'
                  />
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Eskedar Sileshi
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Senior Analyst
                  </h1>
                  <div>
                    <p className='text-[14px] max-h-[30vh] lg:text-paragraphSmall text-justify font-light p-5 pt-2  overflow-scroll'>
                      Ms. Eskedar is currently the senior analyst for ESX. She
                      is responsible for coordinating, monitoring, and
                      supporting the exchange’s day-to-day operations including
                      stakeholder engagements, aggregating data management,
                      financial and administrative management. Eskedar has
                      several years of experience working in several research
                      firms with private and governmental stakeholders. She has
                      a Bachelor of Arts in Business Administration and is
                      currently pursuing her master’s in project management.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            <Card width='w-[100%] my-0 h-[fit-content] pb-5 '>
              <div className=' flex flex-col h-[fit-content] px-0  '>
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={placeholder.src}
                    alt='manager'
                    className='w-[100%] h-[200px] lg:h-[60%] object-cover'
                  />
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Enku Negussie
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Analyst
                  </h1>
                  <div>
                    <p className='text-[14px] max-h-[30vh] lg:text-paragraphSmall text-justify font-light p-5 pt-2  overflow-scroll'>
                      Ms. Enku is currently an analyst for ESX, where she is
                      supporting the day-to-day management and operations of the
                      exchange. Enku has several years of experience working in
                      the financial services industry at organizations including
                      Barclays, PIMCO, and Bloomberg. She holds a B.B.A. with
                      concentrations in Finance and International Business from
                      George Washington University.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
