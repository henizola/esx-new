import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-blue": "#00205B",
        "primary-golden": "#A8965B",
        "light-blue": "rgba(0, 32, 91, 0.75)",
        gray: "rgba(112, 115, 119, 1)",
        "light-gray": "#F5F5F5",
      },
      lineHeight: {
        "100": "100px",
      },
    },
  },
  plugins: [],
};
export default config;
