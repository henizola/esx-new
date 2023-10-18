"use client";
import React from "react";

import Image from "next/image";
import reportsBanner from "/public/images/Management.png";
import backgroundImage from "/public/images/Career-Banner.png";
import careear from "/public/images/career-1.png";
import icon1 from "/public/images/icon1.png";
import icon2 from "/public/images/icon2.png";
import icon3 from "/public/images/icon3.png";
import icon4 from "/public/images/icon4.png";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import Testimonials from "../../Testimonials/Testimonials";
import Accordion from "../../Accordion/Accordion";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";

interface CareersProps {
  setStep: (value: number) => void;
  step: number;
}

const Careers: React.FC<CareersProps> = ({ setStep, step }) => {
  const isMobile = useMediaQuery("(max-width:769px)");
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: "cover",
    height: isMobile ? "20vh" : "60vh",
    width: "100vw",
  };

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
        backgroundImage={reportsBanner}
        title='Careers'
        description="ESX is committed to fostering an inclusive, innovative, and collaborative work environment. Join us in shaping the nation's capital markets landscape by exploring a variety of exciting career pathways with us."
      />
      <div className='flex w-full px-0 lg:px-28 lg:py-7'>
        <Card width='w-[25%] hidden lg:flex mr-5  flex-col text-left  py-10 px-5'>
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
          <Card width='w-[100%] my-0 py-5 lg:py-10  h-[fit-content] '>
            <div className='w-[100%] flex p-0  mx-0 '>
              <div className='flex  flex-col  p-5 px-4 md:px-10 pt-0 pr-0 relative'>
                <h1 className='text-[30px] lg:text-[40px] w-[100%] '>
                  Join us
                </h1>
                <hr className='mr-10 lg:mr-0 lg:w-[60%] ' />
                <p className='text-[16px] font-light mt-4 pr-16  w-[100%] '>
                  Are you Interested in working at ESX? Please click here to see
                  what jobs are currently available.
                </p>
                <div className='absolute grid grid-cols-3 py-10 w-[90%] left-[5%] lg:left-[10%] -bottom-[150px] lg:-bottom-[160px] bg-primary-blue'>
                  <div className='border-right flex flex-col border-r border-white text-center'>
                    <h1 className='text-white font-semibold text-[24px] lg:text-[40px]'>
                      150 +
                    </h1>
                    <h1 className='text-white font-normal text-[12px]'>
                      Employees
                    </h1>
                  </div>
                  <div className='border-right flex flex-col border-r border-white text-center'>
                    <h1 className='text-white font-semibold text-[24px] lg:text-[40px]'>
                      20 +
                    </h1>
                    <h1 className='text-white font-normal text-[12px]'>
                      Offices
                    </h1>
                  </div>{" "}
                  <div className='flex flex-col border-r text-center'>
                    <h1 className='text-white font-semibold text-[24px] lg:text-[40px]'>
                      50 +
                    </h1>
                    <h1 className='text-white font-normal text-[12px]'>
                      Clients <br className='flex lg:hidden' /> represented
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card width='w-[100%] mt-36 py-5  h-[fit-content] '>
            <div className='w-[100%] flex p-0  mx-0 '>
              <div className='flex  flex-col  w-[100%]  p-0 px-4 md:px-10 pt-0 pr-0 relative'>
                <h1 className='text-[30px] lg:text-[40px] w-[100%] '>
                  Why work with us?
                </h1>
                <hr className='w-[90%] mt-5' />
              </div>
            </div>
          </Card>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 '>
            <Card width='w-[100%] mt-0 py-5 px-5 flex h-[fit-content] '>
              <div className='w-[55px] h-[auto] '>
                <Image
                  height={200}
                  width={200}
                  src={icon1.src}
                  alt='manager'
                  className='w-[100%] h-[100%] object-contain'
                />
              </div>
              <div className='w-[90%] ml-4'>
                <h1 className='text-[16px] '>Lorem ipsum dolor sit </h1>
                <h1 className='text-[14px] font-light'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer{" "}
                </h1>
              </div>
            </Card>
            <Card width='w-[100%] mt-0 py-5 px-5 flex h-[fit-content] '>
              <div className='w-[55px] h-[auto] '>
                <Image
                  height={200}
                  width={200}
                  src={icon2.src}
                  alt='manager'
                  className='w-[100%] h-[100%] object-contain'
                />
              </div>
              <div className='w-[90%] ml-4'>
                <h1 className='text-[16px] '>Lorem ipsum dolor sit </h1>
                <h1 className='text-[14px] font-light'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer{" "}
                </h1>
              </div>
            </Card>
            <Card width='w-[100%] mt-0 py-5 px-5 flex h-[fit-content] '>
              <div className='w-[55px] h-[auto] '>
                <Image
                  height={200}
                  width={200}
                  src={icon3.src}
                  alt='manager'
                  className='w-[100%] h-[100%] object-contain'
                />
              </div>
              <div className='w-[90%] ml-4'>
                <h1 className='text-[16px] '>Lorem ipsum dolor sit </h1>
                <h1 className='text-[14px] font-light'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer{" "}
                </h1>
              </div>
            </Card>
            <Card width='w-[100%] mt-0 py-5 px-5 flex h-[fit-content] '>
              <div className='w-[55px] h-[auto] '>
                <Image
                  height={200}
                  width={200}
                  src={icon4.src}
                  alt='manager'
                  className='w-[100%] h-[100%] object-contain'
                />
              </div>
              <div className='w-[90%] ml-4'>
                <h1 className='text-[16px] '>Lorem ipsum dolor sit </h1>
                <h1 className='text-[14px] font-light'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer{" "}
                </h1>
              </div>
            </Card>
          </div>
          <h1 className='w-[100%] text-center text-[30px] lg:text-[40px] font-semibold text-primary-blue  mt-5 lg:mt-10'>
            Testimonials
          </h1>
          <hr className='w-[80%] lg:w-[40%] ml-[10%] lg:ml-[30%]' />
          <>
            <Testimonials />
          </>
          <Card width='w-[100%] mt-0  flex flex-col lg:flex-row  '>
            <div className='lg:hidden w-[100%] h-[200px] '>
              <Image
                height={300}
                width={200}
                src={careear.src}
                alt='manager'
                className='w-[100%] h-[100%] object-cover '
              />
            </div>
            <div className='lg:w-[60%] max-h-[400px] py-0 pb-10 lg:px-5'>
              <h1
                style={{ lineHeight: "38px" }}
                className='lg:w-[80%] lg:pr-10 mx-5 lg:ml-[10%]  text-left border-b pb-4  text-[30px] md:text-[40px] font-semibold text-primary-blue mt-10 '
              >
                Career opportunities
              </h1>
              <div className=" 'w-[80%] pr-10 ml-[10%] pb-4  mt-5 ">
                <Accordion
                  title={"Lorem ipsum dolor sit amet"}
                  background={"bg-primary-golden"}
                ></Accordion>
                <Accordion title={"Lorem ipsum dolor sit amet"}></Accordion>
                <Accordion
                  title={"Lorem ipsum dolor sit amet"}
                  background={"bg-primary-golden"}
                ></Accordion>
                <Accordion title={"Lorem ipsum dolor sit amet"}></Accordion>
                <Accordion
                  title={"Lorem ipsum dolor sit amet"}
                  background={"bg-primary-golden"}
                ></Accordion>
                <Accordion title={"Lorem ipsum dolor sit amet"}></Accordion>
                <div className='lg:my-10'>
                  <Link href='' className='pt-5'>
                    Contact: Career@ESX.com
                  </Link>
                </div>
              </div>
            </div>
            <div className='hidden lg:block w-[40%] h-[100%] '>
              <Image
                height={300}
                width={200}
                src={careear.src}
                alt='manager'
                className='w-[100%] h-[100%] max-h-[400px] object-cover '
              />
            </div>
          </Card>
        </div>
      </div>
      <div className='lg:mt-2 lg:mb-[250px]'>
        <div className='flex  flex-col   px-0  relative'>
          <div className='h-10vh mt-0  relative' style={bannerStyle}>
            <div className='absolute inset-0 bg-light-blue '></div>
          </div>
          <div className='lg:absolute  py-10 lg:w-[780px] left-[50%] lg:translate-x-[-50%] -bottom-[140px] bg-primary-golden'>
            <h1 className=' lg:w-[60%] lg:ml-[50%] lg:translate-x-[-50%] text-center text-white border-b pb-4 text-[30px] md:text-[40px] font-semibold '>
              EQUALITY & DIVERSITY
            </h1>
            <p className='pt-5 px-2 plg:x-20 text-16px font-light text-center text-white'>
              Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
              ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie conse
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
