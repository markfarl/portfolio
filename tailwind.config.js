/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '1/2': '50%',
        full: '100%',
      },
      backgroundImage: {
        'header-bk-normal': "url(/src/assets/headerBk.png)",
        'header-bk-solar': "url(/src/assets/headerBk-solar.png)",
        'header-bk-dark': "url(/src/assets/headerBk-dark.png)",
        'header-bk-light': "url(/src/assets/headerBk-light.png)",
        'normal-gradient': "linear-gradient(to right,#0014ff 0%,#0014ff 50%,rgba(33, 33, 33, 0) 60%,rgba(33, 33, 33, 0) 100%) ",
        'solar-gradient': "linear-gradient(to right,#fdf6e3 0%,#fdf6e3 50%,rgba(33, 33, 33, 0) 50%,rgba(33, 33, 33, 0) 100%) ",
        'dark-gradient': "linear-gradient(to right,#1a1a1a 0%,#1a1a1a 50%,rgba(33, 33, 33, 0) 50%,rgba(33, 33, 33, 0) 100%) ",
        'light-gradient': "linear-gradient(to right,#fefefe 0%,#fefefe 50%,rgba(33, 33, 33, 0) 60%,rgba(33, 33, 33, 0) 100%) ",
        'back-dark': "linear-gradient(-60deg, #0a0a0a 50%, #212121 50%)",
        'back-light': "linear-gradient(-60deg, #fefefe 50%, #dedede 50%)",
        'back-solar': "linear-gradient(-60deg, #fdf6e3 50%, #eee8d5 50%)",
        'back-normal': "linear-gradient(-60deg, #0014ff 50%, #0094ff 50%)",

      },
      backgroundColor: {
        'main-content': '#0094ff',
        'normal-content': '#0094ff',
        'solar-content': '#eee8d5',
        'dark-content': '#212121',
        'light-content': '#dedede',
        'main-tiles': '#0014ff',
        'normal-tiles': '#0014ff',
        'dark-tiles': '#1a1a1a',
        'solar-tiles': '#fdf6e3',
        'light-tiles': '#fefefe',
        'cyan-line': '#00ffeb',
        'normal-line': '#00ffeb',  
      },
      colors: {
        'cyan-line': '#00ffeb',
        'normal-line': '#00ffeb',
        'normal2-line': '#00ffeb',
        'solar-line': '#ac9d57',
        'dark-line': '#007ed3',
        'light-line': '#ff812c',
      },
      height: {
        '80px': '80px',
        '20px': '20px'
      },
      fontFamily: {
        'Bowlby': 'Bowlby One SC',
        'Source': 'Source Sans Pro',
      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.3rem',
    }
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}

