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

          "primary": "#3174c6",

          "secondary": "#7f71fc",

          "accent": "#c92251",

          "neutral": "#2E2438",

          "base-100": "#FFFFFF",

          "info": "#757575",

          "success": "#3AD4A8",

          "warning": "#D17A10",

          "error": "#F04C72",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

