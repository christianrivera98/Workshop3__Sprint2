import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: { max: "1440px" },
      // => @media (max-width: 1440px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 768px) { ... }

      sm: { max: "375px" },
      // => @media (max-width: 375px) { ... }
    },
    extend: {
      backgroundImage: {
        desktop:
          "url('../../../assets/destination/background-destination-desktop.jpg)",
        tablet:
          "url('../../../assets/destination/background-destination-tablet.jpg)",
        mobile:
          "url('../../../assets/destination/background-destination-mobile.jpg)",
      },
      colors: {
        "azul-grisáceo": "#d0d6f9",
        "black-trans":"#ffffff06"
      },
    },
    plugins: [
      plugin(function({ addVariant }) {
        addVariant('current', '&.active');
    })
    ],
  },
};
