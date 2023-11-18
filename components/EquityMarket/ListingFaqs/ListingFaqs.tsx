"use client";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ReactNode, useState } from "react";
import Banner from "../../Banner/banner";
import Card from "../../Card/Card";
import bannerImage from "/public/images/about-banner.png";

const FAQ: React.FC = () => {
  return (
    <div className='flex flex-col w-full p-0 m-0'>
      <Banner backgroundImage={bannerImage} title='FAQ' description='' />
      <div className='grid sm:grid-cols-9 gap-8 lg:px-28 py-7'>
        <div className='col-span-9 space-y-8  w-[100vw] lg:w-[auto]'>
          <Card width='w-[100%] flex gap-4 flex-col  py-[32px] px-10'>
            <h1 className='text-black text-[20px]  lg:text-header font-[500]  border-b-[3px] border-light-golden w-fit '>
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
              <ExpandableCard question='What is an IPO?'>
                An Initial public offering (IPO) is the process of when a
                private corporation offers its shares to the public for the
                first time.
              </ExpandableCard>
              <ExpandableCard question='How long is the IPO process?'>
                Typically 6-9 months - however this depends on the company’s IPO
                readiness (prepared financial statements, company documents
                etc.).
              </ExpandableCard>
              <ExpandableCard question='When is the best time to list/go public?'>
                The right time varies for every company. Generally, a company
                decides to go public when they are in need of funding for
                expansion plans. However, the best time to prepare to go public
                is now. This will allow the company to be ready once they decide
                to go public.
              </ExpandableCard>
              <ExpandableCard question='	What is the secondary market'>
                A secondary market is where investors trade/exchange securities
                such as shares, bonds, ETFs etc. from other investors, rather
                than from issuing companies.
              </ExpandableCard>
            </main>
          </Card>
        </div>
      </div>
      {/* <CustomSlider slides={slides} /> */}
    </div>
  );
};

export default FAQ;

interface ExpandableCardProps {
  question: string;
  className?: string;
  children: string | ReactNode;
}

function ExpandableCard({
  question,
  children,
  className,
}: ExpandableCardProps) {
  const [open, setOpen] = useState(false);
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
