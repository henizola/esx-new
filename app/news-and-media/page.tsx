"use client";

import LatestNews from "@/components/NewAndMedia/LatestNews";
import SideMenu from "@/components/SideMenu/SideMenu";
import { useNumber } from "@/context/nav.context";
export default function Home() {
  const { currentPage, setNumber } = useNumber();

  return (
    <main className="flex  flex-col items-center p-0">
      <SideMenu state={currentPage}>
        {[
          <LatestNews
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
        ]}
      </SideMenu>
    </main>
  );
}
