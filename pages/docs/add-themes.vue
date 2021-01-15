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
      <img src="http://via.placeholder.com/15/ffffff/000000?text=+" class="inline-block rounded"> --d: 0 0% 100%; <span class="text-content-400">/* default color */</span>

      <img src="http://via.placeholder.com/15/793ef9/000000?text=+" class="inline-block rounded"> --p1: 340 82% 62%; <span class="text-content-400">/* Primary color - light */</span>
      <img src="http://via.placeholder.com/15/570df8/000000?text=+" class="inline-block rounded"> --p2: 340 82% 52%; <span class="text-content-400">/* Primary color - normal */</span>
      <img src="http://via.placeholder.com/15/4506cb/000000?text=+" class="inline-block rounded"> --p3: 340 82% 42%; <span class="text-content-400">/* Primary color - dark */</span>

      <img src="http://via.placeholder.com/15/ff24cc/000000?text=+" class="inline-block rounded"> --s1: 262 52% 56%; <span class="text-content-400">/* Secondary color - light */</span>
      <img src="http://via.placeholder.com/15/f000b8/000000?text=+" class="inline-block rounded"> --s2: 262 52% 46%; <span class="text-content-400">/* Secondary color - normal */</span>
      <img src="http://via.placeholder.com/15/bd0091/000000?text=+" class="inline-block rounded"> --s3: 262 52% 36%; <span class="text-content-400">/* Secondary color - dark */</span>

      <img src="http://via.placeholder.com/15/60d7cb/000000?text=+" class="inline-block rounded"> --a1: 199 98% 58%; <span class="text-content-400">/* Accent color - light */</span>
      <img src="http://via.placeholder.com/15/37cdbe/000000?text=+" class="inline-block rounded"> --a2: 199 98% 48%; <span class="text-content-400">/* Accent color - normal */</span>
      <img src="http://via.placeholder.com/15/2aa79b/000000?text=+" class="inline-block rounded"> --a3: 199 98% 38%; <span class="text-content-400">/* Accent color - dark */</span>

      <img src="http://via.placeholder.com/15/f3f4f6/000000?text=+" class="inline-block rounded"> --c1: 220 14% 96%; <span class="text-content-400">/* Content colors */</span>
      <img src="http://via.placeholder.com/15/ebecf0/000000?text=+" class="inline-block rounded"> --c2: 228 14% 93%;
      <img src="http://via.placeholder.com/15/d0d4dc/000000?text=+" class="inline-block rounded"> --c3: 220 15% 84%;
      <img src="http://via.placeholder.com/15/99a2b2/000000?text=+" class="inline-block rounded"> --c4: 218 14% 65%;
      <img src="http://via.placeholder.com/15/657086/000000?text=+" class="inline-block rounded"> --c5: 220 14% 46%;
      <img src="http://via.placeholder.com/15/515a6c/000000?text=+" class="inline-block rounded"> --c6: 220 14% 37%;
      <img src="http://via.placeholder.com/15/3d4451/000000?text=+" class="inline-block rounded"> --c7: 219 14% 28%;
      <img src="http://via.placeholder.com/15/2a2e37/000000?text=+" class="inline-block rounded"> --c8: 222 13% 19%;
      <img src="http://via.placeholder.com/15/16181d/000000?text=+" class="inline-block rounded"> --c9: 223 14% 10%;

      <img src="http://via.placeholder.com/15/ffffff/000000?text=+" class="inline-block rounded"> --cp: 0 0% 100%; <span class="text-content-400">/* Foreground content color to use on a primary color */</span>
      <img src="http://via.placeholder.com/15/ffffff/000000?text=+" class="inline-block rounded"> --cs: 0 0% 100%; <span class="text-content-400">/* Foreground content color to use on a secondary color */</span>
      <img src="http://via.placeholder.com/15/ffffff/000000?text=+" class="inline-block rounded"> --ca: 0 0% 100%; <span class="text-content-400">/* Foreground content color to use on a accent color */</span>

      <img src="http://via.placeholder.com/15/2094f3/000000?text=+" class="inline-block rounded"> --in: 207 90% 54%; <span class="text-content-400">/* Info */</span>
      <img src="http://via.placeholder.com/15/009485/000000?text=+" class="inline-block rounded"> --su: 174 100% 29%; <span class="text-content-400">/* Success */</span>
      <img src="http://via.placeholder.com/15/ff9900/000000?text=+" class="inline-block rounded"> --wa: 36 100% 50%; <span class="text-content-400">/* Warning */</span>
      <img src="http://via.placeholder.com/15/ff5724/000000?text=+" class="inline-block rounded"> --er: 14 100% 57%; <span class="text-content-400">/* Error */</span>
    }

    <span class="text-content-400">/* Let's add a second theme */</span>
    [data-theme='dark'] {
      <img src="http://via.placeholder.com/15/16181d/000000?text=+" class="inline-block rounded"> --d: 223 14% 10%;

      <img src="http://via.placeholder.com/15/2a2e37/000000?text=+" class="inline-block rounded"> --c1: 222 13% 19%;
      <img src="http://via.placeholder.com/15/3d4451/000000?text=+" class="inline-block rounded"> --c2: 219 14% 28%;
      <img src="http://via.placeholder.com/15/515a6c/000000?text=+" class="inline-block rounded"> --c3: 220 14% 37%;
      <img src="http://via.placeholder.com/15/657086/000000?text=+" class="inline-block rounded"> --c4: 220 14% 46%;
      <img src="http://via.placeholder.com/15/99a2b2/000000?text=+" class="inline-block rounded"> --c5: 218 14% 65%;
      <img src="http://via.placeholder.com/15/d0d4dc/000000?text=+" class="inline-block rounded"> --c6: 220 15% 84%;
      <img src="http://via.placeholder.com/15/ebecf0/000000?text=+" class="inline-block rounded"> --c7: 228 14% 93%;
      <img src="http://via.placeholder.com/15/f3f4f6/000000?text=+" class="inline-block rounded"> --c8: 220 14% 96%;
      <img src="http://via.placeholder.com/15/f9fafb/000000?text=+" class="inline-block rounded"> --c9: 210 20% 98%;
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
      <img src="http://via.placeholder.com/15/e4d8b4/000000?text=+" class="inline-block rounded"> --d: 45 47% 80%;

      <img src="http://via.placeholder.com/15/e86f68/000000?text=+" class="inline-block rounded"> --p2: 3 74% 66%;
      <img src="http://via.placeholder.com/15/ef9995/000000?text=+" class="inline-block rounded"> --p1: 3 74% 76%;
      <img src="http://via.placeholder.com/15/e2443c/000000?text=+" class="inline-block rounded"> --p3: 3 74% 56%;

      <img src="http://via.placeholder.com/15/84b89a/000000?text=+" class="inline-block rounded"> --s2: 145 27% 62%;
      <img src="http://via.placeholder.com/15/a4cbb4/000000?text=+" class="inline-block rounded"> --s1: 145 27% 72%;
      <img src="http://via.placeholder.com/15/64a67f/000000?text=+" class="inline-block rounded"> --s3: 145 27% 52%;

      <img src="http://via.placeholder.com/15/e2cd6e/000000?text=+" class="inline-block rounded"> --a2: 49 67% 66%;
      <img src="http://via.placeholder.com/15/ebdc99/000000?text=+" class="inline-block rounded"> --a1: 49 67% 76%;
      <img src="http://via.placeholder.com/15/dabe44/000000?text=+" class="inline-block rounded"> --a3: 49 67% 56%;

      <img src="http://via.placeholder.com/15/282425/000000?text=+" class="inline-block rounded"> --cp: 345 5% 15%;
      <img src="http://via.placeholder.com/15/282425/000000?text=+" class="inline-block rounded"> --cs: 345 5% 15%;
      <img src="http://via.placeholder.com/15/282425/000000?text=+" class="inline-block rounded"> --ca: 345 5% 15%;

      <img src="http://via.placeholder.com/15/282425/000000?text=+" class="inline-block rounded"> --c9: 345 5% 15%;
      <img src="http://via.placeholder.com/15/454035/000000?text=+" class="inline-block rounded"> --c8: 41 13% 24%;
      <img src="http://via.placeholder.com/15/7d7259/000000?text=+" class="inline-block rounded"> --c7: 42 17% 42%;
      <img src="http://via.placeholder.com/15/8f8061/000000?text=+" class="inline-block rounded"> --c6: 41 19% 47%;
      <img src="http://via.placeholder.com/15/9d8e6c/000000?text=+" class="inline-block rounded"> --c5: 42 20% 52%;
      <img src="http://via.placeholder.com/15/ae9d75/000000?text=+" class="inline-block rounded"> --c4: 42 26% 57%;
      <img src="http://via.placeholder.com/15/c6b386/000000?text=+" class="inline-block rounded"> --c3: 42 36% 65%;
      <img src="http://via.placeholder.com/15/d2c59d/000000?text=+" class="inline-block rounded"> --c2: 45 37% 72%;
      <img src="http://via.placeholder.com/15/dcd0a8/000000?text=+" class="inline-block rounded"> --c1: 46 42% 76%;
    }</code></pre>
        </div>
      </div>




      <h2 class="my-6 text-3xl font-bold">
        <span class="text-primary">Other variables</span>
      </h2>

      <p class="my-4 text-lg">
        You can also set more variables to customize your theme.
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
