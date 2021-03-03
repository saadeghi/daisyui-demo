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
  // theme: {
  //   extend: {
  //     colors: require('daisyui/colors')
  //   },
  // },
  presets: [
    process.env.NODE_ENV === 'production' ? 'node_modules/tailwindcss/stubs/defaultConfig.stub.js' : require('../daisyui/src/tailwind.config.js')
  ],
}
