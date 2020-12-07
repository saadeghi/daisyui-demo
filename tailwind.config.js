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
    process.env.NODE_ENV === 'production' ? require('daisyui/preset') : require('./daisyui/preset')
  ],
  plugins: [
    require('@tailwindcss/typography'),
    process.env.NODE_ENV === 'production' ? require('daisyui/styled') : ''
  ],
}
