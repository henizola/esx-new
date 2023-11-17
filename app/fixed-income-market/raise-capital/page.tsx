"use client";
import Banner from "@/components/Banner/banner";
import Overview from "@/components/FixedIncomeMarket/ RaiseCapital/Overview";
// import BondIpo from "@/components/FixedIncomeMarket/ListingAndAdmission/BondIpo";
// import ListingFAQs from "@/components/FixedIncomeMarket/ListingAndAdmission/ListingFAQs";
// import ListingRules from "@/components/FixedIncomeMarket/ListingAndAdmission/ListingRules";
import Menu from "@/components/FixedIncomeMarket/Menu";
import { useNumber } from "@/context/nav.context";
import bannerImage from "../../../public/images/about-banner.png";
import FixedIncomeListingProcess from "@/components/FixedIncomeMarket/ RaiseCapital/FixedIncomeListingProcess";
import FixedIncomeListingRules from "@/components/FixedIncomeMarket/ RaiseCapital/FixedIncomeListingRules";

export default function Home() {
  const { currentPage, setNumber } = useNumber();

  const SelectedPage = () => {
    switch (currentPage) {
      case 0:
        return <Overview />;
      case 1:
        return <FixedIncomeListingProcess />;
      case 2:
        return <FixedIncomeListingRules />;
      default:
        return <Overview />;
    }
  };

  const resetToHomePage = () => {
    setNumber(0);
  };
  const currentMenu = {
    index: 2,
    name: "Raise Capital",
    menu: [
      {
        name: "Overview",
        title: "Raise Capital",
      },
      {
        name: "Fixed Income Listing Process",
        title: "Raise Capital",
      },
      {
        name: "Fixed Income Listing Rules",
        title: "Raise Capital",
      },
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
