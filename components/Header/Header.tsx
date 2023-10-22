"use client";
import { useNumber } from "@/context/nav.context";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

interface MenuItem {
  name: string;
  href: string;
  current: boolean;
  submenu?: MenuItem[];
  value?: number;
}

interface MenuItemProps {
  item: MenuItem;
  showSubMenu: boolean;
  openSubMenu: () => void;
  closeSubMenu: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  showSubMenu,
  openSubMenu,
  closeSubMenu,
}) => {
  const hasSubMenu = item.submenu && item.submenu.length > 0;
  const { setNumber } = useNumber();
  return (
    <div className={`group relative `} onMouseEnter={openSubMenu}>
      <Link
        href={item.href}
        className={`group  flex items-center justify-between px-4 py-5 text-sm relative`}
        onMouseEnter={openSubMenu}
        onClick={() => setNumber(0)}
      >
        {item.name}
        {hasSubMenu && (
          <span
            className={`${item.current ? "text-white" : "text-black"} ml-1`}
          >
            &#9662;
          </span>
        )}
        <span className='absolute w-full h-1 bg-transparent transition-transform transform scale-x-0 group-hover:scale-x-100'></span>
      </Link>
      {item.submenu && showSubMenu && (
        <div
          style={{ listStyle: "none" }}
          className='fixed w-[80vw]  z-10  left-[10vw] p-7 mx-3 hidden mt--1 space-y-1 bg-[#ffff] primary-blue group-hover:block transform scale-x-0 group-hover:scale-x-100 '
          onMouseLeave={closeSubMenu}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            color='white'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-8 h-8  float-right m-2 right-4 cursor-pointer absolute'
            onClick={closeSubMenu}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>

          <div className='flex justify-around  pt-0 '>
            {item.submenu?.map((subItem) => (
              <div key={subItem.name} className='flex flex-col '>
                <Link
                  href={subItem.href}
                  onClick={() => {
                    typeof subItem.value === "number" && subItem.value;
                    setNumber(subItem.value ? subItem.value : 0);
                    closeSubMenu();
                  }}
                  className={`${
                    subItem.current ? "bg-blue-200" : ""
                  } px-4 py-2  block text-link w-fit  text-primary-blue`}
                >
                  <span className='hover:underline  text-l'>
                    {" "}
                    {subItem.name}
                  </span>
                </Link>
                {subItem.submenu?.map((subItem) => (
                  <div key={subItem.name}>
                    <Link
                      href={subItem.href}
                      onClick={() => {
                        setNumber(subItem.value ? subItem.value : 0);
                        closeSubMenu();
                      }}
                      className={`${
                        subItem.current ? "bg-blue-200" : "hover:underline"
                      }  px-4 py-2  text-subLink block w-fit font- text-primary-blue`}
                    >
                      {subItem.name}
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

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
      { name: "Downloads", value: 4, href: "/news-and-media", current: false },
      { name: "Contact Us", value: 5, href: "/news-and-media", current: false },
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

const Header: React.FC = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const openSubMenu = () => {
    setShowSubMenu(true);
  };

  const closeSubMenu = () => {
    setShowSubMenu(false);
  };

  useEffect(() => {
    function handleScroll() {
      closeSubMenu();
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as='nav'
      className='bg-[#f0f0f0] hidden lg:block  z-50 mx-0 w-screen py-0 px-0 shadow-md fixed top-0'
    >
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  py-0'>
            <div
              className='relative flex h-16 items-center justify-between'
              style={{ height: "fit-content" }}
            >
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2  -400 hover:underline hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center  justify-center sm:items-stretch sm:justify-around'>
                <div className='hidden sm:ml-6 sm:block   '>
                  <div className='flex space-x-4  '>
                    <nav className='flex space-x-4 '>
                      {navigation.map((item) => (
                        <MenuItem
                          key={item.name}
                          item={item}
                          openSubMenu={openSubMenu}
                          closeSubMenu={closeSubMenu}
                          showSubMenu={showSubMenu}
                        />
                      ))}
                    </nav>
                  </div>
                </div>
                <MenuItem
                  item={{
                    name: "contactus@esxproject.com ",
                    current: false,
                    href: "mailto:contactus@esxproject.com ",
                  }}
                  openSubMenu={openSubMenu}
                  closeSubMenu={closeSubMenu}
                  showSubMenu={showSubMenu}
                />
                <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  <button type='button' className='relative '>
                    <span className='absolute -inset-1.5' />
                    <span className='sr-only'>View notifications</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
