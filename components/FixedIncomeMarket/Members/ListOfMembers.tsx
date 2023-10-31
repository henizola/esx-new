import React from "react";
// import whoweare from "../../../public/images/who-we-are-circle.png";
import listofmember1 from "@/public/images/list-of-member1.png";
import listofmember2 from "@/public/images/list-of-member2.jpeg";
import listofmember3 from "@/public/images/list-of-member3.jpeg";
import Image from "next/image";
import Card from "@/components/Card/Card";

function ListOfMembers() {
  const members = [
    {
      img: listofmember1,
      title: "Lorem ipsum ",
      email: "afgrfedgds@gmail.com",
      website: "www.wrwescgds.com",
      tel: "091123547689",
      services: "Lorem ipsum | dolor sit amet | consecLorem | ipsum dolor sit",
      activeSince: "1990",
    },
    {
      img: listofmember2,
      title: "Lorem ipsum ",
      email: "afgrfedgds@gmail.com",
      website: "www.wrwescgds.com",
      tel: "091123547689",
      services: "Lorem ipsum | dolor sit amet | consecLorem | ipsum dolor sit",
      activeSince: "1990",
    },
    {
      img: listofmember3,
      title: "Lorem ipsum ",
      email: "afgrfedgds@gmail.com",
      website: "www.wrwescgds.com",
      tel: "091123547689",
      services: "Lorem ipsum | dolor sit amet | consecLorem | ipsum dolor sit",
      activeSince: "1990",
    },
  ];
  return (
    <div>
      <div className='grid gap-8'>
        <Card width='flex flex-col bg-white/0  shadow-[0px] '>
          <h1 className='py-[18px] bg-white w-[100%] px-10  text-[20px] lg:text-header font-[500]   '>
            <span className='border-b-[3px] border-light-golden'>
              List of Members
            </span>
          </h1>
          <main className='pt-[30px]  space-y-4 '>
            <div className='grid lg:grid-cols-4 gap-4'>
              <img
                alt=''
                className='aspect-square hidden lg:block lg:w-[230px] w-[100%] h-[230px] object-cover '
                src='/images/Premium Vector _ Hand people care logo vector 1.png'
              />
              <Card width='px-[20px] py-[16px] pb-[14px] col-span-3 flex flex-col gap-4  shadow-[0px]'>
                <div className='flex'>
                  <img
                    alt=''
                    className='aspect-square lg:hidden w-[30%] h-[auto] object-cover '
                    src='/images/Premium Vector _ Hand people care logo vector 1.png'
                  />
                  <h1 className='text-black text-[20px] lg:text-subHeader mt-14 lg:mt-0 font-normal   '>
                    Lorem ipsum
                  </h1>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='flex gap-4'>
                    <span className='text-black text-sm font-normal    leading-snug'>
                      Email :
                    </span>
                    <span className='     text-sm font-light    leading-snug'>
                      theemail.gmail.com
                    </span>
                  </div>
                  <div className='flex gap-4'>
                    <span className='text-black text-sm font-normal    leading-snug'>
                      Website :
                    </span>
                    <span className='     text-sm font-light    leading-snug'>
                      www.gmail.com
                    </span>
                  </div>
                  <div className='flex gap-4'>
                    <span className='text-black text-sm font-normal    leading-snug'>
                      Tel :
                    </span>
                    <span className='     text-sm font-light    leading-snug'>
                      0987654321
                    </span>
                  </div>
                  <div className='flex gap-4'>
                    <span className='text-black text-sm font-normal    leading-snug'>
                      Service :
                    </span>
                    <span className='     text-sm font-light    leading-snug'>
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </span>
                  </div>
                  <div className='flex gap-4'>
                    <span className='text-black text-sm font-normal    leading-snug'>
                      Active Since :
                    </span>
                    <span className='     text-sm font-light    leading-snug'>
                      1990
                    </span>
                  </div>
                </div>
              </Card>
            </div>
            <div className='grid lg:grid-cols-4 gap-4'>
              <img
                alt=''
                className='aspect-square hidden lg:block lg:w-[230px] w-[100%] h-[230px] object-cover '
                src='/images/Premium Vector _ Hand people care logo vector 1.png'
              />
              <Card width='px-[20px] py-[16px] pb-[14px] col-span-3 flex flex-col gap-4  shadow-[0px]'>
                <div className='flex'>
                  <img
                    alt=''
                    className='aspect-square lg:hidden w-[30%] h-[auto] object-cover '
                    src='/images/Winston Salem Corporate Headshots & Personal Branding Photographer 1.png'
                  />
                  <h1 className='text-black text-[20px] lg:text-subHeader mt-14 lg:mt-0 font-normal   '>
                    Lorem ipsum
                  </h1>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='flex gap-4'>
                    <span className='text-black text-sm font-normal    leading-snug'>
                      Email :
                    </span>
                    <span className='     text-sm font-light    leading-snug'>
                      theemail.gmail.com
                    </span>
                  </div>
                  <div className='flex gap-4'>
                    <span className='text-black text-sm font-normal    leading-snug'>
                      Website :
                    </span>
                    <span className='     text-sm font-light    leading-snug'>
                      www.gmail.com
                    </span>
                  </div>
                  <div className='flex gap-4'>
                    <span className='text-black text-sm font-normal    leading-snug'>
                      Tel :
                    </span>
                    <span className='     text-sm font-light    leading-snug'>
                      0987654321
                    </span>
                  </div>
                  <div className='flex gap-4'>
                    <span className='text-black text-sm font-normal    leading-snug'>
                      Service :
                    </span>
                    <span className='     text-sm font-light    leading-snug'>
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </span>
                  </div>
                  <div className='flex gap-4'>
                    <span className='text-black text-sm font-normal    leading-snug'>
                      Active Since :
                    </span>
                    <span className='     text-sm font-light    leading-snug'>
                      1990
                    </span>
                  </div>
                </div>
              </Card>
            </div>
            <div className='grid lg:grid-cols-4 gap-4'>
              <img
                alt=''
                className='aspect-square hidden lg:block lg:w-[230px] w-[100%] h-[230px] object-cover '
                src='/images/Premium Vector _ Hand people care logo vector 1.png'
              />
              <Card width='px-[20px] py-[16px] pb-[14px] col-span-3 flex flex-col gap-4  shadow-[0px]'>
                <div className='flex'>
                  <img
                    alt=''
                    className='aspect-square lg:hidden w-[30%] h-[auto] object-cover '
                    src='/images/Accounting and Finance Business Branding Complete Guide (1) 1.png'
                  />
                  <h1 className='text-black text-[20px] lg:text-[32px] mt-14 lg:mt-0 font-normal   '>
                    Lorem ipsum
                  </h1>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='flex gap-4'>
                    <span className='text-black text-sm font-normal    leading-snug'>
                      Email :
                    </span>
                    <span className='     text-sm font-light    leading-snug'>
                      theemail.gmail.com
                    </span>
                  </div>
                  <div className='flex gap-4'>
                    <span className='text-black text-sm font-normal    leading-snug'>
                      Website :
                    </span>
                    <span className='     text-sm font-light    leading-snug'>
                      www.gmail.com
                    </span>
                  </div>
                  <div className='flex gap-4'>
                    <span className='text-black text-sm font-normal    leading-snug'>
                      Tel :
                    </span>
                    <span className='     text-sm font-light    leading-snug'>
                      0987654321
                    </span>
                  </div>
                  <div className='flex gap-4'>
                    <span className='text-black text-sm font-normal    leading-snug'>
                      Service :
                    </span>
                    <span className='     text-sm font-light    leading-snug'>
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </span>
                  </div>
                  <div className='flex gap-4'>
                    <span className='text-black text-sm font-normal    leading-snug'>
                      Active Since :
                    </span>
                    <span className='     text-sm font-light    leading-snug'>
                      1990
                    </span>
                  </div>
                </div>
              </Card>
            </div>{" "}
          </main>
        </Card>
      </div>
    </div>
  );
}

export default ListOfMembers;
