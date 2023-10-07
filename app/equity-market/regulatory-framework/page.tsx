"use client";

import CapitalMarket from "@/components/EquityMarket/RegulatoryFramework/CapitalMarket";
import ESXRuleBook from "@/components/EquityMarket/RegulatoryFramework/ESXRuleBook";
import SideMenu from "@/components/SideMenu/SideMenu";
import { useNumber } from "@/context/nav.context";

export default function Home() {
  const { currentPage, setNumber } = useNumber();

  return (
    <main className='flex  flex-col items-center p-0'>
      <SideMenu state={currentPage}>
        {[
          <CapitalMarket
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <ESXRuleBook
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
        ]}
      </SideMenu>
    </main>
  );
}
