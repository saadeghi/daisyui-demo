<template>
  <div>
    <div class="mx-auto mt-16 prose text-center text-content-800">
      <div class="inline-block w-20 lg:w-44" v-html="svgLogo"></div>
      <p>
        UI Components for Tailwind CSS
      </p>
    </div>
    <div class="flex space-x-4 h-36">
      <div class="grid w-8 grid-cols-1 overflow-hidden shadow cursor-pointer rounded-btn" data-set-theme="">
        <div style="background: hsl(0 0% 100%)"></div>
        <div style="background: hsl(259 94% 51%)"></div>
        <div style="background: hsl(314 100% 47%)"></div>
        <div style="background: hsl(174 60% 41%)"></div>
      </div>
      <div class="grid w-8 grid-cols-1 overflow-hidden shadow cursor-pointer rounded-btn" data-set-theme="light">
        <div style="background: hsl(0 0% 100%)"></div>
        <div style="background: hsl(259 94% 51%)"></div>
        <div style="background: hsl(314 100% 47%)"></div>
        <div style="background: hsl(174 60% 41%)"></div>
      </div>
      <div class="grid w-8 grid-cols-1 overflow-hidden shadow cursor-pointer rounded-btn" data-set-theme="dark">
        <div style="background: hsl(223 14% 10%)"></div>
        <div style="background: hsl(259 94% 51%)"></div>
        <div style="background: hsl(314 100% 47%)"></div>
        <div style="background: hsl(174 60% 51%)"></div>
      </div>
      <div class="grid w-8 grid-cols-1 overflow-hidden shadow cursor-pointer rounded-btn" data-set-theme="valentine">
        <div style="background: hsl(319 45% 89%)"></div>
        <div style="background: hsl(353 74% 57%)"></div>
        <div style="background: hsl(254 87% 67%)"></div>
        <div style="background: hsl(181 55% 60%)"></div>
      </div>
      <div class="grid w-8 grid-cols-1 overflow-hidden shadow cursor-pointer rounded-btn" data-set-theme="retro">
        <div style="background: hsl(45 47% 80%)"></div>
        <div style="background: hsl(3 74% 66%)"></div>
        <div style="background: hsl(145 27% 62%)"></div>
        <div style="background: hsl(49 67% 66%)"></div>
      </div>
      <div class="grid w-8 grid-cols-1 overflow-hidden shadow cursor-pointer rounded-btn" data-set-theme="synthwave">
        <div style="background: hsl(257 63% 17%)"></div>
        <div style="background: hsl(321 70% 59%)"></div>
        <div style="background: hsl(197 87% 75%)"></div>
        <div style="background: hsl(48 89% 67%)"></div>
      </div>
      <div class="grid w-8 grid-cols-1 overflow-hidden shadow cursor-pointer rounded-btn" data-set-theme="cyberpunk">
        <div style="background: hsl(56 100% 50%)"></div>
        <div style="background: hsl(344 100% 67%)"></div>
        <div style="background: hsl(194 66% 61%)"></div>
        <div style="background: hsl(276 76% 63%)"></div>
      </div>
      <div class="grid w-8 grid-cols-1 overflow-hidden shadow cursor-pointer rounded-btn" data-set-theme="black">
        <div style="background: hsl(0 0% 0%)"></div>
        <div style="background: hsl(0 0% 100%)"></div>
        <div style="background: hsl(0 0% 100%)"></div>
        <div style="background: hsl(0 0% 100%)"></div>
      </div>
      <div class="grid w-8 grid-cols-1 overflow-hidden shadow cursor-pointer rounded-btn" data-set-theme="dracula">
        <div style="background: hsl(233 13% 13%)"></div>
        <div style="background: hsl(330 100% 75%)"></div>
        <div style="background: hsl(115 100% 75%)"></div>
        <div style="background: hsl(60 100% 75%)"></div>
      </div>
    </div>
    <div class="my-16 text-center">
      <p>
        <a target="_blank" href="https://github.com/saadeghi/daisyui/actions">
          <img class="inline-block" src="https://badgen.net/github/checks/saadeghi/daisyui?label=build" alt="">
        </a>
        <a target="_blank" href="https://bundlephobia.com/result?p=daisyui">
          <img class="inline-block" src="https://badgen.net/bundlephobia/min/daisyui?&color=purple" alt="">
        </a>
        <a target="_blank" href="https://unpkg.com/daisyui@latest/dist/base.css">
          <img class="inline-block" src="https://badgen.net/badgesize/normal/https/unpkg.com/daisyui/dist/base.css?label=base.css%20size&amp;color=purple" alt="">
        </a>
        <a target="_blank" href="https://unpkg.com/daisyui@latest/dist/styled.css">
          <img class="inline-block" src="https://badgen.net/badgesize/normal/https/unpkg.com/daisyui/dist/styled.css?label=styled.css%20size&amp;color=purple" alt="">
        </a>
        <br>
        <a target="_blank" href="https://www.npmjs.com/package/daisyui">
          <img class="inline-block" src="https://badgen.net/npm/v/daisyui?label=version&amp;icon=npm&amp;color=purple" alt="">
        </a>
        <a target="_blank" href="https://www.npmjs.com/package/daisyui">
          <img class="inline-block" src="https://badgen.net/npm/dt/daisyui?icon=npm&amp;color=purple" alt="">
        </a>
        <a target="_blank" href="https://github.com/saadeghi/daisyui">
          <img class="inline-block" src="https://badgen.net/github/last-commit/saadeghi/daisyui?icon=github&amp;color=purple" alt="">
        </a>
        <a target="_blank" href="https://github.com/saadeghi/daisyui/blob/master/LICENSE">
          <img class="inline-block" src="https://badgen.net/github/license/saadeghi/daisyui?color=purple" alt="">
        </a>
      </p>
    </div>
    <div class="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-3">
      <Card class="text-center shadow-2xl side bg-secondary text-content-accent">
        <div class="card-body">
          <div class="flex justify-center">
            <Icon glyph="info" class="inline-block w-8 h-8 mb-4 stroke-current" />
          </div>
          <p>Read full document on github</p>
          <div class="justify-center space-x-2 card-actions">
            <a class="shadow-lg btn btn-secondary btn-active btn-block" href="https://github.com/saadeghi/daisyui" target="_blank">
              Github
              <Icon glyph="arrow" class="inline-block w-6 h-6 ml-2 stroke-current" />
            </a>
          </div>
        </div>
      </Card>
      <Card class="text-center shadow-2xl side bg-accent text-content-accent">
        <div class="card-body">
          <div class="flex justify-center">
            <Icon glyph="code" class="inline-block w-8 h-8 mb-4 stroke-current" />
          </div>
          <p>Use NPM package</p>
          <div class="justify-center space-x-2 card-actions">
            <a class="shadow-lg btn btn-accent btn-active btn-block" href="https://www.npmjs.com/package/daisyui" target="_blank">
              NPM
              <Icon glyph="arrow" class="inline-block w-6 h-6 ml-2 stroke-current" />
            </a>
          </div>
        </div>
      </Card>
      <Card class="text-center shadow-2xl side bg-primary text-content-accent">
        <div class="card-body">
          <div class="flex justify-center">
            <Icon glyph="eye" class="inline-block w-8 h-8 mb-4 stroke-current" />
          </div>
          <p>Try it online</p>
          <div class="justify-center space-x-2 card-actions">
            <a class="shadow-lg btn btn-primary btn-active btn-block" href="https://play.tailwindcss.com/hn9vnQsIn2" target="_blank">
              Tailwind Play
              <Icon glyph="arrow" class="inline-block w-6 h-6 ml-2 stroke-current" />
            </a>
          </div>
        </div>
      </Card>
    </div>


  </div>
</template>

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

<script>
export default {
  computed: {
    svgLogo() {
      return require(`~/static/logo.svg?raw`)
    }
  }
}
</script>
