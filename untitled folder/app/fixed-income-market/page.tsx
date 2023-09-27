"use client";
import React, { useState, useEffect } from "react";
import SideMenu from "@/components/SideMenu/SideMenu";
import { useNumber } from "@/context/nav.context";
import Overview from "@/components/FixedIncomeMarket/Overview/Overview";
import Menu from "@/components/FixedIncomeMarket/Menu";
import Instruments from "@/components/FixedIncomeMarket/Instruments";
import CorporateBonds from "@/components/FixedIncomeMarket/Instruments/CorporateBonds";
import bannerImage from "../../public/images/about-banner.png";
import Banner from "@/components/Banner/banner";
import ListingAndAdmission from "@/components/FixedIncomeMarket/ListingAndAdmission";
import { menus } from "@/components/FixedIncomeMarket/menuData";
import Trading from "@/components/FixedIncomeMarket/Trading";
import Members from "@/components/FixedIncomeMarket/Members";
import TradingAndOperations from "@/components/FixedIncomeMarket/TradingAndOperations";

type Page = {
  menu: string[];
  title: string;
};

export default function Home() {
  const [mainMenuIndex, setMainMenuIndex] = useState<number>(0);
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
        return null;
    }
  };

  const resetToHomePage = () => {
    setMainMenuIndex(0);
  };
  const currentMenu = menus[mainMenuIndex];
  const hasSubMenus = currentMenu.menu.length > 0;
  const menuItems = hasSubMenus ? currentMenu.menu : mainMenuItems;
  const updateStep = hasSubMenus ? setSubMenuIndex : setMainMenuIndex;
  const selectedIndex = hasSubMenus ? subMenuIndex : mainMenuIndex;

  useEffect(() => {
    setSubMenuIndex(0);
  }, [mainMenuIndex]);

  return (
    <div>
      <Banner backgroundImage={bannerImage} title="Fixed income market" />
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