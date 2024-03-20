import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    extend: {
      // COLORS
      colors: {
        black: {
          DEFAULT: 'var(--dark)',
          light: 'var(--dark-light)',
        },
        white: {
          DEFAULT: 'var(--white)'
        },
        'red-light': 'var(--red-light)',
      },
    },
  },
  plugins: [],
};
export default config;
