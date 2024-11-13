/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textgreen: "#86C232",
        buttongreen: "#61892F",
        inputfield: "#6B6E70",
        hoverbutton: "#222629",
        secondgrey: "#474B4F",
      },
      backgroundImage: {
        "login-bg": "url('/assets/login.jpg')",
        "signup-bg": "url('/assets/signup.png')",
        "homepage-bg": "url('/assets/homepage.jpg')",
        "about-bg": "url('/assets/about.png')",
      },
      fontFamily: {
        syke: ["Syke", "sans-serif"],
        "syke-light": ["Syke-Light", "sans-serif"],
        "syke-bold": ["Syke-Bold", "sans-serif"],
        "syke-medium": ["Syke-Medium", "sans-serif"],
        "syke-thin": ["Syke-Thin", "sans-serif"],
        "syke-black": ["Syke-Black", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", right: "-400px" },
          "100%": { opacity: "100", right: "1rem" },
        },
        fadeOut: {
          "0%": { opacity: "100", right: "1rem" },
          "100%": { opacity: "0", right: "-400px" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in",
        fadeOut: "fadeOut 0.5s ease-out",
      },
      plugins: [],
    },
  },
};
