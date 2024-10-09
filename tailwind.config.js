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
        'header-bk': "url(/src/assets/headerBk.png)"
      },
      backgroundColor: {
        'main-content': '#0094ff',
        'main-tiles': '#0014ff',
        'cyan-line': '#00ffeb'
      },
      colors: {
        'cyan-line': '#00ffeb'
      },
      height: {
        '80px': '80px'
      },
      fontFamily: {
        'Heavitas': 'Heavitas',
      }
    },
  },
  plugins: [],
}

