module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        portfolioPrimary: '#4DB8A8',
        portfolioHighlight: '#00A78E',
        portfolioMainText: '#293651',
        portfolioSubText: '#646F87',
        portfolioLight: '#F9F9F9',
        portfolioIcons: '#A3A9B7',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
