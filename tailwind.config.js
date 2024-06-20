/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors:{
        'primary':'#0052DC',
        'primary-light':'#4385F5',
        'secondary':'#F1F1F1',
        'secondary-dark':'#B2B2B2',
        'succes-lighter':'#2DA96A',
        'succes':'#00A450',
        'main':'#2B2B2B',
        'danger-lighter':'#E94433',
        'secondary-darker':'#7D7D7D'
      },
      backgroundImage: {
        'gdsc-1': 'url("/assets/images/gdscPhoto1.png")',
        'gdsc-2': 'url("/assets/images/gdscPhoto2.png")',
        'gdsc-3': 'url("/assets/images/gdscPhoto3.png")',
        'gdsc-4': 'url("/assets/images/gdscPhoto4.png")'
      },
      fontSize: {
        'xxs':'0.45rem'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

