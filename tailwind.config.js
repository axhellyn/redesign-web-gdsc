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
        'danger':'#D71400',
        'secondary-darker':'#7D7D7D',
        'warning-lighter':'#FABD05',
      },
      backgroundImage: {
        'gdsc-1': 'url("/assets/images/gdscPhoto1.png")',
        'gdsc-2': 'url("/assets/images/gdscPhoto2.png")',
        'gdsc-3': 'url("/assets/images/gdscPhoto3.png")',
        'gdsc-4': 'url("/assets/images/gdscPhoto4.png")',
        'gallery-1':'url("/assets/images/gallery1.png")',
        'gallery-2':'url("/assets/images/gallery2.png")',
        'gallery-3':'url("/assets/images/gallery3.png")',
        'gallery-4':'url("/assets/images/gallery4.png")',
        'gallery-5':'url("/assets/images/gallery5.png")',
        'gallery-6':'url("/assets/images/gallery6.png")',
        'gallery-7':'url("/assets/images/gallery7.png")',
        'gallery-8':'url("/assets/images/gallery8.png")',
        'organizer-lead':'url("/assets/images/organizer1.png")',
        'organizer-colead':'url("/assets/images/organizer2.png")',
        'organizer-tresurer':'url("/assets/images/organizer3.png")',
        'organizer-secretary':'url("/assets/images/organizer4.png")',
        'organizer-fe':'url("/assets/images/organizer5.png")',
        'organizer-be':'url("/assets/images/organizer6.png")',
        'organizer-md':'url("/assets/images/organizer7.png")',
        'organizer-ml':'url("/assets/images/organizer8.png")',
        'organizer-cs':'url("/assets/images/organizer9.png")',
        'organizer-uiux':'url("/assets/images/organizer10.png")',
        'organizer-pm':'url("/assets/images/organizer11.png")',
        'organizer-comdev':'url("/assets/images/organizer12.png")',
        'organizer-cd':'url("/assets/images/organizer13.png")',
        'organizer-cd-2':'url("/assets/images/organizer14.png")',
        'organizer-cw':'url("/assets/images/organizer15.png")',
        'organizer-pr':'url("/assets/images/organizer16.png")',
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

