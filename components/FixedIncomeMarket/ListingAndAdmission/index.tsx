"use client";
import React from "react";
import BondIpo from "./BondIpo";
import ListingRules from "./ListingRules";
import ListingFAQs from "./ListingFAQs";

const SelectedPage = ({ index }: { index: number }) => {
  switch (index) {
    case 0:
      return <BondIpo />;
    case 1:
      return <ListingRules />;
    case 2:
      return <ListingFAQs />;
    default:
      return <BondIpo />;
  }
};

function ListingAndAdmission({ index }: { index: number }) {
  return (
    <div className='h-full w-full'>
      <SelectedPage index={index} />
    </div>
  );
}

export default ListingAndAdmission;
