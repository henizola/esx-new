"use client";
import Banner from "@/components/Banner/banner";
import BondIpo from "@/components/FixedIncomeMarket/ListingAndAdmission/BondIpo";
import ListingFAQs from "@/components/FixedIncomeMarket/ListingAndAdmission/ListingFAQs";
import ListingRules from "@/components/FixedIncomeMarket/ListingAndAdmission/ListingRules";
import Menu from "@/components/FixedIncomeMarket/Menu";
import { useNumber } from "@/context/nav.context";
import bannerImage from "../../../public/images/about-banner.png";
import TradingOverview from "@/components/FixedIncomeMarket/Trading/TradingOverview";
import FindBroker from "@/components/FixedIncomeMarket/Trading/FindBroker";

export default function Home() {
  const { currentPage, setNumber } = useNumber();

  const SelectedPage = () => {
    switch (currentPage) {
      case 0:
        return <TradingOverview />;
      case 1:
        return <FindBroker />;
      // case 2:
      //   return <ListingFAQs />;
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
      { name: "Find a Broker" },
      // { name: "Listed securities", disabled: true },
      // { name: " Market Data", disabled: true },
      // { name: "Indices", disabled: true },
      // { name: "Market announcements", disabled: true },
      // { name: "Fees and Taxation", disabled: true },
    ],
  };

  const menuItems = currentMenu.menu;
  const bannerTitle = currentMenu?.menu
    ? currentMenu.menu[currentPage]?.name
    : "";

  return (
    <div>
      <Banner
        backgroundImage={bannerImage}
        title={bannerTitle || "Fixed income market"}
      />
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
