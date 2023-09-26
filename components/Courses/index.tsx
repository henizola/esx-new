"use client";
import Image from "next/image";
import React from "react";
import member1 from "/public/images/board1.png";
import Courses1 from "/public/images/Courses1.png";
import Courses2 from "/public/images/Courses2.png";
import Courses3 from "/public/images/Courses3.png";
import Courses4 from "/public/images/Courses4.png";
import Courses5 from "/public/images/Courses5.png";
import Courses6 from "/public/images/Courses6.png";
import bg from "/public/images/bg.jpg"
import Banner from "../Banner/banner";
import Card from "../Card/Card";
import Pagination from "../Paginnation/Pagination";

interface BoardMembersProps {
  setStep: (value: number) => void;
  step: number;
}

const Courses: React.FC<BoardMembersProps> = ({ setStep, step }) => {
  const items = [
    "Overview",
    "Courses and Programs",
    "ESX Training Academy Calendar",
    "FAQ",
  ];

  return (
    <div className='flex flex-col w-full'>
      <Banner
        backgroundImage={bg}
        title='Courses and Programs'
        description=''
      />
      <div className='flex w-full  px-28 py-7'>
        <Card width='w-[30%] mr-5 flex flex-col text-left  py-10 px-5'>
          <h6 className='ml-2 mb-4 font-semibold opacity-50'>ESX Academy</h6>{" "}
          {items.map((item, index) => (
            <button
              key={index}
              className={`  text-left ml-10 my-2 font-light border-b border-black `}
              style={{
                borderBottom: step === index ? "1.5px solid black" : "0.25px solid black",
                fontSize: step === index ? "15px" : "14px",
                fontWeight: step === index ? "500" : "300",
              }}
              onClick={() => setStep(index)}
            >
              {item}
            </button>
          ))}
        </Card>
        <div className='grid grid-cols-1  gap-3 w-[100%]'>
        <Card width='w-[100%] pb h-[100%]'>
                <h1 className='text-[32px] px-10 py-5  text-left text-white  w-[100%] bg-primary-blue font-sans font-normal '>
                  Courses and Programs
                </h1>
        </Card>
          <div className='w-[100%] grid   gap-4   grid-cols-3 h-[100%]  pt-4'>
            <Card width='w-[100%] my-0 h-[100%] pb-5 '>
              <div className=' flex flex-col h-[100%] px-0  '>
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={Courses1.src}
                    alt='manager'
                    className='w-[100%] h-[50%] object-cover'
                  />
                  <h1 className='text-[16px] text-[#00205B] font-normal p-5  pb-0'>
                  Lorem ipsum dolor sit amet, 
                  consecLorem ipsum dolor sit amet, consectetuer 
                  </h1>
                  
                  <p className=' text-[16px] text-[#7F7F7F] p-5 pt-5'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
                  </p>
                </div>
              </div>
            </Card>
            <Card width='w-[100%] my-0 h-[100%] pb-5 '>
              <div className=' flex flex-col h-[100%] px-0  '>
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={Courses2.src}
                    alt='manager'
                    className='w-[100%] h-[50%] object-cover'
                  />
                  <h1 className='text-[16px] text-[#00205B] font-normal p-5 pb-0'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer 
                  </h1>
                  
                  <p className=' text-[16px] text-[#7F7F7F] p-5 pt-5'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer 
                  adipiscing elit, sed diam 
                  </p>
                </div>
              </div>
            </Card>
            <Card width='w-[100%] my-0 h-[100%] pb-5 '>
              <div className=' flex flex-col h-[100%] px-0  '>
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={Courses3.src}
                    alt='manager'
                    className='w-[100%] h-[50%] object-cover'
                  />
                  <h1 className='text-[16px] text-[#00205B] font-normal p-5 pb-0'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer 
                  </h1>
                  
                  <p className=' text-[16px] text-[#7F7F7F] p-5 pt-5'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer 
                  adipiscing elit, sed diam 
                  </p>
                </div>
              </div>
            </Card>
            <Card width='w-[100%] my-0 h-[100%] pb-5 '>
              <div className=' flex flex-col h-[100%] px-0  '>
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={Courses4.src}
                    alt='manager'
                    className='w-[100%] h-[50%] object-cover'
                  />
                  <h1 className='text-[16px] text-[#00205B] font-normal p-5 pb-0'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer 
                  </h1>
                  
                  <p className=' text-[16px]  text-[#7F7F7F] p-5 pt-5'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer 
                  adipiscing elit, sed diam 
                  </p>
                </div>
              </div>
            </Card>
            <Card width='w-[100%] my-0 h-[100%] pb-5 '>
              <div className=' flex flex-col h-[100%] px-0  '>
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={Courses5.src}
                    alt='manager'
                    className='w-[100%] h-[50%] object-cover'
                  />
                  <h1 className='text-[16px] text-[#00205B] font-normal p-5 pb-0'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer 
                  </h1>
                  
                  <p className=' text-[16px] text-[#7F7F7F]  p-5 pt-5'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer 
                  adipiscing elit, sed diam 
                  </p>
                </div>
              </div>
            </Card>
            <Card width='w-[100%] my-0 h-[100%] pb-5 '>
              <div className=' flex flex-col h-[100%] px-0  '>
                <div>
                  <Image
                    height={200}
                    width={200}
                    src={Courses6.src}
                    alt='manager'
                    className='w-[100%] h-[50%] object-cover'
                  />
                  <h1 className='text-[16px] text-[#00205B]  font-normal p-5 pb-0'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer 
                  </h1>
                  
                  <p className=' text-[16px]  text-[#7F7F7F] p-5 pt-5'>
                  Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer 
                  adipiscing elit, sed diam 
                  </p>
                </div>
              </div>
            </Card>{" "}
          </div>
        </div>
      </div>

      <Pagination></Pagination>
      
    </div>
  );
};

export default Courses;
