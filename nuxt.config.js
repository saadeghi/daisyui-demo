function getFiles(path, format= 'css') {
  const fs = require('fs');
  let filesArray = [];
  fs.readdirSync(path).forEach(file => {
    if(file.endsWith('.' + format) && !file.startsWith('index')){
      filesArray.push(path + '/' + file)
    }
  });
  return filesArray;
}

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'DaisyUI Demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: (process.env.NODE_ENV === 'production') ? 'https://unpkg.com/daisyui@latest/dist/full.css' : ''
      },
      {
        rel: 'stylesheet',
        href: (process.env.NODE_ENV === 'production') ? 'https://unpkg.com/daisyui@latest/dist/themes.css' : ''
      },
    ],

  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // '~/assets/css/tailwind',
    'node_modules/tailwindcss/base',
    'node_modules/tailwindcss/components',
    ...(process.env.NODE_ENV === 'production' ? [] : [...getFiles('../daisyui/src/base')]),
    ...(process.env.NODE_ENV === 'production' ? [] : [...getFiles('../daisyui/src/base/components')]),
    ...(process.env.NODE_ENV === 'production' ? [] : [...getFiles('../daisyui/src/styled/components')]),
    ...(process.env.NODE_ENV === 'production' ? [] : ['../daisyui/src/themes/index']),
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
    publicPath: '/nuxt-files/',
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
  },
  target: 'static',
  router: {
    base: (process.env.ROUTER_BASE) ? process.env.ROUTER_BASE : '/'
  },
}
