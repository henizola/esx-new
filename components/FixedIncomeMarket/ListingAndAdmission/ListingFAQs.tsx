import Accordion from "@/components/Accordion/Accordion";
import Card from "@/components/Card/Card";
import React from "react";

function ListingFAQs() {
  return (
    <Card width="w-[100%] p-4 ">
      <div className="flex py-10 mx-10">
        <div className="w-[100%] flex  flex-col  mt-6 pt-0">
          <h1 className="text-[30px] font-sans font-normal border-b pb-3">
            Frequently asked questions{" "}
          </h1>
          <div className="bg-[#F0F0F0] mt-7 w-full max-w-full">
            <Accordion
              title={"What is a bond?"}
              children={
                <p className="text-[16px] font-sans font-normal pt-5 pb-3 px-5 bg-[#F0F0F0]">
                  Bonds are debt securities that are issued by governments and
                  corporations as a form of an IOU. An investor lends money to a
                  government or company for a set amount of time, in exchange
                  for a regular fixed rate of return
                </p>
              }
            ></Accordion>
          </div>
          <Accordion
            title={"What is meant by suspension of listing?"}
          ></Accordion>
        </div>
      </div>
    </Card>
  );
}

export default ListingFAQs;
