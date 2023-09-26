import React from "react";
// import whoweare from "../../../public/images/who-we-are-circle.png";
import listofmember1 from "@/public/images/list-of-member1.png";
import listofmember2 from "@/public/images/list-of-member2.jpeg";
import listofmember3 from "@/public/images/list-of-member3.jpeg";
import Image from "next/image";

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
      <h1 className="text-[32px] px-5 py-5 text-left text-white w-[100%] bg-primary-blue font-sans font-light ">
        Membership rules{" "}
      </h1>
      <div className="max-h-[500px] overflow-scroll w-full">
        {members.map((member, index) => {
          return (
            <div className="flex w-full my-5" key={index}>
              <div className="w-[26%] mr-1">
                {" "}
                <Image
                  height={200}
                  width={200}
                  src={member.img}
                  alt="listofmembers"
                  className="w-[100%] h-[100%] border object-cover"
                />
              </div>
              <div className="bg-white ml-1 px-5 py-3 w-[74%]">
                <h1 className="py-5 font-normal text-[32px] font-sans">
                  {member.title}
                </h1>
                <div className="py-1 font-normal text-[14px] font-sans text-gray">
                  <div className="flex">
                    <h4 className="text-black pr-2">Email:</h4>
                    <p>{member.email}</p>
                  </div>
                  <div className="flex">
                    <h4 className="text-black pr-2">Website:</h4>
                    <p>{member.website}</p>
                  </div>
                  <div className="flex">
                    <h4 className="text-black pr-2">Tel:</h4>
                    <p>{member.tel}</p>
                  </div>
                  <div className="flex">
                    <h4 className="text-black pr-2">Services:</h4>
                    <p>{member.services}</p>
                  </div>
                  <div className="flex">
                    <h4 className="text-black pr-2">Active Since:</h4>
                    <p>{member.activeSince}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListOfMembers;
