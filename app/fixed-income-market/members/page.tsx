"use client";
import Banner from "@/components/Banner/banner";
import HowToBecomeMember from "@/components/FixedIncomeMarket/Members/HowToBecomeMember";
import ListOfMembers from "@/components/FixedIncomeMarket/Members/ListOfMembers";
import MembershipRules from "@/components/FixedIncomeMarket/Members/MembershipRules";
import Menu from "@/components/FixedIncomeMarket/Menu";
import { useNumber } from "@/context/nav.context";
import bannerImage from "../../../public/images/about-banner.png";

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
