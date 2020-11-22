<template>
  <div class="flex min-h-screen">
    <script src="https://unpkg.com/theme-change"></script>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <aside id="sidebar" class="sticky top-0 flex flex-col justify-between w-1/5 h-screen pt-10 pb-0 overflow-y-auto">
      <ul class="flex flex-col px-10 text-sm">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li v-for="(category, index) in nav">
          <span>{{ index }}</span>
          <ul>
            <li v-for="(item, index) in category">
              <NuxtLink :to="item">{{ item }}</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
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
#sidebar {
  background: hsl(208deg 16% 97%);
}
#sidebar a,
#sidebar span {
  padding: 3px;
  display: block;
  text-transform: capitalize;
}
#sidebar a:hover {
  color: #49a5ba;
}
#sidebar ul ul {
  padding-left: 1em;
}
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
