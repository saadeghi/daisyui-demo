<template>
  <div class="flex flex-col min-h-screen lg:flex-row">
    <aside class="flex flex-col justify-between w-full h-auto border-r bg-default border-content-200 lg:sticky lg:w-1/5 lg:h-screen lg:top-0">
      <div class="lg:overflow-y-auto">
        <NuxtLink to="/" class="block m-4 mb-0 text-center rounded hover:bg-primary hover:bg-opacity-20">
          <div class="inline-block mx-4 my-6 w-28" v-html="src"></div>
        </NuxtLink>
        <Menu class="flex flex-col p-4 pb-10 compact text-content-700">
          <MenuItem class="mt-4 menu-title">
            <span>
              Core
            </span>
          </MenuItem>
          <MenuItem v-for="(item, itemindex) in corePages" v-bind:key="item.itemindex" v-bind:class="{ 'disabled' : !item.path }">
            <NuxtLink class="capitalize" v-if="item.path" :to="item.path">
              {{ item.name }}
            </NuxtLink>
            <span class="capitalize" v-if="!item.path">
              <Icon
                glyph="folder"
                class="inline-block w-4 mr-2 -ml-6 stroke-current color-primary"
              />
              {{ item.name }}
            </span>
          </MenuItem>
          <MenuItem class="mt-4 menu-title">
            <span>
              Components
            </span>
          </MenuItem>
          <MenuItem v-for="(item, itemindex) in componentPages" v-bind:key="item.itemindex" v-bind:class="{ 'disabled' : !item.path }">
            <NuxtLink class="capitalize" v-if="item.path" :to="item.path">
              {{ item.name }}
            </NuxtLink>
            <span class="capitalize" v-if="!item.path">
              <Icon
                glyph="folder"
                class="inline-block w-4 mr-2 -ml-6 stroke-current color-primary"
              />
              {{ item.name }}
            </span>
          </MenuItem>
          <MenuItem class="mt-4 menu-title">
            <span>
              Demos
            </span>
          </MenuItem>
          <MenuItem v-for="(item, itemindex) in demoPages" v-bind:key="item.itemindex" v-bind:class="{ 'disabled' : !item.path }">
            <NuxtLink class="capitalize" v-if="item.path" :to="item.path">
              {{ item.name }}
            </NuxtLink>
            <span class="capitalize" v-if="!item.path">
              <Icon
                glyph="folder"
                class="inline-block w-4 mr-2 -ml-6 stroke-current color-primary"
              />
              {{ item.name }}
            </span>
          </MenuItem>
        </Menu>
    </div>
      <div class="sticky bottom-0 w-full bg-content-200 focus-within:bg-content-300">
        <select class="w-full px-10 py-5 text-sm capitalize bg-transparent appearance-none text-content-900 curson-pointer focus:outline-none" data-choose-theme>
          <option value="">Change theme</option>
          <option v-for="(theme, index) in themes" :value="theme.id">{{ theme.name }}</option>
        </select>
      </div>
    </aside>
    <main class="w-full p-10 bg-default text-content-900 lg:w-4/5">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  props: {
    classes: String
  },
  data() {
    return {
      corePages: [],
      componentPages: [],
      demoPages: [],
      themes: [
        {id: 'dark', name:'🌚 dark'},
        {id: 'black', name:'⬛️ black'},
        {id: 'retro', name:'👴 retro'},
        {id: 'dracula', name:'🧛‍♂️ dracula'},
        {id: 'synthwave', name:'🌃 synthwave'},
      ],
    }
  },
  created () {
    this.$router.options.routes.forEach((routeOption) => {
      if (routeOption.path.startsWith('/core')) {
        this.corePages.push({
          name: routeOption.name.replace("core-", ""),
          path: routeOption.path,
        })
      }
    })
    this.$router.options.routes.forEach((routeOption) => {
      if (routeOption.path.startsWith('/components')) {
        this.componentPages.push({
          name: routeOption.name.replace("components-", ""),
          path: routeOption.path,
        })
      }
    })
    this.$router.options.routes.forEach((routeOption) => {
      if (routeOption.path.startsWith('/demos')) {
        this.demoPages.push({
          name: routeOption.name.replace("demos-", ""),
          path: routeOption.path,
        })
      }
    })
  },
  computed: {
    src() {
        const src = require(`~/static/logo.svg?raw`)
        return src
    }
  }
}
</script>
