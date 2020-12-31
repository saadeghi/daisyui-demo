<template>
  <div class="flex flex-col min-h-screen lg:flex-row">
    <aside :class="'flex flex-col justify-between w-full h-auto border-r bg-default border-content-200 lg:sticky lg:w-1/5 lg:h-screen lg:top-0 '">
      <div class="lg:overflow-y-auto">
        <div class="flex items-center">

          <NuxtLink to="/" v-on:click.native="showMainMenu = false" class="mx-3 mb-0 text-center transition-all duration-300 ease-in-out rounded-btn flex-0 lg:flex-1 lg:text-center hover:bg-primary hover:bg-opacity-20 lg:mt-4 lg:mx-4">
            <div class="inline-block w-20 mx-4 my-1 lg:my-6 lg:w-28" v-html="svgLogo"></div>
          </NuxtLink>

          <div class="flex-1 block lg:hidden"></div>

          <button class="m-4 btn btn-ghost btn-circle flex-0 lg:hidden text-content-900" v-on:click="showMainMenu = !showMainMenu">
            <Icon glyph="menu" class="inline-block w-6 h-6 stroke-current" v-if="!showMainMenu" />
            <Icon glyph="close" class="inline-block w-6 h-6 stroke-current" v-if="showMainMenu" />
          </button>

        </div>
        <Menu :class="(showMainMenu ? ' flex ' : ' hidden ') + ' lg:flex flex-col p-4 pb-10 compact text-content-700 '">
          <MenuItem class="mt-4 menu-title">
            <span>
              Core
            </span>
          </MenuItem>
          <MenuItem v-for="(item, itemindex) in corePages" v-bind:key="item.itemindex" v-bind:class="{ 'disabled' : !item.path }">
            <NuxtLink class="capitalize" v-if="item.path" :to="item.path" v-on:click.native="showMainMenu = false">
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
            <NuxtLink class="capitalize" v-if="item.path" :to="item.path" v-on:click.native="showMainMenu = false">
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
            <NuxtLink class="capitalize" v-if="item.path" :to="item.path" v-on:click.native="showMainMenu = false">
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
      <div :class="(showMainMenu ? ' sticky ' : ' hidden ') + ' lg:block lg:sticky bottom-0 w-full bg-content-200 focus-within:bg-content-300'">
        <select class="w-full px-10 py-5 text-sm capitalize bg-transparent appearance-none cursor-pointer text-content-900 focus:outline-none" data-choose-theme>
          <option value="">🎨 theme: auto</option>
          <option v-for="(theme, index) in themes" :value="theme.id">{{ theme.name }}</option>
        </select>
      </div>
    </aside>
    <main :class="'block lg:block w-full p-4 lg:p-10 flex-grow bg-default text-content-900 lg:w-4/5'">
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
        {id: 'light', name:'🌝 theme: light'},
        {id: 'dark', name:'🌚 theme: dark'},
        {id: 'valentine', name:'🌸 theme: valentine'},
        {id: 'retro', name:'👴 theme: retro'},
        {id: 'synthwave', name:'🌃 theme: synthwave'},
        {id: 'cyberpunk', name:'🤖 theme: cyberpunk'},
        {id: 'black', name:'🏴 theme: black'},
        {id: 'dracula', name:'🧛‍♂️ theme: dracula'},
      ],
      showMainMenu: false,
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
    svgLogo() {
      return require(`~/static/logo.svg?raw`)
    }
  }
}
</script>
