"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "/public/images/logo.png";
import { useNumber } from "@/context/nav.context";
import Link from "next/link";

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
    <div className={`group relative`} onMouseEnter={openSubMenu}>
      <Link
        href={item.href}
        className={`group  flex items-center justify-between px-4 py-5 text-sm relative`}
        onMouseEnter={openSubMenu}
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
      {hasSubMenu && showSubMenu && (
        <div
          style={{ listStyle: "none" }}
          className='fixed w-[85vw]  z-10 min-h-[65vh] left-[7vw] p-7 mx-3 hidden mt--1 space-y-1 bg-primary-golden primary-blue group-hover:block transform scale-x-0 group-hover:scale-x-100 '
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

          <div className='grid grid-cols-4  pt-10 '>
            {item.submenu!.map((subItem) => (
              <div key={subItem.name} className='flex flex-col'>
                <Link
                  href={subItem.href}
                  onClick={() => {
                    setNumber(subItem.value ? subItem.value : 0);
                    closeSubMenu();
                  }}
                  className={`${
                    subItem.current ? "bg-blue-200" : ""
                  } px-4 py-2  block w-fit broder text-white`}
                >
                  <span className='hover:underline font-bold text-xl'>
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
                      }  px-4 py-2  text-s block w-fit broder text-white`}
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
    name: "About Us",
    href: "/",
    current: false,
    value: 0,
    submenu: [
      {
        name: "Welcome message",
        href: "/",
        current: false,
        value: 0,
      },
      { name: "Overview", href: "/#overview", current: false, value: 1 },
      {
        name: "Vision & Mission Statement",
        href: "/",
        current: false,
        value: 2,
      },
      {
        name: "Meet our Team",
        href: "/",
        current: false,
        value: 3,
        submenu: [
          {
            name: "Organizational Structure",
            href: "#",
            current: false,
            value: 3,
          },

          { name: "Board of Directors", href: "/", current: false, value: 4 },
          { name: "Management", href: "/", current: false, value: 5 },
          { name: "Staff", href: "/", current: false, value: 6 },
        ],
      },
      { name: "ESX Reports", href: "/", current: false, value: 6 },
      { name: "Careers", href: "/", current: false, value: 7 },
      { name: "Tenders", href: "/", current: false, value: 8 },
    ],
  },
  {
    name: "Equity Market",
    href: "/equity-market",
    current: false,
    submenu: [
      { name: "Overview", href: "/equity-market#", current: false },
      {
        name: "Listing on ESX",
        href: "/equity-market",
        current: false,
        submenu: [
          { name: "Market Segments", href: "/equity-market", current: false },
          {
            name: "Listing Rules, Requirements, Benefits",
            href: "/equity-market",
            current: false,
          },
          { name: "Listing FAQs", href: "/equity-market", current: false },
          { name: "Listed Companies", href: "/equity-market", current: false },
          { name: "Notice to Issuers", href: "/equity-market", current: false },
          {
            name: "Other products (REITs, ETFs)",
            href: "/equity-market",
            current: false,
          },
        ],
      },
      {
        name: "Trade",
        href: "/equity-market",
        current: false,
        submenu: [
          { name: "Trade on ESX", href: "/equity-market", current: false },
          { name: "Members Directory", href: "/equity-market", current: false },
          {
            name: "Direct Market Access",
            href: "/equity-market",
            current: false,
          },
          { name: "Listed Securities", href: "/equity-market", current: false },
          { name: "Market Data", href: "/equity-market", current: false },
          { name: "Indices", href: "/equity-market", current: false },
          {
            name: "Market Announcements",
            href: "/equity-market",
            current: false,
          },
          { name: "Fees and Taxation", href: "/equity-market", current: false },
        ],
      },
      {
        name: "Members",
        href: "/equity-market",
        current: false,
        submenu: [
          {
            name: "How to Become a Member",
            href: "/equity-market",
            current: false,
          },
          { name: "Membership Rules", href: "/equity-market", current: false },
          { name: "List of Members", href: "/equity-market", current: false },
        ],
      },
      {
        name: "Trading and Operations",
        href: "#",
        current: false,
        submenu: [
          {
            name: "Trading Market Structure",
            href: "/equity-market",
            current: false,
          },
          { name: "Trading Rules", href: "/equity-market", current: false },
          {
            name: "Procedures and Manuals",
            href: "/equity-market",
            current: false,
          },
          { name: "Trading FAQ", href: "/equity-market", current: false },
          { name: "Trading Platform", href: "/equity-market", current: false },
        ],
      },
      {
        name: "Regulatory Framework",
        href: "/equity-market",
        current: false,
        submenu: [
          {
            name: "Capital Market Regulatory Environment",
            href: "/equity-market",
            current: false,
          },
          { name: "Tax", href: "/equity-market", current: false },
        ],
      },
      {
        name: "Market for Unlisted Securities",
        href: "/equity-market",
        current: false,
        submenu: [
          { name: "Overview", href: "/equity-market", current: false },
          {
            name: "Admission to Trading",
            href: "/equity-market",
            current: false,
          },
        ],
      },
    ],
  },
  {
    name: "Fixed Income Market",
    href: "/fixed-income-market",
    current: false, // Change to true if this section is currently active
    submenu: [
      { name: "Overview", href: "/fixed-income-market", current: false },
      {
        name: "Instruments",
        href: "/fixed-income-market",
        current: false,
        submenu: [
          {
            name: "T-Bills and Bonds",
            href: "/fixed-income-market",
            current: false,
          },
          {
            name: "Corporate Bonds",
            href: "/fixed-income-market",
            current: false,
          },
          {
            name: "Repurchase Agreements / Repos",
            href: "/fixed-income-market",
            current: false,
          },
          {
            name: "Other Instruments",
            href: "/fixed-income-market",
            current: false,
          },
        ],
      },
      {
        name: "Listing and Admission to Trading",
        href: "/fixed-income-market",
        current: false,
        submenu: [
          {
            name: "Bond IPO / Debt Public Issue",
            href: "/fixed-income-market",
            current: false,
          },
          {
            name: "Listing Rules",
            href: "/fixed-income-market",
            current: false,
          },
          {
            name: "Listing FAQs",
            href: "/fixed-income-market",
            current: false,
          },
        ],
      },
      {
        name: "Trading",
        href: "/fixed-income-market",
        current: false,
        submenu: [
          {
            name: "Trading Overview",
            href: "/fixed-income-market",
            current: false,
          },
          {
            name: "Find a Broker",
            href: "/fixed-income-market",
            current: false,
          },
          {
            name: "Listed Securities",
            href: "/fixed-income-market",
            current: false,
          },
          {
            name: "Market Data",
            href: "/fixed-income-market",
            current: false,
          },
          {
            name: "Indices",
            href: "/fixed-income-market",
            current: false,
          },
          {
            name: "Market Announcements",
            href: "/fixed-income-market",
            current: false,
          },
          {
            name: "Fees and Taxation",
            href: "/fixed-income-market",
            current: false,
          },
        ],
      },
      {
        name: "Members",
        href: "/members",
        current: false,
        submenu: [
          { name: "How to Become a Member", href: "/members", current: false },
          { name: "Membership Rules", href: "/members", current: false },
          { name: "List of Members", href: "/members", current: false },
        ],
      },
      {
        name: "Trading and Operations",
        href: "/members",
        current: false,
        submenu: [
          {
            name: "Trading Market Structure",
            href: "/members",
            current: false,
          },
          { name: "Trading Rules", href: "/members", current: false },
          { name: "Procedures and Manuals", href: "/members", current: false },
          { name: "Trading FAQ", href: "/members", current: false },
          { name: "Trading Platform", href: "/members", current: false },
        ],
      },
      {
        name: "Regulatory Framework",
        href: "/members",
        current: false,
        submenu: [
          {
            name: "Capital Market Regulatory Environment",
            href: "/members",
            current: false,
          },
          { name: "Tax", href: "/members", current: false },
        ],
      },
    ],
  },

  {
    name: "Alternative and Growth Market",
    href: "/alternative-and-growth-market",
    value: 0,
    current: false,
    submenu: [
      {
        name: "Overview",
        href: "/alternative-and-growth-market",
        current: false,
        value: 0,
      },
      {
        name: "Crowdex",
        href: "/alternative-and-growth-market",
        current: false,
        value: 1,
        submenu: [
          {
            name: "What is CrowdEx?",
            href: "/alternative-and-growth-market",
            current: false,
            value: 1,
          },
          {
            name: "Benefits for Issuers",
            href: "/alternative-and-growth-market",
            current: false,
            value: 2,
          },
          {
            name: "Issuers",
            href: "/alternative-and-growth-market",
            current: false,
            value: 3,
          },
          {
            name: "Investors",
            href: "/alternative-and-growth-market",
            current: false,
            value: 4,
          },
        ],
      },
      {
        name: "FactorEx",
        href: "/alternative-and-growth-market",
        current: false,
        submenu: [
          {
            name: "What is FactorEx?",
            href: "/alternative-and-growth-market",
            current: false,
          },
          {
            name: "Benefits",
            href: "/alternative-and-growth-market",
            current: false,
          },
          {
            name: "Buyers",
            href: "/alternative-and-growth-market",
            current: false,
          },
          {
            name: "Suppliers",
            href: "/alternative-and-growth-market",
            current: false,
          },
        ],
      },
      {
        name: "Capital Market Accelerator",
        href: "/alternative-and-growth-market",
        current: false,
        submenu: [
          {
            name: "Benefits",
            href: "/alternative-and-growth-market",
            current: false,
          },
          {
            name: "How to Become a Member of the Program",
            href: "/alternative-and-growth-market",
            current: false,
          },
        ],
      },
    ],
  },
  {
    name: "News and Media ",
    href: "/news-and-media ",
    current: false, // Change to true if this section is currently active
    submenu: [
      { name: "Latest News", href: "/news-and-media", current: false },
      { name: "Events", href: "/news-and-media", current: false },
      { name: "Press Releases", href: "/news-and-media", current: false },
      { name: "Gallery", href: "/news-and-media", current: false },
      { name: "Downloads", href: "/news-and-media", current: false },
      { name: "Contact Us", href: "/news-and-media", current: false },
    ],
  },
  {
    name: "ESX Academy",
    href: "/esx-academy",
    current: false, // Change to true if this section is currently active
    submenu: [
      { name: "Overview", href: "/esx-academy", current: false },
      { name: "Courses and Programs", href: "/esx-academy", current: false },
      {
        name: "ESX Training Academy Calendar",
        href: "/esx-academy",
        current: false,
      },
      { name: "FAQs", href: "/esx-academy", current: false },
      { name: "Downloads", href: "/esx-academy", current: false },
    ],
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
      className='bg-white-800  mx-0 w-screen py-0 px-0 shadow-md '
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
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:underline hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <Link href='/' className='flex flex-shrink-0 items-center'>
                  <Image
                    className='h-8 w-auto'
                    src={logo.src}
                    alt='Your Company'
                    width={60}
                    height={50}
                    style={{ height: "22px" }}
                  />
                </Link>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4  '>
                    <nav className='flex space-x-4'>
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
