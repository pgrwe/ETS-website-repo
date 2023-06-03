/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'paper_purple_dark': '#3b405e',
        'paper_purple_light': '#4f3a54',
        'paper_pink_cream': '#a4929a',
        'paper_cream': '#e4dbba',

        'foggy_purple-800': '#1e0721',
        'foggy_purple-700': '#23132d',
        'foggy_purple-600': '#26203a',
        'foggy_slate-500': '#30324d',
        'foggy_slate-400': '#444a65',
        'foggy_slate-300': '#5d687c',
        'foggy_slate-200': '#7c8893',
        'foggy_slate-100': '#9ba9ab',
      },
    },
  },
  plugins: [],
}
