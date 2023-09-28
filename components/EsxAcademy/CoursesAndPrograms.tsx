import Image from "next/image";
import React from "react";
import Course1 from "@/public/images/course1.jpeg";
import Course2 from "@/public/images/course2.jpeg";
import Course3 from "@/public/images/course3.jpeg";
import Course4 from "@/public/images/course4.jpeg";
import Course5 from "@/public/images/course5.jpeg";
import Course6 from "@/public/images/course6.jpeg";

function CoursesAndPrograms() {
  const members = [
    {
      img: Course1,
      title:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer",
      description:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ",
    },
    {
      img: Course2,
      title:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer",
      description:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ",
    },
    {
      img: Course3,
      title:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer",
      description:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ",
    },
    {
      img: Course4,
      title:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer",
      description:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ",
    },
    {
      img: Course5,
      title:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer",
      description:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ",
    },
    {
      img: Course6,
      title:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer",
      description:
        "Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ",
    },
  ];
  return (
    <div className='w-full h-full  '>
      <h1 className='text-[24px] px-5 py-5 mb-0 text-left text-white  w-[100%] bg-primary-blue font-sans font-normal '>
        Courses and programs{" "}
      </h1>
      <div className='w-full min-h-[1000px] grid grid-cols-3 gap-y-0 gap-x-5 pt-0 '>
        {members.map((member, index) => {
          return (
            <div
              className='w-full h-[500px] flex flex-col flex-grow justify-center items-center mt-5 '
              key={index}
            >
              <div className='w-full h-[50%]'>
                {" "}
                <Image
                  height={200}
                  width={200}
                  src={member.img}
                  alt='listofmembers'
                  className='w-full h-full border object-cover'
                />
              </div>
              <div className='bg-white w-full h-[50%] px-6'>
                <h1 className='pt-7 pb-5 font-normal text-[16px] font-sans text-[#00205B]'>
                  {member.title}
                </h1>
                <p className='pb-7 font-light text-[16px] font-sans text-[#7F7F7F]'>
                  {member.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CoursesAndPrograms;
