"use client";

import MembersDirectory from "@/components/EquityMarket/Trade/MembersDirectory";
import TradeOnESX from "@/components/EquityMarket/Trade/TradeOnESX";
import SideMenu from "@/components/SideMenu/SideMenu";
import { useNumber } from "@/context/nav.context";
export default function Home() {
  const { currentPage, setNumber } = useNumber();

  return (
    <main className='flex  flex-col items-center p-0'>
      <SideMenu state={currentPage}>
        {[
          <TradeOnESX
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <MembersDirectory
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
        ]}
      </SideMenu>
    </main>
  );
}
