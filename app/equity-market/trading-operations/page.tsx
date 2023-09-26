"use client";

import EquityMarketOverview from "@/components/EquityMarket/EquityMarketOverview";
import ListingFaqs from "@/components/EquityMarket/ListingFaqs/ListingFaqs";
import ListingRules from "@/components/EquityMarket/ListingRules/ListingRules";
import MarketSegment from "@/components/EquityMarket/MarketSegment/MarketSegment";
import MembersDirectory from "@/components/EquityMarket/Trade/MembersDirectory";
import TradeOnESX from "@/components/EquityMarket/Trade/TradeOnESX";
import TradingFaqs from "@/components/EquityMarket/TradingOperations/Faq";
import ProceduresManual from "@/components/EquityMarket/TradingOperations/ProceduresManual";
import TradingRules from "@/components/EquityMarket/TradingOperations/TradingRules";
import TradingSystem from "@/components/EquityMarket/TradingOperations/TradingSystem";
import BecomeAMember from "@/components/EquityMarket/members/BecomeAMember";
import MemberList from "@/components/EquityMarket/members/MemberList";
import MembershipRules from "@/components/EquityMarket/members/MembershipRules";
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
    <main className="flex  flex-col items-center p-0">
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
          <ProceduresManual
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <TradingFaqs
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
        ]}
      </SideMenu>
    </main>
  );
}
