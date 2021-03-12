<template>
  <div class="drawer drawer-mobile">
    <input id="main-menu" type="checkbox" class="drawer-toggle" v-model="showMainMenu" >
    <main class="flex-grow block w-full overflow-x-hidden bg-base-100 text-base-content drawer-content">

      <div class="sticky inset-x-0 top-0 z-50 border-b navbar bg-base-100 text-base-content border-base-200 lg:hidden">
        <div class="flex-none">
          <label for="main-menu" class="btn btn-square btn-ghost drawer-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div class="justify-center flex-1">
          <NuxtLink to="/" class="px-2 text-center transition-all duration-300 ease-in-out rounded-btn flex-0 hover:bg-neutral hover:bg-opacity-10">
            <div class="inline-block w-20 pt-2" v-html="svgLogo"></div>
          </NuxtLink>
        </div>
        <div class="flex-none">
          <label class="relative btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            <select autofocus="true" class="absolute inset-0 opacity-0 cursor-pointer" data-choose-theme>
              <option value="">theme: 🎨 auto</option>
              <option v-for="(theme, index) in themes" :value="theme.id">{{ theme.name }}</option>
            </select>
          </label>
        </div>
      </div>
      <div class="p-4 lg:p-10">
        <Nuxt />
      </div>

    </main>
    <div class="drawer-side">
      <label for="main-menu" class="drawer-overlay"></label>
      <aside class="flex flex-col justify-between border-r bg-base-100 border-base-200 w-80">
        <div>
          <div class="flex items-center">

            <NuxtLink v-on:click.native="showMainMenu = false" to="/" class="flex-1 hidden mx-4 mt-4 mb-0 text-center transition-all duration-300 ease-in-out lg:block rounded-btn flex-0 hover:bg-neutral hover:bg-opacity-10">
              <div class="inline-block w-20 mx-4 my-1 lg:my-6 lg:w-28" v-html="svgLogo"></div>
            </NuxtLink>

          </div>
          <Menu class="flex flex-col p-4 pb-10 compact text-base-content">
            <MenuItem class="mt-4 menu-title">
              <span>
                Docs
              </span>
            </MenuItem>
            <MenuItem>
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" to="/docs/install">
                <Icon glyph="inbox-in" class="inline-block w-6 h-6 mr-2 stroke-current" />
                install
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" to="/docs/use">
                <Icon glyph="lightning-bolt" class="inline-block w-6 h-6 mr-2 stroke-current" />
                use
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" to="/docs/config">
                <Icon glyph="adjustments" class="inline-block w-6 h-6 mr-2 stroke-current" />
                config
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" to="/docs/customize">
                <Icon glyph="code" class="inline-block w-6 h-6 mr-2 stroke-current" />
                customize components
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" to="/docs/default-themes">
                <Icon glyph="color-swatch" class="inline-block w-6 h-6 mr-2 stroke-current" />
                Default Themes
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" to="/docs/add-themes">
                <Icon glyph="document-add" class="inline-block w-6 h-6 mr-2 stroke-current" />
                Add Themes
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" to="/docs/features">
                <Icon glyph="check" class="inline-block w-6 h-6 mr-2 stroke-current" />
                Features
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" to="/docs/whats-included">
                <Icon glyph="info" class="inline-block w-6 h-6 mr-2 stroke-current" />
                What's included?
              </NuxtLink>
            </MenuItem>
            <MenuItem class="mt-4 menu-title">
              <span>
                Core
              </span>
            </MenuItem>
            <MenuItem>
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" to="/core/colors">
                <Icon glyph="color-swatch" class="inline-block w-6 h-6 mr-2 stroke-current" />
                Colors
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" to="/core/layout">
                <Icon glyph="template" class="inline-block w-6 h-6 mr-2 stroke-current" />
                Layout
              </NuxtLink>
            </MenuItem>
            <MenuItem>
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" to="/core/typography">
                <Icon glyph="text" class="inline-block w-6 h-6 mr-2 fill-current" />
                Typography
              </NuxtLink>
            </MenuItem>
            <MenuItem class="mt-4 menu-title">
              <span>
                Components
              </span>
            </MenuItem>
            <MenuItem v-for="(item, itemindex) in componentPages" v-bind:key="item.itemindex" v-bind:class="{ 'disabled' : !item.path }">
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" v-if="item.path" :to="item.path">
                {{ item.name }}
              </NuxtLink>
            </MenuItem>
            <MenuItem class="mt-4 menu-title">
              <span>
                Demos
              </span>
            </MenuItem>
            <MenuItem v-for="(item, itemindex) in demoPages" v-bind:key="item.itemindex" v-bind:class="{ 'disabled' : !item.path }">
              <NuxtLink v-on:click.native="showMainMenu = false" class="capitalize" v-if="item.path" :to="item.path">
                {{ item.name }}
              </NuxtLink>
            </MenuItem>
          </Menu>
        </div>
        <div class="sticky bottom-0 hidden w-full p-2 lg:block bg-base-300 focus-within:bg-base-300 ">
          <select class="w-full select bg-base-300 text-base-content" data-choose-theme>
            <option value="">theme: 🎨 auto</option>
            <option v-for="(theme, index) in themes" :value="theme.id">{{ theme.name }}</option>
          </select>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classes: String
  },
  data() {
    return {
      docPages: [],
      corePages: [],
      componentPages: [],
      demoPages: [],
      themes: [
        {id: 'light', name:'theme: 🌝 light'},
        {id: 'dark', name:'theme: 🌚 dark'},
        {id: 'valentine', name:'theme: 🌸 valentine'},
        {id: 'retro', name:'theme: 👴 retro'},
        {id: 'synthwave', name:'theme: 🌃 synthwave'},
        {id: 'cyberpunk', name:'theme: 🤖 cyberpunk'},
        {id: 'black', name:'theme: 🏴 black'},
        {id: 'dracula', name:'theme: 🧛‍♂️ dracula'},
        {id: 'garden', name:'theme: 🌷 garden'},
        {id: 'halloween', name:'theme: 🎃 halloween'},
        {id: 'aqua', name:'theme: 🐟 aqua'},
        {id: 'cupcake', name:'theme: 🧁 cupcake'},
        {id: 'bumblebee', name:'theme: 🐝 bumblebee'},
        {id: 'pastel', name:'theme: 🖍 pastel'},
        {id: 'forest', name:'theme: 🌲 forest'},
        {id: 'fantasy', name:'theme: 🧚‍♀️ fantasy'},
        {id: 'luxury', name:'theme: 💎 luxury'},
      ],
      showMainMenu: false,
    }
  },
  created () {
    this.$router.options.routes.forEach((routeOption) => {
      if (routeOption.path.startsWith('/docs')) {
        this.docPages.push({
          name: routeOption.name.replace("docs-", ""),
          path: routeOption.path,
        })
      }
    })
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
