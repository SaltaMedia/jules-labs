import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tealBright: '#3fc1c9',
        navyDark:  '#364f6b',
        offWhite:  '#f5f5f5',
        aquaLight: '#67ced4',
        seaGreen:  '#2f9fa6',
        slateBlue: '#47688d',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #3fc1c9 0%, #364f6b 100%)',
        'gradient-grey': 'linear-gradient(180deg, #f5f5f5 0%, #eaeaea 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
