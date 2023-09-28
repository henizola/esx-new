"use client";
import React, { useState } from "react";
import TbillsAndBonds from "./TbillsAndBonds";
import CorporateBonds from "./CorporateBonds";
import RepurchaseAgreement from "./RepurchaseAgreement";

const SelectedPage = ({ index }: { index: number }) => {
  switch (index) {
    case 0:
      return <TbillsAndBonds />;

    case 1:
      return <CorporateBonds />;
    case 2:
      return <RepurchaseAgreement />;
    default:
      return null;
  }
};

const Instruments = ({ index }: { index: number }) => {
  console.log("instruments", SelectedPage({ index }));
  if (SelectedPage({ index })) return <SelectedPage index={index} />;
  else return null;
};

export default Instruments;
