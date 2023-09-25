import React, { ReactNode } from "react";

interface SideMenuProps {
  children: ReactNode[];
  state: number;
}

const SideMenu: React.FC<SideMenuProps> = ({ children, state }) => {
  const renderedChild = children[state];
  return <>{renderedChild}</>;
};

export default SideMenu;
