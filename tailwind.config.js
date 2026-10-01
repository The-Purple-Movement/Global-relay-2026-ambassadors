/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          brand: '#385868',
          dark: '#2c4653',
          light: '#4b6f82',
        },
        bluegrey: {
          brand: '#687F8F',
          light: '#7e96a7',
          dark: '#546875',
        },
        powder: {
          brand: '#98B0C0',
          light: '#b0c5d3',
          dark: '#8199a8',
        },
        taupe: {
          brand: '#B0A08C',
          light: '#c3b5a3',
          dark: '#968774',
        },
        mist: {
          brand: '#D0D8D0',
          light: '#e2e7e2',
          dark: '#bcc6bc',
        },
        dark: {
          brand: '#17252C',
          surface: '#1d2f38',
          deep: '#101416',
        },
        white: {
          brand: '#F7F8F6',
          pure: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        editorial: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.18em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
