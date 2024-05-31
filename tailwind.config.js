/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs"],
  theme: {
    extend: {
      colors:{'turquoise-blue': 
      {
        '50': '#edfefe',
        '100': '#d3f8fa',
        '200': '#acf0f5',
        '300': '#53ddea',
        '400': '#32cdde',
        '500': '#16b0c4',
        '600': '#158da5',
        '700': '#187186',
        '800': '#1c5c6e',
        '900': '#1c4d5d',
        '950': '#0d333f',
    },
    }
    },
  },
  plugins: [],
}

