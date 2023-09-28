"use client";
import React from "react";
import FindBroker from "./FindBroker";
import TradingOverview from "./TradingOverview";
// import ListingRules from "./ListingRules";
// import ListingFAQs from "./ListingFAQs";

const SelectedPage = ({ index }: { index: number }) => {
  switch (index) {
    case 0:
      return <TradingOverview />;
    case 1:
      return <FindBroker />;
    // case 2:
    //   return <ListingFAQs />;
    default:
      return null;
  }
};

function Trading({ index }: { index: number }) {
  return (
    <div className="h-full">
      <SelectedPage index={index} />
    </div>
  );
}

export default Trading;
