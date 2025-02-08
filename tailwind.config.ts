import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        //"grids-pattern": "url('/grids.svg')",
      },
      colors: {
        black: {
         background: "#131313",
        },
        purple: {
          100: "#7D61F2",
        },
        green: {
          100: "#DBFD51",
        },
      },
    },
  },
  plugins: [],
};
export default config;
