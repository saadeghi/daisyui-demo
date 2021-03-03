<template>
  <div>
    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Default Themes</span>
    </h2>
    <Wrapper nocode>

      <p class="mb-4 text-neutral-content text-opacity-20">
        DaisyUI is themeable, powered by CSS variables.
      </p>
      <p class="mb-4 text-lg font-bold">
        List of default themes
      </p>
      <div class="prose">
        <ul>
          <li>aqua</li>
          <li>black</li>
          <li>bumblebee</li>
          <li>cupcake</li>
          <li>cyberpunk</li>
          <li>dark</li>
          <li>dracula</li>
          <li>fantasy</li>
          <li>forest</li>
          <li>garden</li>
          <li>halloween</li>
          <li>light</li>
          <li>luxury</li>
          <li>pastel</li>
          <li>retro</li>
          <li>synthwave</li>
          <li>valentine</li>
        </ul>
      </div>

      <h2 class="my-6 text-3xl font-bold">
        <span class="text-primary">Mehtod 1:</span>
        <span>Enable config</span>
      </h2>

      <p class="my-4 text-lg">
        Enable <span class="badge">themes</span> config and safelist <span class="badge">/data-theme$/</span> for purge options on your <span class="badge">tailwind.config.js</span> file.
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
        <pre><code><span class="text-neutral-content text-opacity-20">module.exports = {</span>
    <span class="text-neutral-content text-opacity-20">...</span>

      purge: {
        content: ['yourfiles/**/*.html'],
        options: {
          safelist: [
            <span class="badge badge-primary">/data-theme$/,</span>
          ]
        },
      },

      daisyui: {
        styled: true,
        <span class="badge badge-primary">themes: true,</span>
        rtl: false,
      },

    <span class="text-neutral-content text-opacity-20">...</span>
    <span class="text-neutral-content text-opacity-20">}</span></code></pre>
        </div>
      </div>

      <h2 class="my-6 text-3xl font-bold">
        <span class="text-primary">Mehtod 2:</span>
        <span>Using CDN</span>
      </h2>

      <p class="my-4 text-lg">
        Alternatively you can load default themes from CDN:
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="text-sm shadow-lg mockup-code">
          <pre><code><span class="text-neutral-content text-opacity-20">&lt;link href="</span>https://cdn.jsdelivr.net/npm/daisyui@{{ daisyuiMaxVersion }}/dist/themes.css<span class="text-neutral-content text-opacity-20">" rel="stylesheet" type="text/css" /&gt;</span></code></pre>
        </div>
      </div>

      <h2 class="my-6 text-3xl font-bold">
        <span class="text-primary">Enable theme:</span>
      </h2>

      <p class="my-4 text-lg">
        And you need to add <span class="badge">data-theme="THEME_NAME"</span> to &lt;html&gt; tag.
      </p>
      <p class="my-4 text-lg prose">
        I suggest using <a href="https://github.com/saadeghi/theme-change" target="_blank">them-change</a> for this, so you can switch themes and save selected theme in local storage.
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code">
          <pre><code><span class="text-neutral-content text-opacity-20">&lt;html</span> data-theme="dark"<span class="text-neutral-content text-opacity-20">&gt;</span></code></pre>
        </div>
      </div>

    </Wrapper>





    <div class="flex justify-end max-w-4xl pt-10 mt-20 border-t-2 border-base-200">
      <NuxtLink to="/docs/add-themes" class="text-xs btn-lg btn lg:text-lg">
        Next: Add themes
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
