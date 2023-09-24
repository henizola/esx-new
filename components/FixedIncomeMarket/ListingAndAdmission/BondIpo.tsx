"use client";
import React from "react";
import Card from "@/components/Card/Card";
import whoweare from "../../../public/images/who-we-are-circle.png";
import Link from "next/link";
import Image from "next/image";

const BondIpo = () => {
  return (
    <Card width="w-[100%] p-4">
      <div className="flex py-10 mx-10">
        <div className="w-[60%] ">
          <div className="w-[100%] flex  flex-col  mt-6 pt-0">
            <h1 className="text-[30px] font-sans font-normal mt-0 pt-0">
              Who We Are
            </h1>

            <p className="w-[90%]  text-[16px] font-sans font-normal mt-2 pt-0 leading-6 text-gray">
              The Ethiopian Securities Exchange (“ESX”) is Ethiopia’s first, and
              only organized securities exchange. ESX is established as a public
              private partnership inline with Article 31 of the Capital Market
              Proclamation (No.1248/2021), and is licensed by the Ethiopian
              Capital Market Authority (ECMA).
            </p>
            <Link href="#" className="flex text-[16px] mt-10">
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
            className="w-[100%] border object-cover rounded-full  border-"
          />
        </div>
      </div>
    </Card>
  );
};

export default BondIpo;
