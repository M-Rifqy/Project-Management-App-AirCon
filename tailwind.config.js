const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
          fontFamily: {
            orbitron: ['Orbitron'],
            quicksand: ['Quicksand'],
            meaCulpa: ['Mea Culpa'],
            play: ['Play'],
            montserrat: ['Montserrat']
          }
        },
      },

    plugins: [require('@tailwindcss/forms')],
};
