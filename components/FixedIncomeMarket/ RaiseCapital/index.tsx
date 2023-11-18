"use client";
import React from "react";
import BondIpo from "./Overview";
import ListingRules from "./ListingRules";
// import ListingFAQs from "./ListingFAQs";
import Overview from "./Overview";

const SelectedPage = ({ index }: { index: number }) => {
  switch (index) {
    case 0:
      return <Overview />;
    case 1:
      return <ListingRules />;
    // case 2:
    // return <ListingFAQs />;
    default:
      return <BondIpo />;
  }
};

function RaiseCapital({ index }: { index: number }) {
  return (
    <div className='h-full w-full'>
      <SelectedPage index={index} />
    </div>
  );
}

export default RaiseCapital;
