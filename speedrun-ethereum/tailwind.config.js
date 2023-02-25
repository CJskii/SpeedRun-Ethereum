/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8C02F9C2",
          secondary: "#1C69FFC2",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#030709",
          "base-content": "#ffffff",
          "primary-focus": "#201CFF",
          "secondary-focus": "#C41CFF",
        },
      },
    ],
  },
};
