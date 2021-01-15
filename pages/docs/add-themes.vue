<template>
  <div>
    <h2 class="my-6 text-5xl font-bold">
      <span class="text-primary">Add Themes</span>
    </h2>
    <Wrapper nocode>

      <p class="mb-4 text-content-400">
        DaisyUI uses HSL color system for better theming.
      </p>
      <p class="mb-4 prose">
        You can set up 3 values of H,S,L (hue, saturation, lightness) for each color in your CSS file. It can be your main Tailwind CSS file or a file you @import to your main CSS file.
        <br>You can easily do this on <NuxtLink to="/core/colors">DaisyUI Color Generator</NuxtLink>
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code bg-content-800 text-content-100">
        <pre><code>:root {
      --d: 0 0% 100%; <span class="text-content-400">/* default color */</span>

      --p1: 340 82% 62%; <span class="text-content-400">/* Primary color - light */</span>
      --p2: 340 82% 52%; <span class="text-content-400">/* Primary color - normal */</span>
      --p3: 340 82% 42%; <span class="text-content-400">/* Primary color - dark */</span>

      --s1: 262 52% 56%; <span class="text-content-400">/* Secondary color - light */</span>
      --s2: 262 52% 46%; <span class="text-content-400">/* Secondary color - normal */</span>
      --s3: 262 52% 36%; <span class="text-content-400">/* Secondary color - dark */</span>

      --a1: 199 98% 58%; <span class="text-content-400">/* Accent color - light */</span>
      --a2: 199 98% 48%; <span class="text-content-400">/* Accent color - normal */</span>
      --a3: 199 98% 38%; <span class="text-content-400">/* Accent color - dark */</span>

      --c1: 220 14% 96%; <span class="text-content-400">/* Content colors */</span>
      --c2: 228 14% 93%;
      --c3: 220 15% 84%;
      --c4: 218 14% 65%;
      --c5: 220 14% 46%;
      --c6: 220 14% 37%;
      --c7: 219 14% 28%;
      --c8: 222 13% 19%;
      --c9: 223 14% 10%;

      --cp: 0 0% 100%; <span class="text-content-400">/* Foreground content color to use on a primary color */</span>
      --cs: 0 0% 100%; <span class="text-content-400">/* Foreground content color to use on a secondary color */</span>
      --ca: 0 0% 100%; <span class="text-content-400">/* Foreground content color to use on a accent color */</span>

      --in: 207 90% 54%; <span class="text-content-400">/* Info */</span>
      --su: 174 100% 29%; <span class="text-content-400">/* Success */</span>
      --wa: 36 100% 50%; <span class="text-content-400">/* Warning */</span>
      --er: 14 100% 57%; <span class="text-content-400">/* Error */</span>
    }

    <span class="text-content-400">/* Let's add a second theme */</span>
    [data-theme='dark'] {
      --d: 223 14% 10%;

      --c9: 210 20% 98%;
      --c8: 220 14% 96%;
      --c7: 228 14% 93%;
      --c6: 220 15% 84%;
      --c5: 218 14% 65%;
      --c4: 220 14% 46%;
      --c3: 220 14% 37%;
      --c2: 219 14% 28%;
      --c1: 222 13% 19%;
    }</code></pre>
        </div>
      </div>

      <p class="mb-4 prose">
        As you can see, we are not overwriting brand colors for dark theme and only changing default color and content colors so it's the same theme with dark mode. The lightest colors are now the darkest ones and the text colors are light instead.
      </p>
      <p class="my-4 font-bold">
        You can add more themes
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code bg-content-800 text-content-100">
        <pre><code>[data-theme='retro'] {
      --d: 45 47% 80%;

      --p2: 3 74% 66%;
      --p1: 3 74% 76%;
      --p3: 3 74% 56%;

      --s2: 145 27% 62%;
      --s1: 145 27% 72%;
      --s3: 145 27% 52%;

      --a2: 49 67% 66%;
      --a1: 49 67% 76%;
      --a3: 49 67% 56%;

      --cp: 345 5% 15%;
      --cs: 345 5% 15%;
      --ca: 345 5% 15%;

      --c9: 345 5% 15%;
      --c8: 41 13% 24%;
      --c7: 42 17% 42%;
      --c6: 41 19% 47%;
      --c5: 42 20% 52%;
      --c4: 42 26% 57%;
      --c3: 42 36% 65%;
      --c2: 45 37% 72%;
      --c1: 46 42% 76%;
    }</code></pre>
        </div>
      </div>




      <h2 class="my-6 text-3xl font-bold">
        <span class="text-primary">Other variables</span>
      </h2>

      <p class="my-4 text-lg">
        You can also set more variables customize your theme.
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code bg-content-800 text-content-100">
        <pre><code>--rounded-box: 1rem; <span class="text-content-400">/* border-radius for cards and other big elements */</span>
    --rounded-btn: 0.5rem; <span class="text-content-400">/* border-radius for buttons and similar elements */</span>
    --rounded-badge: 9999px; <span class="text-content-400">/* border-radius for badge and other small elements */</span>

    --animation-btn: 0.25s; <span class="text-content-400">/* bounce animation time for button */</span>
    --animation-input: .4s; <span class="text-content-400">/* bounce animation time for checkbox, toggle, etc */</span>

    --padding-card: 2rem; <span class="text-content-400">/* default card-body padding */</span>

    --btn-text-case: uppercase; <span class="text-content-400">/* default text case for buttons */</span>
    --navbar-padding: .5rem; <span class="text-content-400">/* default padding for navbar */</span>
    --border-btn: 1px; <span class="text-content-400">/* default border size for button */</span>
    --focus-ring: 2px; <span class="text-content-400">/* focus ring size for button and inputs */</span>
    --focus-ring-offset: 2px; <span class="text-content-400">/* focus ring offset size for button and inputs */</span></code></pre>
        </div>
      </div>

      <h2 class="my-6 text-3xl font-bold">
        <span class="text-primary">Respecting OS color scheme</span>
      </h2>

      <p class="my-4 text-lg">
        If you want to show dark mode for people who are using a dark mode on their OS:
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code bg-content-800 text-content-100">
        <pre><code>@media (prefers-color-scheme: dark){
      :root{
        --d: 223 14% 10%;
        <span class="text-content-400">/* ...rest of colors */</span>
      }
    }</code></pre>
        </div>
      </div>

      <h2 class="my-6 text-3xl font-bold">
        <span class="text-primary">How to enable/change themes?</span>
      </h2>

      <p class="my-4 text-lg prose">
        You just need to add <span class="badge">data-theme="dark"</span> to your <span class="badge">&lt;html&gt;</span> tag. Easiest way to handle it with JavaScript is to this tiny library: <a href="https://github.com/saadeghi/theme-change" target="_blank">them-change</a>
      </p>

      <h2 class="my-6 text-3xl font-bold">
        <span class="text-primary">Force a specific theme for a section</span>
      </h2>
      <p class="my-4 text-lg prose">
        You can force a section of your HTML to only use a specific theme.
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code bg-content-800 text-content-100">
        <pre><code>&lt;html <span class="badge">data-theme="dark"</span>&gt;

      &lt;div <span class="badge">data-theme="light"</span>&gt;
        This div will always use light theme
          &lt;span <span class="badge">data-theme="retro"</span>&gt;
            This span will always use retro theme!
          &lt;/span&gt;
      &lt;/div&gt;

    &lt;/html&gt;</code></pre>
        </div>
      </div>

      <h2 class="my-6 text-3xl font-bold">
        <span class="text-primary">PurgeCSS Whitelist</span>
      </h2>
      <p class="my-4 text-lg prose">
        If you're using Purge CSS, you might need to safe list your CSS using the comments below because your secondary themes will be purged.
      </p>
      <p class="my-4 text-lg font-bold">
        Add this to your PurgeCSS config:
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code bg-content-800 text-content-100">
        <pre><code>options: {
      safelist: [
        <span class="badge">/data-theme$/,</span>
      ],
    },</code></pre>
        </div>
      </div>

      <p class="my-4 text-lg font-bold">
        Or use CSS comments:
      </p>

      <div class="w-full max-w-4xl my-2">
        <div class="shadow-lg mockup-code bg-content-800 text-content-100">
        <pre><code><span class="badge">/*! purgecss start ignore */</span>
    [data-theme='dark'] {
      <span class="text-content-400">...</span>
    }
    <span class="badge">/*! purgecss end ignore */</span></code></pre>
        </div>
      </div>


    </Wrapper>
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
