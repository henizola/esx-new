"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import manager from "/public/images/Portrait_Placeholder.png";
import chariman from "/public/images/Helaway Tadesse.jpg";

import sliderbannerImage from "/public/images/slider-background.png";
import bannerImage from "/public/images/about-banner.png";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import CustomSlider from "../../Slider/Slider";
interface WelcomeMessageProps {
  setStep: (value: number) => void;
  step: number;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ setStep, step }) => {
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

  const slides = [
    {
      image: sliderbannerImage.src,
      alt: "Image 1",
      title: "Wellcome to ESX",
      description:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis ",
    },
    {
      image: sliderbannerImage.src,
      alt: "Image 2",
      title: "Wellcome to ESX",
      description:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis ",
    },
    {
      image: sliderbannerImage.src,
      alt: "Image 2",
      title: "Wellcome to ESX",
      description:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis ",
    },
    {
      image: sliderbannerImage.src,
      alt: "Image 2",
      title: "Wellcome to ESX",
      description:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis ",
    },
    {
      image: sliderbannerImage.src,
      alt: "Image 2",
      title: "Wellcome to ESX",
      description:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis ",
    },
  ];

  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner
        backgroundImage={bannerImage}
        title='About Us'
        background='bg-light-blue'
      />
      <div className='flex w-full lg:px-28 sm:pt-0 lg:py-7  '>
        <Card width='w-[25%] hidden lg:flex mr-5 h-fit   flex-col text-left h-fit  py-10 px-5'>
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
        <Card width='w-full sm:w-[100%] lg:flex flex-col pb-10'>
          <div className='w-full sm:w-[100%] lg:flex lg:flex-row sm:flex-col sm:pt-0 lg:py-10 lg:pb-3  lg:pt-10 lg:px-10'>
            <Image
              height={200}
              width={200}
              src={chariman.src}
              alt='manager'
              className='w-[30%] h-[100%] object-cover'
            />

            <div className='w-full  sm:w-[100%] pt-0 lg:w-[70%] pl-5 flex flex-col  mt-12 lg:mt-0 px- pr-0 pb-0'>
              <h1 className=' text-center  border-b-[3px] border-light-golden lg:text-left text-subHeader   font-[400] mt-0 pt-0'>
                Welcome message from the Chairman of the Board of Directors
              </h1>

              <p className=' text-base mt-4  text-[14px] lg:text-paragraphSmall font-roboto font-light  pt-0 leading-6  '>
                Dear Esteemed Shareholders and Distinguished Guests,
              </p>
              <p className=' text-base text-[14px] text-justify  lg:text-paragraphSmall font-roboto font-light mt-3 pt-0 leading-6  '>
                I am honored and privileged to extend a warm welcome to you on
                behalf of the Board of Directors of the Ethiopian Securities
                Exchange (ESX). It is with great pleasure and excitement that we
                stand at this point in history to mark a new chapter in the
                evolution of the Ethiopian capital market as we work diligently
                to prepare for the launch of the ESX, the first modern
                securities exchange in the nation’s history.
              </p>
            </div>
          </div>
          <div className='px-10'>
            <p className=' text-base text-justify text-[14px] lg:text-paragraphSmall font-roboto font-light mt-0 pt-0 leading-6  '>
              Our commitment to build a vibrant capital market ecosystem where
              those that seek long term finance/capital and investors that seek
              regulated investment instruments is anchored by our pursuit to
              contribute to the development of our country. While putting in
              place the foundations for ESX, maintaining the highest standards
              of integrity, transparency, and trust is also unwavering. As the
              Chairman of the Board, I can assure you that the well-being and
              interests of our shareholders, investors, and market participants
              remain at the core of our mission. We are dedicated to promoting
              transparency, accountability, and good governance to ensure the
              confidence and trust of all our stakeholders.
            </p>
            <p className=' text-base text-[14px]  text-justify lg:text-paragraphSmall font-roboto font-light mt-2 pt-0 leading-6  '>
              In the coming years, we are poised to embrace a significant level
              of market development and institution building activities adopting
              best practices, and expand our offerings to better serve your
              evolving needs. Developing a thriving capital market ecosystem is
              a long but at the same time exciting endeavor that requires the
              contribution of many stakeholders. We stand ready to navigate
              these exciting but challenging waters.
            </p>
            <p className=' text-base text-[14px] text-justify lg:text-paragraphSmall font-roboto font-light mt-2 pt-0 leading-6  '>
              I look forward to an exciting journey ahead, and I am confident
              that with your continued support, the ESX will play a leading role
              in the development and growth of the Ethiopian capital markets.
            </p>
            <p className=' text-base text-[14px] text-justify lg:text-paragraphSmall font-roboto font-normal mt-2 pt-0 leading-6  '>
              Helaway Tadesse
            </p>
            <p className=' text-base text-[14px] text-justify lg:text-paragraphSmall font-roboto font-normal mt-2 pt-0 leading-6  '>
              Chairman of the Board, Ethiopian Securities Exchange
            </p>
          </div>
          <div className='w-full sm:w-[100%] lg:flex lg:flex-row sm:flex-col sm:pt-0 lg:py-10 lg:pb-3  lg:pt-10 lg:px-10'>
            <Image
              height={200}
              width={200}
              src={manager.src}
              alt='manager'
              className='w-[30%] h-[100%] object-cover'
            />
            <div className='w-full  sm:w-[100%] pt-0 lg:w-[70%] pl-5 flex flex-col  mt-12 lg:mt-0 px- pr-0 pb-0'>
              <h1 className=' text-center  border-b-[3px] border-light-golden lg:text-left text-subHeader   font-[400] mt-0 pt-0'>
                Welcome message from the Chief Executive Officer
              </h1>

              <p className=' text-base mt-5  text-[14px] lg:text-paragraphSmall font-roboto font-light  pt-0 leading-6  '>
                Dear Members, Investors, and Stakeholders,
              </p>
              <p className=' text-base text-[14px] text-justify  lg:text-paragraphSmall font-roboto font-light mt-4 pt-0 leading-6  '>
                I am delighted to extend my warmest welcome to all of you as the
                Chief Executive Officer of the Ethiopian Securities Exchange
                (ESX). It is an honor and a privilege to stand at the helm of
                this pioneer organization, and I am excited to embark on this
                journey with you.
              </p>
              <p className=' text-base text-[14px] text-justify  lg:text-paragraphSmall font-roboto font-light mt-4 pt-0 leading-6  '>
                The ESX will form a key part of Ethiopia's capital market
                ecosystem, fostering innovation, channeling investments, and
                providing a platform for businesses to flourish. Our mission is
                to drive economic progress and inclusivity by facilitating the
                efficient allocation of capital and promoting a culture of
                transparency, integrity, and accountability.
              </p>
            </div>
          </div>
          <div className='px-10'>
            <p className=' text-base text-justify text-[14px] lg:text-paragraphSmall font-roboto font-light mt-0 pt-0 leading-6  '>
              As we look ahead during this key juncture in history, our
              commitment to excellence, innovation, and sustainable growth will
              remain resolute and form a key part of our vision. We are actively
              working to introduce state-of-the-art systems, introduce new
              financial products, and enhance market efficiency. Furthermore, we
              will continue to build partnerships, both locally and
              internationally, to expand opportunities and attract a diverse
              pool of investors.
            </p>
            <p className=' text-base text-[14px]  text-justify lg:text-paragraphSmall font-roboto font-light mt-2 pt-0 leading-6  '>
              The success of the ESX relies on the active participation of all
              stakeholders. I encourage open communication, collaboration, and
              the sharing of ideas as we navigate the exciting journey ahead.
              Together, we can make ESX a vital instrument for Ethiopia's
              economic prosperity.
            </p>
            <p className=' text-base text-[14px] text-justify lg:text-paragraphSmall font-roboto font-light mt-2 pt-0 leading-6  '>
              Thank you for being part of this remarkable journey, and I look
              forward to working closely with all of you as we move forward
              together.
            </p>
            <p className=' text-base text-[14px] text-justify lg:text-paragraphSmall font-roboto font-normal mt-2 pt-0 leading-6  '>
              Sincerely,
            </p>
            <p className=' text-base text-[14px] text-justify lg:text-paragraphSmall font-roboto font-normal mt-2 pt-0 leading-6  '>
              Tilahun Esmael Kassahun (PhD)
            </p>
            <p className=' text-base text-[14px] text-justify lg:text-paragraphSmall font-roboto font-normal mt-2 pt-0 leading-6  '>
              Chief Executive Officer, Ethiopian Securities Exchange
            </p>
          </div>
        </Card>
      </div>
      <CustomSlider slides={slides} />
    </div>
  );
};

export default WelcomeMessage;
