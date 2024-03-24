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
          'light-10': 'var(--dark-light-10)',
        },
        white: {
          DEFAULT: 'var(--white)',
          'light-10': 'var(--white-light-10)',
        },
        'red-light': 'var(--red-light)',
      },
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '4.5rem',
          sm: '4.5rem',
          md: '5.5rem',
          xl: '8.125rem',
        },
      },
      //KEYFRAMES
      keyframes: {
        scroll: {
          '0%': { transform: ' translateX(100%)' },
          '100%': { transform: ' translateX(-100%)' },
        }
      },
      //ANIMATION
      animation: {
        scroll: 'scroll 10s linear infinite',
      },

      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
      }
    },
  },
  plugins: [],
};
export default config;
