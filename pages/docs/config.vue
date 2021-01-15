<template>
  <div>
    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Config</span>
    </h2>
    <Wrapper nocode>

      <p class="mb-4">
        DaisyUI can be configed from your <span class="badge">tailwind.config.js</span> file
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code bg-content-800 text-content-100">
        <pre><code>module.exports = {

      <span class="text-content-500">// add DaisyUI plugin</span>
      plugins: [
        require('daisyui'),
      ],

      <span class="text-content-500">// add DaisyUI colors (optional)</span>
      theme: {
        extend: {
          colors: require('daisyui/colors'),
        },
      },

      <span class="text-content-500">// config (optional)</span>
      daisyui: {
        styled: true,
        themes: false,
        rtl: false,
      },

    }</code></pre>
        </div>
      </div>

      <h2 class="my-6 text-3xl font-bold">
        <span class="text-primary">Config values explained:</span>
      </h2>
      <p class="my-4">
        You can add a `daisyUI` object and change default config:
      </p>

      <h2 class="mt-6 text-2xl font-bold">
        <span>styled</span>
      </h2>
      <p class="badge">
        default: true
      </p>
      <p class="my-4">
        If it's true, components will have colors and style so you won't need to design anything.
        <br>
        If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton.
      </p>

      <h2 class="mt-6 text-2xl font-bold">
        <span>themes</span>
      </h2>
      <p class="badge">
        default: false
      </p>
      <p class="my-4">
        If it's true, 9 default themes will be included.
        <NuxtLink to="/docs/default-themes" class="inline-block btn btn-sm">Default themes</NuxtLink>
      </p>

      <h2 class="mt-6 text-2xl font-bold">
        <span>rtl</span>
      </h2>
      <p class="badge">
        default: false
      </p>
      <p class="my-4">
        If it's true, your theme will be right-to-left. You also need to add <span class="badge">dir="rtl"</span> to your body tag
      </p>


    </Wrapper>





    <div class="flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-content-200">
      <NuxtLink to="/docs/customize" class="text-xs btn-lg btn btn-outline lg:text-lg">
        Next: Customize components
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
