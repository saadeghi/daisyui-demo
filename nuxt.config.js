export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'DaisyUI workshop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // '~/assets/css/tailwind',
    'node_modules/tailwindcss/base',
    'node_modules/tailwindcss/components',

    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/base/accordion']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/base/alert']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/base/avatar']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/base/badge']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/base/button']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/base/card']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/base/form']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/base/menu']),

    // I'm using this theme config instead of original one because color names change when they convert to json object
    ...(process.env.NODE_ENV === 'production' ? [] : ['~/assets/css/daisy-config']),

    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/styled/accordion']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/styled/alert']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/styled/avatar']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/styled/badge']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/styled/button']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/styled/card']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/styled/form']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/styled/menu']),

    'node_modules/tailwindcss/utilities',

  ],



  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-highlightjs.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    parallel: true,
    cache: true,
    // hardSource: false,
    // sourceMap: false,
    postcss: {
      plugins: {
        'postcss-nested': {},
        'tailwindcss': {},
      },
    }
  }
}
