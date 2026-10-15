/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cypress: {
          800: '#163832',
          900: '#0D2622',
          950: '#071714',
        },
        alabaster: {
          50: '#FCFBF7',
          100: '#F4F1EA',
          200: '#E5DFD3',
        },
        bronze: {
          400: '#D49573',
          600: '#9A5B3E',
        },
        slate: {
          600: '#4A5553',
        },
      },
      fontFamily: {
        display: ['Zodiak', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.02em',
        eyebrow: '0.14em',
      },
      lineHeight: {
        tightDisplay: '1.08',
      },
      transitionTimingFunction: {
        emil: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(7, 23, 20, 0.04), 0 1px 2px -1px rgba(7, 23, 20, 0.04)',
        'card': '0 4px 20px -2px rgba(7, 23, 20, 0.06), 0 2px 6px -1px rgba(7, 23, 20, 0.03)',
        'card-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
        'elevated': '0 20px 40px -15px rgba(7, 23, 20, 0.12)',
      },
      animation: {
        'ticker': 'ticker 35s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
