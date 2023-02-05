/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        cont: "url('/assets/images/component-bg.png')",
      },
      screens: {
        "2xl": { max: "2560px" },
        // => @media (max-width: 1535px) { ... }
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
        lg: { max: "1025px" },
        // => @media (max-width: 1023px) { ... }
        md: { max: "768px" },
        // => @media (max-width: 767px) { ... }
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      fontSize: {
        first: [
          "32px",
          {
            lineHeight: "39px",
          },
        ],
        login: [
          "20px",
          {
            lineHeight: "24px",
          },
        ],
      },
      transitionDuration: {
        0: "0ms",
        20: "20ms",
      },
      colors: {
        providus: "#FDB007",
        bac: "#273C47",
        bac2: '#A6C7D9',
        gen1: "#F5F5F5",
        bord: "#D8DCDE",
        bord1: "#d9d9d9",
        cardbg: "A1A7AB",
        yellow: '#FDB007',
        grey: '#E6EEF1',
      },
      spacing: {
        "29.5%": "29.5%",
      },
      boxShadow: {
        'xl': '2px 2px 8px rgba(0, 0, 0, 0.25)',
      },
      width: {
        "500px": "500px"
      }
    },
  },
  plugins: [],
};
