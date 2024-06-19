/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors:{
        'primary':'#0052DC'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

