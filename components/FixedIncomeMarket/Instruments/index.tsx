"use client";
import CommercialPapers from "./CommercialPapers";
import CorporateBonds from "./CorporateBonds";
import OverView from "./OverView";
import RepurchaseAgreement from "./RepurchaseAgreement";
import TbillsAndBonds from "./TbillsAndBonds";

const SelectedPage = ({ index }: { index: number }) => {
  switch (index) {
    case 0:
      return <OverView />;
    case 1:
      return <TbillsAndBonds />;

    case 2:
      return <CorporateBonds />;
    case 3:
      return <RepurchaseAgreement />;
    case 4:
      return <CommercialPapers />;
    default:
      return <OverView />;
  }
};

const Instruments = ({ index }: { index: number }) => {
  console.log("instruments", SelectedPage({ index }));
  if (SelectedPage({ index })) return <SelectedPage index={index} />;
  else return <OverView />;
};

export default Instruments;
