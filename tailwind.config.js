export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        "backgroundBanner": "url('/public/assets/bg.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}