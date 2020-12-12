<template>
  <div>
    <div class="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-3">
      <Card class="text-center shadow-2xl side bg-secondary text-content-accent">
        <div class="card-body">
          <div class="flex justify-center">
            <Icon glyph="info" class="inline-block w-8 mb-4 stroke-current" />
          </div>
          <p>Read full document on github</p>
          <div class="justify-center space-x-2 card-actions">
            <a class="btn active secondary" href="https://github.com/saadeghi/daisyui" target="_blank">
              Github
              <Icon glyph="arrow" class="inline-block w-6 ml-2 stroke-current" />
            </a>
          </div>
        </div>
      </Card>
      <Card class="text-center shadow-2xl side bg-accent text-content-accent">
        <div class="card-body">
          <div class="flex justify-center">
            <Icon glyph="code" class="inline-block w-8 mb-4 stroke-current" />
          </div>
          <p>Use NPM package</p>
          <div class="justify-center space-x-2 card-actions">
            <a class="btn active accent" href="https://www.npmjs.com/package/daisyui" target="_blank">
              NPM
              <Icon glyph="arrow" class="inline-block w-6 ml-2 stroke-current" />
            </a>
          </div>
        </div>
      </Card>
      <Card class="text-center shadow-2xl side bg-primary text-content-accent">
        <div class="card-body">
          <div class="flex justify-center">
            <Icon glyph="eye" class="inline-block w-8 mb-4 stroke-current" />
          </div>
          <p>Try it online</p>
          <div class="justify-center space-x-2 card-actions">
            <a class="btn active primary" href="https://play.tailwindcss.com/fF3zRoCJSr" target="_blank">
              Tailwind Play
              <Icon glyph="arrow" class="inline-block w-6 ml-2 stroke-current" />
            </a>
          </div>
        </div>
      </Card>
    </div>

    <div class="mt-16 prose text-content-800">
      <div v-html="aboutContent"></div>
    </div>

  </div>
</template>

<script>
import aboutContent from '../static/daisyui-readme.md'
export default {
  computed: {
    aboutContent() {
      return aboutContent
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
