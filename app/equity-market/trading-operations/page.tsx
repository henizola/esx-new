"use client";

import TradingFaqs from "@/components/EquityMarket/TradingOperations/Faq";
import TradingRules from "@/components/EquityMarket/TradingOperations/TradingRules";
import TradingSystem from "@/components/EquityMarket/TradingOperations/TradingSystem";
import SideMenu from "@/components/SideMenu/SideMenu";
import { useNumber } from "@/context/nav.context";

export default function Home() {
  const { currentPage, setNumber } = useNumber();

  return (
    <main className='flex  flex-col items-center p-0'>
      <SideMenu state={currentPage}>
        {[
          <TradingSystem
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <TradingRules
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <TradingFaqs
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          // <ProceduresManual
          //   setStep={setNumber}
          //   step={currentPage}
          //   key={currentPage}
          // />,
        ]}
      </SideMenu>
    </main>
  );
}
