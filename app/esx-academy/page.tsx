"use client";
import Banner from "@/components/Banner/banner";
import Menu from "@/components/EsxAcademy/Menu";
import { menus } from "@/components/EsxAcademy/MenuData";
import TheAcademy from "@/components/EsxAcademy/TheAcademy";
import { useNumber } from "@/context/nav.context";
import bannerImage from "@/public/images/about-banner.png";
import { useEffect, useState } from "react";

export default function Home() {
  const [mainMenuIndex, setMainMenuIndex] = useState<number>(0);
  const [subMenuIndex, setSubMenuIndex] = useState<number>(0);
  const { currentPage } = useNumber();
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
      // case 1:
      //   return <CoursesAndPrograms />;
      // case 2:
      //   return <EsxTrainingAcademy />;
      // case 3:
      //   return <FAQs />;
      default:
        return <TheAcademy />;
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

  useEffect(() => {
    setMainMenuIndex(currentPage);
  }, [currentPage]);

  return (
    <div className='h-full'>
      <Banner backgroundImage={bannerImage} title='ESX Academy' />
      <Menu
        items={menuItems}
        step={selectedIndex}
        setStep={updateStep}
        title={currentMenu?.name}
        returnHome={resetToHomePage}
      >
        <SelectedPage mainIndex={mainMenuIndex} subIndex={subMenuIndex} />
      </Menu>
    </div>
  );
}
