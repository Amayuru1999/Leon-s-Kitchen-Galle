module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 100: "#f5f5f5", "100_01": "#f2f5f3" },
        white: { A700: "#ffffff" },
        black: { 900: "#03081f", "900_02": "#000000", "900_99": "#00000099" },
        orange: { 600: "#fc8a06" },
        blue_gray: { 100: "#d9d9d9", 800: "#464154", 900: "#2e2e2e" },
        teal: { 500: "#00b074" },
        amber: { 600: "#f8b602" },
      },
      boxShadow: { xs: "0px 15px  20px 0px #4606501e" },
      fontFamily: { poppins: "Poppins", barlow: "Barlow" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
