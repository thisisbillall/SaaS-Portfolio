/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        gradients: {
          'gradient-blue': 'bg-gradient-to-r from-blue-400 to-blue-600',
          'gradient-green': 'bg-gradient-to-r from-green-400 to-green-600',
          'gradient-purple': 'bg-gradient-to-r from-purple-400 to-purple-600',
          'gradient-orange': 'bg-gradient-to-r from-orange-400 to-orange-600',
        },
        black: {
          DEFAULT: '#000',
          100: '#010103',
          200: '#0E0E10',
          300: '#1C1C21',
          500: '#3A3A49',
          600: '#1A1A1A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
        
      },
    },
  },
  plugins: [],
};
