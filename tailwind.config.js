/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: 'Jost, sans-serif',
      },
      colors: {
        peach: "#e88069",
        peachlight: "#fdf3f0"
      },  
      flexGrow: {
        2: '2'
      }   
    },
  },
  plugins: [],
}
