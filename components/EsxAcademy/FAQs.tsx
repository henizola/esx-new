import React from "react";
import Card from "../Card/Card";
import Accordion from "../Accordion/Accordion";

function FAQs() {
  return (
    <Card width='w-[100%]'>
      <div className='flex'>
        <div className='w-[100%] flex flex-col mb-8 mx-5'>
          <h1 className='text-[32px] font-sans font-normal border-b pt-8 pb-6 mb-7'>
            Frequently asked questions{" "}
          </h1>
          <p className='text-[16px] font-sans font-normal pb-7 border-b'>
            Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum
            dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam erat
          </p>
          <div className='w-full max-w-full text-[#707377] text-[16px] font-sans font-normal border-[#707377] border-b py-4 my-4'>
            <Accordion
              title={"Lorem ipsum dolor sit amet?"}
              background={"bg-[#F0F0F0]"}
            >
              {" "}
              <p className='text-[16px] font-sans font-normal text-[#707377] px-5'>
                Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
              </p>
            </Accordion>
          </div>
          <div className='w-full max-w-full text-[#707377] text-[16px] font-sans font-normal border-[#707377] border-b py-4 my-4'>
            <Accordion
              title={"Lorem ipsum dolor sit amet?"}
              background={"bg-[#F0F0F0]"}
            >
              {" "}
              <p className='text-[16px] font-sans font-normal text-[#707377] px-5'>
                Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
              </p>
            </Accordion>
          </div>
          <div className='w-full max-w-full text-[#707377] text-[16px] font-sans font-normal border-[#707377] border-b py-4 my-4'>
            <Accordion
              title={"Lorem ipsum dolor sit amet, consecLorem?"}
              background={"bg-[#F0F0F0]"}
            >
              <p className='text-[16px] font-sans font-normal text-[#707377] px-5'>
                Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
              </p>
            </Accordion>
          </div>
          <div className='w-full max-w-full text-[#707377] text-[16px] font-sans font-normal border-[#707377] border-b py-4 my-4'>
            <Accordion
              title={"Lorem ipsum dolor sit amet?"}
              background={"bg-[#F0F0F0]"}
            >
              {" "}
              <p className='text-[16px] font-sans font-normal text-[#707377] px-5'>
                Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
              </p>
            </Accordion>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default FAQs;
