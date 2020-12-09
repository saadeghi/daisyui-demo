<template>
  <div class="flex min-h-screen">
    <script src="https://unpkg.com/theme-change"></script>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <aside id="sidebar" class="sticky top-0 flex flex-col justify-between w-1/5 h-screen bg-content-100">
      <Menu class="flex flex-col py-10 overflow-y-auto wide compact">
        <MenuItem>
          <NuxtLink to="/">Home</NuxtLink>
        </MenuItem>
        <MenuItem v-for="(item, itemindex) in nestedRoutes" v-bind:key="item.itemindex" v-bind:class="{ 'disabled' : !item.path }">
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
      nestedRoutes: [],
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
    this.nestedRoutes.push({
      name: 'core',
    })
    console.log(this.nestedRoutes)
    this.$router.options.routes.forEach((routeOption) => {
      if (routeOption.path.startsWith('/core')) {
        this.nestedRoutes.push({
          name: routeOption.name.replace("core-", ""),
          path: routeOption.path,
        })
      }
    })
    this.nestedRoutes.push({
      name: 'components',
    })
    this.$router.options.routes.forEach((routeOption) => {
      if (routeOption.path.startsWith('/components')) {
        this.nestedRoutes.push({
          name: routeOption.name.replace("components-", ""),
          path: routeOption.path,
        })
      }
    })
    this.nestedRoutes.push({
      name: 'demos',
    })
    this.$router.options.routes.forEach((routeOption) => {
      if (routeOption.path.startsWith('/demos')) {
        this.nestedRoutes.push({
          name: routeOption.name.replace("demos-", ""),
          path: routeOption.path,
        })
      }
    })
  }
}
</script>
