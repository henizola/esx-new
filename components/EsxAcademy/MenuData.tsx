type SubMenu = {
  name?: string;
  description?: string;
  title?: string;
  disabled?: any;
} | null;

type Menu = {
  index: number;
  name: string;
  bannerName?: string;
  description?: string;
  menu?: SubMenu[];
  disabled?: any;
};

export const menus: Menu[] = [
  {
    index: 0,
    name: "Overview",
    bannerName: "The Academy",
    description:
      "ESX has observed capacity gaps across financial institutions and government agencies on key aspects of capital market products, services, and infrastructures. As ESX will be operating in a market where the development of the Ethiopian Capital Markets ecosystem is just beginning, it is crucial for ESX to play a leading role in investor education, capacity development, and financial literacy and inclusion in Ethiopia.In addition to various levels of communication and awareness efforts, e.g., consultation workshops, media and public relations activities, ESX aims to set up an academy to provide continuous education and capacity building activities to various stakeholders.",
    menu: [],
  },
  {
    index: 1,
    name: "Courses and programs",
    menu: [],
  },
  {
    index: 2,
    name: "ESX Training Academy Calendar",
    menu: [],
  },
  {
    index: 3,
    name: "FAQ's",
    bannerName: "Frequently asked questions",
    menu: [],
  },
];
