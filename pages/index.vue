<template>
  <div>
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
        <div class="shadow-lg card bg-content-800 text-content-100">
          <div class="flex gap-2 p-5">
            <span class="w-3 h-3 rounded-full bg-content-600"></span>
            <span class="w-3 h-3 rounded-full bg-content-600"></span>
            <span class="w-3 h-3 rounded-full bg-content-600"></span>
          </div>
          <div class="flex p-4 pt-0 pb-6 font-mono">
            <div class="mx-4 select-none text-content-600">$</div>
            <pre><code>npm i daisyui</code></pre>
          </div>
        </div>
      </div>
      <div class="flex gap-4">
        <a class="shadow-lg btn-lg btn btn-primary" href="https://github.com/saadeghi/daisyui" target="_blank">
        <svg width="24" height="24" fill="currentColor" class="mr-2 text-content-primary"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path></svg>
          Get started
        </a>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="w-full max-w-md mt-20 text-center">
        <p>
          <a target="_blank" href="https://github.com/saadeghi/daisyui/actions">
            <img class="inline-block" src="https://badgen.net/github/checks/saadeghi/daisyui?label=build" alt="">
          </a>
          <a target="_blank" href="https://bundlephobia.com/result?p=daisyui">
            <img class="inline-block" src="https://badgen.net/bundlephobia/min/daisyui?&color=purple" alt="">
          </a>
          <a target="_blank" href="https://unpkg.com/daisyui@latest/dist/base.css">
            <img class="inline-block" src="https://badgen.net/badgesize/normal/https/unpkg.com/daisyui/dist/base.css?label=base.css&amp;color=purple" alt="">
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
