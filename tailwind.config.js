module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        blue_gray: { 200: "#c0c7d0", 400: "#828fa2", 800: "#36414f", 900: "#2d2d2d" },
        indigo: { 50: "#e2e8ed", 400: "#5564d7" },
        red: { 600: "#e04243" },
        gray: { 50: "#f8f8f8", 100: "#f4f4fa", 500: "#a6a5a5" },
        deep_orange: { 300: "#ff8b6a" },
        green: { 700: "#279044" },
        amber: { 300: "#ffc85f" },
      },
      boxShadow: { xs: "0px 4px  120px 0px #0000000c" },
      fontFamily: { inter: "Inter", poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
