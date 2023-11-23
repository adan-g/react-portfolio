/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green3d: '#183D3D',
        black12: '#040D12',
        green74: '#5C8374',
        greenA6: '#93B1A6'
      },
      stroke: {
        width: '-webkit-text-stroke-width: 3px',
        color: '-webkit-text-stroke-color: black'
      }
    },
  },
  plugins: [],
}