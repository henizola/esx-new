"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of your context data
interface NavContextData {
  currentPage: number;
  setNumber: (newNumber: number) => void;
}

// Create the context
export const NavContext = createContext<NavContextData | undefined>(undefined);

// Create a custom hook to access the context
export function useNumber() {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNumber must be used within a NumberProvider");
  }
  return context;
}

// Create a provider component
interface NumberProviderProps {
  children: ReactNode;
}

export function NumberProvider({ children }: NumberProviderProps) {
  const [currentPage, setCurrentPage] = useState(5);

  const setNumber = (number: number) => {
    setCurrentPage(number);
  };

  const value: NavContextData = {
    currentPage,
    setNumber,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}
