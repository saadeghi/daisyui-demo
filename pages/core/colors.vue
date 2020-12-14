<template>
  <div>
    <div class="prose text-content-800">
      <Wrapper title="Colors and theming" nocode>
        Read everything about DaisyUI colors and theming <a target="_blank" href="https://github.com/saadeghi/daisyui/blob/master/docs/theming.md">here</a>
      </Wrapper>
    </div>
    <Wrapper title="Brand colors" classes="grid grid-cols-1 md:grid-cols-3 gap-6" nocode>
      <div class="block h-16 md:h-40" v-for="(variant, index) in colors.variants">
        <div class="relative flex overflow-hidden rounded shadow-lg h-14 md:h-32">
          <div class="absolute flex items-center justify-center w-full h-full text-content-primary"><span class="font-mono tracking-widest uppercase">{{ index }}</span></div>
          <div v-for="(shade, index) in variant" :class="'w-1/3 '+ shade"></div>
        </div>
        <div class="pt-2 mb-4 text-xs uppercase opacity-25">{{ index }}</div>
      </div>
    </Wrapper>
    <Wrapper title="content colors" classes="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6" nocode>
      <div class="block h-16 md:h-40">
        <div class="overflow-hidden rounded shadow-lg h-14 md:h-32 bg-default"></div>
        <div class="pt-2 mb-4 text-xs uppercase opacity-25">default</div>
      </div>
      <div class="block h-16 md:h-40" v-for="(color, index) in colors.content">
        <div :class="'h-14 md:h-32 overflow-hidden rounded shadow-lg ' + color.class"></div>
        <div class="pt-2 mb-4 text-xs uppercase opacity-25">{{ color.name }}</div>
      </div>
    </Wrapper>
    <Wrapper title="State colors" classes="grid grid-cols-2 md:grid-cols-4 gap-6" nocode>
      <div class="block h-16 md:h-40" v-for="(color, index) in colors.state">
        <div :class="'h-14 md:h-16 overflow-hidden rounded shadow-lg ' + color.class"></div>
        <div class="pt-2 mb-4 text-xs uppercase opacity-25">{{ color.name }}</div>
      </div>
    </Wrapper>
  </div>
</template>


<script>
export default {
  data() {
    return {
      colors: {
        'variants': {
          'primary': [
            'bg-primary-lighten',
            'bg-primary',
            'bg-primary-darken',
          ],
          'secondary': [
            'bg-secondary-lighten',
            'bg-secondary',
            'bg-secondary-darken',
          ],
          'accent': [
            'bg-accent-lighten',
            'bg-accent',
            'bg-accent-darken',
          ],
        },
        'content': [
          {
            name: '100',
            class: 'bg-content-100'
          },
          {
            name: '200',
            class: 'bg-content-200'
          },
          {
            name: '300',
            class: 'bg-content-300'
          },
          {
            name: '400',
            class: 'bg-content-400'
          },
          {
            name: '500',
            class: 'bg-content-500'
          },
          {
            name: '600',
            class: 'bg-content-600'
          },
          {
            name: '700',
            class: 'bg-content-700'
          },
          {
            name: '800',
            class: 'bg-content-800'
          },
          {
            name: '900',
            class: 'bg-content-900'
          },
        ],
        'state': [
          {
            name: 'info',
            class: 'bg-info'
          },
          {
            name: 'success',
            class: 'bg-success'
          },
          {
            name: 'warning',
            class: 'bg-warning'
          },
          {
            name: 'error',
            class: 'bg-error'
          },
        ],
      }
    }
  },
}
</script>
