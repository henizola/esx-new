import React, { ReactNode, useState } from "react";
import Accordion from "@/components/Accordion/Accordion";
import Card from "@/components/Card/Card";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function TradingFAQ() {
  return (
    <Card width='w-[100%] flex gap-4 flex-col  py-[32px] pt-5 px-10'>
      <h1 className='text-black text-[20px]  lg:text-header font-[500]  border-b-[3px] border-light-golden w-fit text-left '>
        Frequently asked questions
      </h1>
      {/* <p className='text-black text-[12px] lg:text-base lg:font-normal    leading-snug'>
      Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet,
      consectetuer adipiscing elit, sed diam nonummy nibh euisLorem
      ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
      nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
      erat
    </p> */}
      {/* <div className='w-full h-[0.5px] border bg-black opacity-50'></div> */}
      <main className=' lg:space-y-0'>
        <ExpandableCard
          opened={true}
          question='What are the benefits of trading in fixed income ?'
        >
          Some of the benefits of investing include income earned through
          dividends, protection of saving from the effects of inflation, capital
          gains, and diversification.
        </ExpandableCard>
        <ExpandableCard question='How do I start trading ?'>
          Answer
        </ExpandableCard>
      </main>
    </Card>
  );
}

export default TradingFAQ;

interface ExpandableCardProps {
  question: string;
  className?: string;
  children: string | ReactNode;
  opened?: boolean;
}

function ExpandableCard({
  opened,
  question,
  children,
  className,
}: ExpandableCardProps) {
  const [open, setOpen] = useState(opened ?? false);
  return (
    <div
      onClick={() => setOpen((prev) => !prev)}
      className={` ${
        open ? "bg-gray/10 " : " lg:pb-[0px] "
      }  lg:px-[20px] lg:pt-[12px]  flex flex-col gap-4 transition-all  border-b border-gray   ${className}`}
    >
      <div className='rounded flex justify-between items-center'>
        <h1 className='text-black text-[14px] lg:text-paragraphSmall not-italic font-normal leading-[normal] '>
          {question}
        </h1>
        <ChevronDownIcon
          className={`w-10 h-10 p-2 rounded-full hover:bg-white/80 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      {open && <span className='pb-[52px]'>{children}</span>}
    </div>
  );
}
