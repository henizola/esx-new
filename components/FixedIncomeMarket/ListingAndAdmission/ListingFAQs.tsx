import Accordion from "@/components/Accordion/Accordion";
import Card from "@/components/Card/Card";
import React from "react";

function ListingFAQs() {
  return (
    <Card width='w-[100%]'>
      <div className='flex mx-5'>
        <div className='w-[100%] flex flex-col border-b border-[#A8965B] mb-8'>
          <h1 className='text-[32px] font-sans font-normal border-b pt-8 pb-6 mb-7'>
            Frequently asked questions{" "}
          </h1>
          <div className='bg-[#F0F0F0] w-full max-w-full pb-5'>
            <Accordion title={"What is a bond?"}>
              <p className='text-[16px] font-sans font-normal text-[#707377] pt-5 pb-3 px-5 bg-[#F0F0F0]'>
                Bonds are debt securities that are issued by governments and
                corporations as a form of an IOU. An investor lends money to a
                government or company for a set amount of time, in exchange for
                a regular fixed rate of return
              </p>
            </Accordion>
          </div>
          <div className='pb-7'>
            <Accordion
              title={"What is meant by suspension of listing?"}
            ></Accordion>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ListingFAQs;
