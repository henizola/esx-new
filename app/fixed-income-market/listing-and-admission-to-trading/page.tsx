"use client";
// import Banner from "@/components/Banner/banner";
// import BondIpo from "@/components/FixedIncomeMarket/ListingAndAdmission/BondIpo";
// import ListingFAQs from "@/components/FixedIncomeMarket/ListingAndAdmission/ListingFAQs";
// import ListingRules from "@/components/FixedIncomeMarket/ListingAndAdmission/ListingRules";
// import Menu from "@/components/FixedIncomeMarket/Menu";
// import { useNumber } from "@/context/nav.context";
// import bannerImage from "../../../public/images/about-banner.png";

export default function Home() {
  // const { currentPage, setNumber } = useNumber();

  // const SelectedPage = () => {
  //   switch (currentPage) {
  //     case 0:
  //       return <BondIpo />;
  //     case 1:
  //       return <ListingRules />;
  //     case 2:
  //       return <ListingFAQs />;
  //     default:
  //       return <BondIpo />;
  //   }
  // };

  // const resetToHomePage = () => {
  //   setNumber(0);
  // };
  // const currentMenu = {
  //   index: 2,
  //   name: "Listing and Admission to Trading",
  //   menu: [
  //     {
  //       name: "Bond IPO /Debt Public Issue Listing rules",
  //       title: "Bond IPO / Debt Public Issue",
  //     },
  //     {
  //       name: "Listing Rules, Requirements, Benefits ",
  //       description:
  //         "“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse",
  //     },
  //     { name: "Listing FAQs", title: "Frequently asked questions" },
  //   ],
  // };

  // const menuItems = currentMenu.menu;
  // const bannerTitle = currentMenu?.menu
  //   ? currentMenu.menu[currentPage]?.title ||
  //     currentMenu.menu[currentPage]?.name
  //   : "";

  return (
    <div>
      {/* <Banner
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
      </Menu> */}
    </div>
  );
}
