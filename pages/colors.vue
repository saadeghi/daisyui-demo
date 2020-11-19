<template>
  <div>
    <Wrapper title="colors" classes="grid grid-cols-3 gap-6">
      <div class="block h-40" v-for="(variant, index) in colors.variants">
        <div class="relative flex h-32 overflow-hidden rounded shadow-lg">
          <div class="absolute flex items-center justify-center w-full h-full text-content-primary"><span class="font-mono tracking-widest uppercase">{{ index }}</span></div>
          <div v-for="(shade, index) in variant" :class="'w-1/3 bg-'+ shade"></div>
        </div>
        <div class="pt-2 mb-4 text-xs uppercase opacity-25">{{ index }}</div>
      </div>
    </Wrapper>
    <Wrapper title="content colors" classes="grid grid-cols-5 gap-6">
      <div class="block h-40">
        <div class="h-32 overflow-hidden rounded shadow-lg bg-default"></div>
        <div class="pt-2 mb-4 text-xs uppercase opacity-25">default</div>
      </div>
      <div class="block h-40" v-for="(color, index) in colors.content">
        <div :class="'h-32 overflow-hidden rounded shadow-lg bg-' + color"></div>
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
            'primary-lighten',
            'primary',
            'primary-darken',
          ],
          'secondary': [
            'secondary-lighten',
            'secondary',
            'secondary-darken',
          ],
          'accent': [
            'accent-lighten',
            'accent',
            'accent-darken',
          ],
        },
        'content': [
          'content-100',
          'content-200',
          'content-300',
          'content-400',
          'content-500',
          'content-600',
          'content-700',
          'content-800',
          'content-900',
        ]
      }
    }
  },
}
</script>
