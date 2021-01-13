<template>
    <Wrapper title="Use DaisyUI" nocode>

      <h2 class="my-6 text-5xl font-bold">
        <span class="text-primary">Customize components</span>
        <span>with utility classes</span>
      </h2>


      <p class="max-w-4xl my-4">
        DaisyUI components comes with many variants necessary for design systems and you won't usually need to customize anything but you can still add Tailwind's utility classes to customize components.
      </p>

      <p class="my-4">
        Let's say, you wanna customize this button:
      </p>
      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code bg-content-800 text-content-100">
          <pre><code>&#x3C;button class=&#x22;<span class="text-success">btn btn-primary</span>&#x22;&#x3E;DaisyUI Button&#x3C;/button&#x3E;</code></pre>
        </div>
      </div>

      <div class="w-full my-2">
        <button class="btn btn-primary">DaisyUI Button</button>
      </div>

      <p class="max-w-4xl my-4">
        You just need to add Tailwind's utility classes:
      </p>
      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code bg-content-800 text-content-100">
          <pre><code>&#x3C;button class=&#x22;<span class="text-success">btn btn-primary rounded-full</span>&#x22;&#x3E;DaisyUI Button customized&#x3C;/button&#x3E;</code></pre>
        </div>
      </div>

      <div class="w-full my-2">
        <button class="rounded-full btn btn-primary">DaisyUI Button customized</button>
      </div>

      <p class="max-w-4xl my-4">
        You can also customize components on your CSS file, using Tailwind's <span class="badge badge-ghost">@apply</span> directive.
      </p>
      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code bg-content-800 text-content-100">
          <pre><code>.btn {
        <span class="text-success">@apply rounded-full</span>;
      }</code></pre>
        </div>
      </div>

      <h2 class="mt-20 text-5xl font-bold">
        <span class="text-primary">Design components</span>
        <span>from scratch</span>
      </h2>

      <p class="max-w-4xl my-4">
        If you want to design everything and apply your very own style, you can use DaisyUI <span class="badge badge-ghost">base</span> (unstyled UI) version. It has no colors and no visual style but components will have a skeleton style which makes your job easier.
      </p>

      <p class="max-w-4xl my-4">
        On your <span class="badge">tailwind.config.js</span> file, you just need to <span class="badge badge-success">require('daisyui')</span> instead of <span class="badge badge-info">require('daisyui/styled')</span>
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code bg-content-800 text-content-100">
        <pre><code>module.exports = {

        plugins: [
          <span class="badge badge-ghost">require('daisyui'),</span>
        ],

      }</code></pre>
        </div>
      </div>

      <p class="max-w-4xl my-4">
        Or use <span class="badge">base.css</span> from CDN:
      </p>


      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code bg-content-800 text-content-100">
          <pre><code><span class="text-content-400">&lt;link href="</span>https://unpkg.com/daisyui@latest/dist/base.css<span class="text-content-400">" rel="stylesheet" /&gt;</span></code></pre>
        </div>
      </div>

    </Wrapper>
</template>