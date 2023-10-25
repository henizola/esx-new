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
import HowToBecomeMember from "@/components/FixedIncomeMarket/Members/HowToBecomeMember";
import MembershipRules from "@/components/FixedIncomeMarket/Members/MembershipRules";
import ListOfMembers from "@/components/FixedIncomeMarket/Members/ListOfMembers";

export default function Home() {
  const { currentPage, setNumber } = useNumber();

  const SelectedPage = () => {
    switch (currentPage) {
      case 0:
        return <HowToBecomeMember />;
      case 1:
        return <MembershipRules />;
      case 2:
        return <ListOfMembers />;
      default:
        return <HowToBecomeMember />;
    }
  };

  const resetToHomePage = () => {
    setNumber(0);
  };
  const currentMenu = {
    index: 4,
    name: "Members",
    menu: [
      {
        name: "How to Become a Member",
        description:
          "“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse",
      },
      {
        name: "Membership Rules",
        description:
          "“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse",
      },
      {
        name: "List of Members",
        description:
          "“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse",
      },
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
