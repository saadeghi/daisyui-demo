<template>
  <div>
    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Method 1: </span>
      <span>install with Node.js</span>
    </h2>
    <Wrapper nocode>

      <p class="prose text-content-800">
        You need
        <a target="_blank" href="https://nodejs.org/en/download/">Node.js</a> and
        <a target="_blank" href="https://tailwindcss.com/docs/installation">Tailwind CSS</a> installed.
      </p>

      <p class="my-4">
        Install DaisyUI:
      </p>
      <div class="w-full max-w-xl my-2">
        <div class="shadow-lg mockup-code bg-content-800 text-content-100">
          <pre data-prefix="$"><code>npm i daisyui</code></pre>
        </div>
      </div>

      <p class="my-4">
        Then add DaisyUI to your <span class="badge">tailwind.config.js</span>
      </p>
      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code bg-content-800 text-content-100">
        <pre><code>module.exports = {

      plugins: [
        <span class="badge badge-ghost">require('daisyui'),</span>
      ],

      <span class="text-content-500">// OPTIONAL: if you want to use DaisyUI colors everywhere</span>
      theme: {
        extend: {
          <span class="badge badge-ghost">colors: require('daisyui/colors'),</span>
        },
      },

    }</code></pre>
        </div>
      </div>

      <h2 class="mt-20 text-5xl font-bold">
        <span class="text-primary">Method 2: </span>
        <span>Use a CDN</span>
      </h2>

      <p class="mt-4 prose text-content-800">
        You don't need to install anything. You can just add the CSS file. However, you can't customize anything and you can't purge unused styles.
      </p>
      <p class="mt-4 font-bold text-primary">
        You have 3 options:
      </p>

      <div class="mt-10 text-content-800">
        <h2 class="text-2xl font-bold">1. Base version <img class="inline-block m-0" :src="'https://badgen.net/badgesize/normal/https/unpkg.com/daisyui@' + daisyuiMaxVersion + '/dist/base.css?label=base.css&color=purple'" alt="base.css"/></h2>
        <p class="prose">
          <ul>
            <li>Unstyled UI components (skeleton only)</li>
            <li>No color, no visual style</li>
            <li>You need to style elements yourself</li>
            <li>You need to add Tailwind CSS Separately</li>
          </ul>
        </p>
      </div>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code bg-content-800 text-content-100">
          <pre><code><span class="text-content-400">&lt;link href="</span>https://cdn.jsdelivr.net/npm/daisyui@{{ daisyuiMaxVersion }}/dist/base.css<span class="text-content-400">" rel="stylesheet" type="text/css" /&gt;</span></code></pre>
        </div>
      </div>


      <div class="mt-10 text-content-800">
        <h2 class="text-2xl font-bold">2. Styled version <img class="inline-block m-0" :src="'https://badgen.net/badgesize/normal/https/unpkg.com/daisyui@' + daisyuiMaxVersion + '/dist/styled.css?label=styled.css&color=purple'" alt="styled.css"/></h2>
        <p class="prose">
          <ul>
            <li>Ready-to-use styled UI components</li>
            <li>You can't use DaisyUI colors (like primary, secondary, etc...) on other elements</li>
            <li>You need to add Tailwind CSS Separately</li>
          </ul>
        </p>
      </div>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code bg-content-800 text-content-100">
          <pre><code><span class="text-content-400">&lt;link href="</span>https://cdn.jsdelivr.net/npm/daisyui@{{ daisyuiMaxVersion }}/dist/styled.css<span class="text-content-400">" rel="stylesheet" type="text/css" /&gt;</span></code></pre>
        </div>
      </div>



      <div class="mt-10 text-content-800">
        <h2 class="text-2xl font-bold">3. Full version <img class="inline-block m-0" :src="'https://badgen.net/badgesize/normal/https/unpkg.com/daisyui@' + daisyuiMaxVersion + '/dist/full.css?label=full.css&color=purple'" alt="full.css"/></h2>
        <p class="prose">
          <ul>
            <li>Ready-to-use styled UI components</li>
            <li>Tailwind's default style included</li>
            <li>You can use DaisyUI colors on all elements</li>
          </ul>
        </p>
      </div>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code bg-content-800 text-content-100">
          <pre><code><span class="text-content-400">&lt;link href="</span>https://cdn.jsdelivr.net/npm/daisyui@{{ daisyuiMaxVersion }}/dist/full.css<span class="text-content-400">" rel="stylesheet" type="text/css" /&gt;</span></code></pre>
        </div>
      </div>


    </Wrapper>


    <div class="flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-content-200">
      <NuxtLink to="/docs/use" class="text-xs btn-lg btn btn-outline lg:text-lg">
        Next: How to use
        <Icon glyph="arrow" class="inline-block w-6 h-6 ml-2 stroke-current" />
      </NuxtLink>
    </div>


  </div>
</template>
<script>
export default {
  data() {
    return {
      daisyuiMaxVersion: process.env.daisyuiMaxVersion,
    }
  }
}
</script>
