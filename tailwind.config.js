/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['League Spartan'],
      },
      colors: {
        'dark-cyan': 'hsl(180, 29%, 50%)',
        'gray-cyan-1': 'hsl(180, 52%, 96%)',
        'gray-cyan-2': 'hsl(180, 31%, 95%)',
        'dark-gray-1': 'hsl(180, 8%, 52%)',
        'dark-gray-2': 'hsl(180, 14%, 20%)',
      },
    },
  },
  plugins: [],
};
