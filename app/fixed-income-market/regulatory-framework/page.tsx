"use client";
import Banner from "@/components/Banner/banner";
import Menu from "@/components/FixedIncomeMarket/Menu";
import { useNumber } from "@/context/nav.context";
import bannerImage from "../../../public/images/about-banner.png";
import CapitalMarket from "@/components/FixedIncomeMarket/RegulatoryFramework/CapitalMarket";
import ESXRuleBook from "@/components/FixedIncomeMarket/RegulatoryFramework/ESXRuleBook";

export default function Home() {
  const { currentPage, setNumber } = useNumber();

  const SelectedPage = () => {
    switch (currentPage) {
      case 0:
        return (
          <CapitalMarket
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />
        );
      case 1:
        return (
          <ESXRuleBook
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />
        );
      // case 2:
      //   return <ListingFAQs />;
      default:
        return (
          <CapitalMarket
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />
        );
    }
  };

  const resetToHomePage = () => {
    setNumber(0);
  };
  const currentMenu = {
    index: 3,
    name: "Regulatory Framework",
    menu: [
      {
        name: "Capital Market Regulatory Environment",
      },
      { name: "ESX Rulebook" },
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
      <Banner backgroundImage={bannerImage} title={"Regulatory Framework"} />
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
