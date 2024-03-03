module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        black: {
          900: "#03081f",
          "900_01": "#000000",
          "900_90": "#03081f90",
          "900_1c": "#0000001c",
          "900_19": "#00000019",
          "900_33": "#00000033",
          "900_6c": "#03081f6c",
          "900_87": "#00000087",
          "900_99": "#00000099",
        },
        gray: {
          50: "#f8f8f8",
          100: "#f6f6f6",
          200: "#eeeeee",
          400: "#bcbcbc",
          900: "#282828",
          "50_01": "#fafafa",
          "50_02": "#fcfcfc",
          "900_01": "#202020",
        },
        lime: { 300: "#e8eb61" },
        orange: { 600: "#fc8a06", "600_cc": "#fc8a06cc" },
        blue_gray: { 100: "#d9d9d9", 400: "#8e8e8e", "100_01": "#cfcfcf" },
        teal: { 800: "#028643" },
      },
      boxShadow: { xs: "5px 5px  14px 0px #0000003f", sm: "5px 5px  34px 0px #0000003f" },
      fontFamily: { poppins: "Poppins", manrope: "Manrope" },
      opacity: { 0.4: 0.4, 0.2: 0.2, 0.5: 0.5 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
