"use client";

import BecomeAMember from "@/components/EquityMarket/members/BecomeAMember";
import MemberList from "@/components/EquityMarket/members/MemberList";
import MembershipRules from "@/components/EquityMarket/members/MembershipRules";
import SideMenu from "@/components/SideMenu/SideMenu";
import { useNumber } from "@/context/nav.context";
export default function Home() {
  const { currentPage, setNumber } = useNumber();

  return (
    <main className='flex  flex-col items-center p-0'>
      <SideMenu state={currentPage}>
        {[
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
