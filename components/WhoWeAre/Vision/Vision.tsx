"use client";
import React from "react";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import image from "/public/images/vision-banner.png";

interface VisionProps {
  setStep: (value: number) => void;
  step: number;
}

const Vision: React.FC<VisionProps> = ({ setStep, step }) => {
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
        backgroundImage={image}
        title='About Us'
        background='bg-light-blue'
      />
      <div className='flex w-full border px-4 lg:px-28 py-7'>
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
        <div className='grid grid-cols-1 mt-0 gap-3 w-[100%]'>
          <div className='grid grid-cols-1 gap-3 lg:gap-0 w-[100%]'>
            <Card width='w-[100%] my-0 h-[100%] pb-2 pt-5 md:pb-0'>
              {/* <div className=' bg-primary-blue h-[68px] w-[100%] lg:w-[94%] mt-0  md:mt-5 float-right'>
                <Image
                  height={200}
                  width={200}
                  src={mission.src}
                  alt='manager'
                  className='w-[auto] object-cover h-[40px] ml-[30px] mt-4'
                />
              </div> */}
              <div className=' w-[100%] flex md:py-5 mx-4 md:mx-10  p-4'>
                <div className='w-[100%] flex  flex-col lg:mr-10  mt-0 pt-0'>
                  <h1 className='text-header   py-0 mb-0 pl-0 mt-0 text-left  w-[100%]  font-[400] '>
                    <span className='  border-b-[3px] border-light-golden'>
                      Mission{" "}
                    </span>
                  </h1>
                  <div className='w-[100%] relative flex justify-between    text-paragraphSmall   font-light mt-2 px-5 leading-6   '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-[60px] absolute -left-5 top-2 h-[20px]'
                    >
                      <circle cx='12' cy='12' r='5' fill='currentColor' />
                    </svg>

                    <p className='pl-1 py-1   text-paragraphSmall'>
                      To provide a modern, reliable, transparent, and efficient
                      environment for securities trading in Ethiopia, through
                      adaptation of modern exchange business operations, skill,
                      technology, and trust.
                    </p>
                  </div>

                  <div className='w-[100%] relative flex justify-between    text-paragraphSmall   font-light mt-2 px-5 leading-6   '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-[60px] absolute -left-5 top-2 h-[20px]'
                    >
                      <circle cx='12' cy='12' r='5' fill='currentColor' />
                    </svg>

                    <p className='pl-1 py-1   text-paragraphSmall'>
                      Contribute to the economic development of Ethiopia by
                      promoting savings and the efficient aggregation of capital
                      for long term investment.
                    </p>
                  </div>
                  <div className='w-[100%] relative flex justify-between    text-paragraphSmall   font-light mt-2 px-5 leading-6   '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-[60px] absolute -left-5 top-2 h-[20px]'
                    >
                      <circle cx='12' cy='12' r='5' fill='currentColor' />
                    </svg>

                    <p className='pl-1 py-1   text-paragraphSmall'>
                      Building a sustainable institution that is dynamic and
                      fitting to both Ethiopian and regional issuers and
                      investors.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            <Card width='w-[100%] my-0 h-[100%] pb-5 md:pb-5'>
              {/* <div className=' bg-primary-blue h-[68px] w-[100%] lg:w-[94%] mt-0  float-right'>
                <Image
                  height={200}
                  width={200}
                  src={vision.src}
                  alt='manager'
                  className='w-[auto] object-cover h-[40px] ml-[30px] mt-4'
                />
              </div> */}
              <div className=' w-[100%] flex py-0 ml-4 md:mx-10  p-4'>
                <div className='w-[100%] flex  flex-col lg:mr-10  mt-0 pt-0'>
                  <h1 className='text-header   py-0 mb-0 pl-0 mt-0 text-left  w-[100%]  font-[400] '>
                    <span className=' border-b-[3px] border-light-golden'>
                      Vision{" "}
                    </span>
                  </h1>

                  <div className='w-[100%] relative flex justify-between    text-paragraphSmall   font-light mt-2 px-5 leading-6   '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-[60px] absolute -left-5 top-2 h-[20px]'
                    >
                      <circle cx='12' cy='12' r='5' fill='currentColor' />
                    </svg>

                    <p className='pl-1 py-1   text-paragraphSmall'>
                      To become a premier, innovative, and vertically integrated
                      securities exchange in Africa.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            <Card width='w-[100%] my-0 h-[100%] pb-5 md:pb-10'>
              {/* <div className=' bg-primary-blue h-[68px] w-[100%] lg:w-[94%] mt-0  float-right'>
                <Image
                  height={200}
                  width={200}
                  src={values.src}
                  alt='manager'
                  className='w-[auto] object-cover h-[40px] ml-[30px] mt-4'
                />
              </div> */}
              <div className=' w-[910%] flex py-5 pt-0 ml-4 md:mx-10   p-4'>
                <div className='w-[100%] flex  flex-col lg:mr-10  mt-0 pt-0'>
                  <h1 className='text-header   py-0 mb-0 pl-0 mt-0 text-left  w-[100%]  font-[400] '>
                    <span className=' border-b-[3px] border-light-golden'>
                      Values
                    </span>
                  </h1>

                  <div className='w-[100%] relative flex justify-between    text-paragraphSmall   font-light mt-2 px-5 leading-6   '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-[60px] absolute -left-5 top-2 h-[20px]'
                    >
                      <circle cx='12' cy='12' r='5' fill='currentColor' />
                    </svg>

                    <p className='pl-1 py-1   text-paragraphSmall'>
                      Transparency, Innovation, Efficiency, Sustainability,
                      Integrity, Fairness, Excellence.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className='grid grid-cols-1   gap-0 w-[100%]'>
            <Card width='w-[100%] my-0 h-[100%] pb-5'>
              <div className=' flex py-5 pb-0 mx-4 md:mx-10  p-2'>
                <div className='w-[100%] flex  flex-col  mt-0 pt-3'>
                  <h1 className='text-header   py-0 mb-0 pl-0 mt-0 text-left  w-[100%]  font-[400] '>
                    <span className=' border-b-[3px] border-light-golden'>
                      Our Market Development Role
                    </span>
                  </h1>
                  <p className='text-[14px] md:text-paragraphSmall w-[100%] mt-5'>
                    ESX will play a critical role in the market development,
                    policy advocacy, institutional reform, in cooperation and
                    consultation with relevant stakeholders to develop the
                    Ethiopian capital markets, with the aim to:
                  </p>
                  <div className='w-[100%] relative flex justify-between    text-paragraphSmall   font-light mt-2 px-8 leading-6   '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-[60px] absolute -left-5 top-2 h-[20px]'
                    >
                      <circle cx='12' cy='12' r='5' fill='currentColor' />
                    </svg>

                    <p className='pl-1 py-1   text-paragraphSmall font-light'>
                      Build investor confidence.
                    </p>
                  </div>
                  <div className='w-[100%] relative flex justify-between    text-paragraphSmall   font-light mt-2 px-8 leading-6   '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-[60px] absolute -left-5 top-2 h-[20px]'
                    >
                      <circle cx='12' cy='12' r='5' fill='currentColor' />
                    </svg>

                    <p className='pl-1 py-1   text-paragraphSmall font-light'>
                      Attract new issuers and investors to the market in
                      particular SMEs with high growth potential.
                    </p>
                  </div>{" "}
                  <div className='w-[100%] relative flex justify-between    text-paragraphSmall   font-light mt-2 px-8 leading-6   '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-[60px] absolute -left-5 top-2 h-[20px]'
                    >
                      <circle cx='12' cy='12' r='5' fill='currentColor' />
                    </svg>

                    <p className='pl-1 py-1   text-paragraphSmall font-light'>
                      Serve the wider Ethiopian business community and provide a
                      sustainable vehicle to build a diverse issuer and investor
                      base.
                    </p>
                  </div>{" "}
                  <div className='w-[100%] relative flex justify-between    text-paragraphSmall   font-light mt-2 px-8 leading-6   '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-[60px] absolute -left-5 top-2 h-[20px]'
                    >
                      <circle cx='12' cy='12' r='5' fill='currentColor' />
                    </svg>

                    <p className='pl-1 py-1   text-paragraphSmall font-light'>
                      Diversify its product and service offerings and maintain
                      new product innovation and development.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            <Card width='w-[100%] my-0 h-[100%] pb-5 '>
              <div className=' flex py-5 mx-4 md:mx-10  p-2 pt-0'>
                <div className='w-[100%] flex  flex-col h-[100%]   mt-0 pt-0'>
                  <div className='flex flex-col justify-between h-[100%] '>
                    <div>
                      <p className='text-[14px] md:text-paragraphSmall w-[100%] mt-2'>
                        ESX will also contribute to positioning Ethiopia as a
                        key regional financial center and destination to doing
                        business, by:
                      </p>
                      <div className='w-[100%] relative flex justify-between    text-paragraphSmall   font-light mt-2 px-8 leading-6   '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className='w-[60px] absolute -left-5 top-2 h-[20px]'
                        >
                          <circle cx='12' cy='12' r='5' fill='currentColor' />
                        </svg>

                        <p className='pl-1 py-1   text-paragraphSmall font-light'>
                          Studying, advocating, and implementing strategies and
                          recommendations that are aimed at attracting
                          investments into the Ethiopian capital markets from
                          across the region.
                        </p>
                      </div>
                      <div className='w-[100%] relative flex justify-between    text-paragraphSmall   font-light mt-2 px-8 leading-6   '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className='w-[60px] absolute -left-5 top-2 h-[20px]'
                        >
                          <circle cx='12' cy='12' r='5' fill='currentColor' />
                        </svg>

                        <p className='pl-1 py-1   text-paragraphSmall font-light'>
                          Pursuing partnerships and collaboration with regional
                          and global industry players.
                        </p>
                      </div>
                    </div>
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

export default Vision;
