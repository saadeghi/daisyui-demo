module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'nuxt.config.js',
    ]
  },
  presets: [
    require('./daisyui/preset')
  ],
  plugins: [
    require('@tailwindcss/typography'),
    // require('./../daisyui'),
  ],
}
