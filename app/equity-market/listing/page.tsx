"use client";

import ListingFaqs from "@/components/EquityMarket/ListingFaqs/ListingFaqs";
import ListingForms from "@/components/EquityMarket/ListingForms/ListingForms";
import ListingRules from "@/components/EquityMarket/ListingRules/ListingRules";
import MarketSegment from "@/components/EquityMarket/MarketSegment/MarketSegment";
import Overview from "@/components/EquityMarket/OverView/Overview";
import SideMenu from "@/components/SideMenu/SideMenu";
import { useNumber } from "@/context/nav.context";
export default function Page() {
  const { currentPage, setNumber } = useNumber();

  return (
    <main className='flex  flex-col items-center p-0'>
      <SideMenu state={currentPage}>
        {[
          <Overview setStep={setNumber} step={currentPage} key={currentPage} />,
          <MarketSegment
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <ListingRules
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <ListingForms
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
        ]}
      </SideMenu>
    </main>
  );
}
