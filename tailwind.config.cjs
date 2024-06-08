/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000000",
      bg_15: "#3F66B026 0.15",
      bg_card: "#001118",
      bg_card_2: "#090f1a",
      bg_card_3: "#111111",
      primary: "#03A9F4",
      secondary: "#000000",
      tiatia: "#FF5722",
      white: "#FFFFFF",
      white_90: "rgba(255,255,255,0.6)",
      gray_90: "#E1E8F0",
      green_success: "#1DC560",
      yellow_warning: "#FFB800",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
