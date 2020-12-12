<template>
  <div>
    <div class="prose text-content-800">
      <Wrapper title="Colors and theming" nocode>
        Read everything about DaisyUI colors and theming <a target="_blank" href="https://github.com/saadeghi/daisyui/blob/master/docs/theming.md">here</a>
      </Wrapper>
    </div>
    <Wrapper title="Brand colors" classes="grid grid-cols-3 gap-6" nocode>
      <div class="block h-40" v-for="(variant, index) in colors.variants">
        <div class="relative flex h-32 overflow-hidden rounded shadow-lg">
          <div class="absolute flex items-center justify-center w-full h-full text-content-primary"><span class="font-mono tracking-widest uppercase">{{ index }}</span></div>
          <div v-for="(shade, index) in variant" :class="'w-1/3 '+ shade"></div>
        </div>
        <div class="pt-2 mb-4 text-xs uppercase opacity-25">{{ index }}</div>
      </div>
    </Wrapper>
    <Wrapper title="content colors" classes="grid grid-cols-10 gap-6" nocode>
      <div class="block h-40">
        <div class="h-32 overflow-hidden rounded shadow-lg bg-default"></div>
        <div class="pt-2 mb-4 text-xs uppercase opacity-25">default</div>
      </div>
      <div class="block h-40" v-for="(color, index) in colors.content">
        <div :class="'h-32 overflow-hidden rounded shadow-lg bg-content-' + color"></div>
        <div class="pt-2 mb-4 text-xs uppercase opacity-25">{{ color }}</div>
      </div>
    </Wrapper>
    <Wrapper title="State colors" classes="grid grid-cols-4 gap-6" nocode>
      <div class="block h-40" v-for="(color, index) in colors.state">
        <div :class="'h-16 overflow-hidden rounded shadow-lg bg-' + color"></div>
        <div class="pt-2 mb-4 text-xs uppercase opacity-25">{{ color }}</div>
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
          '100',
          '200',
          '300',
          '400',
          '500',
          '600',
          '700',
          '800',
          '900',
        ],
        'state': [
          'info',
          'success',
          'warning',
          'error',
        ],
      }
    }
  },
}
</script>
