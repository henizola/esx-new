"use client";

import BecomeAMember from "@/components/EquityMarket/members/BecomeAMember";
import MemberList from "@/components/EquityMarket/members/MemberList";
import MembershipRules from "@/components/EquityMarket/members/MembershipRules";
import Overview from "@/components/EquityMarket/members/Overview";

import SideMenu from "@/components/SideMenu/SideMenu";
import { useNumber } from "@/context/nav.context";
export default function Page() {
  const { currentPage, setNumber } = useNumber();

  return (
    <main className='flex  flex-col items-center p-0'>
      <SideMenu state={currentPage}>
        {[
          <Overview setStep={setNumber} step={currentPage} key={currentPage} />,

          <BecomeAMember
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <MembershipRules
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <MemberList
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
        ]}
      </SideMenu>
    </main>
  );
}
