/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "bustar-orange": {
          50: "#fff5ed",
          100: "#ffe9d4",
          200: "#ffcfa9",
          300: "#ff9f59",
          400: "#fe8039",
          500: "#fc5d13",
          600: "#ed4309",
          700: "#c52f09",
          800: "#9c2710",
          900: "#7e2210",
          950: "#440e06",
        },
      },
    },
  },
  plugins: [],
}
