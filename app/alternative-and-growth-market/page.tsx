"use client";

import BenefitsForIssuers from "@/components/AlternativeAndGrowth/BenefitsForIssuers/page";
import CroudCrowdex from "@/components/AlternativeAndGrowth/Crowdex/page";
import Investors from "@/components/AlternativeAndGrowth/Investors/page";
import Issuers from "@/components/AlternativeAndGrowth/Issuers/page";
import AlternativeAndGrowth from "@/components/AlternativeAndGrowth/OverView/page";
import SideMenu from "@/components/SideMenu/SideMenu";
import { useNumber } from "@/context/nav.context";

export default function Page() {
  const { currentPage, setNumber } = useNumber();

  return (
    <main className='flex  flex-col items-center p-0'>
      <SideMenu state={currentPage}>
        {[
          <AlternativeAndGrowth
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <CroudCrowdex
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <BenefitsForIssuers
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <Issuers setStep={setNumber} step={currentPage} key={currentPage} />,
          <Investors
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
        ]}
      </SideMenu>
    </main>
  );
}
