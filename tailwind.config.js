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
      colors: {
        black: "#000201",
        orange: {
          DEFAULT: "#FF7615",
        },
        blue: {
          DEFAULT: "#02FFFF",
        },
      },
      dropShadow: {
        "blue-sm": "0px 0px 5px #02FFFF",
        blue: "0px 0px 11px #02FFFF",
      },
    },
  },
  plugins: [],
};
