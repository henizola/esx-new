"use client";
import Image from "next/image";
import React from "react";
import member1 from "../../public/images/board1.png";
import member2 from "../../public/images/board2.png";
import member3 from "../../public/images/board3.png";
import organization from "../../public/images/organization-banner.png";
import Banner from "../Banner/banner";
import Card from "../Card/Card";

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
    "ESX Reports",
    "Careers",
    "Tender",
  ];

  return (
    <div className="flex flex-col w-full">
      <Banner
        backgroundImage={organization}
        title="Board of directors"
        description="“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci "
      />
      <div className="flex w-full  px-28 py-7">
        <Card width="w-[30%] mr-5 flex flex-col text-left  py-10 px-5">
          <h6 className="ml-2 mb-4">About Us</h6>{" "}
          {items.map((item, index) => (
            <button
              key={index}
              className={`  text-left ml-10 my-2 font-light border-b border-black `}
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
        <div className="grid grid-cols-1  gap-3 w-[100%]">
          <Card width="w-[100%] my-0 h-[100%] pb-5">
            <div className=" flex py-5 mx-10  p-2">
              <div className="w-[100%] flex  flex-col  mt-0 pt-0">
                <h1 className="text-[40px]">Board of directors</h1>
                <p className="text-[16px]  w-[100%] mt-2">
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt
                </p>
              </div>
            </div>
          </Card>
          <div className="w-[100%] grid   gap-4   grid-cols-3 h-[100%]  pt-4">
            <Card width="w-[100%] my-0 h-[100%] pb-5 ">
              <div className=" flex flex-col h-[100%] px-0  ">
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={member1.src}
                    alt="manager"
                    className="w-[100%] h-[60%] object-cover"
                  />
                  <h1 className="text-[16px] font-normal p-5 pb-0">
                    Lorem ipsum dolor
                  </h1>
                  <h1 className="text-[14px] text-gray font-normal  p-5 pb-0 pt-2">
                    Board of director
                  </h1>
                  <p className=" text-[16px]  p-5 pt-2">
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euisLorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy ni
                  </p>
                </div>
              </div>
            </Card>
            <Card width="w-[100%] my-0 h-[100%] pb-5 ">
              <div className=" flex flex-col h-[100%] px-0  ">
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={member2.src}
                    alt="manager"
                    className="w-[100%] h-[60%] object-cover"
                  />
                  <h1 className="text-[16px] font-normal p-5 pb-0">
                    Lorem ipsum dolor
                  </h1>
                  <h1 className="text-[14px] text-gray font-normal  p-5 pb-0 pt-2">
                    Board of director
                  </h1>
                  <p className=" text-[16px]  p-5 pt-2">
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euisLorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy ni
                  </p>
                </div>
              </div>
            </Card>
            <Card width="w-[100%] my-0 h-[100%] pb-5 ">
              <div className=" flex flex-col h-[100%] px-0  ">
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={member3.src}
                    alt="manager"
                    className="w-[100%] h-[60%] object-cover"
                  />
                  <h1 className="text-[16px] font-normal p-5 pb-0">
                    Lorem ipsum dolor
                  </h1>
                  <h1 className="text-[14px] text-gray font-normal  p-5 pb-0 pt-2">
                    Board of director
                  </h1>
                  <p className=" text-[16px]  p-5 pt-2">
                    Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euisLorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy ni
                  </p>
                </div>
              </div>
            </Card>{" "}
          </div>
        </div>
      </div>

      <Card width="w-[100%] mr-0 flex flex-col text-left p-4 py-14 ">
        <div className="">
          <h1 className="text-primary-blue text-[24px] font-bold w-[100%] text-center">
            Contact the team
          </h1>
          <p className=" text-primary-black text-[16px] font-normal py-3 w-[100%] text-center">
            Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
            consectetuer adipiscing
          </p>
          <div className="flex justify-center items-center ">
            <button className=" rounded-lg text-white text-[16px] font-semibold w-fit justify-center align-middle text-center bg-primary-blue p-2 my-4 px-8">
              Contact
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BoardMembers;
