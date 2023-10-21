"use client";
import Banner from "@/components/Banner/banner";
import Instruments from "@/components/FixedIncomeMarket/Instruments";
import ListingAndAdmission from "@/components/FixedIncomeMarket/ListingAndAdmission";
import Members from "@/components/FixedIncomeMarket/Members";
import Menu from "@/components/FixedIncomeMarket/Menu";
import Overview from "@/components/FixedIncomeMarket/Overview/Overview";
import Trading from "@/components/FixedIncomeMarket/Trading";
import TradingAndOperations from "@/components/FixedIncomeMarket/TradingAndOperations";
import { menus } from "@/components/FixedIncomeMarket/menuData";
import { useNumber } from "@/context/nav.context";
import { useState } from "react";
import bannerImage from "../../public/images/about-banner.png";

export default function Home() {
  const { currentPage } = useNumber();

  const [mainMenuIndex, setMainMenuIndex] = useState<number>(currentPage);
  const [subMenuIndex, setSubMenuIndex] = useState<number>(0);

  const mainMenuItems = menus.map((menu) => menu.name);

  const SelectedPage = ({
    mainIndex,
    subIndex,
  }: {
    mainIndex: number;
    subIndex: number;
  }) => {
    switch (mainIndex) {
      case 0:
        return <Overview />;
      case 1:
        return <Instruments index={subIndex} />;
      case 2:
        return <ListingAndAdmission index={subIndex} />;
      case 3:
        return <Trading index={subIndex} />;
      case 4:
        return <Members index={subIndex} />;
      case 5:
        return <TradingAndOperations index={subIndex} />;
      default:
        return <Overview />;
    }
  };

  const resetToHomePage = () => {
    setMainMenuIndex(0);
  };
  const currentMenu = menus[mainMenuIndex];
  const hasSubMenus = currentMenu?.menu && currentMenu.menu.length > 0;
  const menuItems = hasSubMenus ? currentMenu.menu : mainMenuItems;
  const updateStep = hasSubMenus ? setSubMenuIndex : setMainMenuIndex;
  const selectedIndex = hasSubMenus ? subMenuIndex : mainMenuIndex;
  const bannerTitle = currentMenu?.menu
    ? currentMenu.menu[selectedIndex]?.title ||
      currentMenu.menu[selectedIndex]?.name
    : "";

  return (
    <div>
      <Banner
        backgroundImage={bannerImage}
        title={bannerTitle || "Fixed income market"}
        description={
          (currentMenu.menu && currentMenu.menu[selectedIndex]?.description) ||
          ""
        }
      />
      <Menu
        items={menuItems}
        step={selectedIndex}
        setStep={updateStep}
        title={currentMenu.name}
        returnHome={resetToHomePage}
      >
        <SelectedPage mainIndex={mainMenuIndex} subIndex={subMenuIndex} />
      </Menu>
    </div>
  );
}
