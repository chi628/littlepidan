/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}', './src/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        'hind-siliguri': ['Hind Siliguri'],
        'fira-sans': ['Fira Sans'],
        'noto-sans-TC': ['Noto Sans Traditional Chinese'],
      },
    },
  },
  plugins: [],
}
