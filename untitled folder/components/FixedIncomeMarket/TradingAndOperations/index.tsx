"use client";
import React from "react";
import TradingMarketStructure from "./TradingMarketStructure";
import ProceduresAndManuals from "./ProceduresAndManuals";
import TradingFAQ from "./TradingFAQ";
import TradingRules from "./TradingRules";

const SelectedPage = ({ index }: { index: number }) => {
  switch (index) {
    case 0:
      return <TradingMarketStructure />;
    case 1:
      return <TradingRules />;
    case 2:
      return <ProceduresAndManuals />;
    case 3:
      return <TradingFAQ />;
    default:
      return null;
  }
};

function TradingAndOperations({ index }: { index: number }) {
  return (
    <div>
      <SelectedPage index={index} />
    </div>
  );
}

export default TradingAndOperations;
