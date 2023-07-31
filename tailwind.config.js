module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#060419",
          "900_0a": "#0000000a",
          "900_1e": "#0000001e",
          "900_7f": "#0000007f",
          "900_7a": "#0000007a",
          "900_23": "#00000023",
          "900_26": "#00000026",
          "900_59": "#00000059",
          "900_01": "#07051a",
        },
        amber: {
          100: "#ffedae",
          300: "#ffcc66",
          600: "#ffba00",
          A100_03: "#ffdb6c",
          A100_02: "#fddf6d",
          A100: "#ffde76",
          A100_01: "#fceb88",
        },
        gray: {
          100: "#f5f5f5",
          200: "#f0f0f0",
          300: "#e6e6e6",
          400: "#c4c4c4",
          500: "#aaaaaa",
          700: "#585858",
          800: "#4b1544",
          900: "#0d0b21",
          "400_03": "#bebebe",
          "100_01": "#f5eeff",
          "100_03": "#f6eeff",
          "900_07": "#1f1f1f",
          "100_02": "#f2f2f2",
          "400_02": "#c2c2c2",
          "500_01": "#a4a4a4",
          "400_01": "#c6c6c6",
          "900_02": "#1c1a33",
          "900_04": "#1d133a",
          "500_02": "#ab7193",
          "900_01": "#15132b",
          "900_03": "#2a1538",
          "400_67": "#c2c2c267",
          "900_08": "#381b31",
          "700_01": "#56586f",
          "900_06": "#161616",
          "900_05": "#182830",
        },
        white: {
          A700_aa: "#ffffffaa",
          A700: "#ffffff",
          A700_00: "#ffffff00",
          A700_26: "#ffffff26",
        },
        red: {
          200: "#c99e8a",
          300: "#f26674",
          400: "#db5669",
          500: "#ff2820",
          700: "#bc3b4a",
          A700: "#ff0000",
          A200_aa: "#ff4a55aa",
          A200: "#ff4a55",
          A200_01: "#fc4c59",
          "300_01": "#f76b6b",
          A700_01: "#d80027",
        },
        light_blue: {
          300: "#5dceff",
          400: "#1bbaff",
          800: "#066dcd",
          "300_01": "#5dcfff",
          "300_1e": "#5dceff1e",
          A700_01: "#0084ff",
          "400_01": "#23b7ec",
          A700: "#0a82e9",
        },
        teal: {
          50: "#dfecf2",
          100: "#a6e6e5",
          200: "#90d8d1",
          400: "#34c591",
          900: "#074f50",
          A200: "#4ff3fd",
        },
        orange: {
          200: "#f3cb7d",
          300: "#ffb357",
          400: "#ffaa2c",
          "400_01": "#ffab2d",
          "200_02": "#fcc56b",
          "200_01": "#ffce71",
        },
        green: {
          300: "#83d991",
          400: "#53d869",
          500: "#37e25d",
          600: "#44a03b",
          900: "#00831e",
          A700: "#00ad3c",
          A200: "#53debc",
          "500_01": "#4bd150",
        },
        blue: {
          100: "#c6eeff",
          300: "#6fabe6",
          400: "#4293e6",
          700: "#256ec6",
          900: "#0052b4",
          A200: "#4a8cff",
          "700_02": "#0066dd",
          A400: "#1c70ef",
          "400_02": "#3fa9f5",
          A100: "#82bcf4",
          "700_01": "#2390bf",
          "400_01": "#34a7d8",
        },
        indigo: { 100: "#c4bef4", 500: "#4c5aa7", 900: "#0d3973" },
        lime: { 100: "#e6f9bd", 300: "#dbf089", 800: "#ad905a" },
        light_green: {
          200: "#cce7a0",
          300: "#b5e08c",
          400: "#9dcc6b",
          700: "#639657",
          "400_01": "#8bdd59",
          "300_01": "#aed893",
        },
        pink: {
          100: "#fba8e9",
          300: "#ea518d",
          400: "#e328af",
          600: "#d82865",
          900: "#7f184c",
          "400_01": "#dc3371",
          "900_01": "#7c152e",
        },
        purple: {
          200: "#c98fbb",
          500: "#ab17c3",
          900: "#4a3177",
          A700: "#9303ef",
        },
        blue_gray: {
          500: "#737891",
          700: "#464365",
          800: "#3d3a4e",
          900: "#1e1b3a",
          "900_04": "#2b1e50",
          "900_02": "#382a2b",
          "900_01": "#1c2640",
          "900_05": "#2f2256",
          "900_03": "#313d40",
          "700_01": "#474366",
        },
        deep_orange: { 600: "#e96520", A100: "#f9a880" },
        colors: "#15132bff",
        deep_purple: {
          600: "#6418c3",
          "600_28": "#6417c328",
          "600_38": "#6417c338",
        },
      },
      fontFamily: { cairo: "Cairo", opensans: "Open Sans", poppins: "Poppins" },
      boxShadow: {
        bs: "0px 14px  28px 0px #5dceff1e",
        bs4: "0px 4px  4px 0px #0000000a",
        bs5: "0px 4px  8px 0px #0000000a",
        bs3: "0px 4px  8px 0px #0000001e",
        bs8: "0px 1px  28px 0px #0000001e",
        bs2: "0px 19px  47px 0px #6417c338",
        bs6: "0px 7px  16px 0px #00000023",
        bs1: "18px 4px  35px 0px #00000026",
        bs7: "20px 26px  34px 0px #0000007a",
      },
      backgroundImage: {
        gradient: "linear-gradient(149deg ,#1bbaff,#4ff3fd)",
        gradient1: "linear-gradient(149deg ,#066dcd,#1bbaff)",
        gradient2: "linear-gradient(90deg ,#6418c3,#ab17c3)",
        gradient3: "linear-gradient(214deg ,#8bdd59,#dbf089)",
        gradient4: "linear-gradient(214deg ,#c6eeff,#fba8e9)",
        gradient5: "linear-gradient(90deg ,#6418c3,#ab17c3,#1bbaff,#53debc)",
        gradient6: "linear-gradient(126deg ,#4a8cff,#23b7ec)",
      },
      textShadow: { ts: "0px 17px  35px #0000001e" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};