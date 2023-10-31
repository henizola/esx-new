"use client";
import Banner from "@/components/Banner/banner";
import Menu from "@/components/FixedIncomeMarket/Menu";
import ProceduresAndManuals from "@/components/FixedIncomeMarket/TradingAndOperations/ProceduresAndManuals";
import TradingFAQ from "@/components/FixedIncomeMarket/TradingAndOperations/TradingFAQ";
import TradingMarketStructure from "@/components/FixedIncomeMarket/TradingAndOperations/TradingMarketStructure";
import TradingRules from "@/components/FixedIncomeMarket/TradingAndOperations/TradingRules";
import { useNumber } from "@/context/nav.context";
import bannerImage from "../../../public/images/about-banner.png";

export default function Home() {
  const { currentPage, setNumber } = useNumber();

  const SelectedPage = () => {
    switch (currentPage) {
      case 0:
        return <TradingMarketStructure />;
      case 1:
        return <TradingRules />;
      case 2:
        return <ProceduresAndManuals />;
      case 3:
        return <TradingFAQ />;
      default:
        return <TradingMarketStructure />;
    }
  };

  const resetToHomePage = () => {
    setNumber(0);
  };
  const currentMenu = {
    index: 5,
    name: "Trading and Operations",
    menu: [
      {
        name: "Trading Market Structure",
        description:
          "“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse",
      },
      {
        name: "Trading Rules",
        description:
          "“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse",
      },
      {
        name: "Procedures & Manuals",
        title: "Procedures and manuals",
        description:
          "“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse",
      },
      {
        name: "Trading FAQ",
        title: "Frequently asked questions",
      },
      // { name: "Trading Platform", disabled: true },
    ],
  };

  const menuItems = currentMenu.menu;
  const bannerTitle = currentMenu?.menu
    ? currentMenu.menu[currentPage]?.name
    : "";

  return (
    <div>
      <Banner backgroundImage={bannerImage} title={"Trading and Operations"} />
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
