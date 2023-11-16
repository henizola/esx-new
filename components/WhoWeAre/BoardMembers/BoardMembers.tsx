"use client";
import Image from "next/image";
import React from "react";
import member1 from "/public/images/Helaway Tadesse.jpg";
import member2 from "/public/images/Zemedenh Nigatu.jpg";
import member3 from "/public/images/Dr-Eleni Gabremadhin.jpeg";
import member4 from "/public/images/Fekadu Petros.jpeg";
import member5 from "/public/images/Hinjat Shamil.jpeg";
import member6 from "/public/images/Dr. Tewodros Makonnen.jpg";
import member7 from "/public/images/Yasmin Wohabrebbi.jpg";
import organization from "/public/images/organization-banner.png";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";

interface BoardMembersProps {
  setStep: (value: number) => void;
  step: number;
}

const BoardMembers: React.FC<BoardMembersProps> = ({ setStep, step }) => {
  const items = [
    "Welcome Message",
    "Overview",
    "Vision & Mission",
    "Organizational Structure",
    "Board of Directors",
    "Management",
    // "ESX Reports",
    "Careers",
    // "Tender",
  ];

  return (
    <div className='flex flex-col w-full'>
      <Banner
        backgroundImage={organization}
        title='About Us'
        background='bg-light-blue'
      />
      <div className='flex w-full px-4 lg:px-28 py-7'>
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
        <div className='grid grid-cols-1  gap-3 w-[100%] '>
          <Card width='w-[100%] my-0 h-[100%] pb-5'>
            <div className=' flex py-5 mx-5 md:mx-10  p-2'>
              <div className='w-[100%] flex  flex-col  mt-0 pt-0'>
                <h1 className='text-[28px] md:text-header font-[400] border-b-[3px] border-light-golden w-fit'>
                  Board of directors
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
            <div className='w-[100%] my-0 group bg-transparent group perspective h-[400px]  cursor-pointer'>
              <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-[400px] duration-1000'>
                <div className='absolute backface-hidden  w-full h-full'>
                  <Image
                    height={200}
                    width={200}
                    src={member1.src}
                    alt='manager'
                    className='w-[100%]  lg:h-[100%] object-cover'
                  />
                </div>
                <div className='absolute pb-[100px] my-rotate-y-180 backface-hidden w-full h-full bg-white  overflow-hidden'>
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Helaway Tadesse
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Chairman
                  </h1>
                  <p className='text-[14px] lg:text-paragraphSmall text-justify font-light p-5 pt-2 max-h-[100%] overflow-scroll'>
                    Mr. Helaway Tadesse is currently a senior macro-economic
                    advisor to the Governor of the National Bank of Ethiopia.
                    Prior to this role he served as a Director at Cepheus Growth
                    Capital Partners, a private equity firm. Tadesse served for
                    seven years as the Senior Vice President of Zemen Bank, in
                    addition to serving, for about 10 years, as a Senior
                    Economist at the International Monetary Fund, where he was
                    based in Washington D.C. Helaway is a graduate of Princeton
                    University (Master of Public Administration, Economics &
                    Public Policy) and Reed College (Bachelor of Arts,
                    Economics).
                  </p>
                </div>
              </div>
            </div>
            <div className='w-[100%] my-0 group bg-transparent group perspective h-[400px]  cursor-pointer'>
              <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-[400px] duration-1000'>
                <div className='absolute backface-hidden  w-full h-[400px]'>
                  <Image
                    height={200}
                    width={200}
                    src={member3.src}
                    alt='manager'
                    className='w-[100%]  lg:h-[100%] object-cover'
                  />
                </div>
                <div className='absolute pb-[100px] my-rotate-y-180 backface-hidden w-full h-full bg-white  overflow-hidden'>
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Eleni Gabre-Medhin (Ph.D)
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Member
                  </h1>
                  <p className='text-[14px] lg:text-paragraphSmall text-justify font-light p-5 pt-2 max-h-[100%] overflow-scroll'>
                    Dr. Eleni Z. Gabre-Madhin is an internationally recognized
                    economist and thought leader on African development, youth,
                    innovation, and commodity markets, with a distinguished and
                    varied career, spanning policy research, development
                    practice, corporate business, and entrepreneurship. She is
                    currently Chief Innovation Officer at UNDP’s Regional Bureau
                    for Africa in New York. Prior to this, she founded and ran
                    blueMoon, Ethiopia’s first youth agritech incubator and seed
                    investor, as well as eleni LLC, a commodity exchange
                    builder, prior to which she founded and led the acclaimed
                    Ethiopia Commodity Exchange, growing it to a $1.4 billion
                    market in 4 years. As a visible African voice, Dr.
                    Gabre-Madhin is actively engaged in global policy dialogue,
                    participating in various high-level events such as the G8
                    Summit, World Economic Forum, Mo Ibrahim Foundation, African
                    Progress Panel, Time/CNN Global CEO Forum, Borlaug
                    Dialogues, among others. She was named among Top 50
                    Disruptors 2020 by The Africa Report, Devex Top 5 Women of
                    Impact 2016, among 125 Global Women of Impact by Newsweek in
                    2013, African Banker Icon Award, 2012, Yara Prize 2012,
                    among 100 Most Influential Africans 2012 by The African
                    Report, selected among “The 50 Women Shaping Africa” 2011 by
                    The Africa Report, nominated Outstanding Businesswoman of
                    the Year by African Business Awards in 2010, and Ethiopian
                    Person of the Year 2009. Her work has received extensive
                    media coverage by CNN, BBC, Wall Street Journal, New York
                    Times, Al-Jazeera, CNBC, Financial Times, Der Spiegel, Japan
                    Times, RAI TV, Bloomberg, Reuters, among others, and she was
                    the subject of a one-hour PBS documentary titled “The Market
                    Maker” aired across the United States in 2009. Eleni earned
                    BA in Economics, Cornell University; MSc in Agricultural
                    Economics, Michigan State University; and PhD in Applied
                    Economics, Stanford University.
                  </p>
                </div>
              </div>
            </div>

            <div className='w-[100%] my-0 group bg-transparent group perspective   h-[400px]  cursor-pointer'>
              <div className='relative preserve-3d group-hover:my-rotate-y-180  w-full h-[400px] duration-1000'>
                <div className='absolute backface-hidden   w-full h-[400px]'>
                  <Image
                    height={200}
                    width={200}
                    src={member4.src}
                    alt='manager'
                    className='w-[100%]  lg:h-[100%] object-cover'
                  />
                </div>
                <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-white overflow-hidden'>
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Fekadu Petros Member
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Member
                  </h1>
                  <div className=' pb-[100px]  w-full h-full bg-white  overflow-hidden'>
                    <p className='text-[14px]] lg:text-paragraphSmall text-justify font-light p-5 pt-2 max-h-[100%] overflow-scroll'>
                      Mr. Fekadu Petros is currently the Managing Partner of
                      Fekadu Petros & Partners Law Office - a firm specializing
                      in areas of corporate law, financial law, commercial law
                      and dispute resolution. Fekadu has a wealth of experience
                      in business law and regulation assisting many local and
                      international companies in setting up in Ethiopia. Fekadu
                      is an expert both in transactional and litigation
                      practices. He has advised many companies in complex
                      regulatory, competition and commercial matters. He has
                      numerous publications in areas of financial law, dispute
                      settlement and corporate law published in reputable
                      journals and a seminal book on Ethiopian Company Law the
                      third edition, which was published in 2022. Fekadu was a
                      member of the Board of Directors of some financial
                      companies, advised banks, financial leasing, and fin-tech
                      companies in the country- giving him an in-depth
                      understanding of financial sector regulation. He has
                      participated in the development of a number of
                      business-related laws in Ethiopia, including Ethiopia’s
                      capital market proclamation (which he extensively reviewed
                      and eventually translated into Amharic) and the Commercial
                      Code of Ethiopia. He closely works with the Capital Market
                      Authority and has taken CISI course on International
                      Introduction to Securities and Investment passing its exam
                      with a commendable score. Before starting private
                      practice, Fekadu worked for Jimma University, Addis Ababa
                      Chamber of Commerce, Ethiopia Commodity Exchange, and
                      World Bank PPD Forum housed in Ethiopian Chamber of
                      Commerce and Sectoral Associations. He is also a teaching
                      faculty member with the rank of assistant professor at
                      Addis Ababa University School of Law. Fekadu obtained his
                      LL.B degree (in 2003) and masters’ degree in Commercial
                      Law (in 2006) from Addis Ababa University Law School and a
                      second masters’ degree in International Dispute Settlement
                      from Geneva University Graduate Institute (in 2010).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[100%] my-0 group bg-transparent group perspective h-[400px]  cursor-pointer'>
              <div className='relative preserve-3d group-hover:my-rotate-y-180  w-full h-[400px] duration-1000'>
                <div className='absolute backface-hidden  w-full h-full'>
                  <Image
                    height={200}
                    width={200}
                    src={member5.src}
                    alt='manager'
                    className='w-[100%]  lg:h-[100%] object-cover'
                  />
                </div>
                <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-white overflow-hidden'>
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Hinjat Shamil
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Member
                  </h1>
                  <div className=' pb-[100px]  w-full h-full bg-white  overflow-hidden'>
                    <p className='text-[14px]] lg:text-paragraphSmall text-justify font-light p-5 pt-2 max-h-[100%] overflow-scroll'>
                      Ms. Hinjat Shamil is currently serving as a Reform Advisor
                      at the Ministry of Finance. She leads and backstops
                      various economic reforms including state owned enterprise
                      reforms, pensions funds, debt and various macro-fiscal
                      measures. Hinjat also backstops the preparation and
                      implementation of the government’s Home-Grown Economy
                      Reform package. Hinjat has previously worked with the
                      United Nations and the GOE on development finance,
                      industrialization, and the sustainable development goals.
                      Hinjat holds a Master of Public Policy in International
                      Development from Johns Hopkins University and a Bachelor
                      of Arts in Economics from Addis Ababa University.
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[100%] my-0 group bg-transparent group perspective h-[400px]  cursor-pointer'>
              <div className='relative preserve-3d group-hover:my-rotate-y-180  w-full h-[400px] duration-1000'>
                <div className='absolute backface-hidden  w-full h-full'>
                  <Image
                    height={200}
                    width={200}
                    src={member6.src}
                    alt='manager'
                    className='w-[100%]  lg:h-[100%] object-cover'
                  />
                </div>
                <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-white overflow-hidden'>
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Tewodros Mekonen (Ph.D)
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Member
                  </h1>
                  <div className=' pb-[100px]  w-full h-full bg-white  overflow-hidden'>
                    <p className='text-[14px]] lg:text-paragraphSmall text-justify font-light p-5 pt-2 max-h-[100%] overflow-scroll'>
                      Dr. Tewodros Mekonen is currently Senior Country Economist
                      within the International Growth Centre and London School
                      of Economics and Political Science. He has over 15 years
                      of research experience on the Ethiopian economy. Tewodros’
                      research interest is in applied micro-econometrics and
                      development economics. In the past, he has worked as a
                      Junior Research Fellow at the Ethiopian Economic Policy
                      Research Institute. He has also worked as a Junior
                      Research Officer at the National Bank of Ethiopia.
                      Tewodros Makonnen holds a PhD in Economics Research from
                      the University of Leicester.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[100%] my-0 group bg-transparent group perspective  h-[400px]  cursor-pointer'>
              <div className='relative preserve-3d group-hover:my-rotate-y-180  w-full h-[400px] duration-1000'>
                <div className='absolute backface-hidden  w-full h-full'>
                  <Image
                    height={200}
                    width={200}
                    src={member7.src}
                    alt='manager'
                    className='w-[100%]  lg:h-[100%] object-cover'
                  />
                </div>
                <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-white overflow-hidden'>
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Yasmin Wohabrebbi
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Member
                  </h1>
                  <div className=' pb-[100px]  w-full h-full bg-white  overflow-hidden'>
                    <p className='text-[14px]] lg:text-paragraphSmall text-justify font-light p-5 pt-2 max-h-[100%] overflow-scroll'>
                      Ms Yasmin Wohabrebbi is currently Deputy CEO of the
                      Ethiopian Investment Holdings (EIH). Prior to this she
                      served as Head of the Housing Development and
                      Administration for Addis Ababa City Administration with a
                      rank of Deputy Mayor, as well as State Minister of Finance
                      for External Economic Cooperation. Ms. Yasmin also has
                      served in various senior roles within the acclaimed
                      Agricultural Transformation Agency (ATA) among others; as
                      director partnerships and resource mobilization, Ms Yasmin
                      obtained Bachelor’s Degree in Economics from Gondar
                      University and Master’s Degree in International Trade
                      Policy and Trade law from Lund University.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[100%] my-0 group bg-transparent group perspective h-[400px]  cursor-pointer'>
              <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-[400px] duration-1000'>
                <div className='absolute backface-hidden  w-full h-[400px]'>
                  <Image
                    height={200}
                    width={200}
                    src={member2.src}
                    alt='manager'
                    className='w-[100%]  lg:h-[100%] object-cover'
                  />
                </div>
                <div className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-white overflow-hidden'>
                  <h1 className='text-[14px] lg:text-[16px] font-normal p-5 pb-0'>
                    Zemedenh Nigatu
                  </h1>
                  <h1 className='text-[12px] lg:text-[14px]   font-normal  p-5 pb-0 pt-2'>
                    Member
                  </h1>
                  <div className=' pb-[100px]  w-full h-full bg-white  overflow-hidden'>
                    <p className='text-[14px]] lg:text-paragraphSmall text-justify font-light p-5 pt-2 max-h-[100%] overflow-scroll'>
                      Mr. Zemedeneh Nigatu is widely recognized as one of
                      Africa’s top business leaders and has received numerous
                      global awards and recognitions including: · “Top 10 Most
                      Influential Africans 2018” – By Top-Ten, a global ranking
                      organization; · The &quot;100 Most Influential Africans of
                      2013&quot; - New African Magazine (UK); · “Who-is-Who of
                      African Finance 2015” Global Finance Magazine (New York);
                      · “Titans Building Nations 2014” Award, CEO Magazine
                      (South Africa); · “Pioneer Ethiopian-American Diaspora
                      Business Person of the Year Award 2012” - Washington D.C.;
                      · “Top 15 African CEOs to Watch 2015” – African Business
                      magazine (UK); and As an Ethiopian-American, Zemedeneh has
                      lived in the U.S., Canada, Brazil, Argentina, Saudi Arabia
                      and Ethiopia. He is currently the Global Chairman of the
                      American investment firm Fairfax Africa Fund, LLC, based
                      in Washington D.C. Fairfax focuses on five sectors:
                      manufacturing, infrastructure, natural resources,
                      hospitality and Agro-processing. Zemedeneh served as the
                      Managing Partner of Ernst & Young (EY) in Ethiopia for 18
                      years and was also the Head of EY’s Transaction Advisory
                      Services for East Africa and a member of EY’s Global
                      Partner Council. Prior to EY, he was with PwC in the U.S.
                      Zemedeneh regularly provides powerful and influential
                      global thought leadership about finance, economics and
                      investments and has been featured on CNN, BBC, the FT,
                      Bloomberg, CGTN, Al Jazeera and CNBC. Furthermore, he has
                      been invited to give speeches and as a panelist at high
                      profile events such as the World Economic Forum (WEF),
                      Harvard Business School, the Milken Global Summit in Los
                      Angeles and Global Business Forum in Dubai. He serves on
                      several boards globally including: InvestAfrica, based in
                      London (UK), a successful Fintech company based in the
                      Netherlands and as Chairman of the Ethiopian subsidiary of
                      Calzedonia, the multinational Italian clothing
                      manufacturer and retailer. Zemedeneh has a business degree
                      from Howard University, Washington D.C., completed the LSE
                      program at the Harvard Business School, Boston and is a
                      U.S. C.P.A.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardMembers;
