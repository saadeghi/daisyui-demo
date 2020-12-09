module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'nuxt.config.js',
    ],
    options: {
      safelist: ["[data-theme='dark']", "[data-theme='black']", "[data-theme='retro']", "[data-theme='dracula']", "[data-theme='christmas']"],
    },
  },
  presets: [
    process.env.NODE_ENV === 'production' ? require('daisyui/preset') : require('../daisyui/preset')
  ],
  plugins: [
    require('@tailwindcss/typography'),
    process.env.NODE_ENV === 'production' ? require('daisyui/styled') : ''
  ],
}
