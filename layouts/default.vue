<template>
  <div class="flex min-h-screen">
    <aside id="sidebar" class="sticky top-0 flex flex-col justify-between w-1/5 h-screen bg-content-100">
      <Menu class="flex flex-col p-4 overflow-y-auto compact">
        <MenuItem>
          <NuxtLink to="/">Home</NuxtLink>
        </MenuItem>
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
      <div id="theme-change" class="sticky bottom-0 w-full px-10">
        <select class="capitalize" data-choose-theme>
          <option value="">Default</option>
          <option v-for="(theme, index) in themes" :value="theme">{{ theme }}</option>
        </select>
      </div>
    </aside>
    <main class="w-4/5 p-10 bg-default text-content-900">
      <Nuxt />
    </main>
  </div>
</template>

<style>
#theme-change {
  background: #eaebf0;
}
#theme-change select {
  background-color: transparent;
  padding: 1em;
  width: 100%;
  font-size: 0.8em;
}
</style>

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
        'dark',
        'black',
        'retro',
        'dracula',
        'christmas',
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
  }
}
</script>
