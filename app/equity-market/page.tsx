"use client";

import EquityMarketOverview from "@/components/EquityMarket/EquityMarketOverview";
import ListingRules from "@/components/EquityMarket/ListingRules/ListingRules";
import SideMenu from "@/components/SideMenu/SideMenu";
import { useNumber } from "@/context/nav.context";
export default function Home() {
  const { currentPage, setNumber } = useNumber();

  return (
    <main className='flex  flex-col items-center p-0'>
      <SideMenu state={currentPage}>
        {[
          <EquityMarketOverview
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <ListingRules
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,

          // <ListingFaqs
          //   setStep={setNumber}
          //   step={currentPage}
          //   key={currentPage}
          // />,
        ]}
      </SideMenu>
    </main>
  );
}
