<template>
  <main
  >
    <div
      class="sticky inset-x-0 top-0 z-50 w-full shadow-sm bg-base-100 text-base-content"
    >
      <div class="max-w-6xl mx-auto navbar">
        <div class="flex-none" title="Change Theme">
          <label class="relative overflow-hidden btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
            <select
              autofocus="true"
              class="absolute inset-0 opacity-0 cursor-pointer"
              data-choose-theme
            >
              <option value="">theme: 🎨 auto</option>
              <option v-for="(theme, index) in themes" :value="theme.id">{{
                theme.name
              }}</option>
            </select>
          </label>
        </div>
        <div class="flex-1">
          <NuxtLink to="/" class="px-2 flex-0 btn btn-ghost md:px-4">
            <div class="inline-block w-20" v-html="svgLogo"></div>
          </NuxtLink>
        </div>
        <div class="items-center flex-none">
          <span class="px-4 font-mono text-xs text-opacity-50 text-base-content"><span class="hidden lg:inline">version</span> {{ DAISYUI_VERSION }}</span>
          <a target="_blank" href="https://github.com/saadeghi/daisyui" class="btn btn-ghost drawer-button">
            <svg
              width="24"
              height="24"
              fill="currentColor"
              class="md:mr-2 text-base-content"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
              ></path>
            </svg>
            <span class="hidden md:inline">Github</span>
          </a>
        </div>
      </div>
    </div>
    <Nuxt />
  </main>
</template>

<script>
import { themeChange } from "theme-change";

export default {
  data() {
    return {
      DAISYUI_VERSION: process.env.DAISYUI_VERSION,
      themes: [
        { id: "light", name: "theme: 🌝 light" },
        { id: "dark", name: "theme: 🌚 dark" },
        { id: "valentine", name: "theme: 🌸 valentine" },
        { id: "retro", name: "theme: 👴 retro" },
        { id: "synthwave", name: "theme: 🌃 synthwave" },
        { id: "cyberpunk", name: "theme: 🤖 cyberpunk" },
        { id: "black", name: "theme: 🏴 black" },
        { id: "dracula", name: "theme: 🧛‍♂️ dracula" },
        { id: "garden", name: "theme: 🌷 garden" },
        { id: "halloween", name: "theme: 🎃 halloween" },
        { id: "aqua", name: "theme: 🐟 aqua" },
        { id: "cupcake", name: "theme: 🧁 cupcake" },
        { id: "bumblebee", name: "theme: 🐝 bumblebee" },
        { id: "pastel", name: "theme: 🖍 pastel" },
        { id: "forest", name: "theme: 🌲 forest" },
        { id: "fantasy", name: "theme: 🧚‍♀️ fantasy" },
        { id: "luxury", name: "theme: 💎 luxury" }
      ]
    };
  },
  computed: {
    svgLogo() {
      return require(`~/static/logo.svg?raw`);
    }
  },
  mounted() {
    themeChange(false);
  }
};
</script>
