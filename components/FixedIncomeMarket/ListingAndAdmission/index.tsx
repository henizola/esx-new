"use client";
import React from "react";
import BondIpo from "./BondIpo";

const SelectedPage = ({ index }: { index: number }) => {
  switch (index) {
    case 0:
      return <BondIpo />;
    case 1:

    case 2:

    default:
      return null;
  }
};

function ListingAndAdmission({ index }: { index: number }) {
  return (
    <div>
      <SelectedPage index={index} />
    </div>
  );
}

export default ListingAndAdmission;
