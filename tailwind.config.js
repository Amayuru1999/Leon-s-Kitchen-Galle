module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#f9f9f9", 100: "#f5f5f5", 300: "#dadada", 800: "#46404f", "800_01": "#45404f" },
        white: { A700: "#ffffff" },
        blue_gray: { 100: "#d1d1d1", 900: "#2e2e2e" },
        black: { 900: "#050505" },
        amber: { 600: "#f8b602", "600_01": "#e6b400" },
        red: { 400: "#eb5757" },
      },
      boxShadow: {},
      fontFamily: { poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
