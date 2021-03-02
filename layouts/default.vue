<template>
  <div class="flex flex-col min-h-screen lg:flex-row">
    <aside :class="'flex flex-col justify-between w-full h-auto border-r bg-base-100 border-base-200 lg:sticky lg:w-1/5 lg:h-screen lg:top-0 '">
      <div class="lg:overflow-y-auto">
        <div class="flex items-center">

          <NuxtLink to="/" v-on:click.native="showMainMenu = false" class="mx-3 mb-0 text-center transition-all duration-300 ease-in-out rounded-btn flex-0 lg:flex-1 lg:text-center hover:bg-neutral hover:bg-opacity-10 lg:mt-4 lg:mx-4">
            <div class="inline-block w-20 mx-4 my-1 lg:my-6 lg:w-28" v-html="svgLogo"></div>
          </NuxtLink>

          <div class="flex-1 block lg:hidden"></div>

          <button class="m-4 btn btn-ghost btn-circle flex-0 lg:hidden text-base-content" v-on:click="showMainMenu = !showMainMenu">
            <Icon glyph="menu" class="inline-block w-6 h-6 stroke-current" v-if="!showMainMenu" />
            <Icon glyph="close" class="inline-block w-6 h-6 stroke-current" v-if="showMainMenu" />
          </button>

        </div>
        <Menu :class="(showMainMenu ? ' flex ' : ' hidden ') + ' lg:flex flex-col p-4 pb-10 compact text-base-content '">
          <MenuItem class="mt-4 menu-title">
            <span>
              Docs
            </span>
          </MenuItem>
          <MenuItem>
            <NuxtLink class="capitalize" to="/docs/install" v-on:click.native="showMainMenu = false">
              <Icon glyph="inbox-in" class="inline-block w-6 h-6 mr-2 stroke-current" />
              install
            </NuxtLink>
          </MenuItem>
          <MenuItem>
            <NuxtLink class="capitalize" to="/docs/use" v-on:click.native="showMainMenu = false">
              <Icon glyph="lightning-bolt" class="inline-block w-6 h-6 mr-2 stroke-current" />
              use
            </NuxtLink>
          </MenuItem>
          <MenuItem>
            <NuxtLink class="capitalize" to="/docs/config" v-on:click.native="showMainMenu = false">
              <Icon glyph="adjustments" class="inline-block w-6 h-6 mr-2 stroke-current" />
              config
            </NuxtLink>
          </MenuItem>
          <MenuItem>
            <NuxtLink class="capitalize" to="/docs/customize" v-on:click.native="showMainMenu = false">
              <Icon glyph="code" class="inline-block w-6 h-6 mr-2 stroke-current" />
              customize components
            </NuxtLink>
          </MenuItem>
          <MenuItem>
            <NuxtLink class="capitalize" to="/docs/default-themes" v-on:click.native="showMainMenu = false">
              <Icon glyph="color-swatch" class="inline-block w-6 h-6 mr-2 stroke-current" />
              Default Themes
            </NuxtLink>
          </MenuItem>
          <MenuItem>
            <NuxtLink class="capitalize" to="/docs/add-themes" v-on:click.native="showMainMenu = false">
              <Icon glyph="document-add" class="inline-block w-6 h-6 mr-2 stroke-current" />
              Add Themes
            </NuxtLink>
          </MenuItem>
          <MenuItem>
            <NuxtLink class="capitalize" to="/docs/features" v-on:click.native="showMainMenu = false">
              <Icon glyph="check" class="inline-block w-6 h-6 mr-2 stroke-current" />
              Features
            </NuxtLink>
          </MenuItem>
          <MenuItem class="mt-4 menu-title">
            <span>
              Core
            </span>
          </MenuItem>
          <MenuItem>
            <NuxtLink class="capitalize" to="/core/colors" v-on:click.native="showMainMenu = false">
              <Icon glyph="color-swatch" class="inline-block w-6 h-6 mr-2 stroke-current" />
              Colors
            </NuxtLink>
          </MenuItem>
          <MenuItem>
            <NuxtLink class="capitalize" to="/core/layout" v-on:click.native="showMainMenu = false">
              <Icon glyph="template" class="inline-block w-6 h-6 mr-2 stroke-current" />
              Layout
            </NuxtLink>
          </MenuItem>
          <MenuItem>
            <NuxtLink class="capitalize" to="/core/typography" v-on:click.native="showMainMenu = false">
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
      <div :class="(showMainMenu ? ' sticky ' : ' hidden ') + ' lg:block p-2 lg:sticky bottom-0 w-full bg-base-300 focus-within:bg-base-300'">
        <select class="w-full select bg-base-300 text-base-content" data-choose-theme>
          <option value="">theme: 🎨 auto</option>
          <option v-for="(theme, index) in themes" :value="theme.id">{{ theme.name }}</option>
        </select>
      </div>
    </aside>
    <main :class="'block lg:block w-full p-4 lg:p-10 flex-grow bg-base-100 text-base-content lg:w-4/5'">
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
