"use client";

import ListingFaqs from "@/components/EquityMarket/ListingFaqs/ListingFaqs";
import ListingRules from "@/components/EquityMarket/ListingRules/ListingRules";
import MarketSegment from "@/components/EquityMarket/MarketSegment/MarketSegment";
import Overview from "@/components/EquityMarket/OverView/Overview";
import SideMenu from "@/components/SideMenu/SideMenu";
import BoardMembers from "@/components/WhoWeAre/BoardMembers/BoardMembers";
import Careers from "@/components/WhoWeAre/Careers/Careers";
import Management from "@/components/WhoWeAre/Management/Management";
import Organization from "@/components/WhoWeAre/Organization/Organization";
import Reports from "@/components/WhoWeAre/Reports/Reports";
import Tenders from "@/components/WhoWeAre/Tender/Tender";
import Vision from "@/components/WhoWeAre/Vision/Vision";
import { useNumber } from "@/context/nav.context";
export default function Home() {
  const { currentPage, setNumber } = useNumber();

  return (
    <main className='flex  flex-col items-center p-0'>
      <SideMenu state={currentPage}>
        {[
          <Overview setStep={setNumber} step={currentPage} key={currentPage} />,
          // <MarketSegment
          //   setStep={setNumber}
          //   step={currentPage}
          //   key={currentPage}
          // />,
          <ListingRules
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <ListingFaqs
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
        ]}
      </SideMenu>
    </main>
  );
}
