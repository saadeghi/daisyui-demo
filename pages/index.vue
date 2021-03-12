<template>
  <div class="pb-10">
    <div class="mx-auto mt-16 text-center text-base-content">
      <div class="inline-block w-44 lg:w-60" v-html="svgLogo"></div>
      <p class="py-4 font-bold text-secondary">
        Tailwind CSS Components
      </p>
      <div class="text-sm italic text-opacity-50 text-base-content">
        Adds components like <NuxtLink to="/components/button" class="px-0 lowercase btn btn-sm btn-link">btn</NuxtLink>, <NuxtLink to="/components/card" class="px-0 lowercase btn btn-sm btn-link">card</NuxtLink> and <NuxtLink to="/components/accordion" class="px-0 lowercase btn btn-sm btn-link">more...</NuxtLink> to Tailwind CSS
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-full max-w-lg my-10">
        <div class="shadow-lg mockup-code">
          <pre data-prefix="$"><code>npm i daisyui --save</code></pre>
        </div>
      </div>
      <div class="flex space-x-4">
        <NuxtLink to="/docs/install" class="shadow-lg btn-lg btn btn-primary">
          Get started
        </NuxtLink>
        <a class="btn-lg btn btn-ghost" href="https://github.com/saadeghi/daisyui" target="_blank">
          <svg width="24" height="24" fill="currentColor" class="mr-2 text-base-content"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path></svg>
          Github
        </a>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-full max-w-lg mt-20 text-center">
        <p class="mt-6">
          <a target="_blank" href="https://github.com/saadeghi/daisyui/actions">
            <img class="inline-block" src="https://badgen.net/github/checks/saadeghi/daisyui?label=build" alt="">
          </a>
          <a target="_blank" :href="'https://bundlephobia.com/result?p=daisyui'">
            <img class="inline-block" :src="'https://badgen.net/bundlephobia/min/daisyui?label=Package%20size&amp;color=purple'" alt="">
          </a>
          <a target="_blank" :href="'https://cdn.jsdelivr.net/npm/daisyui@' + DAISYUI_VERSION + '/dist/styled.css'">
            <img class="inline-block" :src="'https://badgen.net/badgesize/normal/https/unpkg.com/daisyui/dist/styled.css?label=CSS%20size&color=purple'" alt="">
          </a>
          <a target="_blank" href="https://www.npmjs.com/package/daisyui">
            <img class="inline-block" src="https://badgen.net/npm/v/daisyui?label=version&amp;icon=npm&amp;color=purple" alt="">
          </a>
          <a target="_blank" href="https://www.npmjs.com/package/daisyui">
            <img class="inline-block" src="https://badgen.net/npm/dt/daisyui?icon=npm&amp;color=purple" alt="">
          </a>
          <a target="_blank" href="https://github.com/saadeghi/daisyui">
            <img class="inline-block" src="https://badgen.net/github/last-commit/saadeghi/daisyui?icon=github&amp;color=purple" alt="">
          </a>
          <a target="_blank" href="https://github.com/saadeghi/daisyui/blob/master/LICENSE">
            <img class="inline-block" src="https://badgen.net/github/license/saadeghi/daisyui?color=purple" alt="">
          </a>
        </p>
      </div>
    </div>

    <div class="mt-6 text-center">
      <a class="btn btn-link btn-sm" target="_blank" href="https://play.tailwindcss.com/whCH0z6ZlQ">Tailwind Play</a>
      <a class="btn btn-link btn-sm" target="_blank" href="https://codepen.io/saadeghi/pen/gOwWKvv">Codepen</a>
      <a class="btn btn-link btn-sm" target="_blank" href="https://github.com/saadeghi/daisyui">Github</a>
      <a class="btn btn-link btn-sm" target="_blank" href="https://www.npmjs.com/package/daisyui">NPM</a>
      <a class="btn btn-link btn-sm" target="_blank" href="https://unpkg.com/browse/daisyui/">Unpkg</a>
      <a class="btn btn-link btn-sm" target="_blank" href="https://www.jsdelivr.com/package/npm/daisyui">JSdeliver</a>
    </div>


    <div class="flex justify-center pt-32 pb-12">
      <div class="inline-block text-3xl font-bold border-b-8 lg:text-7xl text-base-content border-primary">Features</div>
    </div>

    <div class="grid grid-cols-1 gap-10 px-4 py-20 mx-auto lg:max-w-5xl lg:text-center lg:grid-cols-2 justify-items-center rounded-box bg-base-200">

      <div class="max-w-xs">
        <h2 class="text-xl font-bold card-title">
          <Icon glyph="check" class="inline-block w-6 h-6 mb-2 mr-2 stroke-current text-success" /><br>
          Component classes
        </h2>
        <p class="text-opacity-50 text-base-content">It adds component classes to Tailwind. Classes like <span class="badge badge-info">btn</span>, <span class="badge badge-info">card</span>,... No need to deal with hundreds of utility classes.</p>
      </div>

      <div class="max-w-xs">
        <h2 class="text-xl font-bold card-title">
          <Icon glyph="check" class="inline-block w-6 h-6 mb-2 mr-2 stroke-current text-success" /><br>
          Tailwind CSS plugin
        </h2>
        <p class="text-opacity-50 text-base-content">DaisyUI is a Tailwind CSS plugin so you can simply add it to your <span class="badge badge-info">tailwind.config.js</span> file.</p>
      </div>

      <div class="max-w-xs">
        <h2 class="text-xl font-bold card-title">
          <Icon glyph="check" class="inline-block w-6 h-6 mb-2 mr-2 stroke-current text-success" /><br>
          Based on design system
        </h2>
        <p class="text-opacity-50 text-base-content">DaisyUI applies design system concepts to Tailwind CSS. Every component on your page is committed to a single design system.</p>
      </div>

      <div class="max-w-xs">
        <h2 class="text-xl font-bold card-title">
          <Icon glyph="check" class="inline-block w-6 h-6 mb-2 mr-2 stroke-current text-success" /><br>
          Customizable
        </h2>
        <p class="text-opacity-50 text-base-content">You can customize the design of components with Tailwind utility classes and CSS variables.</p>
      </div>

      <div class="max-w-xs">
        <h2 class="text-xl font-bold card-title">
          <Icon glyph="check" class="inline-block w-6 h-6 mb-2 mr-2 stroke-current text-success" /><br>
          Semantic color names
        </h2>
        <p class="text-opacity-50 text-base-content">Use color names like <span class="badge badge-info">primary</span>, <span class="badge badge-info">secondary</span>, <span class="badge badge-info">accent</span>,... just like your design system defines.</p>
      </div>

      <div class="max-w-xs">
        <h2 class="text-xl font-bold card-title">
          <Icon glyph="check" class="inline-block w-6 h-6 mb-2 mr-2 stroke-current text-success" /><br>
          RTL supported
        </h2>
        <p class="text-opacity-50 text-base-content">Enable <span class="badge badge-info">rtl</span> config for right to left layouts.</p>
      </div>

      <div class="max-w-xs">
        <h2 class="text-xl font-bold card-title">
          <Icon glyph="check" class="inline-block w-6 h-6 mb-2 mr-2 stroke-current text-success" /><br>
          Themeable
        </h2>
        <p class="text-opacity-50 text-base-content">Add multiple themes or change colors with a CSS variable. You can even set a theme for a specific section of your page.</p>
      </div>

      <div class="max-w-xs">
        <h2 class="text-xl font-bold card-title">
          <Icon glyph="check" class="inline-block w-6 h-6 mb-2 mr-2 stroke-current text-success" /><br>
          Designer-friendly
        </h2>
        <p class="text-opacity-50 text-base-content">You can disable <span class="badge badge-info">styled</span> config and only get the skeleton of components. No style, no colors. You can style everything using utility classes.</p>
      </div>

    </div>


    <div class="grid grid-cols-1 mt-20 mb-6">

      <div class="flex justify-center">
        <div class="flex-row items-center max-w-xs space-x-4 card-body">
          <div>
            <div class="avatar">
              <div class="rounded-full shadow w-14 h-14">
                <img src="https://unavatar.now.sh/github/saadeghi">
              </div>
            </div>
          </div>
          <a href="https://twitter.com/Saadeghi" target="_blank" class="hover:opacity-75">
            <p class="text-xs text-opacity-50 text-base-content">Designed and developed by</p>
            <h2 class="card-title">Pouya Saadeghi</h2>
          </a>
        </div>
      </div>

    </div>


  </div>
</template>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

<script>
export default {
  data() {
    return {
      DAISYUI_VERSION: process.env.DAISYUI_VERSION,
    }
  },
  computed: {
    svgLogo() {
      return require(`~/static/logo.svg?raw`)
    }
  }
}
</script>
