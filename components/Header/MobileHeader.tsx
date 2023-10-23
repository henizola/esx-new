"use client"; // MobileNav.tsx
import { useNumber } from "@/context/nav.context";
import Link from "next/link";
import React, { useState } from "react";

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<null | number>(null);
  const [openSubSubMenus, setOpenSubSubMenus] = useState<null | number>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  interface MenuItem {
    name: string;
    href: string;
    current: boolean;
    submenu?: MenuItem[];
    value?: number;
  }

  const navigation: MenuItem[] = [
    {
      name: "Home",
      href: "/",
      current: false,
      value: 0,
    },
    {
      name: "About Us",
      href: "/about-us",
      current: false,
      value: 0,
      submenu: [
        {
          name: "Welcome message",
          href: "/about-us",
          current: false,
          value: 0,
        },
        { name: "Overview", href: "/about-us", current: false, value: 1 },
        {
          name: "Vision & Mission Statement",
          href: "/about-us",
          current: false,
          value: 2,
        },
        {
          name: "Meet our Team",
          href: "/about-us",
          current: false,
          value: 3,
          submenu: [
            {
              name: "Organizational Structure",
              href: "/about-us",
              current: false,
              value: 3,
            },

            {
              name: "Board of Directors",
              href: "/about-us",
              current: false,
              value: 4,
            },
            { name: "Management", href: "/about-us", current: false, value: 5 },
          ],
        },
        // { name: "ESX Reports", href: "/about-us", current: false, value: 6 },
        // { name: "Careers", href: "/about-us", current: false, value: 7 },
        // { name: "Tenders", href: "/about-us", current: false, value: 8 },
      ],
    },
    {
      name: "Equity Market",
      href: "/equity-market/listing",
      current: false,
      value: 0,
      submenu: [
        { name: "Overview", value: 0, href: "/equity-market", current: false },
        {
          name: "Listing on ESX",
          href: "/equity-market",
          value: 1,
          current: false,
          submenu: [
            {
              name: "Market Segments",
              value: 0,
              href: "/equity-market/listing",
              current: false,
            },
            {
              name: " Listing Rules, Requirements, Benefits",
              href: "/equity-market/listing",
              value: 1,
              current: false,
            },
            {
              name: "Listing FAQs",
              value: 2,
              href: "/equity-market/listing",
              current: false,
            },
            // {
            //   name: "Listed Companies",

            //   href: "/equity-market/listing",
            //   current: false,
            // },
            // {
            //   name: "Notice to Issuers",

            //   href: "/equity-market/listing",
            //   current: false,
            // },
            // {
            //   name: "Other products (REITs, ETFs)",
            //   href: "/equity-market/listing",
            //   current: false,
            // },
          ],
        },
        {
          name: "Trade",
          href: "/equity-market/trade",
          current: false,
          value: 0,
          submenu: [
            {
              name: "Invest on ESX ",
              value: 0,
              href: "/equity-market/trade",
              current: false,
            },
            // {
            //   name: "Members Directory",
            //   value: 1,
            //   href: "/equity-market/trade",
            //   current: false,
            // },
            // {
            //   name: "Direct Market Access",
            //   href: "",
            //   current: false,
            // },
            // {
            //   name: "Listed Securities",
            //   href: "",
            //   current: false,
            // },
            // { name: "Market Data", href: "", current: false },
            // { name: "Indices", href: "", current: false },
            // {
            //   name: "Market Announcements",
            //   href: "",

            //   current: false,
            // },
            // { name: "Fees and Taxation", href: "", current: false },
          ],
        },
        {
          name: "Members",
          href: "/equity-market/members",
          current: false,
          value: 0,
          submenu: [
            {
              name: "How to Become a Member",
              href: "/equity-market/members",
              value: 0,
              current: false,
            },
            {
              name: "Membership Rules",
              value: 1,
              href: "/equity-market/members",
              current: false,
            },
            // {
            //   name: "List of Members",
            //   value: 2,
            //   href: "/equity-market/members",
            //   current: false,
            // },
          ],
        },
        {
          name: "Trading and Operations",
          href: "/equity-market/trading-operations",
          value: 0,
          current: false,
          submenu: [
            {
              name: "Trading market structure",
              href: "/equity-market/trading-operations",
              value: 0,
              current: false,
            },
            {
              name: "Trading rules",
              value: 1,
              href: "/equity-market/trading-operations",
              current: false,
            },
            // {
            //   name: "Procedures and Manuals",
            //   href: "/equity-market/trading-operations",
            //   current: false,
            //   value: 2,
            // },
            {
              name: "Trading FAQ",
              value: 2,
              href: "/equity-market/trading-operations",
              current: false,
            },
            // { name: "Trading Platform", href: "", current: false },
          ],
        },
        {
          name: "Regulatory Framework",
          href: "/equity-market/regulatory-framework",
          value: 0,
          current: false,
          submenu: [
            {
              name: "Capital Market Regulatory Environment",
              href: "/equity-market/regulatory-framework",
              current: false,
              value: 0,
            },
            {
              name: "ESX Rulebook",
              value: 1,
              href: "/equity-market/regulatory-framework",
              current: false,
            },
          ],
        },
        // {
        //   name: "Market for Unlisted Securities",
        //   href: "/equity-market",
        //   current: false,
        //   value: 0,
        //   submenu: [
        //     {
        //       name: "Overview",
        //       href: "/equity-market",
        //       value: 0,
        //       current: false,
        //     },
        //     {
        //       name: "Admission to Trading",
        //       href: "/equity-market",
        //       current: false,
        //     },
        //   ],
        // },
      ],
    },
    {
      name: "Fixed Income Market",
      href: "/fixed-income-market",
      current: false, // Change to true if this section is currently active
      submenu: [
        {
          name: "Overview",
          value: 0,
          href: "/fixed-income-market",
          current: false,
        },
        {
          name: "Instruments",
          href: "/fixed-income-market",
          current: false,
          value: 1,
          submenu: [
            {
              name: "T-Bills and Bonds",
              href: "/fixed-income-market",
              current: false,
              value: 0,
            },
            {
              name: "Corporate Bonds",
              href: "/fixed-income-market",
              current: false,
              value: 1,
            },
            {
              name: "Repurchase Agreements / Repos",
              href: "/fixed-income-market",
              current: false,
              value: 2,
            },
            {
              name: "Commercial Paper",
              href: "/fixed-income-market",
              current: false,
            },
          ],
        },
        {
          name: "Listing and Admission to Trading",
          href: "/fixed-income-market",
          current: false,
          value: 2,
          submenu: [
            {
              name: "Bond IPO / Debt Public Issue",
              href: "/fixed-income-market",
              current: false,
              value: 0,
            },
            {
              name: "Listing rules",
              href: "/fixed-income-market",
              current: false,
              value: 1,
            },
            {
              name: "Listing FAQs",
              href: "/fixed-income-market",
              current: false,
              value: 2,
            },
          ],
        },
        {
          name: "Trade",
          href: "/fixed-income-market",
          current: false,
          value: 3,
          submenu: [
            {
              name: "Trading Overview ",
              href: "/fixed-income-market",
              current: false,
              value: 0,
            },
            {
              name: "Find a Broker",
              href: "/fixed-income-market",
              current: false,
              value: 1,
            },
            // {
            //   name: "Listed Securities",
            //   href: "/fixed-income-market",
            //   current: false,
            // },
            // {
            //   name: "Market Data",
            //   href: "/fixed-income-market",
            //   current: false,
            // },
            // {
            //   name: "Indices",
            //   href: "/fixed-income-market",
            //   current: false,
            // },
            // {
            //   name: "Market Announcements",
            //   href: "/fixed-income-market",
            //   current: false,
            // },
            // {
            //   name: "Fees and Taxation",
            //   href: "/fixed-income-market",
            //   current: false,
            // },
          ],
        },
        {
          name: "Members",
          href: "/fixed-income-market",
          current: false,
          value: 4,
          submenu: [
            {
              name: "How to Become a Member",
              value: 0,
              href: "/fixed-income-market",
              current: false,
            },
            {
              name: "Membership Rules",
              value: 1,
              href: "/fixed-income-market",
              current: false,
            },
            {
              name: "List of Members",
              value: 2,
              href: "/fixed-income-market",
              current: false,
            },
          ],
        },
        {
          name: "Trading and Operations",
          href: "/fixed-income-market",
          current: false,
          value: 5,
          submenu: [
            {
              name: "Trading Market Structure",
              href: "/fixed-income-market",
              current: false,
              value: 0,
            },
            {
              name: "Trading Rules",
              value: 1,
              href: "/fixed-income-market",
              current: false,
            },
            {
              name: "Procedures and Manuals",
              value: 2,
              href: "/fixed-income-market",
              current: false,
            },
            // {
            //   name: "Trading Platform",
            //   href: "/equity-market/trading-operations",
            //   current: false,
            // },
            {
              name: "Trading FAQ",
              value: 3,
              href: "/fixed-income-market",
              current: false,
            },
          ],
        },
        // {
        //   name: "Regulatory Framework",
        //   href: "equity-market/regulatory-framework",
        //   current: false,
        //   value: 0,
        //   submenu: [
        //     {
        //       name: "Capital Market Regulatory Environment",
        //       href: "equity-market/regulatory-framework",
        //       current: false,
        //       value: 0,
        //     },
        //     {
        //       name: "ESX Rulebook ",
        //       value: 1,
        //       href: "equity-market/regulatory-framework",
        //       current: false,
        //     },
        //   ],
        // },
      ],
    },

    // {
    //   name: "Alternative and Growth Market",
    //   href: "/alternative-and-growth-market",
    //   value: 0,
    //   current: false,
    //   submenu: [
    //     {
    //       name: "Overview",
    //       href: "/alternative-and-growth-market",
    //       current: false,
    //       value: 0,
    //     },
    //     {
    //       name: "Crowdex",
    //       href: "/alternative-and-growth-market",
    //       current: false,
    //       value: 1,
    //       submenu: [
    //         {
    //           name: "What is CrowdEx?",
    //           href: "/alternative-and-growth-market",
    //           current: false,
    //           value: 1,
    //         },
    //         {
    //           name: "Benefits for Issuers",
    //           href: "/alternative-and-growth-market",
    //           current: false,
    //           value: 2,
    //         },
    //         {
    //           name: "Issuers",
    //           href: "/alternative-and-growth-market",
    //           current: false,
    //           value: 3,
    //         },
    //         {
    //           name: "Investors",
    //           href: "/alternative-and-growth-market",
    //           current: false,
    //           value: 4,
    //         },
    //       ],
    //     },
    //     {
    //       name: "FactorEx",
    //       href: "/alternative-and-growth-market",
    //       current: false,
    //       submenu: [
    //         {
    //           name: "What is FactorEx?",
    //           href: "/alternative-and-growth-market",
    //           current: false,
    //         },
    //         {
    //           name: "Benefits",
    //           href: "/alternative-and-growth-market",
    //           current: false,
    //         },
    //         {
    //           name: "Buyers",
    //           href: "/alternative-and-growth-market",
    //           current: false,
    //         },
    //         {
    //           name: "Suppliers",
    //           href: "/alternative-and-growth-market",
    //           current: false,
    //         },
    //       ],
    //     },
    //     {
    //       name: "Capital Market Accelerator",
    //       href: "/alternative-and-growth-market",
    //       current: false,
    //       submenu: [
    //         {
    //           name: "Benefits",
    //           href: "/alternative-and-growth-market",
    //           current: false,
    //         },
    //         {
    //           name: "How to Become a Member of the Program",
    //           href: "/alternative-and-growth-market",
    //           current: false,
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      name: "News and Media ",
      href: "/news-and-media ",
      current: false, // Change to true if this section is currently active
      submenu: [
        {
          name: "Latest News",
          value: 0,
          href: "/news-and-media",
          current: false,
        },
        { name: "Events", value: 1, href: "/news-and-media", current: false },
        {
          name: "Press Releases",
          value: 2,
          href: "/news-and-media",
          current: false,
        },
        { name: "Gallery", value: 3, href: "/news-and-media", current: false },
        {
          name: "Downloads",
          value: 4,
          href: "/news-and-media",
          current: false,
        },
        {
          name: "Contact Us",
          value: 5,
          href: "/news-and-media",
          current: false,
        },
      ],
    },
    {
      name: "ESX Academy",
      href: "/esx-academy",
      current: false,
      value: 0,
      // submenu: [
      //   { name: "Overview", value: 0, href: "/esx-academy", current: false },
      //   {
      //     name: "Courses and Programs",
      //     value: 1,
      //     href: "/esx-academy",
      //     current: false,
      //   },
      //   {
      //     name: "ESX Training Academy Calendar",
      //     href: "/esx-academy",
      //     value: 2,
      //     current: false,
      //   },
      //   { name: "FAQs", href: "/esx-academy", current: false, value: 3 },
      //   { name: "Downloads", href: "/esx-academy", current: false },
      // ],
    },
  ];

  const { setNumber } = useNumber();

  return (
    <div>
      <div className='bg-white py-5 fixed z-30 top-0 w-[100vw] flex-row justify-between'>
        <Link
          href='/'
          className='block z-50  w-[100px] pl-10 w-100 text-gray-600 hover:text-gray-800 md:inline-block'
          onClick={() => {
            setNumber(0);
            setOpenSubMenus(null);
            setOpenSubSubMenus(null);
            setIsOpen(false);
          }}
        >
          ESX
        </Link>
        <button
          onClick={toggleMenu}
          className='block md:hidden  fixed  z-30  top-5 right-10 focus:outline-none'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            {isOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 z-10 pb-30 left-0 overflow-scroll pt-16 px-10 h-screen w-full md:relative md:flex md:items-center md:w-auto md:h-auto md:space-y-4 bg-white p-4  md:p-0`}
      >
        <ul className='mt-10'>
          {navigation.map((menu, index) => (
            <li className='flex-col  mt-5  ' key={index}>
              <div className='flex-row'>
                <Link
                  href={menu.href}
                  className='block text-gray-600 my-1 relative w-fit text-subHeader  hover:text-gray-800 md:inline-block'
                  onClick={() => {
                    !menu.submenu?.length && toggleMenu();
                    !menu.submenu?.length && setNumber(0);
                    menu.submenu?.length &&
                      openSubMenus === index &&
                      setOpenSubMenus(null);
                    menu.submenu?.length &&
                      openSubMenus !== index &&
                      setOpenSubMenus(index);
                  }}
                >
                  <span className='   '>{menu.name} </span>
                  {menu.submenu?.length && (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1'
                      stroke='currentColor'
                      className={`w-6 h-6 top-1 -right-10 absolute ${
                        openSubMenus === index && " rotate-180"
                      }`}
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                      />
                    </svg>
                  )}
                </Link>
              </div>
              {openSubMenus === index && (
                <ul>
                  {menu.submenu?.map((subMenu, ind) => (
                    <li key={ind}>
                      <Link
                        href={subMenu.href}
                        className='block text-gray-600 my-2 relative w-fit text-paragraphBig ml-2  hover:text-gray-800 md:inline-block'
                        onClick={() => {
                          !subMenu.submenu?.length && toggleMenu();
                          !subMenu.submenu?.length &&
                            setNumber(subMenu.value ? subMenu.value : 0);
                          subMenu.submenu?.length &&
                            openSubSubMenus === ind &&
                            setOpenSubSubMenus(null);
                          subMenu.submenu?.length &&
                            openSubSubMenus !== ind &&
                            setOpenSubSubMenus(ind);
                        }}
                      >
                        {subMenu.name}{" "}
                        {subMenu.submenu?.length && (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1'
                            stroke='currentColor'
                            className={`w-6 h-6 top-1 -right-10 absolute ${
                              openSubSubMenus === ind && " rotate-180"
                            }`}
                          >
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                            />
                          </svg>
                        )}
                      </Link>
                      {openSubSubMenus === ind && (
                        <ul>
                          {subMenu.submenu?.map((subMenu, ind) => (
                            <li key={ind}>
                              <Link
                                href={subMenu.href}
                                className='block text-gray-600 my-2 relative w-fit text-paragraphSmall ml-5  hover:text-gray-800 md:inline-block'
                                onClick={() => {
                                  toggleMenu();
                                  setOpenSubMenus(null);
                                  setOpenSubSubMenus(null);
                                  setNumber(subMenu.value ? subMenu.value : 0);
                                }}
                              >
                                {subMenu.name}{" "}
                                {subMenu.submenu?.length && (
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke-width='1'
                                    stroke='currentColor'
                                    className={`w-6 h-6 top-1 -right-10 absolute ${
                                      openSubSubMenus === ind && " rotate-180"
                                    }`}
                                  >
                                    <path
                                      stroke-linecap='round'
                                      stroke-linejoin='round'
                                      d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                                    />
                                  </svg>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
