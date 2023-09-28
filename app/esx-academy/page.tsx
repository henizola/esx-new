"use client";
import React, { useState, useEffect } from "react";
import Menu from "@/components/EsxAcademy/Menu";
import bannerImage from "@/public/images/about-banner.png";
import Banner from "@/components/Banner/banner";
import { menus } from "@/components/EsxAcademy/MenuData";
import TheAcademy from "@/components/EsxAcademy/TheAcademy";
import CoursesAndPrograms from "@/components/EsxAcademy/CoursesAndPrograms";
import EsxTrainingAcademy from "@/components/EsxAcademy/EsxTrainingAcademy";
import FAQs from "@/components/EsxAcademy/FAQs";

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
        return <TheAcademy />;
      case 1:
        return <CoursesAndPrograms />;
      case 2:
        return <EsxTrainingAcademy />;
      case 3:
        return <FAQs />;
      default:
        return null;
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

  useEffect(() => {
    setSubMenuIndex(0);
  }, [mainMenuIndex]);
  return (
    <div className="h-full">
      <Banner
        backgroundImage={bannerImage}
        title={currentMenu.bannerName || currentMenu.name}
        description={currentMenu.description}
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
