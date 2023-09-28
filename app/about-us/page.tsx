"use client";

import SideMenu from "@/components/SideMenu/SideMenu";
import BoardMembers from "@/components/WhoWeAre/BoardMembers/BoardMembers";
import Careers from "@/components/WhoWeAre/Careers/Careers";
import Management from "@/components/WhoWeAre/Management/Management";
import Organization from "@/components/WhoWeAre/Organization/Organization";
import OverView from "@/components/WhoWeAre/Overview/Overview";
import Reports from "@/components/WhoWeAre/Reports/Reports";
import Tenders from "@/components/WhoWeAre/Tender/Tender";
import Vision from "@/components/WhoWeAre/Vision/Vision";
import WelcomeMessage from "@/components/WhoWeAre/WelcomeMessage/WelcomeMessage";
import { useNumber } from "@/context/nav.context";

export default function Home() {
  const { currentPage, setNumber } = useNumber();

  return (
    <main className='flex  flex-col items-center p-0'>
      <SideMenu state={currentPage}>
        {[
          <WelcomeMessage
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <OverView setStep={setNumber} step={currentPage} key={currentPage} />,
          <Vision setStep={setNumber} step={currentPage} key={currentPage} />,
          <Organization
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <BoardMembers
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <Management
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <Reports setStep={setNumber} step={currentPage} key={currentPage} />,
          <Careers setStep={setNumber} step={currentPage} key={currentPage} />,
          <Tenders setStep={setNumber} step={currentPage} key={currentPage} />,
        ]}
      </SideMenu>
    </main>
  );
}
