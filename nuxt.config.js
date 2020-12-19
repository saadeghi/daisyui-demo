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
    ],
    // script: [{src: 'https://unpkg.com/daisyui@latest/dist/styled.css'}]
    ...(process.env.NODE_ENV === 'production' ? {link: [{rel: 'stylesheet',href: 'https://unpkg.com/daisyui@latest/dist/styled.css'}]} : []),

  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // '~/assets/css/tailwind',
    'node_modules/tailwindcss/base',
    'node_modules/tailwindcss/components',

    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/base/typography']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/base/components/accordion']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/base/components/alert']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/base/components/avatar']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/base/components/badge']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/base/components/button']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/base/components/card']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/base/components/form']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/base/components/menu']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/base/components/hero']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/base/components/artboard']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/base/components/navbar']),

    // I'm using this theme config instead of original one because color names change when they convert to json object
    // ...(process.env.NODE_ENV === 'production' ? [] : ['~/assets/css/daisy-config']),
    '~/assets/css/daisy-config',
    // 'node_modules/daisyui/styled/config',

    // ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/styled/config']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/styled/components/accordion']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/styled/components/alert']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/styled/components/avatar']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/styled/components/badge']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/styled/components/button']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/styled/components/card']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/styled/components/form']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/styled/components/menu']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/styled/components/hero']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/styled/components/artboard']),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/styled/components/navbar']),

    'node_modules/tailwindcss/utilities',

  ],



  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-highlightjs',
    { src: "~/plugins/theme-change", mode: "client" },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    "@nuxtjs/svg"
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
