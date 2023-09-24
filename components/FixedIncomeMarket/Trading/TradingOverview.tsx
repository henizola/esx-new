import React from "react";
import Card from "@/components/Card/Card";
import whoweare from "../../../public/images/who-we-are-circle.png";
import Image from "next/image";
import Link from "next/link";

function TradingOverview() {
  return (
    <Card width="w-[100%] p-4">
      <div className="flex py-10 mx-10 items-center">
        <div className="w-[60%] ">
          <div className="w-[100%] flex  flex-col  mt-6 pt-0">
            <p className="text-[12px] font-sans font-normal mt-0 pb-6">
              Overview{" "}
            </p>
            <h1 className="text-[30px] font-sans font-normal mt-0 pt-0 pb-5 border-b">
              Trading{" "}
            </h1>
            <p className="w-[90%]  text-[16px] font-sans font-normal mt-2 pt-5 leading-6 text-gray">
              Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
              ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie conse
            </p>
            <Link
              href="#"
              className="flex text-[16px] font-semibold mt-5 pb-16"
            >
              View more{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mt-1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="w-[38%] ml-[3%]">
          {" "}
          <Image
            height={300}
            width={200}
            src={whoweare.src}
            alt="manager"
            className="w-[100%] border object-cover"
          />
        </div>
      </div>
    </Card>
  );
}

export default TradingOverview;
