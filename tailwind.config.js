module.exports = {
  purge: ["./src/**/*.{html,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      hdcx10: "10px",
      hdcx11: "11px",
      hdcx12: "12px",
      hdcx14: "14px",
      hdcx18: "18px",
      hdcx20: "20px",
      hdcx25: "25px",
      hdcx30: "30px",
      hdcx35: "35px",
      hdcx40: "40px",
      hdcx45: "45px",
      hdcx50: "50px",
      hdcx100: "100px",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      rubick: ["Rubik", "sans-serif"],
    },
    colors: {
      white: "#FFFFFF",
      transparent: "transparent",
      primary: {
        900: "#081829",
        800: "#0C2643",
        700: "#0F3760",
        600: "#13467C",
        500: "#175597",
        400: "#4173AA",
        300: "#6E94BE",
        200: "#95B1CF",
        100: "#C5D4E5 ",
        50: "#EEF3F8",
      },
      dark: {
        900: "#0C0C0C",
        800: "#131313",
        700: "#191919",
        600: "#202020",
        500: "#272727",
        400: "#4E4E4E",
        300: "#737373",
        200: "#9E9E9E",
        100: "#CCCCCC",
        50: "#F3F3F3",
      },
      disabled: {
        900: "#323232",
        800: "#555555",
        700: "#777777",
        600: "#9B9B9B",
        500: "#BFBFBF",
        400: "#CBCBCB",
        300: "#D6D6D6",
        200: "#E4E4E4",
        100: "#F0F0F0",
        50: "#FBFBFB",
      },
      gray: {
        900: "#1C1D21",
        800: "#303139",
        700: "#444650",
        600: "#585967",
        500: "#6B6D7E",
        400: "#868896",
        300: "#A0A1AC",
        200: "#BEBFC6",
        100: "#DADADF",
        50: "#F3F3F4",
      },
      danger: {
        900: "#FB0F16",
        800: "#F91A27",
        700: "#F62639",
        600: "#EA324B",
        500: "#EF3D5B",
        400: "#F26078",
        300: "#F58497",
        200: "#F8A9B6",
        100: "#FBCFD6",
        50: "#FEEEF1",
      },
      success: {
        900: "#0A5540",
        800: "#176B4F",
        700: "#207D5B",
        600: "#37A576",
        500: "#37AF71",
        400: "#42B 983",
        300: "#63C599",
        200: "#85D2AF",
        100: "#AAE0C7",
        50: "#CFEDDF",
      },
      indigo: {
        100: "#ebf4ff",
        200: "#c3dafe",
        300: "#a3bffa",
        400: "#7f9cf5",
        500: "#667eea",
        600: "#5a67d8",
        700: "#4c51bf",
        800: "#434190",
        900: "#3c366b",
      },
      warning: {
        50: "#FFEFC3",
        100: "#FFE08C",
        200: "#FFD562",
        300: "#FFC731",
        400: "#FFBA00",
        500: "#E6A103",
        600: "#CB8705",
        700: "#E6A103",
        800: "#B57108",
        900: "#9B580B",
      },
      info: {
        50: "#CEEBF8",
        100: "#9ED8F1",
        200: "#7ACAEC",
        300: "#4EB9E6",
        400: "#24A8E0",
        500: "#28A0E4",
        600: "#2D9AE8",
        700: "#3193EC",
        800: "#348CF0",
        900: "#3B82F6",
      },
      purple: {
        50: "#F2E6FE",
        100: "#E5CFFD",
        200: "#DBBDFC",
        300: "#D2ACFB",
        400: "#C798FB",
        500: "#BD86FA",
        600: "#B373FA",
        700: "#A860F8",
        800: "#9F4EF8",
        900: "#9134F7",
      },
    },
    extend: {
      zIndex: {
        0: 0,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        999: 999,
        9999:9999,
        auto: "auto",
        "-2": "-2",
      },
      transitionDuration: {
        0: "0ms",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};


