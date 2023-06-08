/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      maxWidth: {
        'inherit':'inherit'
      },
      colors:{
        'inherit':'inherit'
      },
      fontFamily:{
        'inherit':'inherit'
      },
      screens:{
        'phone' : { raw : 'screen and (max-width: 991px) and (orientation: portrait)'},
        'desktop' : {raw : 'only screen and (max-height: 767px) and (orientation: landscape)'}
      }
    },
  },
  plugins: [],
}

