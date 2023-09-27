"use client";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";

export function BackButton({
  link, setStep, children,
}: {
  link: string;
  setStep: (value: number) => void;
  children: ReactNode;
}) {
  const { push } = useRouter();
  return (
    <button
      onClick={() => {
        push(link);
        setStep(0);
      }}
    >
      {children}
    </button>
  );
}
