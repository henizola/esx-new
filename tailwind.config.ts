import type { Config } from "tailwindcss";

const MyClass = function ({
  addUtilities,
}: {
  addUtilities: (utilities: Record<string, any>) => void;
}) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
};

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
        "light-golden": "rgba(168, 150, 91, 0.75)",
        gray: "rgba(112, 115, 119, 1)",
        "light-gray": "#F5F5F5",
      },
      lineHeight: {
        "100": "100px",
      },
      animation: {
        scrolling: "scrolling 10s linear infinite",
      },
      fontSize: {
        paragraphSmall: "16px",
        paragraphBig: "20px",
        header: "42px",
        subHeader: "28px",
        link: "16px",
        subLink: "14px",
      },
    },
  },
  plugins: [MyClass],
};

export default config;
