module.exports = {
  mode: 'jit',
  purge: [
    'src/pages/**/*.{js,ts,jsx,tsx}',
    'src/components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
};
