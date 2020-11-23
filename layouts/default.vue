<template>
  <div class="flex min-h-screen">
    <script src="https://unpkg.com/theme-change"></script>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <aside id="sidebar" class="sticky top-0 flex flex-col justify-between w-1/5 h-screen bg-content-100">
      <Menu class="flex flex-col pt-10 overflow-y-auto wide">
        <MenuItem>
          <NuxtLink to="/">Home</NuxtLink>
        </MenuItem>
        <MenuItem v-for="(category, index) in nav" v-bind:key="category.index">
          <span>{{ index }}</span>
          <Menu>
            <MenuItem v-for="(item, index) in category" v-bind:key="item.index">
              <NuxtLink :to="item">{{ item }}</NuxtLink>
            </MenuItem>
          </Menu>
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
      'nav': {
        'general' : [
          'colors',
          'typography',
        ],
        'components' : [
          'accordion',
          'alert',
          'badge',
          'button',
          'button-group',
          'card',
          'menu',
        ],
      },
      themes: [
        'dark',
        'black',
        'retro',
        'dracula',
        'christmas',
      ],
    }
  },
}
</script>
