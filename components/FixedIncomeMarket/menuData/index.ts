type SubMenu = {
  name?: string;
  description?: string;
  title?: string;
  disabled?: any;
  href: string;
} | null;
type Menu = {
  index: number;
  name: string;
  menu?: SubMenu[];
  disabled?: any;
  href: string;
};

export const menus: Menu[] = [
  {
    index: 0,
    name: "Overview",
    href: "/fixed-income-market",
    menu: [],
  },
  {
    index: 1,
    name: "Instruments",
    href: "/fixed-income-market/instruments",
  },
  {
    index: 2,
    name: "Raise Capital",
    href: "/fixed-income-market/raise-capital",
  },
  {
    index: 3,
    name: "Trading",
    href: "/fixed-income-market/trading",
  },
  // {
  //   index: 4,
  //   name: "Members",
  //   href: "/fixed-income-market/members",
  // },
  {
    index: 4,
    name: "Trading and Operations",
    href: "/fixed-income-market/trading-and-operations",
  },
  {
    index: 5,
    name: "Regulatory Framework",
    href: "/fixed-income-market/regulatory-framework",
    menu: [],
    disabled: true,
  },
];
