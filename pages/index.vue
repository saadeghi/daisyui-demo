<template>
  <div class="pb-20">
    <div class="mx-auto mt-16 text-center text-content-800">
      <div class="inline-block w-44 lg:w-60" v-html="svgLogo"></div>
      <p class="py-4 font-bold text-primary">
        UI Components for Tailwind CSS
      </p>
      <div class="text-sm italic text-content-600">
        You have everything from Tailwind CSS, <br>but you can also use component classes like btn, card, etc...
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-full max-w-lg my-10">
        <div class="shadow-lg mockup-code bg-content-800 text-content-100">
          <pre data-prefix="$"><code>npm i daisyui</code></pre>
        </div>
      </div>
      <div class="flex gap-4">
        <NuxtLink to="/docs/install" class="shadow-lg btn-lg btn btn-primary">
          Get started
        </NuxtLink>
        <a class="btn-lg btn" href="https://github.com/saadeghi/daisyui" target="_blank">
          <svg width="24" height="24" fill="currentColor" class="mr-2 text-content-900"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path></svg>
          Github
        </a>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-full max-w-md mt-20 text-center">
        <p>
          <a target="_blank" href="https://github.com/saadeghi/daisyui/actions">
            <img class="inline-block" src="https://badgen.net/github/checks/saadeghi/daisyui?label=build" alt="">
          </a>
          <a target="_blank" href="https://unpkg.com/daisyui@latest/dist/styled.css">
            <img class="inline-block" src="https://badgen.net/badgesize/normal/https/unpkg.com/daisyui/dist/styled.css?label=styled.css&amp;color=purple" alt="">
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

    <div class="flex justify-center pt-32 pb-12">
      <div class="inline-block text-3xl font-bold border-b-8 lg:text-7xl text-content-900 border-primary">Features</div>
    </div>

    <div class="grid max-w-4xl grid-cols-1 gap-20 mx-auto lg:grid-cols-2">

      <div>
        <h2 class="text-xl font-bold card-title">
          <Icon glyph="check" class="inline-block w-6 h-6 mr-2 stroke-current text-success" />
          CSS components
        </h2>
        <p class="text-content-500">It adds component classes to Tailwind. Classes like btn, card,... No need to deal with hundreds of utility classes.</p>
      </div>

      <div>
        <h2 class="text-xl font-bold card-title">
          <Icon glyph="check" class="inline-block w-6 h-6 mr-2 stroke-current text-success" />
          Tailwind CSS plugin
        </h2>
        <p class="text-content-500">DaisyUI is a Tailwind CSS plugin so you can simply add it to your tailwind.config.js file.</p>
      </div>

      <div>
        <h2 class="text-xl font-bold card-title">
          <Icon glyph="check" class="inline-block w-6 h-6 mr-2 stroke-current text-success" />
          Scalable
        </h2>
        <p class="text-content-500">All your components will use the same design system.</p>
      </div>

      <div>
        <h2 class="text-xl font-bold card-title">
          <Icon glyph="check" class="inline-block w-6 h-6 mr-2 stroke-current text-success" />
          Customizable
        </h2>
        <p class="text-content-500">Customize the style of elements with Tailwind utility classes.</p>
      </div>

      <div>
        <h2 class="text-xl font-bold card-title">
          <Icon glyph="check" class="inline-block w-6 h-6 mr-2 stroke-current text-success" />
          Themeable
        </h2>
        <p class="text-content-500">Add multiple themes or change colors with a CSS variable. You can even set a theme for a specific section of your page.</p>
      </div>

      <div>
        <h2 class="text-xl font-bold card-title">
          <Icon glyph="check" class="inline-block w-6 h-6 mr-2 stroke-current text-success" />
          Semantic color names
        </h2>
        <p class="text-content-500">Use color names like primary, secondary, accent,... just like your design system defines.</p>
      </div>

      <div>
        <h2 class="text-xl font-bold card-title">
          <Icon glyph="check" class="inline-block w-6 h-6 mr-2 stroke-current text-success" />
          Beatiful UI library
        </h2>
        <p class="text-content-500">If you use "Styled" version of DaisyUI you won't need to design any component (but you can still customizable everything)</p>
      </div>

      <div>
        <h2 class="text-xl font-bold card-title">
          <Icon glyph="check" class="inline-block w-6 h-6 mr-2 stroke-current text-success" />
          Designer-friendly
        </h2>
        <p class="text-content-500">If you use "Base" version of DaisyUI, you only get the skeleton of components. No style, no colors. You can style everything using utility classes</p>
      </div>

    </div>

    <div class="flex justify-center pt-32 pb-12">
      <div class="inline-block text-3xl font-bold border-b-8 lg:text-7xl text-content-900 border-primary">Try It online</div>
    </div>


    <div class="grid max-w-4xl grid-cols-1 gap-20 mx-auto lg:grid-cols-2">

      <div class="card card-side bordered">
        <div class="text-center card-body">
          <p>Try it on Tailwind Play</p>
          <div class="justify-center space-x-2 card-actions">
            <a class="btn btn-accent" href="https://play.tailwindcss.com/908kXKMIeO" target="_blank">
              Try Now
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 ml-2 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="card card-side bordered">
        <div class="text-center card-body">
          <p>Try DaisyUI on TailwindPlay</p>
          <div class="justify-center space-x-2 card-actions">
            <a class="btn btn-secondary" href="https://codepen.io/saadeghi/pen/gOwWKvv" target="_blank">
              Try Now
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 ml-2 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

    </div>


    <div class="flex justify-center pt-32 pb-12">
      <div class="inline-block text-3xl font-bold border-b-8 lg:text-7xl text-content-900 border-primary">Install Now</div>
    </div>


    <div class="flex flex-col items-center">
      <div class="w-full max-w-lg my-10">
        <div class="shadow-lg mockup-code bg-content-800 text-content-100">
          <pre data-prefix="$"><code>npm i daisyui</code></pre>
        </div>
      </div>
      <div class="flex gap-4">
        <NuxtLink to="/docs/install" class="shadow-lg btn-lg btn btn-primary">
          Get Started
        </NuxtLink>
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
  computed: {
    svgLogo() {
      return require(`~/static/logo.svg?raw`)
    }
  }
}
</script>
