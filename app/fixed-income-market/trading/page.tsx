"use client";
import Banner from "@/components/Banner/banner";
import Menu from "@/components/FixedIncomeMarket/Menu";
import TradingMechanism from "@/components/FixedIncomeMarket/Trading/TradingMechanism";
import TradingOverview from "@/components/FixedIncomeMarket/Trading/TradingOverview";
import TradingRules from "@/components/FixedIncomeMarket/Trading/TradingRules";
import { useNumber } from "@/context/nav.context";
import bannerImage from "../../../public/images/about-banner.png";

export default function Home() {
  const { currentPage, setNumber } = useNumber();

  const SelectedPage = () => {
    switch (currentPage) {
      case 0:
        return <TradingOverview />;
      case 1:
        return <TradingMechanism />;
      case 2:
        return <TradingRules />;
      default:
        return <TradingOverview />;
    }
  };

  const resetToHomePage = () => {
    setNumber(0);
  };
  const currentMenu = {
    index: 3,
    name: "Trading",
    menu: [
      {
        name: "Overview",
      },
      { name: "Trading Mechanism" },

      { name: "Trading Rules" },
      // { name: "Listed securities", disabled: true },
      // { name: " Market Data", disabled: true },
      // { name: "Indices", disabled: true },
      // { name: "Market announcements", disabled: true },
      // { name: "Fees and Taxation", disabled: true },
    ],
  };

  const menuItems = currentMenu.menu;

  return (
    <div>
      <Banner backgroundImage={bannerImage} title={"Trading "} />
      <Menu
        items={menuItems}
        step={currentPage}
        setStep={setNumber}
        title={currentMenu.name}
        returnHome={resetToHomePage}
      >
        <SelectedPage />
      </Menu>
    </div>
  );
}
