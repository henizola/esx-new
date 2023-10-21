type SubMenu = {
  name?: string;
  description?: string;
  title?: string;
  disabled?: any;
} | null;
type Menu = {
  index: number;
  name: string;
  menu?: SubMenu[];
  disabled?: any;
};

export const menus: Menu[] = [
  {
    index: 0,
    name: "Overview",
    menu: [],
  },
  {
    index: 1,
    name: "Instruments",
    menu: [
      {
        name: "T-Bills and Bonds",
        description: `- Treasury Bills (T-Bills) are safe , short-term debt securities issued by the Ethiopian government (Ministry of Finance) to investors with a maturity period of one year or less. \n -The National Bank of Ethiopia acts as an agent for the Ministry of Finance and issues T-bills through a market based auction process in the primary market.`,
      },
      {
        name: "Corporate Bonds",
        description: "",
      },
      {
        name: "Repurchase Agreements",
        title: "Repurchase Agreements / Repos",
        description:
          "A repurchase agreement (repo) is a secured short-term form of borrowing (usually 1-7 day term) that involves selling a security with an agreement to repurchase it at a higher price later in the interbank market.",
      },
      {
        name: "Commercial Papers",
        title: "Commercial Papers",
      },
      // { name: "Other Instruments", disabled: true },
    ],
  },
  {
    index: 2,
    name: "Listing and Admission to Trading",
    menu: [
      {
        name: "Bond IPO /Debt Public Issue Listing rules",
        title: "Bond IPO / Debt Public Issue",
      },
      {
        name: "Listing Rules, Requirements, Benefits ",
        description:
          "“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse",
      },
      { name: "Listing FAQs", title: "Frequently asked questions" },
    ],
  },
  {
    index: 3,
    name: "Trading",
    menu: [
      {
        name: "Trading Overview",
        description:
          "“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse",
      },
      { name: "Find a Broker" },
      { name: "Listed securities", disabled: true },
      { name: " Market Data", disabled: true },
      { name: "Indices", disabled: true },
      { name: "Market announcements", disabled: true },
      { name: "Fees and Taxation", disabled: true },
    ],
  },
  {
    index: 4,
    name: "Members",
    menu: [
      {
        name: "How to Become a Member",
        description:
          "“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse",
      },
      {
        name: "Membership Rules",
        description:
          "“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse",
      },
      {
        name: "List of Members",
        description:
          "“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse",
      },
    ],
  },
  {
    index: 5,
    name: "Trading and Operations",
    menu: [
      {
        name: "Trading Market Structure",
        description:
          "“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse",
      },
      {
        name: "Trading Rules",
        description:
          "“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse",
      },
      {
        name: "Procedures & Manuals",
        title: "Procedures and manuals",
        description:
          "“Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euisLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse",
      },
      {
        name: "Trading FAQ",
        title: "Frequently asked questions",
      },
      { name: "Trading Platform", disabled: true },
    ],
  },
  {
    index: 6,
    name: "Regulatory Framework",
    menu: [],
    disabled: true,
  },
];
