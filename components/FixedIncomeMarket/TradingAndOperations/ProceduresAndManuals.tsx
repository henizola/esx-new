import React from "react";
import Card from "@/components/Card/Card";
import whoweare from "../../../public/images/who-we-are-circle.png";
import Image from "next/image";

function ProceduresAndManuals() {
  return (
    <Card width='w-[100%]'>
      <div className='flex items-center'>
        <div className='w-[60%] px-5 py-9'>
          <div className='w-[100%] flex flex-col'>
            <h1 className='text-[30px]   font-normal border-b border-[#A8965B] pb-5'>
              Procedures & manuals{" "}
            </h1>
            <p className='w-[90%]  text-[16px]   font-normal mt-2 pt-5 leading-6 text-[#707377]'>
              The Ethiopian Securities Exchange (“ESX”) is Ethiopia’s first, and
              only organized securities exchange. ESX is established as a public
              private partnership inline with Article 31 of the Capital Market
              Proclamation (No.1248/2021), and is licensed by the Ethiopian
              Capital Market Authority (ECMA).
            </p>
          </div>
          <div className='flex justify-center items-center pt-10'>
            <button className=' rounded-lg text-white text-[16px] font-semibold w-fit justify-center align-middle text-center bg-primary-blue py-[2px] px-2 '>
              Procedures and Manuals{" "}
            </button>
          </div>
        </div>
        <div className='w-[38%]'>
          {" "}
          <Image
            height={300}
            width={200}
            src={whoweare.src}
            alt='manager'
            className='w-[100%] border object-cover rounded-full'
          />
        </div>
      </div>
    </Card>
  );
}

export default ProceduresAndManuals;
