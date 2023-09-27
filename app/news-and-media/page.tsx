"use client";

import ContactUs from "@/components/NewAndMedia/ContactUs";
import Downloads from "@/components/NewAndMedia/Downloads";
import Event from "@/components/NewAndMedia/Events";
import Gallery from "@/components/NewAndMedia/Gallery";
import LatestNews from "@/components/NewAndMedia/LatestNews";
import PressReleases from "@/components/NewAndMedia/PressReleases";
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
          <Event
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <PressReleases
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <Gallery
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <Downloads
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
          <ContactUs
            setStep={setNumber}
            step={currentPage}
            key={currentPage}
          />,
        ]}
      </SideMenu>
    </main>
  );
}
