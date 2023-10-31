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
    name: "Listing and Admission to Trading",
    href: "/fixed-income-market/listing-and-admission-to-trading",
  },
  {
    index: 3,
    name: "Trading",
    href: "/fixed-income-market/trading",
  },
  {
    index: 4,
    name: "Members",
    href: "/fixed-income-market/members",
  },
  {
    index: 5,
    name: "Trading and Operations",
    href: "/fixed-income-market/trading-and-operations",
  },
  {
    index: 6,
    name: "Regulatory Framework",
    href: "/equity-market/regulatory-framework",
    menu: [],
    disabled: true,
  },
];
