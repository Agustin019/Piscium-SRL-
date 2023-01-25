/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage:{
        'frutos':'url(https://i.ibb.co/Qm3dDn2/fondo-frutos-secos.jpg)'
      }
    },
  },
  plugins: [],
}
