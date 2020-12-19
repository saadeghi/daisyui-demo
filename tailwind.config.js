module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'nuxt.config.js',
      'static/*.svg',
    ],
    options: {
      safelist: [
        /data-theme$/,
      ],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  presets: [
    process.env.NODE_ENV === 'production' ? require('daisyui/preset') : require('../daisyui/preset')
  ],
}
