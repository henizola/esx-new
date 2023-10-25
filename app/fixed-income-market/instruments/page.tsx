"use client";
import Banner from "@/components/Banner/banner";
import CommercialPapers from "@/components/FixedIncomeMarket/Instruments/CommercialPapers";
import CorporateBonds from "@/components/FixedIncomeMarket/Instruments/CorporateBonds";
import OverView from "@/components/FixedIncomeMarket/Instruments/OverView";
import RepurchaseAgreement from "@/components/FixedIncomeMarket/Instruments/RepurchaseAgreement";
import TbillsAndBonds from "@/components/FixedIncomeMarket/Instruments/TbillsAndBonds";
import Menu from "@/components/FixedIncomeMarket/Menu";
import { menus } from "@/components/FixedIncomeMarket/menuData";
import { useNumber } from "@/context/nav.context";
import bannerImage from "../../../public/images/about-banner.png";

export default function Home() {
  const { currentPage, setNumber } = useNumber();

  const SelectedPage = () => {
    switch (currentPage) {
      case 0:
        return <OverView />;
      case 1:
        return <TbillsAndBonds />;

      case 2:
        return <CorporateBonds />;
      case 3:
        return <RepurchaseAgreement />;
      case 4:
        return <CommercialPapers />;
      default:
        return <OverView />;
    }
  };

  const resetToHomePage = () => {
    setNumber(0);
  };
  const currentMenu = {
    index: 1,
    name: "Instruments",
    menu: [
      {
        name: "Overview",
        description: ``,
      },
      {
        name: "Treasury Bills and Bonds",
        description: `- Treasury Bills (T-Bills) are safe , short-term debt securities issued by the Ethiopian government (Ministry of Finance) to investors with a maturity period of one year or less. \n -The National Bank of Ethiopia acts as an agent for the Ministry of Finance and issues T-bills through a market based auction process in the primary market.`,
      },
      {
        name: "Corporate Bonds",
        description: "",
      },
      {
        name: "Repurchase Agreements",
        title: "Repurchase Agreements / Repos",
        description:
          "A repurchase agreement (repo) is a secured short-term form of borrowing (usually 1-7 day term) that involves selling a security with an agreement to repurchase it at a higher price later in the interbank market.",
      },
      {
        name: "Commercial Papers",
        title: "Commercial Papers",
      },
      // { name: "Other Instruments", disabled: true },
    ],
  };

  const menuItems = currentMenu.menu;
  const bannerTitle = currentMenu?.menu
    ? currentMenu.menu[currentPage]?.title ||
      currentMenu.menu[currentPage]?.name
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
