"use client";

import ContactUs from "@/components/NewAndMedia/ContactUs";
import { useNumber } from "@/context/nav.context";
export default function Home() {
  const { currentPage, setNumber } = useNumber();

  return (
    <main className='flex  flex-col items-center p-0'>
      <ContactUs setStep={setNumber} step={currentPage} key={currentPage} />
    </main>
  );
}
