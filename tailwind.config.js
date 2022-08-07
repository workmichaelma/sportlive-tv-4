module.exports = {
  content: ['./components/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    borderWidth: {
      1: '1px',
      2: '2px',
    },
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
