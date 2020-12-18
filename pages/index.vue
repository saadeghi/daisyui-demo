<template>
  <div>
    <div class="mx-auto mt-16 prose text-center text-content-800">
      <img class="inline-block" src="https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo.svg" alt="">
      <p>
        Modern CSS components for Tailwind CSS
      </p>
    </div>
    <div class="my-16 text-center">
      <p>
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
        <a target="_blank" href="https://github.com/saadeghi/daisyui/actions">
          <img class="inline-block" src="https://badgen.net/github/checks/saadeghi/daisyui?label=build" alt="">
        </a>
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
            <Icon glyph="info" class="inline-block w-8 mb-4 stroke-current" />
          </div>
          <p>Read full document on github</p>
          <div class="justify-center space-x-2 card-actions">
            <a class="shadow-lg btn btn-secondary btn-active btn-block" href="https://github.com/saadeghi/daisyui" target="_blank">
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
            <a class="shadow-lg btn btn-accent btn-active btn-block" href="https://www.npmjs.com/package/daisyui" target="_blank">
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
            <a class="shadow-lg btn btn-primary btn-active btn-block" href="https://play.tailwindcss.com/fF3zRoCJSr" target="_blank">
              Tailwind Play
              <Icon glyph="arrow" class="inline-block w-6 ml-2 stroke-current" />
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
