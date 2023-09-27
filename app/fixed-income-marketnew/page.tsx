"use client";

import BoardMembers from "@/components/BoardMembers/BoardMembers";
import Careers from "@/components/Careers/Careers";
import Overview1 from "@/components/FixedIncomeMarket/Overview1/Overview1";
import Management from "@/components/Management/Management";
import Organization from "@/components/Organization/Organization";
import Reports from "@/components/Reports/Reports";
import SideMenu from "@/components/SideMenu/SideMenu";
import Tenders from "@/components/Tender/Tender";
import Vision from "@/components/Vision/Vision";
import WelcomeMessage from "@/components/WelcomeMessage/WelcomeMessage";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import { useNumber } from "@/context/nav.context";

export default function Home() {
  const { number, setNumber } = useNumber();

  return (
    <main className='flex  flex-col items-center p-0'>
      <SideMenu state={number}>
        {[
          <Overview1 setStep={setNumber} step={number} key={number} />,
          <WhoWeAre setStep={setNumber} step={number} key={number} />,
          <Vision setStep={setNumber} step={number} key={number} />,
          <Organization setStep={setNumber} step={number} key={number} />,
          <BoardMembers setStep={setNumber} step={number} key={number} />,
          <Management setStep={setNumber} step={number} key={number} />,
          <Reports setStep={setNumber} step={number} key={number} />,
          <Careers setStep={setNumber} step={number} key={number} />,
          <Tenders setStep={setNumber} step={number} key={number} />,
        ]}
      </SideMenu>
    </main>
  );
}
