module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2b6a8b',
        'primary-dark': '#13394E',
        'primary-light': '#277AA6',
      },
      boxShadow: {
        blue: '0 4px 14px 0 rgba(19, 51, 81, 0.39)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
