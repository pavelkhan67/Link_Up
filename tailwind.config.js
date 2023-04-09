/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#e524e5",

          "secondary": "#9d7cef",

          "accent": "#57e234",

          "neutral": "#211F2E",

          "base-100": "#E4E1EA",

          "info": "#67D3F4",

          "success": "#18B456",

          "warning": "#8A720F",

          "error": "#E43A72",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

