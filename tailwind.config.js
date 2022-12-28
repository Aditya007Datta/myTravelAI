// @type { import('tailwindcss').Config }
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#78350f",

          "secondary": "#ffffff",

          "accent": "#ffffff",

          "neutral": "#ffffff",

          "base-100": "#9ca3af",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [
    // require("@tailwindcss/typography"),
    require("daisyui")],
}
