// @type { import('tailwindcss').Config }
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#B47575",

          "secondary": "#ffffff",

          "accent": "#ffffff",

          "neutral": "#ffffff",

          "base-100": "#9ca3af",

          "info": "#3F1B1B",

          "success": "#F0EDE1",

          "warning": "#D7AA26",

          "error": "#E1E1E1",
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
