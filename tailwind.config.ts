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
        'site-gradient': 'linear-gradient(to bottom right, #111827, #1f2937, #374151)',
        'section-gradient-1': 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
        'section-gradient-2': 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
        'section-gradient-3': 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
        'section-gradient-4': 'linear-gradient(135deg, #2d3748 0%, #1a1a1a 50%, #0f0f0f 100%)',
        'philosophy-card-1': 'linear-gradient(to bottom right, rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2))', // Pink to Purple
        'philosophy-card-2': 'linear-gradient(to bottom right, rgba(147, 51, 234, 0.2), rgba(37, 99, 235, 0.2))', // Purple to Blue
        'philosophy-card-3': 'linear-gradient(to bottom right, rgba(37, 99, 235, 0.2), rgba(99, 102, 241, 0.2))', // Blue to Indigo
        'philosophy-card-4': 'linear-gradient(to bottom right, rgba(99, 102, 241, 0.2), rgba(147, 51, 234, 0.2))', // Indigo to Purple
        'philosophy-card-5': 'linear-gradient(to bottom right, rgba(236, 72, 153, 0.2), rgba(99, 102, 241, 0.2))', // Pink to Indigo
      },
    },
  },
  plugins: [],
};

export default config;
